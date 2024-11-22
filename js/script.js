const button = document.getElementById('rotateButton');
const rotatingElement = document.getElementById('rotate');
const totalElement = document.getElementById('totalElement');
let total = parseInt(totalElement.textContent);
const repeat = document.getElementById('repeat');
const splendida = document.getElementById('splendida');
const bonus = document.getElementById('bonus');
const img = document.getElementById('img');
const static = document.getElementById('static');

button.addEventListener('click', () => {
  button.classList.remove('pulse');
  button.classList.add('not-allow');
  rotatingElement.classList.remove('spin');
  rotatingElement.classList.add('rotating');
  repeat.classList.remove('block');

  setTimeout(() => {
    rotatingElement.classList.remove('rotating');
    total -= 1;
    totalElement.textContent = total;
    button.classList.add('pulse');
    button.classList.remove('not-allow');

    if (total === 1) {
      repeat.classList.add('block');
    };
    
    if (total === 0) {
      repeat.classList.remove('block');
      splendida.classList.add('block');
      button.classList.add('none');
      bonus.classList.add('block');
      setTimeout(() => {
        splendida.classList.remove('block');
      }, 1000);
      bonus.classList.add('plus');
      img.classList.add('pulse');
      static.classList.add('block');
    };
  }, 3000);
});
