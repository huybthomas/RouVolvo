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

var platform = new H.service.Platform({
    'app_id': '{iCn0Xpw2mwICvvbA3tqu}',
    'app_code': '{Rliy9NrYV2-WjR52DSbtVA}'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.normal.map,
    {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 }
    });
