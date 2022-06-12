/*
* make a markov chain using transition table stored in a dict object
* transition table keys and values are in format "p_d"
* where p represents a pitch and d a duration
*/

outlets = 2;

var transitions = new Dict("markov");
var prevKey = "0_3";
// regular expression: 1 or more digits_1 or more digits; pass digits
var pitchDurParse = /(\d+)_(\d+)/;

// reset or change starting value
function setStart(key) {
	prevKey = key;
}

// output chain steps, calculate next
function step() {
	// regexp to separate pitch/dur
	// output either starting value or current step 
	// (before new value); ignore key @ [0]
	outlet(0, parseInt(pitchDurParse.exec(prevKey)[1])); // pitch out outlet 0
	outlet(1, parseInt(pitchDurParse.exec(prevKey)[2])); // dur out outlet 1
	// randomly select array element at prev note's key
	// array length must be >= 2 or returns char count, not array length: why?
	var index = Math.floor(Math.random() * (transitions.get(prevKey).length));
	// get array of values at prev note's key
	var options = transitions.get(prevKey);
	// get value at random index as next output
	// (to be output on next step)
	prevKey = (options[index]);
}

// post dict info to console
function getInfo() {
	// report dict's name/available keys to console 
	post((transitions.name), (transitions.getkeys()));
}