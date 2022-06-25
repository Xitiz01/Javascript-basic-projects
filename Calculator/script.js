// A simple script to develop a simple calculator using javascript
// A simple script to develop a simple calculator using javascript without a proper gui 



var operator = prompt("Enter an operator: +, -, *, /");
// to get the operator from the user

var num1 = parseFloat(prompt("Enter the first number: "));
// to get the first number from the user

var num2 = parseFloat(prompt("Enter the second number: "));
// to get the second number from the user


if (operator === "+") {
    alert(num1 + num2);
}
// to add the two numbers if the operator is +

else if (operator === "-") {
    alert(num1 - num2);
}
// to subtract the two numbers if the operator is -

else if (operator === "*") {
    alert(num1 * num2);
}
// to multiply the two numbers if the operator is *

else if (operator === "/") {
    alert(num1 / num2);
}
// to divide the two numbers if the operator is /

else {
    alert("Invalid operator");
}
// to show an error if the operator is invalid

// console log("The result is: " + result);