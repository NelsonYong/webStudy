import hello from "./hello.js";
import imgSrc from "./assets/test.png";
import text from "./assets/test.txt";

import imgSrc1 from "./assets/bg.jpg";

hello();

const img = document.createElement("img");
img.src = imgSrc;
document.body.appendChild(img);

const block = document.createElement("div");
block.textContent = text;
document.body.appendChild(block);

const img1 = document.createElement("img");
img1.src = imgSrc1;
document.body.appendChild(img1);
