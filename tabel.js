//Var Arrays -----------------------------------------------------------
var month = ["Alderaan", "Yavin IV", "Hoth", "Dagobah", "Bespin", "Endor", "Naboo", "Coruscant", "Kamino", "Geonosis"];
var rotation = ["24", "24", "23", "23", "12", "18", "26", "24", "27 ", "30"];
var orbital = ["364", "4818", "549", "341", "5110", "402", "312", "368", "463", "256"];
var diameter = ["12500", "10200", "7200", "8900", "118000", "4900", "12120", "12240", "19720", "11370"];
var climate = ["temperate", "temperate, tropical", "frozen", "murky", "temperate", "temperate", "temperate", "temperate", "temperate", "temperate, arid"];
var gravity = ["1 standard", "1 standard", "1,1 standard", "N/A", "1.5 (surface), 1 standard (Cloud City)", "0.85 standard", "1 standard", "1 standard", "1 standard", "0,9 standard"];
var terrain = ["grasslands, mountains", "jungle, rainforests", "tundra, ice caves, mountain ranges", "swamp, jungles", "gas giant", "forests, mountains, lakes", "grassy hills, swamps, forests, mountains", "cityscape, mountains", "ocean", "rock, desert, mountain, barren, arid"];
var surface = ["40", "8", "100", "8", "0", "8", "12", "unknown", "100", "5"];
var population = ["2000000000", "1000", "unknown", "unknown", "6000000", "30000000", "4500000000", "1000000000000", "1000000000", "100000000000,"];
var residents = ["https://swapi.co/api/people/5/ , https://swapi.co/api/people/68/, https://swapi.co/api/people/81/",
    "[]",
    "[]",
    "[]",
    "https://swapi.co/api/people/26/",
    "https://swapi.co/api/people/30/",
    "https://swapi.co/api/people/3/ , https://swapi.co/api/people/21/ , https://swapi.co/api/people/36/ , https://swapi.co/api/people/37/ , https://swapi.co/api/people/38/ , https://swapi.co/api/people/39/ , https://swapi.co/api/people/42/ , https://swapi.co/api/people/60/ , https://swapi.co/api/people/61/ , https://swapi.co/api/people/66/ , https://swapi.co/api/people/35/",
    "https://swapi.co/api/people/34/ , https://swapi.co/api/people/55/ , https://swapi.co/api/people/74/",
    "https://swapi.co/api/people/22/ , https://swapi.co/api/people/72/ , https://swapi.co/api/people/73/",
    "https://swapi.co/api/people/63/"
];
var film = ["https://swapi.co/api/films/6/ , https://swapi.co/api/films/1/",
    "https://swapi.co/api/films/1/",
    "https://swapi.co/api/films/2/",
    "https://swapi.co/api/films/2/ , https://swapi.co/api/films/6/ , https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/2/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/5/ , https://swapi.co/api/films/4/ , https://swapi.co/api/films/6/ , https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/5/ , https://swapi.co/api/films/4/ , https://swapi.co/api/films/6/ , https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/5/",
    "https://swapi.co/api/films/5/"
];
var created = ["2014-12-10T11:35:48.479000Z", "2014-12-10T11:37:19.144000Z", "2014-12-10T11:39:13.934000Z", "2014-12-10T11:42:22.590000Z", "2014-12-10T11:43:55.240000Z", "2014-12-10T11:50:29.349000Z", "2014-12-10T11:52:31.066000Z", "2014-12-10T11:54:13.921000Z", "2014-12-10T12:45:06.577000Z", "2014-12-10T12:47:22.350000Z", "5"];
var edited = ["2014-12-20T20:58:18.420000Z", "2014-12-20T20:58:18.421000Z", "2014-12-20T20:58:18.423000Z", "2014-12-20T20:58:18.425000Z", "2014-12-20T20:58:18.427000Z", "2014-12-20T20:58:18.429000Z", "2014-12-20T20:58:18.430000Z", "2014-12-20T20:58:18.432000Z", "2014-12-20T20:58:18.434000Z", "2014-12-20T20:58:18.437000Z", "5"];
var url = ["https://swapi.co/api/planets/2/", "https://swapi.co/api/planets/3/", "https://swapi.co/api/planets/4/", "https://swapi.co/api/planets/5/", "https://swapi.co/api/planets/6/", "https://swapi.co/api/planets/7/", "https://swapi.co/api/planets/8/", "https://swapi.co/api/planets/9/", "https://swapi.co/api/planets/10/", "https://swapi.co/api/planets/11/"];


//Static content ---------------------------------------------------------


//Dynamic content --------------------------------------------------------
for (var i = 0; i < 10; i++) {
    document.write("<tr><td>" + (i + 1) + "</td><td>" + month[i] + "</td><td>" + rotation[i] + "</td><td>" + orbital[i] + "</td><td>" + diameter[i] + "</td><td>" + climate[i] + "</td><td>" + gravity[i] + "</td><td>" + terrain[i] + "</td><td>" + surface[i] + "</td><td>" + population[i] + "</td><td>" + residents[i] + "</td><td>" + film[i] + "</td><td>" + created[i] + "</td><td>" + edited[i] + "</td><td>" + url[i] + "</td></tr>");
}

//Static content  --------------------------------------------------------
document.write("</table>")