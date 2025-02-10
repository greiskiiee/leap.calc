const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "container";
body.appendChild(container);

const display = document.createElement("input");
display.className = "display";
container.appendChild(display);

const btnCont = document.createElement("div");
btnCont.className = "btn-container";
container.appendChild(btnCont);

const array = [
  "(",
  ")",
  "%",
  "AC",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

let eq = [];

function createElement(elementName, appendElement, className, innerText) {
  const element = document.createElement(elementName);
  element.innerText = innerText;
  element.className = className;
  if (innerText === "AC") {
    element.style.backgroundColor = "#961616";
  }
  element.onclick = () => {
    if ("+-/*%()".includes(innerText)) {
      display.value += " " + innerText + " ";
    } else if (innerText === "=") {
      if (display.value.includes("(") && display.value.includes(")")) {
        let left = display.value.indexOf("(");
        let right = display.value.indexOf(")");

        let inBraket = display.value.split(left, right);
        let resInBraket = evaluate(inBraket);
        console.log("inside braket: ", inBraket, left, right);
      } else {
        display.value = eval(display.value);
      }
    } else if (innerText === "AC") {
      display.value = "";
    } else {
      display.value += innerText;
    }
  };
  appendElement.appendChild(element);
}

for (let i = 0; i < array.length; i++) {
  createElement("button", btnCont, "btn", array[i]);
}

function evaluate(equation) {
  let stack = [];
  let operations = [];
  let temp = equation.split(" ");

  console.log("temp: ", temp);
  for (let i = 0; i < temp.length; i++) {
    if ("+-/*%()".includes(temp[i])) {
      operations.push(temp[i]);
    } else if (temp[i] === "") {
      continue;
    } else {
      stack.push(temp[i]);
    }
  }
  console.log("op:", operations);
  console.log("number:", stack);

  let num1, num2;
  const m = operations.length;
  let res = 0;

  let f;

  if (operations.includes("*")) {
    f = operations.indexOf("*");
    let mult = stack[f] * stack[f + 1];
    stack[f] = mult;

    stack.splice(f, 2, mult);
    operations.splice(f, 1);
  } else if (operations.includes("/")) {
    f = operations.indexOf("/");
    let mult = (stack[f] / stack[f + 1]).toFixed(2);
    stack[f] = mult;

    stack.splice(f, 2, mult);
    operations.splice(f, 1);
  }

  console.log("* op:", operations);
  console.log("* number:", stack);

  stackReversed = stack.reverse();
  operationsReversed = operations.reverse();

  console.log("reversed op:", operationsReversed);
  console.log("reversed number:", stackReversed);

  //calculating
  while (operationsReversed.length) {
    let op = operationsReversed.pop();
    num2 = stackReversed.pop();
    num1 = stackReversed.pop();

    switch (op) {
      case "+":
        res = Number(num2) + Number(num1);
        console.log(res);
        stackReversed.push(res);
        console.log(stackReversed);
        break;
      case "-":
        res = Number(num2) - Number(num1);
        console.log(res);
        stackReversed.push(res);
        console.log("pushed", stackReversed);
        break;
      case "%":
        res = ((Number(num1) * Number(num2)) / 100).toFixed(2);
        console.log(res);
        stackReversed.push(res);
        console.log(stackReversed);
        break;
    }
  }
  console.log(stackReversed, "returned value");

  return stackReversed.pop();
}
