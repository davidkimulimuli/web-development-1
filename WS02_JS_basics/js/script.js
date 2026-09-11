const userName = "David";
let age = 41;
const favoriteAnimal = "Deer";

console.log("My name is " + userName);
console.log("I am " + age + " years old.");
console.log("My favorite animal is " + favoriteAnimal);

console.log("Hello! My name is " + userName + " and my favourite animal is the " + favoriteAnimal + ".");

const guestName = prompt("What is your name?");

console.log(guestName);

console.log("Hello " + guestName + "! Welcome to JavaScript.");

const yourAge = prompt("How old are you?");
console.log("You are " + yourAge + " years old.");

if (yourAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are under 18.");
}

function greetUser(name) {
  console.log("Hello " + name + "!");
}
greetUser("David");
greetUser("Sarah");
greetUser("John");
greetUser("Emily");

document.getElementById("testButton").addEventListener("click", function() {
  alert("JavaScript works!");
});

