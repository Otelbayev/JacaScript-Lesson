// //function declaration

// function sayName(name, k, thrid = 50) {
//   console.log("Hello my name is  " + name + " I am " + k + " years old");
//   console.log(thrid);
// }

// sayName("Eshamt", 20, "dkfjvn");
// sayName("Toshamt", 25, "none");

// // function expression

// const myName = function (name, age) {
//   console.log("Hello my name is " + name + "I am " + age + " years old");
// };

// myName("Name", "age");

// ///Arrow function

// const myFunc = () => {
//   console.log("Hello my name is Xolmat");
// };

// function sayHello() {
//   console.log("Hello");
// }

//  -----------------------`
// function sayHello1() {
//   return;
// }

// console.log(sayHello1());

///check

const check = (age) => {
  if (age > 18) {
    return "18 dan kichik";
  }
  return "18 dan katta";
};

// console.log(check(17));
// console.log(check());

// const sum = (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;

// const result = sum(10, 20);

// console.log(result);

//! Immediately Invoked Function

// (function () {
//   console.log("Bu funksiya darhol chaqirildi!");
// })();

function outer() {
  function inner() {
    console.log("Ichki funksiya!");
  }
  inner();
  console.log("Tashqi funksiya!");
}

outer();
