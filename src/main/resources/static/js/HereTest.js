/**
 * Created by arthu on 17/02/2017.
 */
/**
 * Adds markers to the map highlighting Berlin.
 *
 * https://developer.here.com/api-explorer/maps-js/markers/markers-on-the-map
 *
 * @param  {H.Map} map A HERE Map instance within the application
 */

/**
 * This function will be called once the Routing REST API provides a response
 * @param  {Object} result          A JSONP object representing the calculated route
 *
 * see: http://developer.here.com/rest-apis/documentation/routing/topics/resource-type-calculate-route.html
 */
/**
 * Calculates and displays a car route from the Brandenburg Gate in the centre of Berlin
 * to Friedrichstraße Railway Station.
 *
 * A full list of available request parameters can be found in the Routing API documentation.
 * see:  http://developer.here.com/rest-apis/documentation/routing/topics/resource-calculate-route.html
 *
 * @param   {H.service.Platform} platform    A stub class to access HERE services
 */

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    positions = [];

    /* do what you want with the form */
    var from = document.getElementById('From');
    var fromString = {searchText: from.value};
    var to = document.getElementById('To');
    var toString = {searchText: to.value};

    map.removeObjects(markers);
    markers = [];

// Call the geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):
    geocoder.geocode(fromString, onResult, function(e) {
        alert(e);
    });
    geocoder.geocode(toString, onResult, function(e) {
        alert(e);
    });

    // You must return false to prevent the default form behavior
    return false;
}

var positions = [];
var markers = [];

var platform = new H.service.Platform({
    app_id: 'iCn0Xpw2mwICvvbA3tqu',
    app_code: 'Rliy9NrYV2-WjR52DSbtVA',
    useCIT: true,
    useHTTPS: true
});

// Get an instance of the geocoding service:
var geocoder = platform.getGeocodingService();

// Define a callback function to process the geocoding response:
var onResult = function(result) {
    var locations = result.Response.View[0].Result,
        position,
        marker;
    // Add a marker for each location found

    for (i = 0;  i < locations.length; i++) {
        position = {
            lat: locations[i].Location.DisplayPosition.Latitude,
            lng: locations[i].Location.DisplayPosition.Longitude
        };
        positions.push(position);
        marker = new H.map.Marker(position);
        map.addObject(marker);
        markers.push(marker);
    }

    if(positions.length%2 == 0){
        var i = positions.length-1;
        calculateRouteFromAtoB(platform, i);
    }
};

function calculateRouteFromAtoB (platform, i) {
    var router = platform.getRoutingService(),
        routeRequestParams = {
            mode: 'fastest;truck',
            representation: 'display',
            routeattributes : 'waypoints,summary,shape,legs',
            maneuverattributes: 'direction,action',
            waypoint0: positions[i-1].lat.toString() + ',' + positions[i-1].lng.toString(), // Brandenburg Gate
            waypoint1: positions[i].lat.toString() + ',' + positions[i].lng.toString()  // Friedrichstraße Railway Station
        };


    router.calculateRoute(
        routeRequestParams,
        onSuccess,
        onError
    );
}

function calculateRouteFromAtoBThroughC (platform, waypoint) {
    var router = platform.getRoutingService(),
        routeRequestParams = {
            mode: 'fastest;truck',
            representation: 'display',
            routeattributes : 'waypoints,summary,shape,legs',
            maneuverattributes: 'direction,action',
            waypoint0: positions[0].lat.toString() + ',' + positions[0].lng.toString(), // Brandenburg Gate
            waypoint1: waypoint[0].toString()+','+waypoint[1].toString(),
            waypoint2: positions[1].lat.toString() + ',' + positions[1].lng.toString()  // Friedrichstraße Railway Station

        };


    router.calculateRoute(
        routeRequestParams,
        onSuccessAlt,
        onError
    );
}

function onSuccess(result) {
    var route = result.response.route[0];
    /*
     * The styling of the route response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    addRouteShapeToMap(route);
    addManueversToMap(route);

    // ... etc.
}

function onSuccessAlt(result) {
    var route = result.response.route[0];
    /*
     * The styling of the route response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    addRouteShapeToMapAlt(route);
    addManueversToMap(route);

    // ... etc.
}

/**
 * This function will be called if a communication error occurs during the JSON-P request
 * @param  {Object} error  The error message received.
 */

var form = document.getElementById('Form');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}

