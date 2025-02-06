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
    if (
      innerText === "+" ||
      innerText === "-" ||
      innerText === "/" ||
      innerText === "*" ||
      innerText === "%" ||
      innerText === "(" ||
      innerText === ")"
    ) {
      display.value += " " + innerText + " ";
    } else if (innerText === "=") {
      eq = display.value.split(" ");
      // eq = eval(display.value);
      // switch (eq[1]) {
      //   case "+":
      //     display.value = Number(eq[0]) + Number(eq[2]);
      //     break;
      //   case "-":
      //     display.value = Number(eq[0]) - Number(eq[2]);
      //     break;
      //   case "*":
      //     display.value = (Number(eq[0]) * Number(eq[2])).toFixed(2);
      //     break;
      //   case "/":
      //     display.value = (Number(eq[0]) / Number(eq[2])).toFixed(2);
      //     break;
      //   case "%":
      //     display.value = (Number(eq[0]) * (Number(eq[2]) / 100)).toFixed(2);
      //     break;
      // }
      // display.value = eq;
      console.log(eq);
      let st = [];
      let num1 = 0;
      let num2 = 0;

      for (let i = 0; i < eq.length; i++) {
        if (eq[i] === "-") {
          // display.value = (Number(eq[i - 1]) - Number(eq[i + 1])).toFixed(2);
          num2 = eq[i + 1];
          num1 = st.pop();
          display.value = num1 - num2;
          st.push(display.value);
          console.log(num1, num2);
        } else if (eq[i] === "+") {
          display.value = (Number(eq[i - 1]) + Number(eq[i + 1])).toFixed(2);
        } else if (eq[i] === "*") {
          display.value = (Number(eq[i - 1]) * Number(eq[i + 1])).toFixed(2);
        } else if (eq[i] === "/") {
          display.value = (Number(eq[i - 1]) / Number(eq[i + 1])).toFixed(2);
        } else if (eq[i] === "%") {
          display.value = (
            (Number(eq[i - 1]) * Number(eq[i + 1])) /
            100
          ).toFixed(2);
        } else {
          st.push(eq[i]);
        }
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
