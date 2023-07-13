const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const display = document.getElementById('display');
const equals = document.getElementById('=');
let displayValue = [];
let selectedOperator = '';
let a = null;
let b = null;
let answer = null;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulo = (a, b) => a % b;

const operate = (operator, a, b) => {
	switch (operator) {
		case '+':
			return add(a, b);
		case '-':
			return subtract(a, b);
		case '*':
			return multiply(a, b);
		case '/':
			return divide(a, b);
		case '%':
			return modulo(a, b);
	}
};

const updateDisplay = (display, displayValue) => {
	display.innerHTML = Number(displayValue.join(''));
};

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', () => {
		// console.log('Number:', event.target.innerHTML);
		displayValue.push(event.target.innerHTML);
		updateDisplay(display, displayValue);
	});
}

for (let i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', () => {
		// console.log('Operator:', event.target.innerHTML);
		a = Number(displayValue.join(''));
		selectedOperator = event.target.innerHTML;
		// console.log('A', a);
		displayValue = [];
		updateDisplay(display, displayValue);
	});
}

equals.addEventListener('click', () => {
	b = Number(displayValue.join(''));
	
	displayValue = [];
	updateDisplay(display, displayValue);
	
	answer = operate(selectedOperator, a, b);
	displayValue.push(answer);
	updateDisplay(display, displayValue);
});

// input numbers
// press operator
// capture current number
