let num1 = prompt("Enter first number: ");  //To take input from user
let num2 = prompt("Enter second Number: "); //To take input from user

    num1 = parseInt(num1); // To convert string to integer
    num2 = parseInt(num2); // To convert string to integer

let result;

result = num1 + num2; // calculation for addition
console.log(num1 + " + " + num2 + " = " + result);

result = num1 - num2; // calculation for Subtraction
console.log(num1 + " - " + num2 + " = " + result);

result = num1 * num2; // calculation for Multiplication
console.log(num1 + " * " + num2 + " = " + result);

result = num1 / num2; // calculation for Divition
console.log(num1 + " / " + num2 + " = " + result);

result = num1 % num2; // calculation for Moduls
console.log(num1 + " % " + num2 + " = " + result);
