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

var positions = [];
var markers = [];

var platform = new H.service.Platform({
    app_id: 'iCn0Xpw2mwICvvbA3tqu',
    app_code: 'Rliy9NrYV2-WjR52DSbtVA',
    useCIT: true,
    useHTTPS: true
});

var original = [];
var option1 = [];
var option2 = [];
var option3 = [];

// Get an instance of the geocoding service:
var geocoder = platform.getGeocodingService();

// Define a callback function to process the geocoding response:

function calculateRoute01 (platform) {
    var router = platform.getRoutingService(),
        routeRequestParams = {
            mode: 'fastest;truck',
            representation: 'display',
            routeattributes : 'waypoints,summary,shape,legs',
            maneuverattributes: 'direction,action',
            waypoint0: positions[0].lat.toString() + ',' + positions[0].lng.toString(), // Brandenburg Gate
            waypoint1: positions[1].lat.toString() + ',' + positions[1].lng.toString(), // Friedrichstraße Railway Station
            waypoint2: positions[6].lat.toString() + ',' + positions[6].lng.toString(),
            waypoint3: positions[5].lat.toString() + ',' + positions[5].lng.toString(),
            waypoint4: positions[0].lat.toString() + ',' + positions[0].lng.toString()
        };


    router.calculateRoute(
        routeRequestParams,
        onSuccess00,
        onError
    );
}

function calculateRoute02 (platform) {
    var router = platform.getRoutingService(),
        routeRequestParams = {
            mode: 'fastest;truck',
            representation: 'display',
            routeattributes : 'waypoints,summary,shape,legs',
            maneuverattributes: 'direction,action',
            waypoint0: positions[2].lat.toString() + ',' + positions[2].lng.toString(), // Brandenburg Gate
            waypoint1: positions[3].lat.toString() + ',' + positions[3].lng.toString(), // Friedrichstraße Railway Station
            waypoint2: positions[2].lat.toString() + ',' + positions[2].lng.toString()
        };


    router.calculateRoute(
        routeRequestParams,
        onSuccess01,
        onError
    );
}

function calculateRoute10 (platform) {
    var router = platform.getRoutingService(),
        routeRequestParams = {
            mode: 'fastest;truck',
            representation: 'display',
            routeattributes : 'waypoints,summary,shape,legs',
            maneuverattributes: 'direction,action',
            waypoint0: positions[0].lat.toString() + ',' + positions[0].lng.toString(), // Brandenburg Gate
            waypoint1: positions[4].lat.toString() + ',' + positions[4].lng.toString(),
            waypoint2: positions[1].lat.toString() + ',' + positions[1].lng.toString(), // Friedrichstraße Railway Station
            waypoint3: positions[6].lat.toString() + ',' + positions[6].lng.toString(),
            waypoint4: positions[5].lat.toString() + ',' + positions[5].lng.toString(),
            waypoint5: positions[0].lat.toString() + ',' + positions[0].lng.toString()

        };


    router.calculateRoute(
        routeRequestParams,
        onSuccessAlt10,
        onError
    );
}

function calculateRoute11 (platform) {
    var router = platform.getRoutingService(),
        routeRequestParams = {
            mode: 'fastest;truck',
            representation: 'display',
            routeattributes : 'waypoints,summary,shape,legs',
            maneuverattributes: 'direction,action',
            waypoint0: positions[2].lat.toString() + ',' + positions[2].lng.toString(), // Brandenburg Gate
            waypoint1: positions[3].lat.toString() + ',' + positions[3].lng.toString(), // Friedrichstraße Railway Station
            waypoint2: positions[2].lat.toString() + ',' + positions[2].lng.toString()

        };


    router.calculateRoute(
        routeRequestParams,
        onSuccessAlt11,
        onError
    );
}

function calculateRoute20 (platform) {
    var router = platform.getRoutingService(),
        routeRequestParams = {
            mode: 'fastest;truck',
            representation: 'display',
            routeattributes : 'waypoints,summary,shape,legs',
            maneuverattributes: 'direction,action',
            waypoint0: positions[0].lat.toString() + ',' + positions[0].lng.toString(), // Brandenburg Gate
            waypoint1: positions[4].lat.toString() + ',' + positions[4].lng.toString(), // Friedrichstraße Railway Station
            waypoint2: positions[1].lat.toString() + ',' + positions[1].lng.toString(),
            waypoint3: positions[0].lat.toString() + ',' + positions[0].lng.toString()
        };


    router.calculateRoute(
        routeRequestParams,
        onSuccessAlt20,
        onError
    );
}

