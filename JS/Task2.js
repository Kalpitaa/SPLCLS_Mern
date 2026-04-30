//29-04-2026
//Task 2: 
// Check whether a given number is even or odd.
// Check whether a number is positive, negative, or zero.
// Find the greater number between two values.
// Check if a person is eligible to vote (age ≥ 18 and has ID).
// Build a simple calculator using two numbers and an operator (+, -, *, /).
// Print numbers from 1 to 10 using a for loop.
// Print all even numbers from 1 to 20.
// Find the sum of numbers from 1 to N.
// Print the multiplication table of a given number.
// Find the largest among three numbers.

//1.
function EvenOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

EvenOdd(7);

//2.
function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

checkNumber(-5);

//3.
function findGreater(a, b) {
  if (a > b) {
    console.log(a + " is greater");
  } else if (b > a) {
    console.log(b + " is greater");
  } else {
    console.log("Both are equal");
  }
}

findGreater(10, 20);

//4.
function checkVotingEligibility(age,hasID){
    if(age >=18 && hasID){
        console.log("Eligible to vote");
    }else{
        console.log("Not eligible to vote");
    }
}
checkVotingEligibility(20,true);

//5.
function calculator(a, b, operator) {
  if (operator === "+") {
    console.log(a + b);
  } else if (operator === "-") {
    console.log(a - b);
  } else if (operator === "*") {
    console.log(a * b);
  } else if (operator === "/") {
    console.log(a / b);
  } else {
    console.log("Invalid operator");
  }
}

calculator(10, 5, "+");

//6.
for(let i =0; i<=10; i++){
    console.log(i);
}

//7.
for(let i =1; i<=20; i++){
    if(i%2===0){
        console.log(i);
    }
}

//8.
function sumN(n){
    let sum = 0;
    for(let i= 1; i<=n; i++){
        sum+=i;
    }
    console.log("Sum:", sum);
}
sumN(5);

//9.
function table(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
  }
}

table(5);

//10.
function largest(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a + " is largest");
  } else if (b >= a && b >= c) {
    console.log(b + " is largest");
  } else {
    console.log(c + " is largest");
  }
}

largest(10, 25, 15);

