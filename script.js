const rgb = document.getElementById('color');
const btn = document.getElementById('btn');

const max=256;

function randomNum(max) {
  return Math.round(Math.random()*max);
}

function randomColor(){
  let firstNum = randomNum(max);
  let secondNum = randomNum(max);
  let thirdNum = randomNum(max);

  document.body.style = `background: rgb(${firstNum}, ${secondNum}, ${thirdNum})`;
  rgb.innerText = `rgb(${firstNum}, ${secondNum}, ${thirdNum})`;
}

randomColor();

btn.onclick = randomColor;
