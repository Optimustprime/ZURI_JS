// JavaScript source code
const operator = prompt('Enter the operator for the calculation you want to perform ( either +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter the first number: '));
const number2 = parseFloat(prompt('Enter the second number: '));

let result; 

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '/') {
    result = number1 / number2;
}
else {
    result=("Pls Enter An Operator")
}
alert("Answer Equals"+" " + result);