function calculateRoute21 (platform) {
    var router = platform.getRoutingService(),
        routeRequestParams = {
            mode: 'fastest;truck',
            representation: 'display',
            routeattributes : 'waypoints,summary,shape,legs',
            maneuverattributes: 'direction,action',
            waypoint0: positions[2].lat.toString() + ',' + positions[2].lng.toString(), // Brandenburg Gate
            waypoint1: positions[3].lat.toString() + ',' + positions[3].lng.toString(), // Friedrichstraße Railway Station
            waypoint2: positions[6].lat.toString() + ',' + positions[6].lng.toString(),
            waypoint3: positions[5].lat.toString() + ',' + positions[5].lng.toString(),
            waypoint4: positions[2].lat.toString() + ',' + positions[2].lng.toString()
        };


    router.calculateRoute(
        routeRequestParams,
        onSuccessAlt21,
        onError
    );
}

function calculateRoute30 (platform) {
    var router = platform.getRoutingService(),
        routeRequestParams = {
            mode: 'fastest;truck',
            representation: 'display',
            routeattributes : 'waypoints,summary,shape,legs',
            maneuverattributes: 'direction,action',
            waypoint0: positions[0].lat.toString() + ',' + positions[0].lng.toString(), // Brandenburg Gate
            waypoint1: positions[4].lat.toString() + ',' + positions[4].lng.toString(), // Friedrichstraße Railway Station
            waypoint2: positions[1].lat.toString() + ',' + positions[1].lng.toString(),
            waypoint3: positions[0].lat.toString() + ',' + positions[0].lng.toString()
        };


    router.calculateRoute(
        routeRequestParams,
        onSuccessAlt30,
        onError
    );
}

function calculateRoute31 (platform) {
    var router = platform.getRoutingService(),
        routeRequestParams = {
            mode: 'fastest;truck',
            representation: 'display',
            routeattributes : 'waypoints,summary,shape,legs',
            maneuverattributes: 'direction,action',
            waypoint0: positions[2].lat.toString() + ',' + positions[2].lng.toString(), // Brandenburg Gate
            waypoint1: positions[3].lat.toString() + ',' + positions[3].lng.toString(), // Friedrichstraße Railway Station
            waypoint2: positions[2].lat.toString() + ',' + positions[2].lng.toString()
        };


    router.calculateRoute(
        routeRequestParams,
        onSuccessAlt31,
        onError
    );
}

function calculateRoute32 (platform) {
    var router = platform.getRoutingService(),
        routeRequestParams = {
            mode: 'fastest;truck',
            representation: 'display',
            routeattributes : 'waypoints,summary,shape,legs',
            maneuverattributes: 'direction,action',
            waypoint0: positions[5].lat.toString() + ',' + positions[5].lng.toString(), // Brandenburg Gate
            waypoint1: positions[6].lat.toString() + ',' + positions[6].lng.toString(), // Friedrichstraße Railway Station
            waypoint2: positions[5].lat.toString() + ',' + positions[5].lng.toString()
        };


    router.calculateRoute(
        routeRequestParams,
        onSuccessAlt32,
        onError
    );
}

