
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
  name: "FLIK CIT",
  address: "1 CIT Drive",
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
  location: [41.057710, -74.136980],
  name: "Ramsey High School",
  address: "256 E. Main Street",
  city: "Ramsey, NJ 07446"
},
{
  location: [40.850390, -74.012120],
  name: "Samsung",
  address: "85 Challenger Road",
  city: "Ridgefield Park, NJ 07660"
},
{
  location: [41.073580, -74.133440],
  name: "Don Bosco Prep",
  address: "492 N. Franklin Turnpike",
  city: "Ramsey, NJ 07446"
}];

var bergenLeads = [
  {
  location: [40.943960, -74.127600],
  name: "Medco Health Solutions, Inc",
  address: "19-00 Pollitt Drive",
  city: "Fair Lawn, NJ 07410",
  phone: "(201) 269-5150"
  },
  {
  location: [40.943740, -74.107350],
  name: "FairLawn School District",
  address: "37-01 Fair Lawn Avenue",
  city: "Fair Lawn, NJ 07410",
  phone: "(201) 794-5500"
  },
  {
  location: [40.943700, -74.128890],
  name: "Habit Burger",
  address: "3101 Promenade Blvd",
  city: "Fair Lawn, NJ 07410",
  phone: "(201) 475-3800"
  },
  {
  location: [40.945750, -74.146960],
  name: "Lincoln Grill Cafe",
  address: "115 Lincoln Avenue",
  city: "Fair Lawn, NJ 07410",
  phone: "(973) 310-3300"
  },
  {
  location: [40.945750, -74.146960],
  name: "Lincoln Grill Cafe",
  address: "115 Lincoln Avenue",
  city: "Fair Lawn, NJ 07410",
  phone: "(973) 310-3300"
  },
  {
  location: [41.067400, -74.172140],
  name: "UPS - Corporate",
  address: "340 MacArthur Blvd",
  city: "Mahwah, NJ 07430",
  phone: "NA"
  },
  {
  location: [41.058480, -74.143620],
  name: "Potomac Group Home Corp",
  address: "38 N. Central Ave",
  city: "Ramsey, NJ 07446",
  phone: "(201) 308-2337"
  },
  {
  location: [41.057710, -74.136980],
  name: "Bobcat's Texas BBQ",
  address: "112 E Main Street",
  city: "Ramsey, NJ 07446",
  phone: "(201) 962-9755"
  },
  {
  location: [41.061910, -74.122480],
  name: "Uncle Giuseppe's Marketplace",
  address: "10 Triangle Plaza",
  city: "Ramsey, NJ 07446",
  phone: "(201) 995-6800"
  },
  {
  location: [41.068880, -74.134450],
  name: "Shannon Rose Irish Pub",
  address: "1200 NJ-17",
  city: "Ramsey, NJ 07446",
  phone: "(201) 962-7602"
  },
  {
  location: [40.992901, -74.031982],
  name: "Farmhouse",
  address: "301 Center Avenue",
  city: "Westwood, NJ 07675",
  phone: "(201) 664-8424"
  },
  {
  location: [40.994500, -74.036240],
  name: "Westwood House",
  address: "100 Madison Avenue #1",
  city: "Westwood, NJ 07675",
  phone: "(201) 666-1778"
  },
  {
  location: [40.991630, -74.033470],
  name: "The Iron Horse Restaurant",
  address: "20 Washington Avenue",
  city: "Westwood, NJ 07675",
  phone: "(201) 666-9682"
  },
  {
  location: [40.992901, -74.031982],
  name: "Kimchi Smoke",
  address: "301 Center Avenue",
  city: "Westwood, NJ 07675",
  phone: "(201) 497-6333"
  },
  {
  location: [40.992901, -74.031982],
  name: "Kimchi Smoke",
  address: "301 Center Avenue",
  city: "Westwood, NJ 07675",
  phone: "(201) 497-6333"
  },
  {
  location: [41.040290, -74.063280],
  name: "Hertz Corp",
  address: "225 Brae Blvd",
  city: "Park Ridge, NJ 07656",
  phone: "(800) 654-3131"
  },
  {
  location: [41.044020, -74.063020],
  name: "Park Ridge Marriott",
  address: "300 Brae Blvd",
  city: "Park Ridge, NJ 07656",
  phone: "(201) 307-0800"
  },
  {
  location: [41.023140, -74.023750],
  name: "Bigfork Valley Hospital",
  address: "251 Knoll Drive",
  city: "Park Ridge, NJ 07656",
  phone: "(218) 743-3177"
  },
  {
  location: [41.038890, -74.034180],
  name: "Atrium Senior Living of Park Ridge",
  address: "120 Noyes Drive",
  city: "Park Ridge, NJ 07656",
  phone: "(201) 505-1777"
  },
  {
  location: [41.037050, -74.058270],
  name: "103 Prime at Valentino's",
  address: "103 Spring Valley Road",
  city: "Park Ridge, NJ 07656",
  phone: "(201) 391-2220"
  },
];

