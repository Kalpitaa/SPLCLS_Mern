//28-04-2026
//Section 1: variables and data types
//Task 1: A user form returns this data. Write a function to check which fields are empty or missing:
// jsconst user = {
//   name: "John",
//   age: null,
//   email: undefined,
//   phone: ""
// };//
const user = {
  name: "John",
  age: null,
  email: undefined,
  phone: ""
};

function checkEmptyFields(obj) {
  for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
      console.log(key + " is empty");
    }
  }
}

checkEmptyFields(user);

//Task 2 : Cart total is showing wrong. Find the bug and fix it:
// jsconst price = "10";
// const quantity = "3";
// const total = price + quantity;
// console.log(total);
const price = "10";
const quantity = "3";

const total = Number(price) + Number(quantity);


console.log(total);

//Section 2: Scope & Hoisting
//Task 3: All timers are logging the same value. Find the bug and fix it:
// jsfor (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

//Task 4: This feature flag code gives unexpected results. Find the scope issue and fix it:
// jsvar isLoggedIn = true;

// function checkAccess() {
//   if (isLoggedIn) {
//     var isLoggedIn = false;
//     console.log("inside:", isLoggedIn);
//   }
//   console.log("outside:", isLoggedIn);
// }
// checkAccess();
let isLoggedIn = true;

function checkAccess() {
  if (isLoggedIn) {
    let isLoggedIn = false;
    console.log("inside:", isLoggedIn);
  }
  console.log("outside:", isLoggedIn);
}

checkAccess();

//Section 3: Closures
// Task 5
// Build a simple counter using closure where each counter works independently:
// jsfunction makeCounter() {
//   // your code
// }

// const c1 = makeCounter();
// const c2 = makeCounter();

// c1(); // 1
// c1(); // 2
// c2(); // 1
function makeCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const c1 = makeCounter();
const c2 = makeCounter();

c1(); // 1
c1(); // 2
c2(); // 1