function onSuccess00(result) {
    var route = result.response.route[0];
    /*
     * The styling of the route response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    addRouteShapeToMapAlt00(route);
    addManueversToMapAlt00(route);

    // ... etc.
}

function onSuccess01(result) {
    var route = result.response.route[0];
    /*
     * The styling of the route response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    addRouteShapeToMapAlt01(route);
    addManueversToMapAlt01(route);

    // ... etc.
}

function onSuccessAlt10(result) {
    var route = result.response.route[0];
    /*
     * The styling of the route response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    addRouteShapeToMapAlt10(route);
    addManueversToMapAlt10(route);

    // ... etc.
}

function onSuccessAlt11(result) {
    var route = result.response.route[0];
    /*
     * The styling of the route response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    addRouteShapeToMapAlt11(route);
    addManueversToMapAlt11(route);

    // ... etc.
}

function onSuccessAlt20(result) {
    var route = result.response.route[0];
    /*
     * The styling of the route response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    addRouteShapeToMapAlt20(route);
    addManueversToMapAlt20(route);

    // ... etc.
}

function onSuccessAlt21(result) {
    var route = result.response.route[0];
    /*
     * The styling of the route response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    addRouteShapeToMapAlt21(route);
    addManueversToMapAlt21(route);

    // ... etc.
}

function onSuccessAlt30(result) {
    var route = result.response.route[0];
    /*
     * The styling of the route response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    addRouteShapeToMapAlt30(route);
    addManueversToMapAlt30(route);

    // ... etc.
}

function onSuccessAlt31(result) {
    var route = result.response.route[0];
    /*
     * The styling of the route response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    addRouteShapeToMapAlt31(route);
    addManueversToMapAlt31(route);

    // ... etc.
}

function onSuccessAlt32(result) {
    var route = result.response.route[0];
    /*
     * The styling of the route response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    addRouteShapeToMapAlt32(route);
    addManueversToMapAlt32(route);

    // ... etc.
}

/**
 * This function will be called if a communication error occurs during the JSON-P request
 * @param  {Object} error  The error message received.
 */
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

/**
 * Creates a H.map.Polyline from the shape of the route and adds it to the map.
 * @param {Object} route A route as received from the H.service.RoutingService
 */
function addRouteShapeToMapAlt00(route){
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
    original.push(polyline);
    markers.push(polyline);
    // And zoom to its bounding rectangle
    map.setViewBounds(polyline.getBounds(), true);
}

function addRouteShapeToMapAlt01(route){
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
            strokeColor: 'rgba(0, 128, 255, 0.7)',
        }
    });
    // Add the polyline to the map
    map.addObject(polyline);
    original.push(polyline);
    markers.push(polyline);
    // And zoom to its bounding rectangle
    map.setViewBounds(polyline.getBounds(), true);
}

function addRouteShapeToMapAlt10(route){
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
            strokeColor: 'rgba(255, 0, 0, 0.7)'
        }
    });
    // Add the polyline to the map
    //map.addObject(polyline);
    option1.push(polyline);
    markers.push(polyline);
    // And zoom to its bounding rectangle
    map.setViewBounds(polyline.getBounds(), true);
}

function addRouteShapeToMapAlt11(route){
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
            strokeColor: 'rgba(255, 0, 0, 0.7)'
        }
    });
    // Add the polyline to the map
    //map.addObject(polyline);
    option1.push(polyline);
    markers.push(polyline);

    // And zoom to its bounding rectangle
    map.setViewBounds(polyline.getBounds(), true);
}

function addRouteShapeToMapAlt20(route){
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
            strokeColor: 'rgba(255, 0, 0, 0.7)'
        }
    });
    // Add the polyline to the map
    //map.addObject(polyline);
    option2.push(polyline);
    markers.push(polyline);
    movingCarLine2 = polyline;
    // And zoom to its bounding rectangle
    map.setViewBounds(polyline.getBounds(), true);
}

function addRouteShapeToMapAlt21(route){
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
            strokeColor: 'rgba(0, 255, 0, 0.7)'
        }
    });
    // Add the polyline to the map
    //map.addObject(polyline);
    option2.push(polyline);
    markers.push(polyline);
    movingCarLine = polyline;
    // And zoom to its bounding rectangle
    map.setViewBounds(polyline.getBounds(), true);
}

function addRouteShapeToMapAlt30(route){
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
            strokeColor: 'rgba(255, 0, 0, 0.7)'
        }
    });
    // Add the polyline to the map
    //map.addObject(polyline);
    option3.push(polyline);
    markers.push(polyline);
    // And zoom to its bounding rectangle
    map.setViewBounds(polyline.getBounds(), true);
}

function addRouteShapeToMapAlt31(route){
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
            strokeColor: 'rgba(0, 255, 0, 0.7)'
        }
    });
    // Add the polyline to the map
    //map.addObject(polyline);
    option3.push(polyline);
    markers.push(polyline);
    // And zoom to its bounding rectangle
    map.setViewBounds(polyline.getBounds(), true);
}

