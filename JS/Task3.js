//05-05-26
// 10 INTERVIEW TASKS (Operators + Conditions + Loop)
// Check whether a number is even or odd without using % operator.
// Reverse a number
// 👉 Input: 1234 → Output: 4321
// Count digits in a number
// 👉 Input: 56789 → Output: 5
// Find sum of digits
// 👉 Input: 123 → Output: 6
// Check whether a number is palindrome
// 👉 Input: 121 → Output: true
// Print numbers from 1 to 50
// 👉 Print only numbers divisible by 3 and 5
// Find largest among 3 numbers without using Math.max()
// Print factorial of a number
// 👉 Input: 5 → Output: 120
// Check whether a number is prime
// Swap two numbers without using third variable

//1.
function checkEvenOdd(n){
    if(parseInt(n/2)===n/2){
        console.log("Even");

    }else{
        console.log("Odd");
    }
}
checkEvenOdd(5);

//2.
function reverseNumber(n){
    let rev=0;
    while(n>0){
        rev=rev*10+n%10;
        n=parseInt(n/10);
    }
    console.log(rev);
}
reverseNumber(1234);

//3.
function countDigits(n){
    let count =0;
    while(n>0){
        count++;
        n=parseInt(n/10);
        
    }
    console.log(count);
}
countDigits(56789);


//4.
function sumOfDigits(n){
    let sum =0;
    while(n>0){
        sum+=n%10;
        n=parseInt(n/10);
    }
    console.log(sum);
}
sumOfDigits(123);

//5.
function checkPalindrome(n){
    let rev=0;
    let temp=n;
    while(n>0){
        rev=rev*10+n%10;
        n=parseInt(n/10);
    }
    if(rev===temp){
        console.log(true);
    }else{
        console.log(false);
    }
}
checkPalindrome(121);

//6.
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

//7.
function largest(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a);
  } else if (b >= a && b >= c) {
    console.log(b);
  } else {
    console.log(c);
  }
}

largest(10, 25, 15);

//8.
function factorial(n) {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  console.log(fact);
}

factorial(5);


//9.
function checkPrime(n){
    if(n<=1){
        console.log(false);
    }else{
        console.log(true);
    }
}
checkPrime(7);

//10.
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);

//PATTERN TASKS
//1.
for (let i = 1; i <= 5; i++) {
  console.log("*");
}

//2.
for(let i =1; i<=5; i++){
    let row="";
    for(let j=1; j<=i;j++){
        row+="*";
    }
    console.log(row);
}

//3.
for(let i =5; i>=1; i--){
    let row="";
    for(let j=1; j<=i;j++){
        row+="*";
    }
    console.log(row);
}

//4.
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}

//5.
for (let i = 5; i >= 1; i--) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}

//6.
for (let i = 1; i <= 5; i++) {
  console.log("*****");
}

//7.

for (let i = 1; i <= 5; i++) {
  let str = "";

  for (let s = 1; s <= 5 - i; s++) {
    str += " ";
  }

  for (let j = 1; j <= i; j++) {
    str += "*";
  }

  console.log(str);
}

//8.
for (let i = 1; i <= 5; i++) {
  let str = "";

  for (let s = 1; s <= 5 - i; s++) {
    str += " ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    str += "*";
  }

  console.log(str);
}

//9.
for (let i = 5; i >= 1; i--) {
  let str = "";

  for (let s = 1; s <= 5 - i; s++) {
    str += " ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    str += "*";
  }

  console.log(str);
}

//10.

for (let i = 1; i <= 5; i++) {
  let str = "";

  for (let s = 1; s <= 5 - i; s++) str += " ";
  for (let j = 1; j <= 2 * i - 1; j++) str += "*";

  console.log(str);
}

for (let i = 4; i >= 1; i--) {
  let str = "";

  for (let s = 1; s <= 5 - i; s++) str += " ";
  for (let j = 1; j <= 2 * i - 1; j++) str += "*";

  console.log(str);
}

