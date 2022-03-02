const container = document.querySelector('.container');

for(let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.addEventListener('mouseenter', painting)
  container.appendChild(div)
}

function painting(e) {
  e.path[0].setAttribute('class', 'black')
}