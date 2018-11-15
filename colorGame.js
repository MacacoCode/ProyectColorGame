var numSquares = 9;
var colors = generateC(numSquares);
var squares = document.querySelectorAll(".square");
var colorD = document.getElementById("colorD");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetB = document.querySelector("#reset");
var pickedC = pickedF();
var easy = document.querySelector("#easy");
var normal = document.querySelector("#normal");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	normal.classList.remove("selected");
	hard.classList.remove("selected");
	numSquares = 3;
	colors = generateC(numSquares);
	pickedC = pickedF();
	colorD.textContent = pickedC;
	squaresDisplay();
})
normal.addEventListener("click", function(){
	easy.classList.remove("selected");
	normal.classList.add("selected");
	hard.classList.remove("selected");
	numSquares = 6;
	colors = generateC(numSquares);
	pickedC = pickedF();
	colorD.textContent = pickedC;
	squaresDisplay();
})
hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	normal.classList.remove("selected");
	hard.classList.add("selected");
	numSquares = 9;
	colors = generateC(numSquares);
	pickedC = pickedF();
	colorD.textContent = pickedC;
	squaresDisplay();
})

resetB.addEventListener("click", function(){
	resetB.textContent = "New Colors";
	//generate all new colors
	colors = generateC(numSquares);
	//pick new random colors
	pickedC = pickedF();
	//change color to match
	colorD.textContent = pickedC;
	//change colors squares
	squaresColor();
	//reset h1
	message.textContent= "";
	colorD.style.color = "white";
})

colorD.textContent = pickedC;
squaresColor();


function squaresDisplay(){
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
		message.textContent= "";
		colorD.style.color = "white";
	}
}
function squaresColor(){

	for (var i = 0; i < squares.length; i++) {
	//add initial colors
	squares[i].style.backgroundColor = colors[i];
	//hover the squares when mouse on
	squares[i].addEventListener("mouseover", function(){
		this.classList.add("squareHover");
	});
	squares[i].addEventListener("mouseout", function(){
		this.classList.remove("squareHover");
	});
	//add events to squares
	squares[i].addEventListener("click", function(){
		//grab color and compare them
		var clickedC = this.style.backgroundColor;
		if(clickedC === pickedC){
			for (var c = 0; c < squares.length; c++) {
				squares[c].style.backgroundColor = pickedC;
			}
			resetB.textContent = "Play Again?";
			message.textContent = "Correct!";
			colorD.style.color = pickedC;
		}else{
			this.style.backgroundColor = "#232323";
			resetB.textContent = "Reset";
			message.textContent = "Try Again";
		}
	});
	}
}


function pickedF(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateC(num){
	//array
	var arr = [];
	//add num random colors
	for (var i = 0; i <num; i++) {
		//get random colors
		arr[i] = randomColor();
	}
	//return array
	return arr;
}
function randomColor(){
	//pick from each RGB
	var R = Math.floor(Math.random() * 256);
	var G = Math.floor(Math.random() * 256);
	var B = Math.floor(Math.random() * 256);
	return "rgb("+ R + ", " + G + ", " + B +")";

}