function addRouteShapeToMapAlt32(route){
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
            strokeColor: 'rgba(0, 0, 255, 0.7)'
        }
    });
    // Add the polyline to the map
    //map.addObject(polyline);
    option3.push(polyline);
    markers.push(polyline);
    // And zoom to its bounding rectangle
    map.setViewBounds(polyline.getBounds(), true);
}

/**
 * Creates a series of H.map.Marker points from the route and adds them to the map.
 * @param {Object} route  A route as received from the H.service.RoutingService
 */
function addManueversToMapAlt00(route){
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
    original.push(group);
    markers.push(group);
}

function addManueversToMapAlt01(route){
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
    original.push(group);
    markers.push(group);
}

function addManueversToMapAlt10(route){
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
    //map.addObject(group);
    option1.push(group);
    markers.push(group);
}

function addManueversToMapAlt11(route){
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
    //map.addObject(group);
    option1.push(group);
    markers.push(group);
}

function addManueversToMapAlt20(route){
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
    //map.addObject(group);
    option2.push(group);
    markers.push(group);
}

function addManueversToMapAlt21(route){
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
    //map.addObject(group);
    option2.push(group);
    markers.push(group);
}

function addManueversToMapAlt30(route){
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
    //map.addObject(group);
    option3.push(group);
    markers.push(group);
}

function addManueversToMapAlt31(route){
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
    //map.addObject(group);
    option3.push(group);
    markers.push(group);
}

function addManueversToMapAlt32(route){
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
    //map.addObject(group);
    option3.push(group);
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
        var circle = new H.map.Circle({lat: 50.915598, lng: 4.377602}, 8000,
                { style: customStyle });

        map.addObject(circle);

        div1.style.visibility = 'visible';
        div2.style.visibility = 'visible';
        div3.style.visibility = 'visible';
    }
});

function start(){
    var Zee = {searchText: 'Zeebrugge, Belgie'};
    geocoder.geocode(Zee, onResult, function(e) {
        alert(e);
    });
}

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

    var Libra = {searchText: 'Libramont, Belgie'};
    geocoder.geocode(Libra, onResult1, function(e) {
        alert(e);
    });
};

var onResult1 = function(result) {
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

    var Duin = {searchText: 'Duinkerke, Frankrijk'};
    geocoder.geocode(Duin, onResult2, function(e) {
        alert(e);
    });
};

var onResult2 = function(result) {
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

    var Lens = {searchText: 'Lens, Frankrijk'};
    geocoder.geocode(Lens, onResult3, function(e) {
        alert(e);
    });
};

var onResult3 = function(result) {
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

    var Waypoint = {lat: 51.062891, lng: 5.157391};
    positions.push(Waypoint);
    var Oostende = {searchText: 'Oostende, Belgie'};
    geocoder.geocode(Oostende, onResult4, function(e) {
        alert(e);
    });
};

var onResult4 = function(result) {
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

    var Marche = {searchText: 'Marche-en-Famenne, Belgie'};
    geocoder.geocode(Marche, onResult5, function(e) {
        alert(e);
    });
};

var onResult5 = function(result) {
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

    calculateRoute01(platform);
    calculateRoute02(platform);

    calculateRoute10(platform);
    calculateRoute11(platform);

    calculateRoute20(platform);
    calculateRoute21(platform);

    calculateRoute30(platform);
    calculateRoute31(platform);
    calculateRoute32(platform);

    map.addObjects(original);
};

var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');

div1.addEventListener("mouseover", div1MouseOver);
div1.addEventListener("mouseleave", div1MouseLeave);

div2.addEventListener("mouseover", div2MouseOver);
div2.addEventListener("mouseleave", div2MouseLeave);

div3.addEventListener("mouseover", div3MouseOver);
div3.addEventListener("mouseleave", div3MouseLeave);

function div1MouseOver(){
    map.addObjects(option1);
    map.removeObjects(original);
}

function div1MouseLeave(){
    map.removeObjects(option1);
    map.addObjects(original);
}

function div2MouseOver(){
    map.addObjects(option2);
    map.removeObjects(original);
}

function div2MouseLeave(){
    map.removeObjects(option2);
    map.addObjects(original);
}

function div3MouseOver(){
    map.addObjects(option3);
    map.removeObjects(original);
}

function div3MouseLeave(){
    map.removeObjects(option3);
    map.addObjects(original);
}

