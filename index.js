"use strict";
// var x = 10;
// a();
// b();
// var y = 1;
// console.log(x);
// function a() {
//   var x = 100;
//   console.log(x);
// }

// function b() {
//   c();
//   function c() {
//     console.log(y);
//   }
// }

// a();
// var b = 10;
// function a() {
//   const y = 1;
//   c();
//   function c() {
//     console.log(b);
//     console.log(y);
//   }
//   console.log(y);
// }
// console.log(b);

// why do c showing access to b instead showing closures a
// function a() {
//   const y = 100;
//   const x = 10;
//   b();
//   function b() {
//     var m = 55;
//     console.log(x);
//     function c() {
//       console.log(y);
//     }
//     c();
//   }
// }

// a();

// function x() {
//   const a = 10;
//   return function y() {

//     console.log(a);
//  }
// }

// x();

// const a = 10;
// console.log(a);
//__________________________________________________________

/**
 * -DEBOUNCING ==> It limit the rate at which function get invoked. Debouncing in javascript
 *  -Used to reduce the number of network calls to server
 *   -[kar key press pr network call krna not feasible]
 *
 *   [Key Press ke bich m defined time ka gap hona chahie to hi network call kro server ko aur suggestion lao search bar m]
 *
 *  -THROTTLING ==> Is used to limit execution of event handler function even this event trigger continously b/c user action like scrolling or resizing window.
 *   -[Key press krdi(event trigger krdia like button) ab defined time ka threshold ke baad hi work krega with in threshold not work(not do event)]
 */

/**
 * -Throttling ==> It limit the execution of the event handler function, when event is triggerd continously due to user action
 */

// //------------------------DEBOUNCING WITH LOADASH--------------------------------------
// // Question 1 - Create a button UI and add debounce as follow
// //             --> Show "Button Pressed <X> Times" every time button is pressed
// //             --> Increase "Triggered <Y> Times" count AFTER 800ms of debounce

// const btn = document.querySelector(".increase_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggerCount = 0;

// // add event listener to button

// const debouncedCount = _.debounce(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debouncedCount();
// });

// //----------------- THROTTLING WITH LOADASH-------------------------------------

// // Question 1 - Create a button UI and add debounce as follow
// //             --> Show "Button Pressed <X> Times" every time button is pressed
// //             --> Increase "Triggered <Y> Times" count EVERY 800ms of debounce

// const btnThrottle = document.querySelector(".increase_btn");
// const btnPressThrottle = document.querySelector(".increment_pressed");
// const countThrottle = document.querySelector(".increment_count");

// var pressedCountThrottle = 0;
// var triggerCountThrottle = 0;

// // add event listener to button

// const throttleCount = _.throttle(() => {
//   countThrottle.innerHTML = ++triggerCountThrottle;
// }, 800);

// btnThrottle.addEventListener("click", () => {
//   btnPressThrottle.innerHTML = ++pressedCountThrottle;
//   throttleCount();
// });

/**
 * -Event Capturing mai bs:  ,{capture: true,} krdo baki bubble se ulta flow hoga
 *
 */

// const container = document.querySelector(".modalContainer");
// const button = document.querySelector(".modalButton");

// button.addEventListener("click", () => {
//   toggleModal(true);
// });

// function toggleModal(toggle) {
//   container.style.display = toggle ? "flex" : "none";
// }

// container.addEventListener("click", function (e) {
//   console.log(e.target.className);
//   if (e.target.className === "modalContainer") toggleModal(false);
// });

// function sum(arr) {
// let add = 0;

// for (let i = 0; i < arr.length; i++) {
//   add = add + arr[i];
// }

//   let maxi = -1;

//   for (let key of arr) {
//     maxi = Math.max(maxi, key);
//   }

//   return maxi;
// }

// let arr = [1, 4, 5, 1, 9];
// console.log(sum(arr));

// -- reverse array --

// let arr1 = [1, 4, 5, 1, 9];
// function reverse(arr1) {
//   let arr2 = [];

//   arr1.forEach((element) => {
//     arr2.unshift(element);
//   });
//   return arr2;
// }

// console.log(reverse(arr1));

// let arr = [1, 4, 5, 1, 9];

// const sum = arr.reduce((acc, curval) => acc + curval);
// console.log(sum);

// var s = ["i", "like", "this", "program", "very", "much"];

// var str = " ";
// let n = s.length;

// while (n > 0) {
//   str = s[n - 1] + " " + str;
//   n--;
// }

// console.log(str.slice(0, n - 1));

// let arr = [1, 4, 5, 1, 9];

// const sum = arr.reduce((acc, curval) => {
//   return acc + curval;
// }, 0);

// console.log(sum);

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

const totalmarks = students
  .map((it) => {
    if (it.marks < 60) {
      it.marks = it.marks + 20;
    }
    return it;
  })
  .filter((it) => it.marks > 60)
  .reduce((acc, cur) => {
    return acc + cur.marks;
  }, 0);
console.log(totalmarks);

// This Keyword of JavaScript by Akshay Saini
