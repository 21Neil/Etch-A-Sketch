const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clearBtn");
let isMouseDown = false;

clearBtn.addEventListener("click", () => {
  if (askGrid() === "ERROR") {
    return;
  }
  clear();
  removeBoard();
  createBoard(size);
});

function createBoard(size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.addEventListener("mousedown", (e) => {
      paintingBlack(e);
      isMouseDown = true;
    });
    div.addEventListener("mouseup", () => (isMouseDown = false));
    div.addEventListener("mouseenter", (e) => {
      if (isMouseDown) paintingBlack(e);
    });
    div.addEventListener("mousedown", (e) => e.preventDefault());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.appendChild(div);
  }
}

createBoard(16);

function paintingBlack(e) {
  e.target.style.backgroundColor = `rgb(0, 0, 0, ${setOpacity(
    e.target.style.backgroundColor
  )})`;
}

function setOpacity(backgroundColor) {
  if (!backgroundColor) {
    return 0.1;
  } else {
    let opacity = backgroundColor.slice(
      backgroundColor.indexOf(".") - 1,
      backgroundColor.length - 1
    );
    opacity = +opacity;
    if (opacity < 1 && opacity !== 0){
      console.log(opacity)
      return  opacity += 0.1;
    }
  }
}

function paintingColor(e) {
  e.path[0].style.backgroundColor = `rgb(
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}
    )`;
}

function clear() {
  const divs = document.querySelectorAll(".container > div");
  divs.forEach((div) => div.removeAttribute("class"));
}

function askGrid() {
  size = prompt("How many squares you need per side? (max: 100)");
  if (size > 100) {
    alert("Max value is 100!");
    return "ERROR";
  } else if (size === null) {
    return "ERROR";
  } else {
    return size;
  }
}

function removeBoard() {
  const divs = document.querySelectorAll(".container > div");
  divs.forEach((div) => container.removeChild(div));
}