div1.onclick = function () {
    updateRoute(1);
};
div2.onclick = function () {
    updateRoute(2);
};
div3.onclick = function () {
    updateRoute(3);
};

function updateRoute(i){
    div1.style.visibility = 'hidden';
    div2.style.visibility = 'hidden';
    div3.style.visibility = 'hidden';

    $.getJSON("/message", null, null);

    window.alert("Update Sent")

    switch(i){
        case 1:{
            original = [];
            original = option1.slice();
            option1=[];
            break;}
        case 2:{
            original = [];
            original = option2.slice();
            option2=[];
            break;}
        case 3:{
            original = [];
            original = option2.slice();
            option3=[];
            break;}
        default:
            break;
    }
}

var movingTruckMarker;
var movingCarLine;

var icon = new H.map.Icon('images/truck.png');
var icon_opac = new H.map.Icon('images/truck_opac.png');

function addMovingTruck(){
    if(movingCarLine != null) {
        movingTruckMarker = new H.map.Marker({lat: 51.3309891, lng: 3.2069864}, {icon: icon});
        map.addObject(movingTruckMarker);
        updateMovingTruck();
    }else{
        setTimeout(addMovingTruck, 100);
    }

}
addMovingTruck();

var counter = 0;
function updateMovingTruck(){
    if(counter+3 >= movingCarLine.cc.Pa.length){
        counter = 0;
    }
    var nextPosition = {lat:movingCarLine.cc.Pa[counter], lng:movingCarLine.cc.Pa[counter+1]};
    counter += 3;
    movingTruckMarker.setPosition(nextPosition);
    setTimeout(updateMovingTruck, 200);
}

var movingTruckMarker2;
var movingCarLine2;

function addMovingTruck2(){
    if(movingCarLine != null) {
        movingTruckMarker2 = new H.map.Marker({lat: 51.3309891, lng: 3.2069864}, {icon: icon});
        map.addObject(movingTruckMarker2);
        updateMovingTruck2();
    }else{
        setTimeout(addMovingTruck2, 100);
    }

}
addMovingTruck2();

var counter = 0;
function updateMovingTruck2(){
    if(counter+3 >= movingCarLine2.cc.Pa.length){
        counter = 0;
    }
    var nextPosition = {lat:movingCarLine2.cc.Pa[counter], lng:movingCarLine2.cc.Pa[counter+1]};
    counter += 3;
    movingTruckMarker2.setPosition(nextPosition);
    setTimeout(updateMovingTruck2, 200);
}

var trucks = [];
var truckMarkers = [];

function updateTrucks() {
    $.getJSON("/update", function(result){
        trucks = result;
    });
    setTimeout(displayTrucks, 200);
    setTimeout(updateTrucks, 10000);
}

//var truckGroup = new H.map.Group();

function displayTrucks() {
    if (trucks.length != 0) {
        map.removeObjects(truckMarkers);
        truckMarkers = [];

        for (var i = 0; i < trucks.length; i++) {
            // Create a marker using the previously instantiated icon:
            if (trucks[i].position != null) {
                var marker = new H.map.Marker({
                    lat: trucks[i].position.latitude,
                    lng: trucks[i].position.longitude
                }, {icon: icon_opac});

                // Add the marker to the map:
                map.addObject(marker);
                marker.setData("<div><p>Name: " + trucks[i].name +"</p>ID: " + trucks[i].id + "</div>");
                truckMarkers.push(marker);
                //truckGroup.addObject(marker);
            }
        }

    } else {
        setTimeout(displayTrucks, 100);
    }
}


/**
 * Add two markers showing the position of Liverpool and Manchester City football clubs.
 * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
 * @param  {H.Map} map      A HERE Map instance within the application
 */
/*
function addInfoBubble(map) {
    // add 'tap' event listener, that opens info bubble, to the group
    truckGroup.addEventListener('tap', function (evt) {
        // event target is the marker itself, group is a parent event target
        // for all objects that it contains
        var bubble = new H.ui.InfoBubble(evt.target.getPosition(), {
            // read custom data
            content: evt.target.getData()
        });
        // show info bubble
        ui.addBubble(bubble);
    }, false);
}*/

//addInfoBubble(map);

updateTrucks();

start();