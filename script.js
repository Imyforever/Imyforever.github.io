const mensajes = [
    "Eres más fuerte de lo que crees",
    "No olvides lo increíble que eres",
    "Todo esfuerzo vale la pena",
    "Confía en ti, siempre",
    "Estoy orgulloso de ti"
];
document.getElementById("btnMotivacion").addEventListener("click", () => {
    const random = Math.floor(Math.random() * mensajes.length);
    document.getElementById("mensaje").textContent = mensajes[random];
});

const btnRendirse = document.getElementById("btnRendirse");

btnRendirse.addEventListener("click", (e) => {
    e.preventDefault(); // evita que pase algo

    const maxX = window.innerWidth - btnRendirse.offsetWidth;
    const maxY = window.innerHeight - btnRendirse.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btnRendirse.style.position = "absolute";
    btnRendirse.style.left = `${x}px`;
    btnRendirse.style.top = `${y}px`;
    btnRendirse.style.transition = "0.15s";
});

document.getElementById("btnMusica").addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=I5-k8Z1G0HM", "_blank");
});
