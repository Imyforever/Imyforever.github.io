const bancoPreguntas = [
    // --- Capítulo 3: Ciclo Celular ---
    { tipo: 'abierta', q: "¿Qué es el ciclo celular?", correcta: "Serie de eventos moleculares, morfológicos y funcionales" },
    { tipo: 'cerrada', q: "¿Cuál es la duración promedio del ciclo celular?", opciones: ["8-12 hrs", "16-24 hrs", "30-36 hrs"], correcta: "16-24 hrs" },
    { tipo: 'cerrada', q: "En células somáticas, ¿de qué periodos consta el ciclo celular?", opciones: ["Interfase y mitosis", "G1 y G2", "Meiosis y Mitosis"], correcta: "Interfase y mitosis" },
    { tipo: 'abierta', q: "¿Cómo se le conoce a la fase S?", correcta: "Replicación del ADN" },
    { tipo: 'cerrada', q: "Durante la segmentación del cigoto hay crecimiento celular.", opciones: ["Verdadero", "Falso"], correcta: "Falso" },
    { tipo: 'abierta', q: "¿En qué estadio se empieza a realizar el ciclo celular completo?", correcta: "Blastocisto" },
    { tipo: 'cerrada', q: "Ejemplo de células altamente especializadas que abandonan el ciclo celular:", opciones: ["Hepatocitos", "Neuronas", "Células hematopoyéticas"], correcta: "Neuronas" },

    // --- Capítulo 4: Gametogénesis ---
    { tipo: 'abierta', q: "¿Cuándo se originan las células germinales primordiales?", correcta: "Segunda semana" },
    { tipo: 'cerrada', q: "¿Qué carga cromosómica tienen las espermatogonias primitivas?", opciones: ["Haploide (1n)", "Diploide (2n) bivalente", "Triploide"], correcta: "Diploide (2n) bivalente" },
    { tipo: 'abierta', q: "¿Cuándo empieza el proceso de la espermatogénesis?", correcta: "Pubertad" },
    { tipo: 'cerrada', q: "¿Cuánto dura la meiosis I de los espermatocitos primarios?", opciones: ["8 horas", "14 días", "24 días"], correcta: "24 días" },
    { tipo: 'abierta', q: "¿Cuál es la última generación de espermatogonias que hace mitosis?", correcta: "Espermatogonias B" },
    { tipo: 'cerrada', q: "¿Cuál es el resultado de la meiosis II de los espermatocitos secundarios?", opciones: ["Espermátides", "Espermatogonias", "Cigoto"], correcta: "Espermátides" },
    { tipo: 'abierta', q: "¿Dónde se sitúan las gónadas en desarrollo?", correcta: "Pared posterior del celoma intraembrionario" }
];

let preguntasSeleccionadas = [];
let indicePregunta = 0;
let buenas = 0;
let tiempo = 10;
let cronometro;

function iniciarQuiz() {
    preguntasSeleccionadas = bancoPreguntas.sort(() => 0.5 - Math.random()).slice(0, 10);
    indicePregunta = 0;
    buenas = 0;
    document.getElementById('result-area').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    mostrarPregunta();
}

function mostrarPregunta() {
    clearInterval(cronometro);
    tiempo = 30;
    actualizarInterfaz();

    const p = preguntasSeleccionadas[indicePregunta];
    document.getElementById('pregunta-texto').innerText = p.q;

    const optionsCont = document.getElementById('options-container');
    const openCont = document.getElementById('open-answer-container');

    if (p.tipo === 'cerrada') {
        optionsCont.style.display = 'grid';
        openCont.style.display = 'none';
        optionsCont.innerHTML = '';
        p.opciones.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'opcion-btn';
            btn.innerText = opt;
            btn.onclick = () => validarRespuesta(opt);
            optionsCont.appendChild(btn);
        });
    } else {
        optionsCont.style.display = 'none';
        openCont.style.display = 'block';
        const input = document.getElementById('input-abierta');
        input.value = '';
        input.focus();
    }

    iniciarTimer();
}

function iniciarTimer() {
    cronometro = setInterval(() => {
        tiempo--;
        document.getElementById('timer').innerText = `Tiempo: ${tiempo}s`;
        if (tiempo <= 0) {
            validarRespuesta(null);
        }
    }, 1000);
}

function validarRespuesta(respuestaUsuario) {
    clearInterval(cronometro);
    const p = preguntasSeleccionadas[indicePregunta];

    if (p.tipo === 'cerrada') {
        if (respuestaUsuario === p.correcta) buenas++;
    } else {
        const inputVal = document.getElementById('input-abierta').value.toLowerCase().trim();
        if (inputVal.includes(p.correcta.toLowerCase()) || p.correcta.toLowerCase().includes(inputVal) && inputVal.length > 3) {
            buenas++;
        }
    }

    indicePregunta++;
    if (indicePregunta < 10) {
        mostrarPregunta();
    } else {
        finalizarQuiz();
    }
}

function actualizarInterfaz() {
    document.getElementById('timer').innerText = `Tiempo: ${tiempo}s`;
    document.getElementById('progress').innerText = `Pregunta ${indicePregunta + 1}/10`;
}

document.getElementById('btn-enviar-abierta').onclick = () => validarRespuesta();

document.getElementById('input-abierta').onkeypress = (e) => {
    if (e.key === 'Enter') validarRespuesta();
};

function finalizarQuiz() {
    document.getElementById('question-area').style.display = 'none';
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('puntaje-texto').innerText = `Has respondido correctamente ${buenas} de 10 preguntas.`;
}

iniciarQuiz();