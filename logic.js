// Create a map object
var myMap = L.map("map", {
  center: [40, -75.71],
  zoom: 7
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var essex = [{
  location: [40.88553, -74.062],
  name: "Eurest Dun & Bradstreet"
},
{
  location: [40.78391, -74.3143],
  name: "FLIK Hospitality Group"
},
{
  location: [40.73478, -74.1648],
  name: "Horizon Blue Cross Blue Shield"
},
{
  location: [40.81149, -74.2032],
  name: "Mountainside Hospital"
},
{
  location: [40.8623, -74.1978],
  name: "Montclair State Diner"
},
{
  location: [40.7857, -74.1764],
  name: "Clara Maass Medical Center"
},
{
  location: [40.8623, -74.1978],
  name: "Montclair State Freeman"
},
{
  location: [40.8623, -74.1978],
  name: "Montclair State Student Center"
},
{
  location: [40.8623, -74.1978],
  name: "Montclair State Chilis"
},
{
  location: [40.8623, -74.1978],
  name: "Montclair State Rathskeller"
},
{
  location: [40.8623, -74.1978],
  name: "Montclair State University"
},
{
  location: [40.69177, -74.2809],
  name: "Prudential Tower"
},
{
  location: [40.7692, -74.2809],
  name: "Turtle Back Zoo"
}]

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < essex.length; i++) {
  var e = essex[i];
  L.marker(e.location)
    .bindPopup("<h1>" + e.name + "</h1>")
    .addTo(myMap);
}
