/*
 * buffer-peek-poke-test.js
 * replace random segments of a stereo buffer 
 * with segments of another buffer/Dirac deltas
 */

var vocalSwell = new Buffer("vocalSwell");
var toPeek = new Buffer("toPeek");
var fileStorage = new Buffer("fileStorage");
//var insertLength = 1; // don't remember what this did
var numLoops = 13;
var insertMin = 750;
var insertRange = 2250;

// on receiving message "params x y z", set variables, rerun interlace
function params(x, y, z)
{
	numLoops = x;
	insertMin = y;
	insertRange = z;
	interlace();
}

// on receiving msg "interlace", perform function
function interlace()
{
	// send the message "duplicate fileStorage" to the buffer with the scripting name "vocalSwell"
	messnamed("vocalSwell", "duplicate", "fileStorage");
	// insert a 220ms segment of "toPeek" into "vocalSwell" starting at a random frame
	for(var i = 0; i <= numLoops; i++) {
		vocalSwell.poke(1,
				Math.floor(Math.random() * 264600), //insert at random place before 6000ms
				toPeek.peek(1, Math.floor(Math.random()*toPeek.framecount()), Math.floor(Math.random()*insertRange+insertMin)));
	
		vocalSwell.poke(2,
				Math.floor(Math.random() * 264600), //insert at random place before 6000ms
				toPeek.peek(1, Math.floor(Math.random()*toPeek.framecount()), Math.floor(Math.random()*insertRange+insertMin)));
	}
	// different random no. of loops
	var numDirac = Math.floor(Math.random() * 5 + 2);
	// insert a random amp Dirac delta into "vocalSwell" at a random frame
	for(var i = 0; i <= numDirac; i++) {
		vocalSwell.poke(1, 
				Math.floor(Math.random() * 264600), //insert at random place before 6000ms
				Math.random()*0.5);
	
		vocalSwell.poke(2, 
				Math.floor(Math.random() * 264600), //insert at random place before 6000ms
				Math.random()*0.5);
	}
}