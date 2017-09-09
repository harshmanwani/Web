var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var totolChances = document.querySelector("#chances");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var numInput = document.querySelector("input");
var winningScore;
var resetGame = document.querySelector("#reset");
var winnerUpdate = document.querySelector(".wins");
// change event looks for the change in the value 
numInput.addEventListener("change" , function(){
	totolChances.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});



p1Button.addEventListener('click' ,function(){
	if(!gameOver){
	p1Score++;
		if(p1Score === winningScore){
			document.querySelector("#player1").classList.add("winner");
			gameOver = true;
			winnerUpdate.textContent = "Player 1 Wins";
	}	
	document.querySelector("#player1").textContent = p1Score;
			
	}
});

p2Button.addEventListener('click' ,function(){
	if(!gameOver){
	p2Score++;
		if(p2Score === winningScore){
			document.querySelector("#player2").classList.add("winner");
			gameOver = true;
			winnerUpdate.textContent = "Player 2 Wins";
	}	
	document.querySelector("#player2").textContent = p2Score;
		
	}
});


resetGame.addEventListener('click', function(){
	reset();
});

function reset(){
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	document.querySelector("#player1").textContent = p1Score;
	document.querySelector("#player2").textContent = p1Score;
	document.querySelector("#player1").classList.remove("winner");
	document.querySelector("#player2").classList.remove("winner");
	winnerUpdate.textContent = "";
}

 
