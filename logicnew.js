var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/light-v9', // stylesheet location
    center: [-74.5, 40.75], // starting position
    zoom: 12 // starting zoom
  });

var customers = {
    "type": "FeatureCollection",
        "features": [
            { 
                "type": "Feature",
                "properties": {
                        "name": "Dun & Bradstreet",
                        "address": "103 John F. Kennedy Pkwy",
                        "city": "Short Hills, NJ 07078"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.327442, 
                            40.739157
                            ]
                        }
            },
            {
                "type": "Feature",
                "properties": {   
                        "name": "FLIK Hospitality Group",
                        "address":"-",
                        "city": "Livingston, NJ 07039"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.3143,
                            40.78391
                            ]
                        }
            },
            {
                "type": "Feature",
                "properties": {   
                        "name": "Horizon Blue Cross Blue Shield",
                        "address": "3 Penn Plaza",
                        "city": "Newark, NJ 07105"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.1648,
                            40.73478
                            ]
                        }
            },
            {
                "type": "Feature",
                "properties": {   
                        "name": "Prudential Tower",
                        "address": "655 Broad Street",
                        "city": "Newark, NJ 07102"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.17030,
                            40.739330
                            ]
                        }
            },
            {
                "type": "Feature",
                "properties": {   
                        "name": "Turtle Back Zoo",
                        "address": "560 Northfield Avenue",
                        "city": "West Orange, NJ 07052"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.2809,
                            40.7692
                            ]
                        }
            },
            {
                "type": "Feature",
                "properties": {   
                        "name": "Mountainside Hospital",
                        "address": "1 Bay Avenue",
                        "city": "Montclair, NJ 07028"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.204340,
                            40.81149
                            ]
                        }
            },
            {
                "type": "Feature",
                "properties": {   
                        "name": "Clara Maass Medical Center",
                        "address": "1 Clara Maass Drive",
                        "city": "Belleville, NJ 07109"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.1764,
                            40.7857
                            ]
                        }
            },  
            {
                "type": "Feature",
                "properties": {   
                        "name": "Montclair State Diner",
                        "address": "1 Quad Road",
                        "city": "Montclair, NJ 07043"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.1978,
                            40.8623
                            ]
                        }
            },
            {
                "type": "Feature",
                "properties": {   
                        "name": "Montclair State Freeman",
                        "address": "1 Quad Road",
                        "city": "Montclair, NJ 07043"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.1979,
                            40.8622
                            ]
                        }
            },
            {
                "type": "Feature",
                "properties": {   
                        "name": "Montclair State Student Center",
                        "address": "1 Quad Road",
                        "city": "Montclair, NJ 07043"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.1977,
                            40.8621
                            ]
                        }
            },
            {
                "type": "Feature",
                "properties": {   
                        "name": "Montclair State Chilis",
                        "address": "1 Quad Road",
                        "city": "Montclair, NJ 07043"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.1976,
                            40.8624
                            ]
                        }
            },          
            {
                "type": "Feature",
                "properties": {   
                        "name": "Montclair State Rathskeller",
                        "address": "1 Quad Road",
                        "city": "Montclair, NJ 07043"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.1978,
                            40.8624
                            ]
                        }
            },  
            {
                "type": "Feature",
                "properties": {   
                        "name": "Montclair State University",
                        "address": "1 Quad Road",
                        "city": "Montclair, NJ 07043"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.1974,
                            40.8625
                            ]
                        }
            }
        ]
    };

var prospectives = {
    "type": "FeatureCollection",
        "features": [
            { 
                "type": "Feature",
                "properties": {
                        "name": "Valley Hospital",
                        "address": "223 N. Van Diem Avenue",
                        "city": "Ridgewood, NJ"
                        },
                "geometry":{
                        "type":"Point",
                        "coordinates":[
                            -74.1008, 
                            40.9837
                            ]
                        }
            }
        ]
    };
    map.on('load', function() {
        map.addLayer({
          id: 'customers',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: customers
          },
          layout: {
            'icon-image': 'marker-icon-green.png'
          },
          paint: { }
        });
        map.addLayer({
          id: 'prospectives',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: prospectives
          },
          layout: {
            'icon-image': 'marker-icon-yellow.png'
          },
          paint: { }
        });
      });

var popup = new mapboxgl.Popup();

map.on('mousemove', function(e) {
  var features = map.queryRenderedFeatures(e.point, { layers: ['customers', 'prospectives'] });
  if (!features.length) {
    popup.remove();
    return;
  }
  var feature = features[0];

  popup.setLngLat(feature.geometry.coordinates)
    .setHTML(feature.properties.Name)
    .addTo(map);

  map.getCanvas().style.cursor = features.length ? 'pointer' : '';
});

map.addSource('nearest-customer', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
      ]
    }
  });

map.on('click', function(e) {
// Return any features from the 'libraries' layer whenever the map is clicked
var prospectiveFeatures = map.queryRenderedFeatures(e.point, { layers: ['prospectives'] });
if (!prospectivesFeatures.length) {
    return;
}
var prospectiveFeature = prospectiveFeatures[0];

// Using Turf, find the nearest hospital to library clicked
var nearestCustomer = turf.nearest(prospectiveFeature, customers);

// If a nearest library is found
if (nearestCustomer !== null) {
    // Update the 'nearest-prospective' data source to include
    // the nearest prospective
    map.getSource('nearest-customer').setData({
    type: 'FeatureCollection',
    features: [
        nearestCustomer
    ]
    });
    // Create a new circle layer from the 'nearest-library' data source
    map.addLayer({
    id: 'nearest-customer',
    type: 'circle',
    source: 'nearest-customer',
    paint: {
        'circle-radius': 12,
        'circle-color': '#486DE0'
    }
    }, 'customer');
}
});