var avengersMovie = {
	name: "Avengers",
	runtime: 143,
	releaseYear: 2012,
	director: "Joss Whedon"
};

var string = "";
for (prop in avengersMovie) {
	string += prop + ": " + avengersMovie[prop] + " \n";
}

debug(string);