const input = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button");
const gameResult = document.querySelector(".gameResult");
const errorText = document.querySelector(".errorText");
const firstTable = document.querySelectorAll(".first");
const secondTable = document.querySelectorAll(".second");

let count = 0;
let randomArray = new Array();
let valueArray = new Array();

const randomValue = () => {
  randomArray = [];
  while (randomArray.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomArray.indexOf(randomNumber) < 0) {
      randomArray.push(randomNumber);
    }
  }
};

const inputValue = () => {
  valueArray = [];
  input.forEach((text) => {
    valueArray.push(parseInt(text.value));
  });

  const blankCheck = valueArray.indexOf("") !== -1;
  const nanCheck = valueArray.includes(NaN) === true;
  const valueRangeCheck = valueArray.find((item) => {
    return item >= 10;
  });
  const duplicateNumber = new Set(valueArray);

  if (blankCheck || nanCheck) {
    errorText.innerText = "Please insert a number.";
  } else if (valueRangeCheck) {
    errorText.innerText = "Enter a number less than 10.";
  } else if (duplicateNumber.size < 4) {
    errorText.innerText = "There are duplicate numbers.";
  } else {
    errorText.innerText = "";
    firstTable[count].innerText = valueArray;
    ballAndStrike();
    count += 1;
  }
  result();
};

const reset = () => {
  randomValue();
  errorText.innerText = "";
  gameResult.innerText = "";
  firstTable.forEach((item) => {
    item.innerText = "";
  });
  secondTable.forEach((item) => {
    item.innerText = "";
  });
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
  count = 0;
};

let strike;
const ballAndStrike = () => {
  let ball = 0;
  strike = 0;
  for (let i = 0; i < valueArray.length; i++) {
    if (valueArray[i] === randomArray[i]) {
      strike += 1;
    } else if (
      valueArray[i] !== randomArray[i] &&
      randomArray.indexOf(valueArray[i]) >= 0
    ) {
      ball += 1;
    }
  }
  secondTable[count].innerText = `${strike}S ${ball}B`;
};

const result = () => {
  if (strike === 4) {
    gameResult.innerText = "That's right! Congratulations.";
    count = 100;
  } else if (count > 8) {
    gameResult.innerText = `The answer is ${randomArray} I do not see. Please press the reset button.`;
  }
};

randomValue();
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.dataset.value) {
      case "result":
        inputValue();
        break;
      case "reset":
        reset();
        break;
    }
  });
});