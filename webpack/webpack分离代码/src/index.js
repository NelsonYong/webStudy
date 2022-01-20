import hello from "./hello.js";
import imgSrc from "./assets/test.png";
import text from "./assets/test.txt";

import imgSrc1 from "./assets/bg.jpg";

import "./style.css";

import _ from "lodash";

console.log(_.join(["4", "5", "6"], " "));

hello();

const img = document.createElement("img");
img.src = imgSrc;
document.body.appendChild(img);

const block = document.createElement("div");
block.textContent = text;
block.classList.add("block-bg");
document.body.appendChild(block);

const img1 = document.createElement("img");
img1.src = imgSrc1;
document.body.appendChild(img1);

document.body.classList.add("hello");
