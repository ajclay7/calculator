const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

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
	}
};

const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const display = document.getElementById('display');
let displayValue = [];
let selectedOperator = '';
let a = 0;
let b = 0;

const updateDisplay = (display, displayValue) => {
	display.innerHTML = Number(displayValue.join(''));
};

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', () => {
		console.log('Number:', event.target.innerHTML);
		displayValue.push(event.target.innerHTML);
		updateDisplay(display, displayValue);
	});
}

for (let i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', () => {
		console.log('Operator:', event.target.innerHTML);
	});
}
