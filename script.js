var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer: ', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomC = document.querySelector(".random");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

const setRandGrad = () => {
  const rc1 = Math.floor(Math.random()*16777215).toString(16);
  const rc2 = Math.floor(Math.random()*16777215).toString(16);
  var ranCol1 = "#" + rc1;
  var ranCol2 = "#" + rc2;
  body.style.background = "linear-gradient(to right, " + ranCol1 + ", " + ranCol2 + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomC.addEventListener("click", setRandGrad);
setRandGrad();