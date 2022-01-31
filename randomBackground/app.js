let container = document.querySelector(".container");
let btnFlip = document.querySelector(".btn-flip");
let textColor = document.querySelector(".text-color");
const color = ["#333", "#ffff", "#B75945", "#8A6B64", "#D9F61B"];

btnFlip.addEventListener("click", () => {
  let randomColor = Math.floor(Math.random() * color.length);
  console.log(color[randomColor]);
  container.style.backgroundColor = color[randomColor];
  textColor.innerHTML = color[randomColor];
});
