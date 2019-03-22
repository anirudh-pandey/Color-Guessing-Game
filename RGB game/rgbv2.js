var randomColor, condition = "easy";
var somethingRandom = [];
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");





easy.addEventListener("click", function() {
	this.classList.add("easy-hard");

	randomColor = somethingRandom[Math.floor( Math.random() * somethingRandom.length)]; 

	for (var i = 0; i < listOfSquares.length; i++) {
		listOfSquares[i].style.background = somethingRandom[i];
	}

	function convertAllSquaresToSameColor(randomColor) {
		audio.play();
		for (var i = 0; i < listOfSquares.length; i++) {
			listOfSquares[i].style.background = randomColor;
			listOfSquares[i].classList.remove("erase-square");
		}
	}

	square1.addEventListener("click", function() {
		if(square1.style.backgroundColor == randomColor) {
			convertAllSquaresToSameColor(randomColor);
		} else {
			this.classList.add("erase-square");
		}
	})
	square2.addEventListener("click", function() {
		if(square2.style.backgroundColor == randomColor) {
			convertAllSquaresToSameColor(randomColor);
		} else {
			this.classList.add("erase-square");
		}
	})
	square3.addEventListener("click", function() {
		if(square3.style.backgroundColor == randomColor) {
			convertAllSquaresToSameColor(randomColor);
		} else {
			this.classList.add("erase-square");
		}
	})
	square4.addEventListener("click", function() {
		if(square4.style.backgroundColor == randomColor) {
			convertAllSquaresToSameColor(randomColor);
		} else {
			this.classList.add("erase-square");
		}
	})
	square5.addEventListener("click", function() {
		if(square5.style.backgroundColor == randomColor) {
			convertAllSquaresToSameColor(randomColor);
		} else {
			this.classList.add("erase-square");
		}
	})
	square6.addEventListener("click", function() {
		if(this.style.backgroundColor == randomColor) {
			convertAllSquaresToSameColor(randomColor);
		} else {
			this.classList.add("erase-square");
		}
	})

	
	hard.classList.remove("easy-hard");
})





hard.addEventListener("click", function() {
	this.classList.add("easy-hard");

	randomColor = somethingRandom[Math.floor( Math.random() * somethingRandom.length - 3)];

	for (var i = 0; i < listOfSquares.length - 3; i++) {
		listOfSquares[i].style.background = somethingRandom[i];
	}

	function convertAllSquaresToSameColor(randomColor) {
		audio.play();
		for (var i = 0; i < listOfSquares.length - 3; i++) {
			listOfSquares[i].style.background = randomColor;
			listOfSquares[i].classList.remove("erase-square");
		}
	}	

	square1.addEventListener("click", function() {
		if(square1.style.backgroundColor == randomColor) {
			convertAllSquaresToSameColor(randomColor);
		} else {
			this.classList.add("erase-square");
		}
	})
	square2.addEventListener("click", function() {
		if(square2.style.backgroundColor == randomColor) {
			convertAllSquaresToSameColor(randomColor);
		} else {
			this.classList.add("erase-square");
		}
	})
	square3.addEventListener("click", function() {
		if(square3.style.backgroundColor == randomColor) {
			convertAllSquaresToSameColor(randomColor);
		} else {
			this.classList.add("erase-square");
		}
	})


	easy.classList.remove("easy-hard");
	for(i=3; i<6; i++) {
		listOfSquares[i].classList.add("erase-square");
	}

})

var newColors = document.getElementById("new-colors");
newColors.addEventListener("click", function() {
	window.location.reload();
})

function randomColorGenerator() {
	for (var i = 0; i < 6; i++) {
		somethingRandom.push("rgb(" + (Math.floor(Math.random() * 256)) + ", "
	 + (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ")"); 
	} 
	return somethingRandom;
}
var ran = document.getElementById("random-color");
var audio = new Audio("tada.mp3");


var square1 = document.getElementById("square1"); 
var square2 = document.getElementById("square2"); 
var square3 = document.getElementById("square3"); 
var square4 = document.getElementById("square4"); 
var square5 = document.getElementById("square5"); 
var square6 = document.getElementById("square6"); 
var listOfSquares = [square1, square2, square3, square4, square5, square6];

ran.textContent = randomColor;