function onError(error) {
    alert('Ooops!');
}

var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map  - not specificing a location will give a whole world view.
var map = new H.Map(document.getElementById('map'),
    defaultLayers.normal.map);
map.setBaseLayer(defaultLayers.normal.traffic);

// Enable traffic incidents layer
map.addLayer(defaultLayers.incidents);

window.addEventListener('resize', function () {
    map.getViewPort().resize();
});

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);


// Hold a reference to any infobubble opened
var bubble;

/**
 * Opens/Closes a infobubble
 * @param  {H.geo.Point} position     The location on the map.
 * @param  {String} text              The contents of the infobubble.
 */
function openBubble(position, text){
    if(!bubble){
        bubble =  new H.ui.InfoBubble(
            position,
            // The FO property holds the province name.
            {content: text});
        ui.addBubble(bubble);
    } else {
        bubble.setPosition(position);
        bubble.setContent(text);
        bubble.open();
    }
}

/**
 * Creates a H.map.Polyline from the shape of the route and adds it to the map.
 * @param {Object} route A route as received from the H.service.RoutingService
 */
function addRouteShapeToMap(route){
    var strip = new H.geo.Strip(),
        routeShape = route.shape,
        polyline;

    routeShape.forEach(function(point) {
        var parts = point.split(',');
        strip.pushLatLngAlt(parts[0], parts[1]);
    });

    polyline = new H.map.Polyline(strip, {
        style: {
            lineWidth: 4,
            strokeColor: 'rgba(0, 128, 255, 0.7)'
        }
    });
    // Add the polyline to the map
    map.addObject(polyline);
    markers.push(polyline);
    // And zoom to its bounding rectangle
    map.setViewBounds(polyline.getBounds(), true);
}

function addRouteShapeToMapAlt(route){
    var strip = new H.geo.Strip(),
        routeShape = route.shape,
        polyline;

    routeShape.forEach(function(point) {
        var parts = point.split(',');
        strip.pushLatLngAlt(parts[0], parts[1]);
    });

    polyline = new H.map.Polyline(strip, {
        style: {
            lineWidth: 4,
            strokeColor: 'rgba(128, 0, 0, 0.7)'
        }
    });
    // Add the polyline to the map
    map.addObject(polyline);
    markers.push(polyline);
    // And zoom to its bounding rectangle
    map.setViewBounds(polyline.getBounds(), true);
}

/**
 * Creates a series of H.map.Marker points from the route and adds them to the map.
 * @param {Object} route  A route as received from the H.service.RoutingService
 */
function addManueversToMap(route){
    var svgMarkup = '<svg width="18" height="18" ' +
            'xmlns="http://www.w3.org/2000/svg">' +
            '<circle cx="8" cy="8" r="8" ' +
            'fill="#1b468d" stroke="white" stroke-width="1"  />' +
            '</svg>',
        dotIcon = new H.map.Icon(svgMarkup, {anchor: {x:8, y:8}}),
        group = new  H.map.Group(),
        i,
        j;

    // Add a marker for each maneuver
    for (i = 0;  i < route.leg.length; i += 1) {
        for (j = 0;  j < route.leg[i].maneuver.length; j += 1) {
            // Get the next maneuver.
            maneuver = route.leg[i].maneuver[j];
            // Add a marker to the maneuvers group
            var marker =  new H.map.Marker({
                    lat: maneuver.position.latitude,
                    lng: maneuver.position.longitude} ,
                {icon: dotIcon});
            marker.instruction = maneuver.instruction;
            group.addObject(marker);
        }
    }

    group.addEventListener('tap', function (evt) {
        map.setCenter(evt.target.getPosition());
        openBubble(
            evt.target.getPosition(), evt.target.instruction);
    }, false);

    // Add the maneuvers group to the map
    map.addObject(group);
    markers.push(group);
}

/**
 * Creates a series of H.map.Marker points from the route and adds them to the map.
 * @param {Object} route  A route as received from the H.service.RoutingService
 */
