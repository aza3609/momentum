const RangeInput = document.querySelector("#set-range input");
const guessNumberInput = document.querySelector("#guess-number input");
const gameForm = document.querySelector("#game-form");
const numberChoise = document.querySelector("#number-choise");
const winOrLose = document.querySelector("#win-or-lose");
const background = document.querySelector("body");
const btn = document.querySelector("game-form button");

function gamePlay(event) {
  const range = parseInt(RangeInput.value);
  const machineNumber = Math.ceil(Math.random() * range);
  const userNumber = parseInt(guessNumberInput.value);
  event.preventDefault();

  numberChoise.innerText = `You chose: ${userNumber}, the machine chose: ${machineNumber}`;

  if (userNumber > range) {
    alert("Write the number that is bigger than range.");
    numberChoise.classList.add("hidden");
  } else if (userNumber === machineNumber) {
    winOrLose.innerText = "You won!!!!! ;)";
    numberChoise.classList.remove("hidden");
    background.classList.add("won");
    background.classList.remove("lost");
  } else if (userNumber !== machineNumber) {
    winOrLose.innerText = "You lost :(";
    numberChoise.classList.remove("hidden");
    background.classList.add("lost");
    background.classList.remove("won");
  }
}

gameForm.addEventListener("submit", gamePlay);
