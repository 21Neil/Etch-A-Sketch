const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clearBtn");
let sideLength = 16;

createBoard();

clearBtn.addEventListener("click", () => {
  if(askGrid() === 'ERROR'){
    return;
  }
  clear();
  removeBoard();
  createBoard();
});

function createBoard() {
  for (let i = 0; i < sideLength ** 2; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseenter", painting);
    container.appendChild(div);
  }
}
function painting(e) {
  e.path[0].style.backgroundColor = 'black';
}

function clear() {
  const divs = document.querySelectorAll(".container > div");
  divs.forEach((div) => div.removeAttribute("class"));
}

function askGrid() {
  temp = prompt("How many squares you need per side? (max: 100)");
  if (temp > 100) {
    alert("Max value is 100!");
    return 'ERROR';
  } else if (temp === null) {
    return 'ERROR';
  } else {
    sideLength = temp;
    container.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`;
    createBoard();
  }
}

function removeBoard() {
  const divs = document.querySelectorAll(".container > div");
  divs.forEach((div) => container.removeChild(div));
}
