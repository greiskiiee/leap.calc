const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "container";
body.appendChild(container);

const display = document.createElement("div");
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

function createElement(elementName, appendElement, className, innerText) {
  const element = document.createElement(elementName);

  element.innerText = innerText;
  element.className = className;
  appendElement.appendChild(element);
}

for (let i = 0; i < array.length; i++) {
  //   createElement("button", btnCont, "btn", array[i]);
  const button = document.createElement("button");
  button.className = "btn";
  button.innerText = array[i];
  btnCont.appendChild(button);

  button.addEventListener("click", function () {
    display.innerText = button.innerText;
    // console.log(button.innerText);
  });
}
