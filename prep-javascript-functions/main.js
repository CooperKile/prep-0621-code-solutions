function addTwoNumbers(x, y) {
  return x + y;
}
var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'hello ' + name;
}
var greeting = getGreeting('world');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var answer1 = addAndMultiplyBy5(10, 5);
console.log(answer1);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var answer2 = multiplyAndDivideBy5(15, 20);
console.log(answer2);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var difference = subtractTwoNumbers(100, 50);
console.log(difference);

function getCircleCircumference(radius) {
  return radius * Math.PI * 2;
}
var circumference = getCircleCircumference(9);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var fullName = getFullName('Cooper ', 'Kile');
console.log(fullName);

function cube(number) {
  return Math.pow(number, 3);
}
var cubed = cube(6);
console.log(cubed);
