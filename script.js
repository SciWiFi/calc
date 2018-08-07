var input = "";
var inputShow = "";
var answer = "";
var inputText = document.querySelector("#input");
var answerText = document.querySelector("#answer");
var op = "";
var x = 0;
var y = 0;
var tmpY = "";

function operate(op, x, y) {
    switch(op) {
        case "plus": return x + y;
            break;
        case "minus": return x - y;
            break;
        case "mult": return x * y;
            break;
        case "div": return x / y;
            break;
    }
}
const buttons = document.querySelectorAll("button");
initButtons();

function initButtons() {
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", inputFunction);
	}
}

function inputFunction() {
	if(this.className == "op") {
		x = parseInt(input);
		if(this.id == "Plus") {
			input += "+";
			inputShow += " + ";
		}
		else if(this.id == "Minus") {
			input += "-";
			inputShow += " - ";
		}
		else if(this.id == "Mult") {
			input += "*";
			inputShow += " * ";
		}
		op = this.id.toLowerCase();
	}
	else if(this.id == "equals") {
		y = parseInt(tmpY);
		answer = operate(op, x, y);
		console.log("op " + op + " x " + x + " y " + y);
		answerText.innerHTML = answer;
		op = "";
	}
	if(this.className == "num") {
		input += this.id;
		inputShow += this.id;
		if(op != "") {
			tmpY += this.id;
		}
	}
	if(this.id == "clear") {
		op = "";
		inputShow = "";
		input = "";
		x = 0;
		y = 0;
		tmpY = "";
		answerText.innerHTML = "";
	}

	console.log("You clicked " + this.id);
	updateInput();
}

	//buttons.forEach(function(e) {
		//document.addEventListener("click", f(e));
		//console.log(e);
	//});

function f(e) {
			console.log(e.id === "op");
			alert(e.id);
			if(e.id === "op") {
				console.log(e.id);
			}
		}

function updateInput() {
	inputText.innerHTML = inputShow;
	//console.log(e);
}