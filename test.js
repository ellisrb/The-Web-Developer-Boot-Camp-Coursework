
var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function(){
// 	if(isPurple == false){
// 		body.style.background = "purple";
// 	}else{
// 		body.style.background = "white";
// 	}
// 	isPurple = !isPurple;
// });

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});