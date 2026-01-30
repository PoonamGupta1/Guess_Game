let number = Math.floor(Math.random() * 100);
let user;
let guess = 0;
let incorrectInput;

let i = 0;
do {
  user = prompt("enter a number");
  user = Number.parseInt(user);
  if (user > number) {
    console.log("Try Again!, the user is greater than number");
    guess++;
  } else if (user < number) {
    console.log("Try Again!, the user is lesser than number");
    guess++;
  } else if (user === number) {
    console.log("Congratualtion!");
    guess++;
  } else {
    incorrectInput++;
  }
  i++;
} while (user != number && i < 100);

let score = 100 - guess;
console.log("Score: " + score);
