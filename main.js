let fs = require('fs');

fs.readFile("./wortliste.txt", "utf8", (err, data) => {
	let regex = new RegExp(`${process.argv[2]}`, 'i');
	let woerter = data.split("\n");
	let count = 0;
	woerter.forEach( (wort) => {
		if(wort.match(regex) != null){
			console.log(wort);
			count++;
		}
	});
	console.log(count+"wörter gefunden");
});