function addSummaryToPanel(summary){
    var summaryDiv = document.createElement('div'),
        content = '';
    content += '<b>Total distance</b>: ' + summary.distance  + 'm. <br/>';
    content += '<b>Travel Time</b>: ' + summary.travelTime.toMMSS() + ' (in current traffic)';


    summaryDiv.style.fontSize = 'small';
    summaryDiv.style.marginLeft ='5%';
    summaryDiv.style.marginRight ='5%';
    summaryDiv.innerHTML = content;
    routeInstructionsContainer.appendChild(summaryDiv);
}

/**
 * Creates a series of H.map.Marker points from the route and adds them to the map.
 * @param {Object} route  A route as received from the H.service.RoutingService
 */


/**
 * Creates a series of H.map.Marker points from the route and adds them to the map.
 * @param {Object} route  A route as received from the H.service.RoutingService
 */
function addSummaryToPanel(summary){
    var summaryDiv = document.createElement('div'),
        content = '';
    content += '<b>Total distance</b>: ' + summary.distance  + 'm. <br/>';
    content += '<b>Travel Time</b>: ' + summary.travelTime.toMMSS() + ' (in current traffic)';


    summaryDiv.style.fontSize = 'small';
    summaryDiv.style.marginLeft ='5%';
    summaryDiv.style.marginRight ='5%';
    summaryDiv.innerHTML = content;
    routeInstructionsContainer.appendChild(summaryDiv);
}

/**
 * Creates a series of H.map.Marker points from the route and adds them to the map.
 * @param {Object} route  A route as received from the H.service.RoutingService
 */
function addManueversToPanel(route){



    var nodeOL = document.createElement('ol'),
        i,
        j;

    nodeOL.style.fontSize = 'small';
    nodeOL.style.marginLeft ='5%';
    nodeOL.style.marginRight ='5%';
    nodeOL.className = 'directions';

    // Add a marker for each maneuver
    for (i = 0;  i < route.leg.length; i += 1) {
        for (j = 0;  j < route.leg[i].maneuver.length; j += 1) {
            // Get the next maneuver.
            maneuver = route.leg[i].maneuver[j];

            var li = document.createElement('li'),
                spanArrow = document.createElement('span'),
                spanInstruction = document.createElement('span');

            spanArrow.className = 'arrow '  + maneuver.action;
            spanInstruction.innerHTML = maneuver.instruction;
            li.appendChild(spanArrow);
            li.appendChild(spanInstruction);

            nodeOL.appendChild(li);
        }
    }

    routeInstructionsContainer.appendChild(nodeOL);
}


Number.prototype.toMMSS = function () {
    return Math.floor(this / 60) + ' minutes ' + (this % 60) + ' seconds.';
}

var status = 0;

$(document).keypress(function(e){
    var checkEnter=(e.which==13 ? 1 : 0);

    if (checkEnter){
        // Create a style object:
        var customStyle = {
            strokeColor: 'red',
            fillColor: 'rgba(255, 0, 0, 0.25',
            lineWidth: 2,
            lineCap: 'square',
            lineJoin: 'bevel'
        };

        // Create a rectangle and pass the custom style as an options parameter:
        var circle = new H.map.Circle({lat: 50.929181, lng: 3.994925}, 8000,
                { style: customStyle });

        map.addObject(circle);
        addWaypoint();

    }
});

function start(){
    var Zee = {searchText: 'Zeebrugge, Belgie'};
    geocoder.geocode(Zee, onResult, function(e) {
        alert(e);
    });
    var Libra = {searchText: 'Libramont, Belgie'};
    geocoder.geocode(Libra, onResult, function(e) {
        alert(e);
    });

    var Duin = {searchText: 'Duinkerke, Frankrijk'};
    geocoder.geocode(Duin, onResult, function(e) {
        alert(e);
    });
    var Lens = {searchText: 'Lens, Frankrijk'};
    geocoder.geocode(Lens, onResult, function(e) {
        alert(e);
    });
}

function addWaypoint()
{
    var Waypoint = [51.062891, 5.157391];
    calculateRouteFromAtoBThroughC(platform, Waypoint);
}

start();