var hospitals = [
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
  },
  {
  location: [40.851710, -74.234360],
  name: "Essex County Hospital",
  address: "204 Grove Avenue",
  city: "Cedar Grove, NJ 07009",
  beds: "NA"  
  },
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
  location: [40.812350, -74.204340],
  name: "Hackensack Meridian - Montclair",
  address: "1 Bay Avenue",
  city: "Montclair, NJ 07042"
  },
  {
  location: [40.859370, -74.137670],
  name: "St. Mary's General",
  address: "350 Boulevard",
  city: "Passaic, NJ 07055"
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

var colleges = [
  {
  location: [40.741388, -74.190352],
  name: "Rutgers University Dental School",
  address: "110 Bergen Street",
  students: "375",
  city: "Newark, NJ 07102"
  },
  {
  location: [40.743447, -74.191798],
  name: "Rutgers University Health Related Professionals",
  address: "65 Bergen Street",
  students: "1800",
  city: "Newark, NJ 07102"
  },
  {
  location: [40.744599, -74.170841],
  name: "Rutgers University School of Public Affairs and Administration",
  address: "111 Washington Street",
  students: "1200",
  city: "Newark, NJ 07102"
  },
  {
  location: [40.795, -74.195],
  name: "Bloomfield College",
  address: "467 Franklin Street",
  students: "1947",
  city: "Bloomfield, NJ 07003"
  },
  {
  location: [40.834, -74.273],
  name: "Caldwell University",
  address: "120 Bloomfield Avenue",
  students: "2200",
  city: "Caldwell, NJ 07006"
  },
  {
  location: [40.7387,-74.1784],
  name: "Essex County Community College",
  address: "303 University Avenue",
  students: "8175",
  city: "Newark, NJ 07102"
  },
  {
  location: [40.738890, -74.190730],
  name: "Rutgers University Medical School",
  address: "185 S. Orange Avenue",
  students: "680",
  city: "Newark, NJ 07102"
  },
  {
  location: [40.736670, -74.166290],
  name: "Seton Hall University School of Law",
  address :"1109 Raymond Blvd",
  students: "734",
  city: "Newark, NJ 07102"
  },
  {
  location: [40.745480, -74.243470],
  name: "Seton Hall University",
  address: "400 S. Orange Avenue",
  city: "South Orange, NJ 07079"
  },
  {
  location: [40.830520, -74.111770],
  name: "Felician University",
  address: "1 Felician Way",
  city: "Rutherford, NJ 07070"
  },
  {
  location: [40.678530, -74.234310],
  name: "Kean University",
  address: "1000 Morris Avenue",
  city: "Union, NJ 07083"
  },
  {
  location: [40.917030, -74.177890],
  name: "Passaic Community College",
  address: "1 College Blvd",
  city: "Paterson, NJ 07505"
  },
  {
  location: [40.951540, -74.093830],
  name: "Bergen Community College",
  address: "400 Paramus Road",
  city: "Paramus, NJ 07652"
  },
  {
  location: [40.943430, -74.200910],
  name: "William Paterson College",
  address: "300 Pompton Road",
  city: "Wayne, NJ 07470"
  },
  {
  location: [40.899150, -74.027130],
  name: "Fairleigh Dickinson U.",
  address: "1000 River Drive",
  city: "Teaneck, NJ 07666"
  },
  {
  location: [41.084390, -74.176750],
  name: "Ramapo College",
  address: "505 Ramapo Valley Road",
  city: "Mahwah, NJ 07430"
  },
  {
  location: [40.733929, -74.180634],
  name: "NJ Institute of Technology",
  address: "323 Dr. Martin Luther King Jr Blvd",
  city: "Newark, NJ 07102"
  }
];

var slaymakerNJCustomers = [
  {
  location: [40.645820, -74.764350],
  name: "Chubb - Building A",
  address: "202 Halls Mills Road",
  city: "Whitehouse Station, NJ 08889",
  phone: "(908)-572-2000"
  },
  {
  location: [40.645831, -74.764361],
  name: "Chubb - Building B",
  address: "202 Halls Mills Road",
  city: "Whitehouse Station, NJ 08889",
  phone: "(908)-572-2000"
  },
  {
  location: [40.555500, -74.705360],
  name: "Verizon HQ Office Northeast",
  address: "145 Chubb Way",
  city: "Branchburg, NJ 08876",
  phone: "NA"
  },
  {
  location: [40.544650, -74.495760],
  name: "Verizon Office",
  address: "201 Centennial Ave",
  city: "Piscataway, NJ 08854",
  phone: "NA"
  },
  {
  location: [40.645710, -74.523430],
  name: "Citi Warren",
  address: "283 King George Road",
  city: "Warren, NJ 07059",
  phone: "NA"
  },
  {
  location: [40.644820, -74.583170],
  name: "Affinity Credit Union",
  address: "73 Mountainview Road",
  city: "Basking Ridge, NJ 07920",
  phone: "NA"
  },
  {
  location: [40.564320, -74.700570],
  name: "Roche Molecular Systems",
  address: "1080 US-202 #500",
  city: "Branchburg, NJ 08876",
  phone: "NA"
  },
  {
  location: [40.695430, -74.579470],
  name: "Daiichi Sankyo",
  address: "211 Mount Airy Road",
  city: "Basking Ridge, NJ 07920",
  phone: "NA"
  },
  {
  location: [40.554080, -74.709290],
  name: "Imclone/Lilly",
  address: "33 Imclone Drive",
  city: "Branchburg, NJ 08876",
  phone: "NA"
  },
  {
  location: [40.279030, -74.732262],
  name: "Rider University  - Cranberry's",
  address: "2083 Lawrenceville Road",
  city: "Lawrenceville, NJ 08648",
  phone: "NA"
  },
  {
  location: [40.279031, -74.732263],
  name: "Rider University  - Dally's",
  address: "2083 Lawrenceville Road",
  city: "Lawrenceville, NJ 08648",
  phone: "NA"
  },
  {
  location: [40.358000, -74.654680],
  name: "Rider University  - Westminster Choir College",
  address: "101 Walnut Lane",
  city: "Princeton, NJ 08540",
  phone: "NA"
  },
  {
  location: [40.344670, -74.663430],
  name: "Princeton Theological Seminary",
  address: "64 Mercer Street",
  city: "Princeton, NJ 08542",
  phone: "NA"
  },
  {
  location: [40.339660, -74.685310],
  name: "Hun School",
  address: "176 Edgerstoune Road",
  city: "Princeton, NJ 08540",
  phone: "NA"
  },
  {
  location: [40.762270, -74.434910],
  name: "Allergan - Madison",
  address: "5 Giralda Farms, Dodge Dr.",
  city: "Madison, NJ 07940",
  phone: "NA"
  },
  {
  location: [40.758980, -74.436798],
  name: "Merck/SWS",
  address: "2 Giralda Farms",
  city: "Madison, NJ 07940",
  phone: "NA"
  },
  {
  location: [40.271920, -74.782760],
  name: "TCNJ - Foodcourt",
  address: "2000 Pennington Road",
  city: "Ewing, NJ 08618",
  phone: "NA"
  },
  {
  location: [40.271921, -74.782761],
  name: "TCNJ - TDubs",
  address: "2000 Pennington Road",
  city: "Ewing, NJ 08618",
  phone: "NA"
  },
  {
  location: [40.279030, -74.732262],
  name: "Rider University  - Traditions",
  address: "2083 Lawrenceville Road",
  city: "Lawrenceville, NJ 08648",
  phone: "NA"
  },
  {
  location: [40.867980, -74.443020],
  name: "Park Place Cafe",
  address: "379 Interpace Parkway #1",
  city: "Parsippany, NJ 07054",
  phone: "NA"
  },
  {
  location: [40.342490, -74.773030],
  name: "BMS - Hopewell - Satellite",
  address: "311 Pennington Rocky Hill Road",
  city: "Pennington, NJ 08534",
  phone: "NA"
  },
];

var slaymakerPACustomers =[
  {
  location: [40.644900, -75.408690],
  name: "Lehigh Valley Muhlenberg Hospital",
  address: "2545 Schoenersville Road",
  city: "Bethlehem, PA 18017",
  phone: "NA"
  },
  {
  location: [40.675840, -75.324500],
  name: "Northhampton Community College - Food Court",
  address: "3835 Green Pond Road",
  city: "Bethlehem, PA 18020",
  phone: "NA"
  },
  {
  location: [40.244561, -75.090591],
  name: "The Bucks Club",
  address: "2600 Old York Road",
  city: "Jamison, PA 18929",
  phone: "(215)-343-0350"
  },
  {
  location: [40.596150, -75.510680],
  name: "Muhlenberg University Catering",
  address: "2400 Chew Street, Seegers Union Building",
  city: "Allentown, PA 18104",
  phone: "(484) 664-3488"
  },
  {
  location: [40.559690, -75.486740],
  name: "The Brass Nail",
  address: "3015 Lehigh Street",
  city: "Allentown, PA 18103",
  phone: "NA"
  },
  {
  location: [40.345820, -75.036250],
  name: "Giggleberry Fair",
  address: "5750 Upper York Road",
  city: "New Hope, PA 18938",
  phone: "NA"
  },
  {
  location: [40.104740, -74.866570],
  name: "Lower Bucks Hospital",
  address: "501 Bath Road",
  city: "Bristol, PA 19007",
  phone: "NA"
  },
  {
  location: [40.564770, -75.564050],
  name: "Whole Foods",
  address: "750 N Krocks Road, Suite 301",
  city: "Allentown, PA 18106",
  phone: "NA"
  },
  {
  location: [40.605730, -75.378230],
  name: "Lehigh University - Pandinis",
  address: "29 Trembley Drive",
  city: "Bethlehem, PA 18015",
  phone: "(610)-758-4819"
  },
  {
  location: [40.302630, -75.149340],
  name: "Doylestown Hospital",
  address: "2554, 595 W. State Street",
  city: "Doylestown, PA 18901",
  phone: "(215) 345-2200"
  },
  {
  location: [40.657450, -75.418020],
  name: "Lehigh University - UC1 - Kitchen/Grill",
  address: "3350 Schoenersville Road",
  city: "Bethlehem, PA 18017",
  phone: "NA"
  },
  {
  location: [40.585740, -75.358900],
  name: "Lehigh University Stabler Arena",
  address: "124 Goodman Drive S.",
  city: "Bethlehem, PA 18015",
  phone: "NA"
  },
  {
  location: [40.566780, -75.523727],
  name: "Lehigh Valley Hospital - Cedar Crest",
  address: "1200 S. Cedar Crest Blvd",
  city: "Allentown, PA 18103",
  phone: "NA"
  },
  {
  location: [40.630871, -75.382477],
  name: "Moravian College",
  address: "1200 Main Street",
  city: "Bethlehem, PA 18018",
  phone: "NA"
  },
  {
  location: [40.605728, -75.378227],
  name: "Lehigh University (UC3 - Catering/Mtn. Top",
  address: "29 Trembley Drive",
  city: "Bethlehem, PA 18015",
  phone: "NA"
  },
  {
  location: [40.618770, -75.380020],
  name: "Moravian College - Clewell Dining Hall",
  address: "39 W. Church Street",
  city: "Bethlehem, PA 18018",
  phone: "NA"
  },
  {
  location: [40.244560, -75.090590],
  name: "The Bucks Club - Pool",
  address: "2600 Old York Road",
  city: "Jamison, PA 18929",
  phone: "(215)-343-0350"
  },
  {
  location: [40.587040, -75.558560],
  name: "Duck Donuts",
  address: "4608 Broadway",
  city: "Allentown, PA 18104",
  phone: "NA"
  },
  {
  location: [40.610010, -75.371880],
  name: "Lehigh University - Brodhead",
  address: "119 E. Morton Street",
  city: "Bethlehem, PA 18015",
  phone: "NA"
  },
  {
  location: [40.606570, -75.372930],
  name: "Lehigh University - Rathbone",
  address: "63 University Drive",
  city: "Bethlehem, PA 18015",
  phone: "NA"
  },
  {
  location: [40.605430, -75.375790],
  name: "Lehigh University - Hawk's Nest",
  address: "690 Taylor Street",
  city: "Bethlehem, PA 18015",
  phone: "NA"
  },
  {
  location: [40.536720, -75.377068],
  name: "DeSales University",
  address: "2755 Station Ave",
  city: "Center Valley, PA 19034",
  phone: "NA"
  },
  {
  location: [40.644901, -75.408691],
  name: "Lehigh Valley Muhlenberg Hospital",
  address: "2545 Schoenersville Road",
  city: "Bethlehem, PA 18017",
  phone: "NA"
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
  {
  location: [40.728451, -74.172737],
  name: "Panasonic",
  address: "2 Riverfront Plaza",
  city: "Newark, NJ 07102"
  },
  {
  location: [40.889939,-74.259759],
  name: "WillowBrook Mall",
  address: "1400 Willowbrook Mall",
  city: "Wayne, NJ 07470"
  },
  {
  location: [40.7394, -74.3646],
  name: "Short Hills Mall",
  address: "1200 Morris Turnpike",
  city: "Short Hills, NJ 07078"
  },
  {
  location: [40.779184, -74.355292],
  name: "Livingston Mall",
  address: "112 Eisenhower Parkway",
  city: "Livingston, NJ 07039"
  },
];

var amusement = [
  {
  location: [40.136990,-74.440132],
  name: "Six Flags Great Adventure",
  address: "1 Six Flags Blvd",
  city: "Jackson, NJ 08527"
  },
  {
  location: [40.819920, -74.071571],
  name: "Meadowlands Racetrack",
  address:"1 Racetrack Drive",
  city:"East Rutherford, NJ 07073"
  },
  {
  location: [40.812072, -74.087661],
  name:"NY Giants at Quest Diagnostics Center",
  address:"1925 N. Service Road",
  city:"East Rutherford, NJ 07073"
  },
  {
  location: [40.813831, -74.079193],
  name: "MetLife Stadium",
  address: "1 Metlife Stadium Drive",
  city: "East Rutherford, NJ 07073"
  },
  {
  location: [40.819920, -74.071571],
  name: "Fanduel Sportsbook",
  address: "1 Racetrack Drive",
  city: "East Rutherford, NJ 07073"
  },
  {
  location: [40.254585, -74.284338],
  name: "Freehold Raceway",
  address: "130 Park Avenue",
  city: "Freehold, NJ 07728"
  },
  {
  location: [40.309151, -74.015053],
  name: "Monmouth Park Racetrack",
  address: "175 Oceanport Avenue",
  city: "Oceanport, NJ 07757"
  },
  {
  location: [40.376518, -74.148216],
  name: "PNC Bank Arts Center",
  address: "116 Garden State Parkway",
  city: "Holmdel, NJ 07733"
  },
  {
  location: [40.732239, -74.170639],
  name: "Prudential Center",
  address: "25 Lafayette Street",
  city: "Newark, NJ 07102"
  },
];
 
var golf = [
  {
  location: [40.519520, -74.368210],
  name: "Top Golf",
  address: "1013 US-1",
  city: "Edison, NJ 08817"
  },
  {
  location: [40.957570, -74.000580],
  name: "White Beeches Country Club",
  address: "70 Haworth Drive",
  city: "Haworth, NJ 07641"
  },
  {
  location: [40.923770, -73.938010],
  name: "Montammy Country Club",
  address: "Montammy Drive",
  city: "Alpine, NJ 07620"
  },
  {
  location: [41.012380, -74.016530],
  name: "Edgewood Country Club",
  address: "449 Rivervale Road",
  city: "Rivervale, NJ 07675"
  },
  {
  location: [40.954790, -73.947380],
  name: "Alpine Country Club",
  address: "80 Anderson Avenue",
  city: "Demarest, NJ 07627"
  },
  {
  location: [40.918530, -73.977350],
  name: "Knickerbocker Country Club",
  address: "188 Knickerbocker Road",
  city: "Tenafly, NJ 07670"
  },
  {
  location: [41.048460, -74.134190],
  name: "Ramsey Golf & Country Club",
  address: "105 Lakeside Drive",
  city: "Ramsey, NJ 07466"
  },
  {
  location: [41.025730, -74.005110],
  name: "Rivervale Country Club",
  address: "660 Rivervale Road",
  city: "Rivervale, NJ 07675"
  },
  {
  location: [40.847740, -74.174910],
  name: "Upper Montclair Golf Club",
  address: "177 Hepburn Road",
  citty: "Clifton, NJ 07012"
  },
  {
  location: [40.948700, -74.233520],
  name: "Preakness Hills",
  address: "1050 Ratzer Road",
  city: "Wayne, NJ 07470"
  },
  {
  location: [40.861040, -74.287440],
  name: "Mountain Ridge",
  address: "713 Passaic Avenue",
  city: "West Caldwell, NJ 07006"
  },
  {
  location: [40.867060, -74.268900],
  name: "Green Brook",
  address: "100 W. Greenbrook Road",
  city: "Caldwell, NJ"
  },
  {
  location: [40.804520, -74.251430],
  name: "Crestmont Golf Club",
  address: "750 Eagle Rock Avenue",
  city: "West Orange, NJ 07052"
  },
  {
  location: [40.818050, -74.240600],
  name: "Montclair Golf Club",
  address: "25 Prospect Avenue",
  city: "West Orange, NJ 07052"
  },
  {
  location: [40.824890, -74.194420],
  name: "Glen Ridge GC",
  address: "555 Ridgewood Avenue",
  city: "Glen Ridge, NJ 07028"
  },
  {
  location: [40.788710, -74.257530],
  name: "Essex County CC",
  address: "350 Mt. Pleasant Avenue",
  city: "West Orange, NJ 07052"
  },
  {
  location: [40.765840, -74.377670],
  name: "Brooklake",
  address: "139 Brooklake Road",
  city: "Florham Park, NJ 07932"
  },
  {
  location: [40.818300, -74.277540],
  name: "Essex Fells Country Club",
  address: "219 Devon Road",
  city: "Essex Fells, NJ 07021"
  },
  {
  location :[40.943090, -74.202690],
  name: "North Jersey CC",
  address: "594 Hamburg Turnpike",
  city: "Wayne, NJ 07470"
  },
];
var base = [
  {
  location: [40.663330, -74.272140],
  name: "Operations Base",
  address: "225 W. Clay Avenue",
  city: "Roselle Park, NJ 07204"  
  },
];

var cateringHalls = [
  {
  location: [40.877090, -74.115740],
  name: "The Venetian",
  address: "546 River Drive",
  city: "Garfield, NJ 07026"
  },
  {
  location: [40.997070, -74.060670],
  name: "Seasons",
  address: "644 Pascack Road",
  city: "Washington Township, NJ 07676"
  },
  {
  location: [40.980820, -74.300450],
  name: "The Legacy Castle",
  address: "141 Route 23",
  city: "Pompton Plains, NJ 07444"
  },
  {
  location: [40.989900, -74.001170],
  name: "Florentine Gardens",
  address: "97 Rivervale Road",
  city: "Rivervale, NJ 07675"
  },
  {
  location: [41.004200, -73.941210],
  name: "The Rockleigh",
  address: "26 Paris Avenue",
  city: "Rockleigh, NJ 07647"
  },
  {
  location: [40.835140, -74.052660],
  name: "The Graycliff",
  address: "122 Moonachie Avenue",
  city: "Moonachie, NJ 07074"
  },
  {
  location: [40.920790, -74.174790],
  name: "The Brownstone",
  address: "351 W. Broadway",
  city: "Paterson, NJ 07522"
  },
  {
  location: [40.788820, -74.171680],
  name: "Nanina's in the Park",
  address: "540 Mill Street",
  city: "Belleville, NJ 07109"
  },
  {
  location: [40.930560, -74.269600],
  name: "Cosmopolitan",
  address: "1377 Route 23",
  city: "Wayne, NJ 07470"
  },
  {
  location: [40.812620, -74.245560],
  name: "The Manor",
  address: "111 Prospect Avenue",
  city: "West Orange, NJ 07052"
  },
  {
  location: [40.862910, -74.193980],
  name: "Valley Regency",
  address: "1129 Valley Road",
  city: "Clifton, NJ 07043"
  },
  {
  location: [40.857300, -74.229800],
  name: "The Grove",
  address: "691 Pompton Avenue",
  city: "Cedar Grove, NJ 07009"
  },
  {
  location: [40.863170, -74.106050],
  name: "The Royal Manor",
  address: "454 Midland Avenue",
  city: "Garfield, NJ 07026"
  },
  {
  location: [40.803230, -74.241400],
  name: "Highlawn Pavilion",
  address: "1 Crest Drive",
  city: "West Orange, NJ 07052"
  },
  {
  location: [40.944990, -74.186450],
  name: "The Tides Estate",
  address: "1245 Belmont Avenue",
  city: "North Haledon, NJ 07508"
  },
  {
  location: [40.815490, -74.266910],
  name: "Pleasantdale Chateau",
  address: "757 Eagle Rock Avenue",
  city: "West Orange, NJ 07052"
  },
  {
  location: [40.813340, -74.258370],
  name: "The Wilshire Caterers",
  address: "350 Pleasant Valley Way",
  city: "West Orange, NJ 07052"
  },
  {
  location: [41.017090, -73.968810],
  name: "The Old Tappan Manor",
  address: "137 Orangeburgh Road",
  city: "Old Tappan, NJ 07675"
  },
  {
  location: [40.871960, -74.004870],
  name: "Teaneck Marriot at Glenpointe",
  address: "100 Frank W. Burr Blvd",
  city: "Teaneck, NJ 07666"
  }, 
  {
  location: [41.104127, -74.160960],
  name: "Sheraton Mahwah Hotel",
  address: "1 International Blvd",
  city: "Mahwah, NJ 07495"
  },
  {
  location: [40.922591, -73.964799],
  name: "Clinton Inn",
  address: "145 Dean Drive",
  city: "Tenafly, NJ 07670"
  },
  {
  location: [40.95801, -74.154882],
  name: "Macalusos Events & Banquets",
  address: "55 4th Avenue",
  city: "Hawthorne, NJ 07506"
  },
  {
  location: [40.880581, -74.077161],
  name: "The Elan Catering & Events",
  address: "111 Route US 46 West",
  city: "Lodi, NJ 07644"
  },
  {
  location: [40.845812, -74.077874],
  name: "The Fiesta",
  address: "255 NJ 17",
  city: "Wood-Ridge, NJ 07075"
  },
  {
  location: [40.806747, -74.132183],
  name: "The San Carlo",
  address: "620 Stuyvensant Avenue",
  city: "Lyndhurst, NJ 07071"
  },
  {
  location: [40.842087, -74.036861],
  name: "Empire Club",
  address: "136 Mehrhof Road",
  city: "Little Ferry, NJ 07643"
  },
  {
  location: [40.773283, -74.041712],
  name: "Lido Catering Hall",
  address: "2600 Tonnelle Avenue",
  city: "North Bergen, NJ 07109"
  },
  {
  location: [40.891507, -74.268763],
  name: "Crystal Falls Banquets",
  address: "690 Route 46 East",
  city: "Fairfield, NJ 07004"
  },
  {
  location: [40.761215, -74.249752],
  name: "The Appian Way",
  address: "619 Langdon Street",
  city: "Orange, NJ 07050"
  },
  {
  location: [40.785237, -74.179944],
  name: "Truffle Caterers & Banquet",
  address: "100 Newark Avenue",
  city: "Belleville, NJ 07109"
  },
  {
  location: [40.829526, -74.241851],
  name: "Richfield Regency",
  address: "420 Bloomfield Avenue",
  city: "Verona, NJ 07044"
  },
  {
  location: [40.87084, -74.236696],
  name: "Il Tulipano",
  address: "1131 Pompton Avenue",
  city: "Cedar Grove, NJ 07009"
  },
  {
  location: [40.881962, -74.196776],
  name: "Westmount Country Club",
  address: "728 Rifle Camp Road",
  city: "Woodland Park, NJ 07424"
  },
  {
  location: [40.893941, -74.221224],
  name: "The Bethwood",
  address: "38 Lackawanna Avenue",
  city: "Totowa, NJ 07512"
  },
  {
  location: [40.94581, -74.093197],
  name: "The Terrace",
  address: "293 Paramus Road",
  city: "Paramus, NJ 07652"
  },
  {
  location: [40.88089, -74.24257],
  name: "The Falls",
  address: "215 NJ-23",
  city: "Little Falls, NJ 07424"
  },
];
var highSchool = [
  {
  location: [40.959560, -74.048610],
  name: "Bergen Catholic High School",
  address: "1040 Oradell Avenue",
  city: "Oradell, NJ 07649"
  },
  {
  location: [40.955120, -74.096040],
  name: "Paramus Catholic High School",
  address: "425 Paramus Road",
  city: "Paramus, NJ 07652"
  },
  {
  location : [41.049990, -74.071940],
  name: "St. Joseph's High School",
  address: "40 Chestnut Ridge Road",
  city: "Montvale, NJ 07645"
  },
  {
  location: [40.996400, -74.074830],
  name: "Immaculate Heart",
  address: "500 Van Emburgh Avenue",
  city: "Washington Township, NJ 07676"
  },
  {
  location: [40.887300, -73.962290],
  name: "Dwight-Englewood School",
  address: "315 E. Palisade Avenue",
  city: "Englewood, NJ 07631"
  },
  {
  location: [40.954170, -74.035400],
  name: "Oradell School",
  address: "350 Propect Avenue",
  city: "Oradell, NJ 07649"
  },
  {
  location: [40.946110, -74.033740],
  name: "River Dell High School",
  address: "55 Pyle Street",
  city: "Oradell, NJ 07649"
  },
  {
  location: [40.525450, -74.495600],
  name: "Rutgers Prep School",
  address: "1345 Easton Avenue",
  city: "Somerset, NJ 08873"
  },
];


// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
var hospitalIcon = L.icon({
  //iconUrl: 'marker-icon-red.png',
  iconUrl: './icons/medicine.png',
  shadowUrl: './icons/marker-shadow.png',
  iconSize: [28,28],
  //shadowSize: [20,40], //size of the shadow
  iconAnchor: [25,25],
  popupAnchor:  [-3, -35],
  shadowAnchor: [24,37] //point of the icon for the shadow
});

// var bergenHospitalIcon = L.icon({
//   //iconUrl: 'marker-icon-green.png',
//   iconUrl: './icons/medicine.png',
//   shadowUrl: './icons/marker-shadow.png',
//   iconSize: [28,28],
//   //shadowSize: [20,40], //size of the shadow
//   iconAnchor: [25,25],
//   popupAnchor:  [-3, -35],
//   shadowAnchor: [24,37] //point of the icon for the shadow
// });

var collegeIcon = L.icon({
 //iconUrl: 'marker-icon-yellow.png',
  iconUrl: './icons/graduate-cap.png',
  shadowUrl: './icons/marker-shadow.png',
  iconSize: [28,28],
  //shadowSize: [20,40], //size of the shadow
  iconAnchor: [25,25],
  popupAnchor:  [-3, -35],
  shadowAnchor: [26,42] //point of the icon for the shadow
});

var highSchoolIcon = L.icon({
  //iconUrl: 'marker-icon-yellow.png',
   iconUrl: './icons/school.png',
   shadowUrl: './icons/marker-shadow.png',
   iconSize: [28,28],
   //shadowSize: [20,40], //size of the shadow
   iconAnchor: [25,25],
   popupAnchor:  [-3, -35],
   shadowAnchor: [26,42] //point of the icon for the shadow
 });
 var cateringIcon = L.icon({
  //iconUrl: 'marker-icon-yellow.png',
   iconUrl: './icons/buffet.png',
   shadowUrl: './icons/marker-shadow.png',
   iconSize: [28,28],
   //shadowSize: [20,40], //size of the shadow
   iconAnchor: [25,25],
   popupAnchor:  [-3, -35],
   shadowAnchor: [26,42] //point of the icon for the shadow
 });


var airportIcon = L.icon({
  //iconUrl: 'marker-icon-orange.png',
  iconUrl: './icons/airplane-shape.png',
  shadowUrl: './icons/marker-shadow.png',
  iconSize: [28,28],
  //shadowSize: [20,40], //size of the shadow
  iconAnchor: [25,25],
  popupAnchor:  [-3, -35],
  shadowAnchor: [28,39] //point of the icon for the shadow
});
var businessIcon = L.icon({
  //iconUrl: 'marker-icon-grey.png',
  iconUrl: './icons/filtavan.png',
  shadowUrl: './icons/marker-shadow.png',
  iconSize: [45,25],
  //shadowSize: [20,40], //size of the shadow
  iconAnchor: [25,25],
  popupAnchor:  [-3, -35],
  shadowAnchor: [7,40] //point of the icon for the shadow
});

var slaymakerIcon = L.icon({
  //iconUrl: 'marker-icon-violet.png',
  iconUrl: './icons/filtavan.png',
  shadowUrl: './icons/marker-shadow.png',
  iconSize: [45,25],
  //shadowSize: [20,40], //size of the shadow
  iconAnchor: [25,25],
  popupAnchor:  [-3, -35],
  shadowAnchor: [7,40] //point of the icon for the shadow
});
var bergenLeadsIcon = L.icon({
  iconUrl: './icons/filtavan.png',
  shadowUrl: './icons/marker-shadow.png',
  iconSize: [45,25],
  //shadowSize: [20,40], //size of the shadow
  iconAnchor: [25,25],
  popupAnchor:  [-3, -35],
  shadowAnchor: [7,40] //point of the icon for the shadow
});
var amusementIcon = L.icon({
  iconUrl: './icons/ap.png',
  //shadowUrl: './icons/marker-shadow.png',
  iconSize: [35,25],
  //shadowSize: [20,40], //size of the shadow
  iconAnchor: [25,25],
  popupAnchor:  [-3, -35],
  //shadowAnchor: [7,40] //point of the icon for the shadow
});
var baseIcon = L.icon({
  iconUrl: './icons/base.png',
  shadowUrl: './icons/marker-shadow.png',
  iconSize: [30,30],
  shadowSize: [30,40], //size of the shadow
  iconAnchor: [25,25],
  popupAnchor:  [-3, -35],
  shadowAnchor: [22,34] //point of the icon for the shadow
});
var golfIcon = L.icon({
  iconUrl: './icons/golf.png',
  shadowUrl: './icons/marker-shadow.png',
  iconSize: [30,30],
  shadowSize: [30,40], //size of the shadow
  iconAnchor: [25,25],
  popupAnchor:  [-3, -35],
  shadowAnchor: [22,34] //point of the icon for the shadow
});


var currentCustomerMarkers = [];
var hospitalProspects = [];
var cateringProspects = [];
//var bergenHospitalProspects = [];
var highSchoolProspects = [];
var collegeProspects = [];
var airportProspects = [];
var businessProspects = [];
var slaymakerNJProspects = [];
var slaymakerPAProspects = [];
var bergenLeadProspects = [];
var amusementProspects =[];
var baseProspects = [];
var golfProspects =[];

for (var i = 0; i < currentCustomer.length; i++) {
  currentCustomerMarkers.push(
    L.marker(currentCustomer[i].location)
      .bindPopup("<h1>" + currentCustomer[i].name + "</h1> <hr> <h2>" + currentCustomer[i].address + "</h2> <h2>" + currentCustomer[i].city + "</h2>")
    );
}

for (var i = 0; i < hospitals.length; i++) {
  hospitalProspects.push(
    L.marker(hospitals[i].location, {icon: hospitalIcon})
      .bindPopup("<h1>" + hospitals[i].name + "</h1> <hr> <h2>" + hospitals[i].address + "</h2> <h2>" + hospitals[i].city + "</h2> <h3>" + "Beds:"+ hospitals[i].beds + "</h3>")
    );
}

// for (var i = 0; i < bergenHospitals.length; i++) {
//   bergenHospitalProspects.push(
//     L.marker(bergenHospitals[i].location, {icon: bergenHospitalIcon})
//       .bindPopup("<h1>" + bergenHospitals[i].name + "</h1> <hr> <h2>" + bergenHospitals[i].address + " " + bergenHospitals[i].city + "</h2> <h3>" + "Beds:" + bergenHospitals[i].beds + "</h3>")
//     );
//}

for (var i = 0; i < colleges.length; i++) {
  collegeProspects.push(
    L.marker(colleges[i].location, {icon: collegeIcon})
      .bindPopup("<h1>" + colleges[i].name + "</h1> <hr> <h2>" + colleges[i].address + " " + colleges[i].city + "</h2> <h3>" + "Students:" + colleges[i].students + "</h3>")
    );
}
for (var i = 0; i < cateringHalls.length; i++) {
  cateringProspects.push(
    L.marker(cateringHalls[i].location, {icon: cateringIcon})
      .bindPopup("<h1>" + cateringHalls[i].name + "</h1> <hr> <h2>" + cateringHalls[i].address + " " + cateringHalls[i].city + "</h2>")
    );
}
for (var i = 0; i < highSchool.length; i++) {
  highSchoolProspects.push(
    L.marker(highSchool[i].location, {icon: highSchoolIcon})
      .bindPopup("<h1>" + highSchool[i].name + "</h1> <hr> <h2>" + highSchool[i].address + " " + highSchool[i].city + "</h2> <h3>" + "Students:" + highSchool[i].students + "</h3>")
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
for (var i = 0; i < slaymakerNJCustomers.length; i++) {
  slaymakerNJProspects.push(
    L.marker(slaymakerNJCustomers[i].location, {icon: slaymakerIcon})
      .bindPopup("<h1>" + slaymakerNJCustomers[i].name + "</h1> <hr> <h2>" + slaymakerNJCustomers[i].address + "</h2> <h2>" + slaymakerNJCustomers[i].city + "</h2>")
    );
}
for (var i = 0; i < slaymakerPACustomers.length; i++) {
  slaymakerPAProspects.push(
    L.marker(slaymakerPACustomers[i].location, {icon: slaymakerIcon})
      .bindPopup("<h1>" + slaymakerPACustomers[i].name + "</h1> <hr> <h2>" + slaymakerPACustomers[i].address + "</h2> <h2>" + slaymakerPACustomers[i].city + "</h2>")
    );
}
for (var i = 0; i < bergenLeads.length; i++) {
  bergenLeadProspects.push(
    L.marker(bergenLeads[i].location, {icon: bergenLeadsIcon})
      .bindPopup("<h1>" + bergenLeads[i].name + "</h1> <hr> <h2>" + bergenLeads[i].address + "</h2> <h2>" + bergenLeads[i].city + "</h2><h3>" + bergenLeads[i].phone + "</h3>")
    );
}
for (var i = 0; i < amusement.length; i++) {
  amusementProspects.push(
    L.marker(amusement[i].location, {icon: amusementIcon})
      .bindPopup("<h1>" + amusement[i].name + "</h1> <hr> <h2>" + amusement[i].address + "</h2> <h2>" + amusement[i].city + "</h2>")
    );
}
for (var i = 0; i < base.length; i++) {
  baseProspects.push(
    L.marker(base[i].location, {icon: baseIcon})
      .bindPopup("<h1>" + base[i].name + "</h1> <hr> <h2>" + base[i].address + "</h2> <h2>" + base[i].city + "</h2>")
    );
}
for (var i = 0; i < golf.length; i++) {
  golfProspects.push(
    L.marker(golf[i].location, {icon: golfIcon})
      .bindPopup("<h1>" + golf[i].name + "</h1> <hr> <h2>" + golf[i].address + "</h2> <h2>" + golf[i].city + "</h2>")
    );
}

var custLayer = L.layerGroup(currentCustomerMarkers);
var hospitalProspectLayer = L.layerGroup(hospitalProspects);
//var bergenHospitalProspectLayer = L.layerGroup(bergenHospitalProspects);
var highSchoolProspectLayer = L.layerGroup(highSchoolProspects);
var collegeProspectLayer = L.layerGroup(collegeProspects);
var airportProspectLayer = L.layerGroup(airportProspects);
var businessProspectLayer = L.layerGroup(businessProspects);
var slaymakerProspectLayer = L.layerGroup(slaymakerNJProspects);
var slaymakerPAProspectLayer = L.layerGroup(slaymakerPAProspects);
var bergenLeadProspectLayer = L.layerGroup(bergenLeadProspects);
var amusementProspectLayer = L.layerGroup(amusementProspects);
var baseProspectLayer = L.layerGroup(baseProspects);
var golfProspectLayer = L.layerGroup(golfProspects);
var cateringProspectLayer = L.layerGroup(cateringProspects);


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
  "Hospital Prospects": hospitalProspectLayer,
  //"Bergen Hospital Prospects": bergenHospitalProspectLayer,
  "High School Prospects": highSchoolProspectLayer,
  "College Prospects": collegeProspectLayer,
  "Prospective Airports": airportProspectLayer,
  "Prospective Businesses": businessProspectLayer,
  "Slaymaker NJ": slaymakerProspectLayer,
  "Slaymaker PA": slaymakerPAProspectLayer,
  "Bergen Leads": bergenLeadProspectLayer,
  "Amusement Park": amusementProspectLayer,
  "Operations Base": baseProspectLayer,
  "Golf Leads": golfProspectLayer,
  "Catering Halls": cateringProspectLayer,
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
//var URL = "https://og-production-open-data-newarknj-892364687672.s3.amazonaws.com/resources/e801054d-2392-4413-af40-042e9bc986b9/njzctapolygon.geojson?Signature=7PeKiRxz%2BusYdOfPvAAJckAzRxs%3D&Expires=1549566824&AWSAccessKeyId=AKIAJJIENTAPKHZMIPXQ";

var URL = "/nj_new_jersey_zip_codes_geo.min.json";
// took out URL TWO because it made the whole map bog down, PA is big!
//var URLTwo = "/pa_pennsylvania_zip_codes_geo.min.json";

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


var zips = ["07502", "07631", "07503", "07640", "07504", "07641","07505", "07642", "07506", "07620", "07643", "07508", "07646", "07509", "07647", "07510", "07513", "07648", "07514", "07649", "07524", "07650", "07533", "07657", "07474", "07538", "07660", "07543", "07661", "07544", "07666", "07670", "07675", "07676", "07699", "07621", "07624", "07417", "07015", "07026", "07011", "07031", "07012", "07057", "07013", "07012", "07057", "07013", "07070", "07014", "07055", "07071", "07512", "07073", "07075", "07626", "07410", "07010", "07020", "07022", "07024", "07522", "07072", "07074", "07436", "07608", "07627", "07452", "07604", "07644", "07652", "07653", "07662", "07663", "07423", "07430", "07432", "07466", "07450", "07451", "07507", "07458", "07463", "07481", "07628", "07495", "07645", "07656", "07677", "07632", "07601", "07424", "07602", "07442", "07603", "07605", "07606", "07470", "07607", "07501", "07630", "07040", "07041", "07078", "07111", "07039", "07004", "07006", "07007", "07009", "07017", "07018", "07019", "07021", "07028", "07042", "07043", "07044", "07107", "07050", "07051", "07052", "07068", "07079", "07106", "07195", "07104", "07101", "07108", "07102", "07112", "07103", "07114", "07105", "07175", "07184", "07188", "07189", "07191", "07192", "07193", "07198", "07199", "07003", "07109", "07110", "07407", "07401", "07446"];

var slayZips = ["18963", "08809", "18925","18972","08822","08868","08825","18929","08826","08870","08827","19057","08829","08885","08833","18954","08887","08834","08888","08889","18956","18956","18968",'08848','08690','18966','18940','08858','18039','18974','18943','18077','18976','18081','18977','18930','18980','19007','18910','18991','08691','19020','18911','08867','18950','18914','18949','19021','08647','08525','18916','08530','08534','19030','08551','18901','18917','08556','08557','19047','08559','18921','18902','08560','08601','19048','08601','19048','08608','18923','08801','18912','08609','08610','18927','08611','08618','08625','19049','18913','08628','08629','18932','08638','08645','08646','18935','18920','08648','08666','18944','08695','19053','18926','07830','07831','18951','07979','08802','18928','19054','18931','18953','08650','18955','18933','08520','08540','08541','18934','18960','19055','08542','08803','08543','18922','08544','19056','18938','08550','18962','19058','08561','18942','08602','19067','08603','08604','18970','18946','08605','08606','08607','18947','18981','08619','08620','08804','18230','18232','18250','18254','18012','18030','18032','18037','18052','18065','18053','18059','18066','18069','18071','18078','18079','18080','18210','18212','18229','18235','18216','18240','18244','18255','18624','18001','18031','18046','18049','18051','18060','18062','18068','18087','18092','18098','18099','18101','18102','18103','18104','18105','18106','18017','18195','18018','18025','18034','18109','18036','18352','18353','18354','18335','18355','18356','18370','18372','18325','18341','18343','18344','18086','18038','18035','18058','18067','18088','18346','18330','18331','18333','18045','18610','18347','18348','18350','18323','18326','18342','18357','18466','18020','18055','18002','18063','18003','18064','18349','18014','18083','18015','18085','18016','18010','18017','18013','18360','18040','18050','18042','18072','18043','18091','18044','18301','18302','18320','18321','18322','18327','18332','18334','18351'];

var optionZips = ['08837','08818','08871','08840','08857','08859','08861','07001','08862','08872','08863','07008','08879','07064','08882','07067','08884','07077','08906','07080','07095','08989','08512','08536','08899','08810','08824','08828','08831','08830','08846','08850','07747','08852','08854','08855','08901','08902','08903','08904','08933','08820','08816','08817','08832','07715','08730','07717','07719','07720','08736','07723','08750','07753','07754','08526','07701','07756','08501','07762','07751','08720','07710','07799','07711','07799','07711','07718','07721','07702','07722','07726','07703','07727','07704','07728','07716','07730','07724','07731','07733','07732','07735','07734','07746','07737','07738','07739','07763','07740','07765','07748','08510','07750','07712','07752','07755','08514','07757','07758','08535','07760','08555','07764','07709'];

var dignamZips = ['08807','08821','07034','07076','08869','08876','08835','08844','08836','08805','08853','08812','07035','07081','08823','07405','07045','07083','08873','07046','07088','07005','08875','07062','07090','07054','08880','07016','07091','07058','08890','07023','07092','07082','07027','07857','07033','07856','07828','07060','07836','07061','07853','07063','07870','07438','07066','07801','07082','07901','07803','07902','07806','07922','07845','07974','07059','07847','07069','07849','07850','07852','07869','07876','07885','07926','07930','07945','07970','07834','07842','07866','07878','07927','07928','07932','07933','07935','07936','07940','07946','07950','07960','07961','07962','07963','07976','07980','07939','07981','07920','07999','07921','07440','07924','07440','07924','07444','07931','07457','07934','07938','07977','07978','08502','08504','08528','08553','08558'];

var mercerZips = ["08520", "08525", "08530", "08534", "08540", "08542", "08544", "08560", "08550", "08561", "08608", "08609", "08610", "08611", "08618", "08619", '08620', "08628", "08629", "08638", "08646", "08647", "08648", "08690", "08691"];
//NJ-01 and NJ-12 zipcodes

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



var geojson;
//tried d3.queue and that loads the first url, not second

d3.json(URL, function(data) {
  //d3.json(URLTwo, function(data) {

  //figure out how to load two json files but run 1 function try the link below to merge the json files
  //https://stackoverflow.com/questions/39056789/how-to-fetch-data-from-multiple-json-for-creating-a-barchart-using-d3-js

  geojson = L.choropleth(data, {

    //valueProperty: "GEOID10",//attempt  to make the zipcode choropleth with Newark OpenData, switch below to Geoid if switches back
    valueProperty: "ZCTA5CE10",
    // if (i == valueProperty) {
    //   color: "#ffffb2";
    // } else {
    //   color: "#b10026";
    // }
    
    scale: ["#eedfcc", "#eedfcc"],

    // Number of breaks in step range
    steps: 10,

    mode: "q",
    style: {
      //border color
      color: "#fff",
      weight: 1.5,
      fillOpacity: 0.6
    },

    onEachFeature: function(feature, layer) {
      var found = 0
      for(var x = 0; x<zips.length; x++){
        if(feature.properties.ZCTA5CE10 == zips[x]){
        found = 1
        break
        }
      }
        if(found == 1){
        layer.setStyle({fillColor:"#0000FF"})
      }
        for(var x = 0; x < slayZips.length; x++){
          if(feature.properties.ZCTA5CE10 == slayZips[x]){
            found = 2
            break
            }
          }
            if(found == 2){
            layer.setStyle({fillColor:"#008080"})
          }
          for(var x = 0; x < optionZips.length; x++){
            if(feature.properties.ZCTA5CE10 == optionZips[x]){
              found = 3
              break
              }
            }
              if(found == 3){
              layer.setStyle({fillColor:"#7fffd4"})
            }
            for(var x = 0; x < dignamZips.length; x++){
              if(feature.properties.ZCTA5CE10 == dignamZips[x]){
                found = 4
                break
                }
              }
                if(found == 4){
                layer.setStyle({fillColor:"#FF6347"})
              }
              for(var x = 0; x < mercerZips.length; x++){
                if(feature.properties.ZCTA5CE10 == mercerZips[x]){
                  found = 5
                  break
                  }
                }
                  if(found == 5){
                  layer.setStyle({fillColor:"#58D68D"})
                }
        

      layer.bindPopup("ZipCode:" + feature.properties.ZCTA5CE10);
    },
  }).addTo(myMap);
  //})
});
// removed because we are not making the choropleth on PA right now
// d3.json(URLTwo, function(data) {
//   //d3.json(URLTwo, function(data) {

//   //figure out how to load two json files but run 1 function try the link below to merge the json files
//   //https://stackoverflow.com/questions/39056789/how-to-fetch-data-from-multiple-json-for-creating-a-barchart-using-d3-js

//   geojson = L.choropleth(data, {

//     //valueProperty: "GEOID10",//attempt  to make the zipcode choropleth with Newark OpenData, switch below to Geoid if switches back
//     valueProperty: "ZCTA5CE10",
//     // if (i == valueProperty) {
//     //   color: "#ffffb2";
//     // } else {
//     //   color: "#b10026";
//     // }
    
//     scale: ["#eedfcc", "#eedfcc"],

//     // Number of breaks in step range
//     steps: 10,

//     mode: "q",
//     style: {
//       //border color
//       color: "#fff",
//       weight: 1.5,
//       fillOpacity: 0.6
//     },

//     onEachFeature: function(feature, layer) {
//       var found = 0
//       for(var x = 0; x<zips.length; x++){
//         if(feature.properties.ZCTA5CE10 == zips[x]){
//         found = 1
//         break
//         }
//       }
//         if(found == 1){
//         layer.setStyle({fillColor:"#0000FF"})
//       }
//         for(var x = 0; x < slayZips.length; x++){
//           if(feature.properties.ZCTA5CE10 == slayZips[x]){
//             found = 2
//             break
//             }
//           }
//             if(found == 2){
//             layer.setStyle({fillColor:"#008080"})
//           }
//           for(var x = 0; x < optionZips.length; x++){
//             if(feature.properties.ZCTA5CE10 == optionZips[x]){
//               found = 3
//               break
//               }
//             }
//               if(found == 3){
//               layer.setStyle({fillColor:"#7fffd4"})
//             }
//             for(var x = 0; x < dignamZips.length; x++){
//               if(feature.properties.ZCTA5CE10 == dignamZips[x]){
//                 found = 4
//                 break
//                 }
//               }
//                 if(found == 4){
//                 layer.setStyle({fillColor:"#FF6347"})
//               }
        

//       layer.bindPopup("ZipCode:" + feature.properties.ZCTA5CE10);
//     },
//   }).addTo(myMap);
//   //})
// });
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


