
// An array containing each city's name, location, and population
var essex = [
  {
  location: [40.739157, -74.327442],
  name: "Dun & Bradstreet",
  address: "103 John F. Kennedy Pkwy",
  city: "Short Hills, NJ 07078"
},
{
  location: [40.78391, -74.3143],
  name: "FLIK Hospitality Group",
  city: "Livingston, NJ 07039"
},
{
  location: [40.73478, -74.1648],
  name: "Horizon Blue Cross Blue Shield",
  address: "3 Penn Plaza",
  city: "Newark, NJ 07105"
},
{
  location: [40.81149, -74.204340],
  name: "Mountainside Hospital",
  address: "1 Bay Avenue",
  city: "Montclair, NJ 07028"
},
{
  location: [40.8623, -74.1978],
  name: "Montclair State Diner",
  address: "1 Quad Road",
  city: "Montclair, NJ 07043"
},
{
  location: [40.7857, -74.1764],
  name: "Clara Maass Medical Center",
  address: "1 Clara Maass Drive",
  city: "Belleville, NJ 07109"
},
{
  location: [40.8623, -74.1978],
  name: "Montclair State Freeman",
  address: "1 Quad Road",
  city: "Montclair, NJ 07043"
},
{
  location: [40.8623, -74.1978],
  name: "Montclair State Student Center",
  address: "1 Quad Road",
  city: "Montclair, NJ 07043"
},
{
  location: [40.8623, -74.1978],
  name: "Montclair State Chilis",
  address: "1 Quad Road",
  city: "Montclair, NJ 07043"
},
{
  location: [40.8623, -74.1978],
  name: "Montclair State Rathskeller",
  address: "1 Quad Road",
  city: "Montclair, NJ 07043"
},
{
  location: [40.8623, -74.1978],
  name: "Montclair State University",
  address: "1 Quad Road",
  city: "Montclair, NJ 07043"
},
{
  location: [40.739330, -74.17030],
  name: "Prudential Tower",
  address: "655 Broad Street",
  city: "Newark, NJ 07102"
},
{
  location: [40.7692, -74.2809],
  name: "Turtle Back Zoo",
  address: "560 Northfield Avenue",
  city: "West Orange, NJ 07052"
}];

var essexHospitals = [
  { 
  location: [40.7947, -74.2649],
  name: "East Orange General Hospital",
  address: "300 Central Avenue",
  city: "East Orange, NJ",
  beds: "196"
  },
  {
  location: [40.7858, -74.2771],
  name: "Kessler Institute of Rehab West Orange",
  address: "1199 Pleasant Valley Way",
  city: "West Orange, NJ",
  beds: "152"
  },
  {
  location: [40.70999, -74.21362],
  name: "Newark Beth Israel Medical Center",
  address: "201 Lyons Avenue",
  city: "Newark, NJ",
  beds: "480"
  },
  {
  location: [40.7636, -74.3049],
  name: "Saint Barnabas Medical Center",
  address: "94 Old Short Hills Road",
  city: "Livingston, NJ",
  beds: "577"
  },
  {
  location: [40.7439, -74.1746],
  name: "Saint Michael's Medical Center",
  address: "111 Central Avenue",
  city: "Newark, NJ",
  beds: "358"
  },
  {
  location: [40.7281, -74.1636],
  name: "Saint James Hospital",
  address: "155 Jefferson Street",
  city: "Newark, NJ",
  beds: "189"
  },
  {
  location: [40.77, -74.21],
  name: "Brookhaven Health Center",
  address: "120 Park End Place",
  city: "East Orange, NJ",
  beds: "122"
  },
  {
  location: [40.7403, -74.1902],
  name: "UMDNJ University Hospital",
  address: "150 Bergen Street",
  city: "Newark, NJ",
  beds: "518"
  },
  {
  location: [40.7525, -74.2361],
  name: "VA NJ Health Care East Orange",
  address: "385 Tremont Avenue",
  city: "East Orange, NJ",
  beds: "950"
  },
  {
  location: [40.7659, -74.2118],
  name: "White House Healthcare & Rehab Center",
  address: "560 Berkeley Avenue",
  city: "East Orange, NJ",
  beds: "176"  
  }
];

