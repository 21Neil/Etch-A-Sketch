const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clearBtn");

clearBtn.addEventListener("click", () => {
  if(askGrid() === 'ERROR'){
    return;
  }
  clear();
  removeBoard();
  createBoard(size);
});

function createBoard(size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseenter", paintingBlack);
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.appendChild(div);
  }
}

createBoard(16);

function paintingBlack(e) {
  e.path[0].style.backgroundColor = 'black';
}

function paintingColor(e) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  e.path[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function clear() {
  const divs = document.querySelectorAll(".container > div");
  divs.forEach((div) => div.removeAttribute("class"));
}

function askGrid() {
  size = prompt("How many squares you need per side? (max: 100)");
  if (size > 100) {
    alert("Max value is 100!");
    return 'ERROR';
  } else if (size === null) {
    return 'ERROR';
  } else {
    return size;
  }
}

function removeBoard() {
  const divs = document.querySelectorAll(".container > div");
  divs.forEach((div) => container.removeChild(div));
}
