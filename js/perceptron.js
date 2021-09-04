// resize the main columns in the page

let container = document.querySelector(".container");
let col1 = document.querySelector(".col1");
let col2 = document.querySelector(".col2");
console.log(container);
console.log(col1, col2);

// make resize for column one and two
makeResize(col1);
makeResize(col2);

function makeResize(col) {
  const resizer = document.createElement("div");
  resizer.classList.add("resizer");
  resizer.style.height = `${container.offsetHeight}px`;
  col.appendChild(resizer);
  createResizableColumn(col, resizer);
}

function createResizableColumn(col, resizer) {
  let x = 0;
  let w = 0;
  const mouseDownHandler = function (e) {
    x = e.clientX;
    const styles = window.getComputedStyle(col);
    w = parseInt(styles.width, 10);
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };
  const mouseMoveHandler = function (e) {
    const dx = e.clientX - x;
    col.style.width = `${w + dx}px`;
  };
  const mouseUpHandler = function () {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };
  resizer.addEventListener("mousedown", mouseDownHandler);
}

// information about AND perceptron

let epoch = [1, 2, 3, 4, 5];
let inputs = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];
let yd = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1];
let weights = [
  [0.3, -0.1],
  [0.3, -0.1],
  [0.3, -0.1],
  [0.2, -0.1],
  [0.3, 0.0],
  [0.3, 0.0],
  [0.3, 0.0],
  [0.2, 0.0],
  [0.2, 0.0],
  [0.2, 0.0],
  [0.2, 0.0],
  [0.1, 0.0],
  [0.2, 0.1],
  [0.2, 0.1],
  [0.2, 0.1],
  [0.1, 0.1],
  [0.1, 0.1],
  [0.1, 0.1],
  [0.1, 0.1],
  [0.1, 0.1],
  [0.1, 0.1],
];
let yo = [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1];
let error = [0, 0, -1, 1, 0, 0, -1, 0, 0, 0, -1, 1, 0, 0, -1, 0, 0, 0, 0, 0];

console.log(error.length);
// table
let table = document.querySelector(".table");
console.log(table);
// add information to the table
// add event to the next and back buttons
let next = document.querySelector(".next");
let back = document.querySelector(".back");
let tbody = document.querySelector("tbody");
// next event

next.addEventListener("click", dispalyRowPerceptron);

// back event

back.addEventListener("click", removeRow);
let i = 0;
let inp = 0;
let ep = 0;
let epochCheck = true;

//  Image Slider
let eqautions = document.querySelector("#equations");
let image = document.querySelector("#image-question-equation");
let images = [
  "general.JPG",
  "ep-1-1.JPG",
  "ep-1-2.JPG",
  "ep-1-3.JPG",
  "ep-1-4.JPG",
  "ep-2-1.JPG",
  "ep-2-2.JPG",
  "ep-2-3.JPG",
  "ep-2-4.JPG",
  "ep-3-1.JPG",
  "ep-3-2.JPG",
  "ep-3-3.JPG",
  "ep-3-4.JPG",
  "ep-4-1.JPG",
  "ep-4-2.JPG",
  "ep-4-3.JPG",
  "ep-4-4.JPG",
  "ep-5-1.JPG",
  "ep-5-2.JPG",
  "ep-5-3.JPG",
  "ep-5-4.JPG",
];
let imNumber = 0;
let stop = 0;
function nextImageSlider() {
  if (imNumber < images.length && stop == 0) {
    imNumber++;
    if (imNumber == 21) {
      imNumber = 0;
      stop = 1;
    }
    image.classList.add("image-question-equation-active");
    image.src = `./imgs/perceptron/${images[imNumber]}`;
  }
}
function backImageSlider() {
  console.log(imNumber);
  if (imNumber > 0) {
    --imNumber;
    image.src = `./imgs/perceptron/${images[imNumber]}`;
  }
}
// add event lisenter to the next for the image slider
next.addEventListener("click", nextImageSlider);
back.addEventListener("click", backImageSlider);
// Remove Row
function removeRow() {
  if (tbody.lastChild) {
    if (inp == -1) {
      inp = 3;
      ep--;
    }
    i--;
    inp--;
    tbody.removeChild(tbody.lastChild);
  }
}
function dispalyRowPerceptron() {
  let tr = document.createElement("tr");
  tr.classList.add("rows");
  if (i != yo.length) {
    if (inp == 4) {
      inp = 0;
      ep++;
      epochCheck = true;
    }
    tr.innerHTML = `
                <td class="ix1">${inputs[inp][0]}</td>
                <td class="ix2">${inputs[inp][1]}</td>
                <td class="yd">${yd[i]}</td>
                <td class="inw1">${weights[i][0]}</td>
                <td class="inw2">${weights[i][1]}</td>
                <td class="yout">${yo[i]}</td>
                <td class="err">${error[i]}</td>
                <td class="fw1">${weights[i + 1][0]}</td>
                <td class="fw2">${weights[i + 1][1]}</td>
            `;
    if (inp == 0) {
      let td = document.createElement("TD");
      td.setAttribute("rowspan", "4");
      td.classList.add("epoch");
      td.textContent = epoch[ep];
      tr.insertAdjacentElement("afterbegin", td);
    }
    i++;
    inp++;
    epochCheck = false;
    tbody.appendChild(tr);
  } else {
    alert("Finsh");
  }
}