var bergenHospitals = [
  { 
  location: [40.90486, -73.955410],
  name: "Englewood Hospital",
  address: "350 Engle Street",
  city: "Englewood, NJ",
  beds: "282"
  },
  {
  location: [40.985210, -74.015210],
  name: "Hackensack University M.C. Pascack Valley",
  address: "250 Old Hook Road",
  city: "Westwood, NJ",
  beds: "128"
  },
  {
  location: [40.876600, -74.224240],
  name: "Hackensack University Medical Center",
  address: "30 Prospect Avenue",
  city: "Hackensack, NJ",
  beds: "770"
  },
  {
  location: [40.88192, -74.009086],
  name: "Holy Name Medical Center",
  address: "718 Teaneck Road",
  city: "Teaneck, NJ",
  beds: "361"
  },
  {
  location: [40.895830, -74.092230],
  name: "Kessler Institute of Rehab SaddleBrook",
  address: "300 Market Street",
  city: "Saddle Brook, NJ",
  beds: "112"
  },
  {
  location: [40.958920, -74.063130],
  name: "New Bridge Medical Center",
  address: "230 East Ridgewood Avenue",
  city: "Paramus, NJ",
  beds: "323"
  },
  {
  location: [40.9837, -74.1008],
  name: "Valley Hospital",
  address: "223 N. Van Diem Avenue",
  city: "Ridgewood, NJ",
  beds: "451"
  },
];

var essexColleges = [
  {
  location: [40.741388, -74.190352],
  name: "Rutgers University Dental School",
  address: "110 Bergen Street",
  students: "375",
  city: "Newark, NJ"
  },
  {
  location: [40.743447, -74.191798],
  name: "Rutgers University Health Related Professionals",
  address: "65 Bergen Street",
  students: "1800",
  city: "Newark, NJ"
  },
  {
  location: [40.744599, -74.170841],
  name: "Rutgers University School of Public Affairs and Administration",
  address: "111 Washington Street",
  students: "1200",
  city: "Newark, NJ"
  },
  {
  location: [40.795, -74.195],
  name: "Bloomfield College",
  address: "467 Franklin Street",
  students: "1947",
  city: "Bloomfield, NJ"
  },
  {
  location: [40.834, -74.273],
  name: "Caldwell University",
  address: "120 Bloomfield Avenue",
  students: "2200",
  city: "Caldwell, NJ"
  },
  {
  location: [40.7387,-74.1784],
  name: "Essex County Community College",
  address: "303 University Avenue",
  students: "8175",
  city: "Newark, NJ"
  },
  {
  location: [40.738890, -74.190730],
  name: "Rutgers University Medical School",
  address: "185 S. Orange Avenue",
  students: "680",
  city: "Newark, NJ"
  },
  {
  location: [40.736670, -74.166290],
  name: "Seton Hall University School of Law",
  address :"1109 Raymond Blvd",
  students: "734",
  city: "Newark, NJ"
  },
];

var airports = [
  {
  location: [40.6895, -74.1745],
  name: "Newark Liberty International Airport",
  address: "3 Brewster Road",
  city: "Newark, NJ 07114"
  },
  {
  location: [40.875278, -74.1653],
  name: "Essex County Airport",
  address: "Building M, 27 Wright Way",
  city: "Fairfield, NJ 07004"
  },
  {
  location: [40.9475, -74.31444],
  name: "Lincoln Park Airport",
  address: "425 Beaverbrook Road",
  city: "Lincoln, NJ 07035"
  },
  {
  location:[40.85, -74.060833],
  name: "Teterboro Airport",
  address: "111 Industrial Avenue",
  city: "Teterboro, NJ 07608"
  },
];

