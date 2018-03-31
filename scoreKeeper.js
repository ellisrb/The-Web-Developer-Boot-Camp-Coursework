//P1
var p1 = document.getElementById("p1");
var p1Score = 0;
var p1Display = document.getElementById("playerOne");

//P2
var p2Display = document.getElementById("playerTwo");
var p2 = document.getElementById("p2");
var p2Score = 0;

var num_input = document.querySelector("input");
var winning_display = document.querySelector("#top_score");

var gameOver = false;
var winningScore;


	


p1.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score == winningScore){
			p1Display.classList.add("winner");
		gameOver = true;	
	}
	p1Display.textContent = p1Score;
	}
});
p2.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score == winningScore){
			p2Display.classList.add("winner");
		gameOver = true;	
	}
	p2Display.textContent = p2Score;
}
});
reset.addEventListener("click", function(){
	p1Score = 0;
	p1Display.textContent = p1Score;
	p2Score = 0;
	p2Display.textContent = p2Score;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
});

num_input.addEventListener("change", function() {
	winningScore = num_input.value;
	winning_display.textContent = winningScore;
});