var squares = document.querySelectorAll(".square");
var numSquares = 12;

var boxes =  document.querySelectorAll(".square");


var colors = generateRandomColors(numSquares);

for(var i = 0 ; i < squares.length; i++){
	// add initial colors to the squares
	squares[i].style.background  = colors[i];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0 ; i<num; i++){
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){

	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
