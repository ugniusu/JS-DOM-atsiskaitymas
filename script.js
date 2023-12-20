"use strict";

// const div = document.createElement("div");
// const btnPlus = document.createElement("button");
// const btnMinus = document.createElement("button");
// const par = document.createElement("p");
// document.body.appendChild(div);
// div.append(btnPlus);
// div.append(btnMinus);

// btnPlus.setAttribute("class", "btnPlus");
// btnPlus.textContent = "+";
// btnMinus.setAttribute("class", "btnMinus");
// btnMinus.textContent = "-";

// btnPlus.style.width = "25px";
// btnPlus.style.height = "25px";
// btnPlus.style.borderRadius = "50%";
// btnPlus.style.border = "1px";
// btnPlus.style.backgroundColor = "#f4f4f4";
// btnPlus.style.fontSize = "16px";

// btnMinus.style.width = "25px";
// btnMinus.style.height = "25px";
// btnMinus.style.borderRadius = "50%";
// btnMinus.style.border = "1px";
// btnMinus.style.backgroundColor = "#f4f4f4";
// btnMinus.style.fontSize = "16px";

// div.append(par);

// let countClicks = 0;
// btnPlus.addEventListener("click", (event) => {
//   event.preventDefault();
//   countClicks++;
//   console.log(countClicks);

//   par.textContent = countClicks;

//   if (par.textContent % 2 === 0) {
//     btnPlus.style.backgroundColor = "red";
//   } else {
//     btnPlus.style.backgroundColor = "#f4f4f4";
//   }
// });

// btnMinus.addEventListener("click", (event) => {
//   event.preventDefault();
//   countClicks--;
//   console.log(countClicks);

//   par.textContent = countClicks;
//   if (par.textContent % 2 === 0) {
//     btnMinus.style.backgroundColor = "red";
//   } else {
//     btnMinus.style.backgroundColor = "#f4f4f4";
//   }
// });


// 2 UZDUOTIS

const button = document.createElement("button");
button.innerText = "Create LIST";
const ulList = document.createElement("input");
ulList.placeholder = "ul list";
const olList = document.createElement("input");
olList.placeholder = "ol list";
const container = document.createElement("div");
container.append(ulList, olList, button);
document.body.append(container);

container.style.display = "flex"
container.style.flexDirection = "column"
container.style.width = "150px"
container.style.gap = "8px"

button.style.padding = "6px"


button.addEventListener("click", (event) => {
  event.preventDefault();
  const tablecheck = document.querySelector("table");
  if (tablecheck) {
    tablecheck.remove();
  }
  const ulSk = inputRows.value;
  const olSk = inputColumns.value;

  for (let i = 0; i < ulSk; i++) {
    const ul = document.createElement("ul");

    for (let j = 0; j < olSk; j++) {
      const ol = document.createElement("ol");
      const text = document.createTextNode("ordered");
      ol.appendChild(text);
      ul.appendChild(ol);
    }
    container.appendChild(ul);
  }
});