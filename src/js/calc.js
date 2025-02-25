const numberInputs = document.querySelectorAll(".calc__number1");
const resultInput = document.querySelector(".calc__number2");
const operationButtons = document.querySelectorAll(".calc__button-expression");
let operation = "";

operationButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;

    if (value === "=") {
      calculateResult();
    } else {
      operation = value;
    }
  });
});

const calculateResult = () => {
  const num1 = parseFloat(numberInputs[0].value);
  const num2 = parseFloat(numberInputs[1].value);

  if (isNaN(num1) || isNaN(num2)) {
    resultInput.value = "---";
    return;
  }

  switch (operation) {
    case "+":
      resultInput.value = num1 + num2;
      break;
    case "-":
      resultInput.value = num1 - num2;
      break;
    case "*":
      resultInput.value = num1 * num2;
      break;
    case "/":
      resultInput.value = num2 === 0 ? "---" : (num1 / num2).toFixed(9);
      break;
    default:
      resultInput.value = "---";
  }

  numberInputs[0].value = "";
  numberInputs[1].value = "";
};
