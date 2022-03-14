const color1 = document.getElementById("colorinp");
const color2 = document.getElementById("colorinp1");
const randomButon = document.getElementById("btn");
const code = document.getElementById("code");
const body = document.querySelector("body");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
let renk1 = color1.value;
let renk2 = color2.value;
let deg = 90;
let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

color1.addEventListener("input", () => {
  code.innerHTML = `linear-gradien(${deg}deg, ${color1.value}, ${color2.value});`;
  code.style.color = "black";
  body.style.background = `linear-gradient(${deg}deg, ${color1.value}, ${color2.value})`;
});

color2.addEventListener("input", () => {
  code.innerHTML = `linear-gradient(${deg}deg, ${color1.value}, ${color2.value})`;
  code.style.color = "black";
  body.style.background = `linear-gradient(${deg}deg, ${color1.value}, ${color2.value})`;
});

randomButon.addEventListener("click", () => {
  if (radio1.checked) {
    deg = 180;
  }else {
    deg = 90;
  }
  
  let hex1 = randomColor();
  let hex2 = randomColor();

  color1.value = hex1;
  color2.value = hex2;
  body.style.background = `linear-gradient(${deg}deg, ${hex1}, ${hex2})`;
  code.innerHTML = `linear-gradient(${deg}deg, ${hex1}, ${hex2})`
  code.style.color = "black"
});

const randomColor = () => {

  let hexCode = "#";
for (let i = 0; i < 6; i++) {

  hexCode += hex[Math.floor(Math.random() * hex.length)];
}
return hexCode;
}




// let hexindex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "E", "F"];

// color1.addEventListener("input", () => {
//     code.innerHTML = `background: linear-gradient(${deg}deg, ${color1.value}, ${color2.value});`;
//     code.style.color = "black"

//   body.style.background = `linear-gradient(${deg}deg, ${color1.value}, ${color2.value})`;
// });

// color2.addEventListener("input", () => {
//     code.innerHTML = `background: linear-gradient(${deg}deg, ${renk1}, ${renk2});`;
//     code.style.color = "black"

//   body.style.background = `linear-gradient(${deg}deg, ${color1.value}, ${color2.value})`;
// });

// randomButon.addEventListener("click", () => {
//     if(radio1.checked) {
//         deg = 180;
//     }else {
//         deg = 90;
//     }
//     let frcolor = randomcolor();
//     let srcolor = randomcolor();
//     color1.value = frcolor;
//     color2.value = srcolor;

//     body.style.background = `linear-gradient(${deg}deg, ${frcolor}, ${srcolor})`;
//     code.innerHTML = `background: linear-gradient(${deg}deg, ${frcolor}, ${srcolor});`;
//     code.style.color = "black"
// });
// function randomcolor() {
// let randomhex = "#";

// for (let i = 0; i < 6; i++) {
//   randomhex += hexindex[Math.floor(Math.random() * hexindex.length)];
// }

// return randomhex;
// }
