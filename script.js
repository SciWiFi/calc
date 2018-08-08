var input = "";
var equalsPressed = false;
var x = "";
var y = "";
var inputText = document.querySelector("#input");
var answerText = document.querySelector("#answer");
var op = "";
var answer = "";
const buttons = document.querySelectorAll("button");
initButtons();

function initButtons() {
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", inputFunction);
	}
}

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

function inputFunction() {
	if(equalsPressed) {
		input = x + "";
		equalsPressed = false;
	}
	if(this.className == "op") {
		if(input == "" && op == "") {
			answer = "not a valid input1";
		}
		else {
			if(op == "") {
				x = parseInt(input);
				op = this.id.toLowerCase();
			}
			else {
				calcResult();
				x = answer;
				y = "";
				input = answer;
				answer = "";
				op = this.id.toLowerCase();
			}
			if(this.id == "Plus") {
				input += " + ";
			}
			else if(this.id == "Minus") {
				input += " - ";
			}
			else if(this.id == "Mult") {
				input += " * ";
			}
			else if(this.id == 	"Div") {
				input += " / ";
			}
		}
	}
	else if(this.id == "equals") {
		calcResult();
		equalsPressed = true;
	}
	else if(this.className == "num") {
		input += this.id;
		if(op != "") {
			y += this.id;
		}
	}
	else if(this.id == "clear") {
		op = "";
		input = "";
		answer = "";
		x = "";
		y = "";
	}
	updateInput();
	updateAnswer();
}

function calcResult() {
	if(y == "" || op == "") {
		answer = "not a valid input";
		console.log("x " + (x == "") + " y " + (y == "") + " op " + (op == ""));
	}
	else {
		answer = operate(op, parseInt(x), parseInt(y));
		op = "";
		x = answer + "";
		console.log("x equals " + x);
		y = "";
	}
}

function updateInput() {
	inputText.innerHTML = input;
}

function updateAnswer() {
	answerText.innerHTML = answer;
}