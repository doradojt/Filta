
// An array containing each city's name, location, and population
var currentCustomer= [
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
},
{
  location: [41.073750, -74.128430],
  name: "Konica Minolta",
  address: "100 Williams Drive",
  city: "Ramsey, NJ 07446"
},
{
  location: [40.942880, -73.945570],
  name: "Academy of the Holy Angels",
  address: "315 Hillside Avenue",
  city: "Demarest, NJ 07627"
},
{
  location: [41.073580, -74.133440],
  name: "Don Bosco Prep",
  address: "492 N. Franklin Turnpike",
  city: "Ramsey, NJ 07446"
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

for (var i = 0; i < currentCustomer.length; i++) {
  currentCustomerMarkers.push(
    L.marker(currentCustomer[i].location)
      .bindPopup("<h1>" + currentCustomer[i].name + "</h1> <hr> <h2>" + currentCustomer[i].address + "</h2> <h2>" + currentCustomer[i].city + "</h2>")
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
  "Customers": custLayer,
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

// USE THIS FOR ZIP CODES
var URL = "http://data.ci.newark.nj.us/dataset/c60e2a32-5f0a-41ce-b48d-304c06fe66b1/resource/e801054d-2392-4413-af40-042e9bc986b9/download/njzctapolygon.geojson";

// var link =
// "https://og-production-open-data-newarknj-892364687672.s3.amazonaws.com/resources/95db8cad-3a8c-41a4-b8b1-4991990f07f3/njcountypolygonv2.geojson?Signature=zfPUIqPNOMy5HAiXpeiillUb9K0%3D&Expires=1548991276&AWSAccessKeyId=AKIAJJIENTAPKHZMIPXQ";


// // var url = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/USA/NJ/Passaic.geo.json"
// // var urltwo = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/USA/NJ/Essex.geo.json"
// // var urlthree = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/USA/NJ/Bergen.geo.json"

// USE THIS FOR THE COLOR ZIPCODE, IT IS FROM YOUR LEAFLET HOMEWORK
//make a list of the zipcodes, then run through the list, assign a color if it is, another if not
// function getColor(d) {
//   return d > 1.0 ? '#800026' :
//          d > 2.0  ? '#BD0026' :
//          d > 3.0  ? '#E31A1C' :
//          d > 4.0  ? '#FC4E2A' :
//          d > 5.0   ? '#FD8D3C' :
//          d > 6.0   ? '#FEB24C' :
//          d > 7.0   ? '#FED976' :
//                     '#FFEDA0';
//}

// function chooseColor(county) {
//   switch (county) {
//   case "Bergen":
//     return "green";
//   case "Essex":
//     return "green";
//   case "Atlantic":
//     return "red";
//   case "Burlington":
//     return "red";
//   case "Camden":
//     return 'red';
//   case "Cumberland":
//     return 'red';
//   case "Cape May":
//     return 'red';
//   case "Gloucester":
//     return 'red';
//   case "Hunterdon":
//     return 'red';
//   case "Mercer":
//     return "red";
//   case "Hudson":
//     return "red";
//   case "Middlesex":
//     return "cyan";
//   case "Ocean":
//     return "red";
//   case "Monmouth":
//     return "cyan";
//   case "Morris":
//     return "red";
//   case "Salem":
//     return "red";
//   case "Passaic":
//     return "red";
//   case "Sussex":
//     return "red";
//   case "Union":
//     return "red";
//   case "Warren":
//     return "purple";
//   case "Somerset":
//     return "purple";
//   default:
//     return "grey";
//   }
// }


var NJ07 = ["07502", "07631", "07503", "07640", "07504", "07641","07505", "07642", "07506", "07620", "07643", "07508", "07646", "07509", "07647", "07510", "07513", "07648", "07514", "07649", "07524", "07650", "07533", "07657", "07474", "07538", "07660", "07543", "07661", "07544", "07666", "07670", "07675", "07676", "07699", "07621", "07624", "07417", "07015", "07026", "07011", "07031", "07012", "07057", "07013", "07012", "07057", "07013", "07070", "07014", "07055", "07071", "07512", "07073", "07075", "07626", "07410", "07010", "07020", "07022", "07024", "07522", "07072", "07074", "07436", "07608", "07627", "07452", "07604", "07644", "07652", "07653", "07662", "07663", "07423", "07430", "07432", "07466", "07450", "07451", "07507", "07458", "07463", "07481", "07628", "07495", "07645", "07656", "07677", "07632", "07601", "07424", "07602", "07442", "07603", "07605", "07606", "07470", "07607", "07501", "07630"];

var NG10 = ["07040", "07041", "07078", "07111", "07039", "07004", "07006", "07007", "07009", "07017", "07018", "07019", "07021", "07028", "07042", "07043", "07044", "07107", "07050", "07051", "07052", "07068", "07079", "07106", "07195", "07104", "07101", "07108", "07102", "07112", "07103", "07114", "07105", "07175", "07184", "07188", "07189", "07191", "07192", "07193", "07198", "07199", "07003", "07109", "07110"];

// d3.json(link, function(data) {
//   // Creating a geoJSON layer with the retrieved data
//   L.geoJson(data, {
//     // Style each feature (in this case a county)
//     style: function(feature) {
//       return {
//         color: "white",
//         // Call the chooseColor function to decide which color to color our county (color based on county)
//         fillColor: chooseColor(feature.properties.county),
//         fillOpacity: 0.5,
//         weight: 1.5
//       };
//     }
//   }).addTo(map);
// });

var geojson;

d3.json(URL, function(data) {
  
  //for (var i = 0; i < NG07.length; i++) {
  //check with Anthony about this loop
    geojson = L.choropleth(data, {

      valueProperty: "GEOID10",//attempt  to make the zipcode choropleth
      
      // if (i == valueProperty) {
      //   color: "#ffffb2";
      // } else {
      //   color: "#b10026";
      // }
      
      scale: ["#ffffb2", "#b10026"],

      // Number of breaks in step range
      steps: 100,

      mode: "q",
      style: {
        //border color
        color: "#fff",
        weight: 1.5,
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


