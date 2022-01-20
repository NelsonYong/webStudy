import "./style.css";
console.log("hello webpack");
console.log(666);

const button = document.createElement("button");
button.textContent = "添加图形";
button.addEventListener("click", () => {
  const square = document.createElement("div");
  square.classList.add("square");
  document.body.appendChild(square);
});

document.body.appendChild(button);
