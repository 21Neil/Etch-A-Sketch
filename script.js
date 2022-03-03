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
    div.addEventListener("mouseenter", painting);
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.appendChild(div);
  }
}

createBoard(16);

function painting(e) {
  e.path[0].style.backgroundColor = 'black';
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