var businesses = [
  {
  location: [40.919540, -74.076320],
  name: "Garden State Plaza",
  address: "1 Garden State Plaza Blvd",
  city: "Paramus, NJ 07652"
  },
  {
  location: [40.956430, -74.068920],
  name: "Paramus Park",
  address: "700 Paramus Park",
  city: "Paramus, NJ 07652"
  },
  {
  location: [40.904980, -74.030280],
  name: "Shops at Riverside",
  address: "1 Riverside Square Mall",
  city: "Hackensack, NJ 07601"
  },
  {
  location: [41.069490, -74.070560],
  name: "Wegman's Supermarket",
  address: "100 Farm View",
  city: "Montvale, NJ 07645"
  },
  {
  location: [40.914631, -74.059059],
  name: "WholeFoods",
  address: "300 Bergen Town Center",
  city: "Paramus, NJ 07652"
  },
  {
  location: [40.978901, -74.122910],
  name: "WholeFoods",
  address: "44 Godwin Avenue",
  city: "Ridgewood, NJ 07450"
  },
  {
  location: [40.969189, -73.956390],
  name: "WholeFoods",
  address: "45 Vervalen St",
  city: "Closter, NJ 07624"
  },
  {
  location: [40.818729, -74.223007],
  name: "WholeFoods",
  address: "701 Bloomfield Ave",
  city: "Montclair, NJ 07042"
  },
  {
  location: [40.740269, -74.169823],
  name: "WholeFoods",
  address: "633 Broad St",
  city: "Newark, NJ 07102"
  },
  {
  location: [40.805092, -74.248573],
  name: "WholeFoods",
  address: "235 Prospect Ave",
  city: "West Orange, NJ 07052"
  },
  {
  location: [40.753550, -74.405740],
  name: "WholeFoods",
  address: "222 Main St",
  city: "Madison, NJ 07940"
  },
  {
  location: [40.716499, -74.286324],
  name: "WholeFoods",
  address: "2245 Springfield Ave",
  city: "Vauxhall, NJ 07088"
  },
  {
  location: [40.953541, -74.073738],
  name: "Shake Shack",
  address: "479 NJ-17",
  city: "Paramus, NJ 07652"
  },
];


// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
var hospitalIcon = L.icon({
  iconUrl: 'marker-icon-red.png',
  iconSize:     [25, 45], // size of the icon
  iconAnchor:   [25, 45], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -35]
});

var bergenHospitalIcon = L.icon({
  iconUrl: 'marker-icon-green.png',
  iconSize:     [25, 45], // size of the icon
  iconAnchor:   [25, 45], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -35]
});

var essexCollegeIcon = L.icon({
  iconUrl: 'marker-icon-yellow.png',
  iconSize:     [25, 45], // size of the icon
  iconAnchor:   [25, 45], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -35]
});

var airportIcon = L.icon({
  iconUrl: 'marker-icon-orange.png',
  iconSize:     [25, 45], // size of the icon
  iconAnchor:   [25, 45], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -35]
});
var businessIcon = L.icon({
  iconUrl: 'marker-icon-grey.png',
  iconSize:     [25, 45], // size of the icon
  iconAnchor:   [25, 45], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -35]
});


var currentCustomerMarkers = [];
var essexHospitalProspects = [];
var bergenHospitalProspects = [];
var essexCollegeProspects = [];
var airportProspects = [];
var businessProspects = [];

for (var i = 0; i < essex.length; i++) {
  currentCustomerMarkers.push(
    L.marker(essex[i].location)
      .bindPopup("<h1>" + essex[i].name + "</h1> <hr> <h2>" + essex[i].address + "</h2> <h2>" + essex[i].city + "</h2>")
    );
}

for (var i = 0; i < essexHospitals.length; i++) {
  essexHospitalProspects.push(
    L.marker(essexHospitals[i].location, {icon: hospitalIcon})
      .bindPopup("<h1>" + essexHospitals[i].name + "</h1> <hr> <h2>" + essexHospitals[i].address + "</h2> <h2>" + essexHospitals[i].city + "</h2> <h3>" + "Beds:"+ essexHospitals[i].beds + "</h3>")
    );
}

for (var i = 0; i < bergenHospitals.length; i++) {
  bergenHospitalProspects.push(
    L.marker(bergenHospitals[i].location, {icon: bergenHospitalIcon})
      .bindPopup("<h1>" + bergenHospitals[i].name + "</h1> <hr> <h2>" + bergenHospitals[i].address + " " + bergenHospitals[i].city + "</h2> <h3>" + "Beds:" + bergenHospitals[i].beds + "</h3>")
    );
}

