// FUNCTIONS

let userNumA = Number(prompt("Enter your first number."));
let userNumB = Number(prompt("Enter your second number."));

function calculate(userNumA, userNumB) {
      let myAnswer = (userNumA + userNumB);
      return myAnswer;
}

let summedNumbers = calculate(userNumA, userNumB);
alert(`The sum of ${userNumA} and ${userNumB} is ${summedNumbers}.`);
