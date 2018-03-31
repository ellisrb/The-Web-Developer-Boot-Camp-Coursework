var numSquares = 6;
var colours = [];
var pickedColour = pickColour();
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
displayMessage = document.querySelector("#message");
colourDisplay.textContent = pickedColour;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	addSquareListeners();
	reset();
}

function setupModeButtons() {
	for(let i = 0; i < modeButtons.length;i++){
		
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent ==="Easy" ? numSquares = 3: numSquares =6;
			// if(this.textContent === "Easy"){
			// 	numSquares=3;
			// }else if(this.textContent === "Hard"){
			// 	numSquares=6;
			// }
			reset();
		});
	};
};
function addSquareListeners() {
	for(let i = 0; i < squares.length; i++){
			
			// get the colour of the one that had been clicked
			squares[i].addEventListener("click", function(){
				var clickedColour = this.style.backgroundColor;

				if(clickedColour === pickedColour){
					displayMessage.textContent = "Correct!"
					resetButton.textContent = "Play again?"
					changeColours(clickedColour);
				}else{
					this.style.backgroundColor = "#232323"
					displayMessage.textContent = "Try again!"
			}
		});
	}
}

		// easyBtn.addEventListener("click", function(){
		// 	hardBtn.classList.remove("selected");
		// 	easyBtn.classList.add("selected");
		// 	numSquares = 3;
		// 	colours = generateRandomColors(numSquares);
		// 	pickedColour = pickColour();
		// 	colourDisplay.textContent = pickedColour;

		// 	for(let i = 0; i < squares.length; i++){
		// 		if(colours[i]){
		// 			squares[i].style.backgroundColor = colours[i];
		// 			}else {
		// 				squares[i].style.display = "none";
		// 		} 
		// 	}
		// 	h1.style.backgroundColor = "steelBlue";
		// 	displayMessage.textContent = "";
		// });

		// hardBtn.addEventListener("click", function(){
		// 	easyBtn.classList.remove("selected");
		// 	hardBtn.classList.add("selected");
		// 	numSquares = 6;
		// 	colours = generateRandomColors(numSquares);
		// 	pickedColour = pickColour();
		// 	colourDisplay.textContent = pickedColour;


		// 	for(let i = 0; i < squares.length; i++){
		// 		squares[i].style.backgroundColor = colours[i];
		// 		squares[i].style.display = "block";
		// 	}
		// 	h1.style.backgroundColor = "steelBlue";
		// 	displayMessage.textContent = "";
		// });

		//Main for satement to prepare squares
		
		function reset() {
			//generate all new colours
			colours = generateRandomColors(numSquares);
			//pick new random colours from array
			pickedColour = pickColour();
			// change colour display to match picked colour
			colourDisplay.textContent = pickedColour;
			//change the colours one of the squares
			for(let i = 0; i < squares.length; i++){
				if(colours[i]){
					squares[i].style.display = "block";
					squares[i].style.backgroundColor = colours[i];
				}else{
					squares[i].style.display = "none";
				}
			}
			resetButton.textContent = "Reset";
			h1.style.backgroundColor = "steelBlue";
			displayMessage.textContent = "";
		}

		resetButton.addEventListener("click", function(){
				reset();
		});	

function changeColours(colorString){
	//loop through all squares
	for(let i = 0; i < squares.length; i++){
	//change each colour to match
	squares[i].style.backgroundColor = colorString;
	h1.style.backgroundColor = colorString;
}}

function pickColour(){
	
	let random = Math.floor((Math.random() * colours.length));
	return colours[random];
}

function generateRandomColors(num_squares){
	//make an array
	let colorArray = [];
	//add num random colours to the array
	for(let i=0; i < num_squares; i++){
		//get random colour and push it into the array
		colorArray.push(randomColor());
	}
	//return that array
	return colorArray;
}
	//generate the random colour numbers
function randomColor(){
	let r = rand255();
	let g = rand255();
	let b = rand255();

	//make the colour:
	var color = "rgb(" + r + ", " + g + ", " + b + ")";

	return color;
}

function rand255() {
	var num = Math.floor(Math.random() * 256);
	return num;
}