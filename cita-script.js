const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");

const mensaje = document.getElementById("mensaje");
const imagen = document.getElementById("imagen");

let intentos = 0;

const mensajes = [

"🥺 ¿Segura?",
"😭 Piénsalo mejor",
"💔 Me romperás el corazón",
"😢 Vamos...",
"🥹 Por favor",
"❤️ Ya casi me convences"
];

const gifs = [

"https://media.tenor.com/3x63SNMKPogAAAAC/cute-love.gif",

"https://media.tenor.com/YKDKM0wE6U8AAAAC/sad-bear.gif",

"https://media.tenor.com/X6nS9jYJk6sAAAAC/cute-cry.gif",

"https://media.tenor.com/v0kF6P4x9j0AAAAC/panda-sad.gif",

"https://media.tenor.com/4f9L7k7q3JQAAAAC/bear-love.gif"

];

botonNo.addEventListener("mouseover", () => {

    intentos++;

    let x =
    Math.random()*350-175;

    let y =
    Math.random()*150-75;

    botonNo.style.transform =
    `translate(${x}px, ${y}px)`;

    mensaje.textContent =
    mensajes[intentos % mensajes.length];

    imagen.src =
    gifs[intentos % gifs.length];

    let tamaño =
    18 + intentos*4;

    botonSi.style.fontSize =
    tamaño + "px";

    if(intentos > 8){

        botonNo.style.display =
        "none";

        mensaje.textContent =
        "😎 Ya no tienes escapatoria";
    }
});

botonSi.addEventListener("click", ()=>{

    document
    .getElementById("pantalla1")
    .classList.add("oculto");

    document
    .getElementById("pantalla2")
    .classList.remove("oculto");
});

document
.getElementById("confirmar")
.addEventListener("click", ()=>{

    const fecha =
    document.getElementById("fecha").value;

    const hora =
    document.getElementById("hora").value;

    const lugar =
    document.getElementById("lugar").value;

    document
    .getElementById("pantalla2")
    .classList.add("oculto");

    document
    .getElementById("pantalla3")
    .classList.remove("oculto");

    document
    .getElementById("resumen")
    .innerHTML =

    `
    📅 <b>${fecha}</b><br>
    ⏰ <b>${hora}</b><br>
    📍 <b>${lugar}</b>
    `;
});