const mensajes = [
    "¡Eres más fuerte de lo que crees!",
    "No olvides lo increíble que eres.",
    "Todo esfuerzo vale la pena, ¡sigue adelante!",
    "Confía en ti, siempre.",
    "Estoy muy orgulloso de ti.",
    "Un paso a la vez, pero siempre hacia adelante.",
    "Tu futuro yo te agradecerá el esfuerzo de hoy.",
    "Eres capaz de lograr cosas increíbles.",
    "¡Lo estás haciendo genial!",
    "No te rindas, las grandes cosas llevan tiempo.",
    "Cada error es una lección aprendida.",
    "Cree en tu potencial.",
    "Hoy es un buen día para brillar.",
    "Tu dedicación es inspiradora.",
    "Mantén la calma y sigue estudiando.",
    "Eres más inteligente de lo que piensas.",
    "El éxito es la suma de pequeños esfuerzos diarios.",
    "No te compares con nadie, cada uno tiene su ritmo.",
    "Tu mente no tiene límites.",
    "La disciplina te llevará a donde la motivación falle.",
    "Hazlo por ti, te lo mereces.",
    "¡Sigue brillando!",
    "Eres la persona que decidirá tu propio destino.",
    "Incluso los días difíciles cuentan como progreso.",
    "Confía en el proceso.",
    "Tú puedes con todo lo que te propongas.",
    "El conocimiento es tu superpoder.",
    "¡Qué gran progreso has hecho hoy!",
    "Sigue enfocado, los resultados vendrán.",
    "Cada página leída es un paso más hacia tu meta.",
    "No mires el reloj, haz lo que él hace: sigue moviéndote.",
    "Tu esfuerzo no es en vano.",
    "Aprender es crecer.",
    "¡Eres una máquina de aprender!",
    "Visualiza tu meta y no la sueltes.",
    "A veces se gana y a veces se aprende.",
    "Sé la mejor versión de ti mismo.",
    "El estudio de hoy es el éxito del mañana.",
    "Nadie puede detener a alguien que no se rinde.",
    "Tus sueños no tienen fecha de caducidad.",
    "¡Vas por muy buen camino!",
    "El cansancio es temporal, la satisfacción es para siempre.",
    "Eres valiente por intentarlo una y otra vez.",
    "Cree que puedes y ya estarás a mitad de camino.",
    "¡Sigue así, campeón!",
    "Tu actitud determina tu dirección.",
    "No dejes que el miedo te detenga.",
    "Eres luz y talento puro.",
    "Hoy has dado lo mejor de ti, descansa con orgullo.",
    "Mañana serás mejor que hoy.",
    "Tus ganas son más grandes que cualquier obstáculo.",
    "El aprendizaje es un tesoro que te seguirá a todas partes.",
    "Hazlo con pasión o no lo hagas.",
    "Cada pequeño avance cuenta.",
    "¡Eres imparable!",
    "No hay atajos hacia los lugares que valen la pena.",
    "Si fuera fácil, todos lo harían.",
    "Tu cerebro es un músculo, ¡sigue entrenándolo!",
    "Nada es imposible para un corazón dispuesto.",
    "La paciencia es la clave del éxito.",
    "Sigue alimentando tu curiosidad.",
    "Eres único y tu talento es necesario.",
    "¡Sigue empujando tus límites!",
    "Los desafíos son los que hacen la vida interesante.",
    "Tu determinación es tu mayor activo.",
    "Descansar también es parte del proceso.",
    "¡Qué orgullo ver cuánto sabes!",
    "Céntrate en lo que puedes controlar.",
    "Un día a la vez.",
    "Eres el arquitecto de tu propia vida.",
    "La educación es el arma más poderosa.",
    "Cree en tu magia.",
    "No te detengas hasta que estés orgulloso.",
    "Aprender algo nuevo es ganar una batalla.",
    "Tu curiosidad te llevará lejos.",
    "No cuentes los días, haz que los días cuenten.",
    "Eres digno de todo el éxito del mundo.",
    "No dejes de aprender.",
    "La excelencia es un hábito, no un acto.",
    "¡Eres una estrella en ascenso!",
    "Confía en tu intuición.",
    "Nada puede quitarte lo que has aprendido.",
    "Persiste, resiste y nunca desistas.",
    "El éxito comienza con la decisión de intentarlo.",
    "¡Qué mente tan brillante tienes!",
    "Tu potencial es infinito.",
    "Rodéate de buenas vibras.",
    "Lo difícil se logra, lo imposible se intenta.",
    "Hoy es una oportunidad para ser mejor.",
    "El talento gana juegos, pero la constancia gana campeonatos.",
    "No bajes la guardia, ¡tú puedes!",
    "Eres más valiente de lo que crees.",
    "Si puedes soñarlo, puedes hacerlo.",
    "Tu voluntad es de hierro.",
    "Cada reto te hace más sabio.",
    "Sigue adelante, el mundo te espera.",
    "Aprender es el regalo más grande que te puedes dar.",
    "Lo estás logrando, poco a poco.",
    "Confía en tu capacidad de recuperación.",
    "¡Nunca dejes de creer en ti mismo!"
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
