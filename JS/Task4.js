//6-05-26
// Swap two numbers.
// Find the sum of all elements in an array.
// Count even numbers in an array.
// Find the factorial of a number.
// Check whether a number is prime or not.
// Print Fibonacci series up to N numbers.
// Find the second largest number in an array.
// Remove duplicate elements from an array.
// Count total characters in a string.
// Count total words in a sentence.
// Convert a string into uppercase.
// Find the maximum number in an array.
// Reverse an array.
// Check whether a number is Armstrong number.
// Find the missing number in an array.

//1.
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

//2.
function sumOfArray(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
}
sumOfArray([1,2,3,4,5]);

//3.
let num = [1, 2, 4, 7, 8, 10];
let count = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    count++;
  }
}

console.log(count);

//4.
function factorial(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i;
    }
    console.log(fact);
}      
factorial(5);

//5.
function isPrime(num) {
    if (num <= 1) {
        return false;
    } 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }   
    }
    return true;
}
console.log(isPrime(7));

//6.
function fibonacci(n) {
    let a = 0, b = 1, next;
    for (let i = 0; i < n; i++) {
        console.log(a);
        next = a + b;
        a = b;
        b = next;
    }
}
fibonacci(10);

//7.
let arr = [10, 50, 30, 90, 70];

let largest = arr[0];
let secondLargest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  }
}

console.log(secondLargest);

//8.
let array = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(array)];

console.log(unique);

//9.
let str = "JavaScript";

console.log(str.length);

//10.
let sentence = "I love JavaScript";

let words = sentence.split(" ");

console.log(words.length);

//11.
let string = "hello world";

console.log(string.toUpperCase());

//12.
let number = [10, 25, 90, 45];

let max = number[0];

for (let i = 0; i < number.length; i++) {
  if (number[i] > max) {
    max = number[i];
  }
}

console.log(max);

//13.
let reverse = [1, 2, 3, 4, 5];

reverse.reverse();

console.log(reverse);

//14.
let n = 153;
let original = n;
let sum = 0;

while (n > 0) {
  let digit = n % 10;
  sum += digit * digit * digit;
  n = Math.floor(n / 10);
}

console.log(sum === original);