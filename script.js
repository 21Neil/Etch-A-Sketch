const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clearBtn');

clearBtn.addEventListener('click', clear)

for(let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.addEventListener('mouseenter', painting)
  container.appendChild(div)
}

function painting(e) {
  e.path[0].setAttribute('class', 'black')
}

function clear() {
  const divs = document.querySelectorAll('.container > div');
  divs.forEach( div =>
    div.removeAttribute('class')
  )
}