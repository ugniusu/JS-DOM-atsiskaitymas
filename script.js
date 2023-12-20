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

// const button = document.createElement("button");
// button.innerText = "Create LIST";
// const ulList = document.createElement("input");
// ulList.placeholder = "ul list";
// const olList = document.createElement("input");
// olList.placeholder = "ol list";
// const container = document.createElement("div");
// container.append(ulList, olList, button);
// document.body.append(container);

// container.style.display = "flex";
// container.style.flexDirection = "column";
// container.style.width = "150px";
// container.style.gap = "8px";

// button.style.padding = "6px";

// button.addEventListener("click", (event) => {
//   event.preventDefault();

//   const ulSk = ulList.value;
//   const olSk = olList.value;

//   for (let i = 0; i < ulSk; i++) {
//     const ul = document.createElement("ul");
//     const ol = document.createElement("ol");
//     const list = document.createElement("li");
//     list.textContent = "unordered";
//     ul.appendChild(list);

//     for (let j = 0; j < olSk; j++) {
//       const list = document.createElement("li");
//       list.textContent = "ordered";
//       ul.appendChild(ol);
//       ol.appendChild(list);
//     }
//     container.appendChild(ul);
//   }

//   ulList.value = "";
//   olList.value = "";
// });

// 3 UZDUOTIS
const findTask = (task) => {
  const dataFromLs = JSON.parse(localStorage.getItem("tasks"));
  console.log(dataFromLs);
  let sameTask = false;
  if (dataFromLs != null) {
    dataFromLs.forEach((el) => {
      if (el.task == task) sameTask = true;
    });
  }
  return sameTask;
};

const loadTasks = () => {
  const dataFromLs = JSON.parse(localStorage.getItem("tasks"));
  if (dataFromLs != null && dataFromLs.length > 0) {
    dataFromLs.forEach((task, index) => {
      const row = document.createElement("tr");
      const taskCell = document.createElement("td");
      const priorCell = document.createElement("td");
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";

      const check = document.createElement("input");
      check.setAttribute("type", "checkbox");

      taskCell.textContent = task.task;
      priorCell.textContent = task.prior;

      row.append(removeBtn);
      row.append(taskCell);
      row.append(priorCell);
      row.append(check);
      tableBody.append(row);

      // STYLING
      table.style.border = "1px solid black";
      table.style.width = "400px";
      table.style.padding = "4px";

      row.style.display = "flex";
      row.style.justifyContent = "space-between";
      row.style.marginBottom = "12px";
      taskCell.style.textTransform = "uppercase";
      priorCell.style.textTransform = "uppercase";

      check.addEventListener("change", function () {
        const parentRow = this.closest("tr");
        if (this.checked) {
          parentRow.style.backgroundColor = "#d3d3d3";
          parentRow.style.textDecoration = "line-through";
        } else {
          parentRow.style.backgroundColor = "";
          parentRow.style.textDecoration = "none";
        }
      });
      // REMOVE
      removeBtn.addEventListener("click", (ev) => {
        const dataFromLs = JSON.parse(localStorage.getItem("tasks"));
        const updatedData = dataFromLs.filter((el) => el.task !== task.task);
        localStorage.setItem("tasks", JSON.stringify(updatedData));
        tableBody.removeChild(row);
      });
    });
    table.append(tableBody);
  }
};

document.addEventListener("DOMContentLoaded", loadTasks);

const button = document.querySelector("button");
const task = document.querySelector("input");
const prior = document.querySelector("select");

const table = document.createElement("table");
const tableBody = document.createElement("tbody");

document.body.append(table);

button.addEventListener("click", (e) => {
  e.preventDefault();
  const taskValue = task.value;
  const priorValue = prior.value;

  const allValue = {
    task: taskValue,
    prior: priorValue,
  };

  // CREATING ELEMENTS AND VALUES
  const row = document.createElement("tr");
  const taskCell = document.createElement("td");
  const priorCell = document.createElement("td");
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";

  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", "check");

  taskCell.textContent = taskValue;
  priorCell.textContent = priorValue;

  tableBody.append(row);
  table.append(tableBody);

  // STYLE
  table.style.border = "1px solid black";
  table.style.width = "400px";
  table.style.padding = "4px";

  row.style.display = "flex";
  row.style.justifyContent = "space-between";
  row.style.marginBottom = "12px";
  taskCell.style.textTransform = "uppercase";
  priorCell.style.textTransform = "uppercase";
  console.log(allValue);

  // IF statement
  if (findTask(taskValue)) {
    alert("Tokia uzduotis jau ivesta");
  } else if (taskValue == "") {
    alert("Prasome uzpildyti 'Tasks' skilti");
  } else {
    const dataFromLs = JSON.parse(localStorage.getItem("tasks"));
    const data = dataFromLs === null ? [] : dataFromLs;
    data.push(allValue);
    localStorage.setItem("tasks", JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem("tasks")));

    row.append(removeBtn);
    row.append(taskCell);
    row.append(priorCell);
    row.append(check);

    check.addEventListener("change", function () {
      const parentRow = this.closest("tr");
      if (this.checked) {
        parentRow.style.backgroundColor = "#d3d3d3";
        parentRow.style.textDecoration = "line-through";
      } else {
        parentRow.style.backgroundColor = "";
        parentRow.style.textDecoration = "none";
      }
    });
  }
});
