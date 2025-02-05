const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "container";
body.appendChild(container);

const display = document.createElement("input");
display.className = "display";
display.innerText = "0";
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

  element.onclick = () => {
    if (innerText === "+") {
      display.value += " " + innerText + " ";
    } else if (innerText === "-") {
      display.value += " " + innerText + " ";
    } else if (innerText === "/") {
      display.value += " " + innerText + " ";
    } else if (innerText === "*") {
      display.value += " " + innerText + " ";
    } else if (innerText === "%") {
      display.value += " " + innerText + " ";
    } else if (innerText === "(") {
      display.value += " " + innerText + " ";
    } else if (innerText === ")") {
      display.value += " " + innerText + " ";
    } else if (innerText === "=") {
      eq = display.value.split(" ");
      switch (eq[1]) {
        case "+":
          display.value = Number(eq[0]) + Number(eq[2]);
          break;
        case "-":
          display.value = Number(eq[0]) - Number(eq[2]);
          break;
        case "*":
          display.value = (Number(eq[0]) * Number(eq[2])).toFixed(2);
          break;
        case "/":
          display.value = (Number(eq[0]) / Number(eq[2])).toFixed(2);
          break;
        case "%":
          display.value = (Number(eq[0]) * (Number(eq[2]) / 100)).toFixed(2);
          break;
      }

      if (eq[0] === "(") {
      }
    } else if (innerText === "AC") {
      display.value = null;
    } else {
      display.value += innerText;
    }
  };
  appendElement.appendChild(element);
}

for (let i = 0; i < array.length; i++) {
  createElement("button", btnCont, "btn", array[i]);
}