for (var i = 0; i < essexColleges.length; i++) {
  essexCollegeProspects.push(
    L.marker(essexColleges[i].location, {icon: essexCollegeIcon})
      .bindPopup("<h1>" + essexColleges[i].name + "</h1> <hr> <h2>" + essexColleges[i].address + " " + essexColleges[i].city + "</h2> <h3>" + "Students:" + essexColleges[i].students + "</h3>")
    );
}
for (var i = 0; i < airports.length; i++) {
  airportProspects.push(
    L.marker(airports[i].location, {icon: airportIcon})
      .bindPopup("<h1>" + airports[i].name + "</h1> <hr> <h2>" + airports[i].address + "</h2> <h2>" + airports[i].city + "</h2>")
    );
}
for (var i = 0; i < businesses.length; i++) {
  businessProspects.push(
    L.marker(businesses[i].location, {icon: businessIcon})
      .bindPopup("<h1>" + businesses[i].name + "</h1> <hr> <h2>" + businesses[i].address + "</h2> <h2>" + businesses[i].city + "</h2>")
    );
}

var custLayer = L.layerGroup(currentCustomerMarkers);
var essexHospitalProspectLayer = L.layerGroup(essexHospitalProspects);
var bergenHospitalProspectLayer = L.layerGroup(bergenHospitalProspects);
var essexCollegeProspectLayer = L.layerGroup(essexCollegeProspects);
var airportProspectLayer = L.layerGroup(airportProspects);
var businessProspectLayer = L.layerGroup(businessProspects)


var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Only one base layer can be shown at a time
var baseMaps = {
  Day: light,
  Night: dark
};

// Overlays that may be toggled on or off
var overlayMaps = {
  Customers: custLayer,
  "Essex Hospital Prospects": essexHospitalProspectLayer,
  "Bergen Hospital Prospects": bergenHospitalProspectLayer,
  "Essex College Prospects": essexCollegeProspectLayer,
  "Prospective Airports": airportProspectLayer,
  "Prospective Businesses": businessProspectLayer
};

// var mapLayer = MQ.mapLayer(),
  // myMap;

var myMap = L.map("map", {
  center: [40.85, -74.071],
  zoom: 11,
  layers: [light, custLayer]
});
// //https://github.com/johan/world.geo.json/tree/master/countries/USA/NJ  data HERE!
// //https://www.color-hex.com/ good resource for color hex!!!
var URL = "https://og-production-open-data-newarknj-892364687672.s3.amazonaws.com/resources/e801054d-2392-4413-af40-042e9bc986b9/njzctapolygon.geojson?Signature=vOZjGwhEX%2B3HeegI7mG87rcpwlk%3D&Expires=1548043511&AWSAccessKeyId=AKIAJJIENTAPKHZMIPXQ";
// // var URL = "https://og-production-open-data-newarknj-892364687672.s3.amazonaws.com/resources/e801054d-2392-4413-af40-042e9bc986b9/njzctapolygon.geojson?Signature=yHwF98SS3bQQHoizhHt28Voby4w%3D&Expires=1547737309&AWSAccessKeyId=AKIAJJIENTAPKHZMIPXQ"

// // var url = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/USA/NJ/Passaic.geo.json"
// // var urltwo = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/USA/NJ/Essex.geo.json"
// // var urlthree = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/USA/NJ/Bergen.geo.json"


var geojson;

d3.json(URL, function(data) {
  
  geojson = L.choropleth(data, {

    valueProperty: "GEOID10",//attempt  to make the zipcode choropleth

    scale: ["#ffffb2", "#b10026"],

    // Number of breaks in step range
    steps: 100,

    mode: "q",
    style: {
      //border color
      color: "#fff",
      weight: 3,
      fillOpacity: 0.6
    },

    onEachFeature: function(feature, layer) {
      layer.bindPopup("ZipCode:" + feature.properties.GEOID10);
    }
  }).addTo(myMap);
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps,{
  collapsed: false}).addTo(myMap);

L.control.scale({position: "bottomleft"}).addTo(myMap);
var plugin = L.control.measure({
  position: 'topleft', 
  keyboard: true, 
  activeKeyCode: 'M'.charCodeAt(0),
  cancelKeyCode: 27,
  lineColor: 'red', 
  lineWeight: 2, 
  lineDashArray: '6,6', 
  lineOpacity: 1,
    formatDistance: function(val) {
      return Math.round(1000* val / 1609.344) / 1000 + 'mile';
    }
}).addTo(myMap);


