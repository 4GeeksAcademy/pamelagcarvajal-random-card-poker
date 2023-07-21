import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const HandleBoton = e => {
  console.log("me clickeaste");
  //console.log(e);
  location.reload();
  return;
};

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  let body = document.querySelector("body");
  //console.log(body);
  body.classList.add("bg", "bg-success");
  //let nuevoDiv = document.createElement("DIV");
  let app = document.querySelector("#app");

  //nuevoDiv.classList.add("container", "bg", "bg-light");
  //nuevoDiv.innerHTML = `<div class= "row symbol heading"> fila 1</div><div class= "row number"> fila 2</div><div class= "row symbol reverse"> fila 3</div>`;

  //app.appendChild(nuevoDiv);

  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  // console.log(
  //   "esto deberia dar el tercer elemento que es el 3: ",
  //   numeros[2],
  //   "La longuitud del arreglonumeros es: ",
  //   numeros.length
  // );

  let numeroAleatorio = Math.floor(Math.random() * numeros.length);
  //console.log("numeroAleatorio: ", numeroAleatorio);
  //console.log("elemento aleatorio: ", numeros[numeroAleatorio]);

  //let fila2 = document.querySelector(".number");
  //fila2.innerHTML = `${numeros[numeroAleatorio]}`;

  let suit = [
    { suit: "♥", color: "red" },
    { suit: "♦", color: "red" },
    { suit: "♠", color: "black" },
    { suit: "♣", color: "black" }
  ];

  let suitAleatoria = Math.floor(Math.random() * suit.length);
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");

  div1.innerHTML = suit[suitAleatoria].suit;
  div1.style.padding = "20px";
  div1.style.fontSize = "3.5rem";
  div1.style.color = suit[suitAleatoria].color;

  div2.innerHTML = numeroAleatorio;
  div2.style.textAlign = "center";
  div2.style.fontSize = "3.5rem";
  div2.style.fontWeight = "bold";

  div3.innerHTML = suit[suitAleatoria].suit;
  div3.style.textAlign = "left";
  div3.style.padding = "20px";
  div3.style.fontSize = "3.5rem";
  div3.style.transform = "rotate(180deg)";
  div3.style.color = suit[suitAleatoria].color;

  //let fila1 = document.querySelector(".heading");
  //fila1.innerHTML = `${suit[suitAleatoria]["suit"]}`;

  //let fila3 = document.querySelector(".reverse");
  //fila3.innerHTML = `${suit[suitAleatoria]["suit"]}`;

  //fila1.style.color = suit[suitAleatoria]["color"];
  //fila3.style.color = suit[suitAleatoria]["color"];

  //fila2.classList.add("justify-content-center");
  app.appendChild(div1);
  app.appendChild(div2);
  app.appendChild(div3);
  let boton = document.createElement("button");
  let textoBoton = document.createTextNode("Click");
  boton.appendChild(textoBoton);

  boton.addEventListener("click", function() {
    HandleBoton();
  });

  body.appendChild(boton);
};
