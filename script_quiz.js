let historial = []; 
const bancoPreguntas = [
    // --- Capítulo 3: Ciclo Celular ---
    { tipo: 'abierta', q: "¿Qué es el ciclo celular?", correcta: "Serie de eventos moleculares, morfológicos y funcionales" },
    { tipo: 'cerrada', q: "¿En qué culmina el ciclo celular?", opciones: ["Con la duplicación del ADN", "Con la división de las células", "Con la fase G0"], correcta: "Con la división de las células" },
    { tipo: 'cerrada', q: "¿Cuál es la duración promedio del ciclo celular?", opciones: ["8-12 hrs", "16-24 hrs", "30-36 hrs"], correcta: "16-24 hrs" },
    { tipo: 'cerrada', q: "En las células somáticas, ¿de qué periodos consta el ciclo celular?", opciones: ["Interfase y mitosis", "Interfase y meiosis", "G1 y S"], correcta: "Interfase y mitosis" },
    { tipo: 'cerrada', q: "En las células germinales, ¿de qué periodos consta el ciclo celular?", opciones: ["Interfase y mitosis", "Interfase y meiosis", "G2 y Meiosis"], correcta: "Interfase y meiosis" },
    { tipo: 'cerrada', q: "¿Cómo se le conoce a la fase G1?", opciones: ["Replicación del ADN", "Crecimiento inicial", "Crecimiento final"], correcta: "Crecimiento inicial" },
    { tipo: 'cerrada', q: "¿Cómo se le conoce a la fase S?", opciones: ["Replicación del ADN", "Crecimiento inicial", "Crecimiento final"], correcta: "Replicación del ADN" },
    { tipo: 'cerrada', q: "¿Cómo se le conoce a la fase G2?", opciones: ["Replicación del ADN", "Crecimiento inicial", "Crecimiento final y preparación"], correcta: "Crecimiento final y preparación" },
    { tipo: 'cerrada', q: "Durante la segmentación del cigoto hay crecimiento celular:", opciones: ["Verdadero", "Falso"], correcta: "Falso" },
    { tipo: 'cerrada', q: "Durante la segmentación del cigoto, los blastómeros aumentan en volumen.", opciones: ["Verdadero", "Falso"], correcta: "Falso" },
    { tipo: 'abierta', q: "¿En qué estadio se empieza a realizar el ciclo celular completo?", correcta: "Blastocisto" },
    { tipo: 'cerrada', q: "¿A qué fase se derivan las células que salen del ciclo en G1?", opciones: ["G0", "Fase S", "Fase M"], correcta: "G0" },
    { tipo: 'abierta', q: "Ejemplo de células altamente especializadas que abandonan el ciclo celular:", correcta: "Neuronas" },
    { tipo: 'abierta', q: "Ejemplo de células en el periodo variable de la fase G0:", correcta: "Hepatocitos" },

    // --- Capítulo 4: Gametogénesis ---
    { tipo: 'cerrada', q: "¿Cuándo se originan las células germinales primordiales?", opciones: ["1ra semana", "2da semana", "5ta semana"], correcta: "2da semana" },
    { tipo: 'abierta', q: "¿Dónde se sitúan las gónadas en desarrollo?", correcta: "Pared posterior del celoma intraembrionario" },
    { tipo: 'abierta', q: "Si las CGP migran a otro sitio y sobreviven, dan origen a:", correcta: "Teratomas" },
    { tipo: 'cerrada', q: "¿Cuándo empieza el proceso de la espermatogénesis?", opciones: ["Vida prenatal", "Infancia", "Pubertad"], correcta: "Pubertad" },
    { tipo: 'cerrada', q: "¿Qué células forman la barrera hematotesticular?", opciones: ["Células de Sertoli", "Células de Leydig", "Espermatogonias"], correcta: "Células de Sertoli" },
    { tipo: 'abierta', q: "¿Qué carga cromosómica tienen las espermatogonias primitivas?", correcta: "Diploide (2n) bivalente" },
    { tipo: 'cerrada', q: "¿Cuál es la última generación de espermatogonias que hace mitosis?", opciones: ["Espermatogonias A", "Espermatogonias B", "Espermatocitos primarios"], correcta: "Espermatogonias B" },
    { tipo: 'cerrada', q: "¿Cuánto dura la meiosis I de los espermatocitos primarios?", opciones: ["8 horas", "14 días", "24 días"], correcta: "24 días" },
    { tipo: 'cerrada', q: "¿Cuál es el resultado de la meiosis II de los espermatocitos secundarios?", opciones: ["Espermátides", "Espermatogonias", "Espermatozoides"], correcta: "Espermátides" },
    { tipo: 'abierta', q: "¿Cómo se llama el proceso de diferenciación de las espermátides?", correcta: "Espermiogénesis" }
];

let preguntasSeleccionadas = [];
let indicePregunta = 0;
let buenas = 0;
let tiempo = 30;
let cronometro;
let cantidadDeseada = 10;

// MOSTRAR MÁXIMO AL CARGAR
window.onload = () => {
    document.getElementById('info-max').innerText = `Preguntas disponibles: ${bancoPreguntas.length} (Mínimo 10)`;
    document.getElementById('num-preguntas').max = bancoPreguntas.length;
};

function prepararQuiz() {
    let input = document.getElementById('num-preguntas');
    let valor = parseInt(input.value);

    // VALIDACIÓN
    if (isNaN(valor) || valor < 10) {
        alert("Por favor, elige al menos 10 preguntas.");
        return;
    }
    if (valor > bancoPreguntas.length) {
        alert(`El máximo disponible es ${bancoPreguntas.length}.`);
        return;
    }

    cantidadDeseada = valor;
    iniciarQuiz();
}

function iniciarQuiz() {
    // Seleccionar cantidad aleatoria del banco
    preguntasSeleccionadas = bancoPreguntas.sort(() => 0.5 - Math.random()).slice(0, cantidadDeseada);
    
    indicePregunta = 0;
    buenas = 0;
    historial = []; 

    document.getElementById('config-area').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('result-area').style.display = 'none';
    
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
        openCont.style.display = 'flex';
        openCont.style.flexDirection = 'column';
        openCont.style.alignItems = 'center';
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
            validarRespuesta("Tiempo agotado");
        }
    }, 1000);
}

function validarRespuesta(respUsuario) {
    clearInterval(cronometro);
    let p = preguntasSeleccionadas[indicePregunta];
    let esCorrecta = false;

    if (p.tipo === 'cerrada') {
        if (respUsuario === p.correcta) esCorrecta = true;
    } else {
        let textoIngresado = document.getElementById('input-abierta').value.toLowerCase().trim();
        if (textoIngresado !== "" && p.correcta.toLowerCase().includes(textoIngresado)) esCorrecta = true;
        respUsuario = textoIngresado || "Sin respuesta";
    }

    if (esCorrecta) buenas++;

    historial.push({
        pregunta: p.q,
        correcta: p.correcta,
        fueCorrecta: esCorrecta,
        respuestaDada: respUsuario
    });

    indicePregunta++;
    if (indicePregunta < cantidadDeseada) {
        mostrarPregunta();
    } else {
        finalizarQuiz();
    }
}

function finalizarQuiz() {
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('puntaje-texto').innerText = `Puntaje: ${buenas} / ${cantidadDeseada}`;

    const repasoCont = document.getElementById('repaso-container');
    repasoCont.innerHTML = ""; 

    historial.forEach((item, index) => {
        const div = document.createElement('div');
        div.style.marginBottom = "12px";
        div.style.paddingBottom = "8px";
        div.style.borderBottom = "1px solid #eee";
        div.style.lineHeight = "1.2";
        
        if (item.fueCorrecta) {
            div.innerHTML = `<span style="color: #00c9a7; font-weight: bold; font-size: 0.85rem;">✔ Pregunta ${index+1}: Correcta</span><br>
                             <small style="color: #666; font-size: 0.75rem;">${item.pregunta}</small>`;
        } else {
            div.innerHTML = `<span style="color: #ff4d6d; font-weight: bold; font-size: 0.85rem;">❌ Pregunta ${index+1}: Incorrecta</span><br>
                             <small style="color: #666; font-size: 0.75rem;">${item.pregunta}</small><br>
                             <span style="color: #00c9a7; font-size: 0.75rem; font-weight: bold;">R: ${item.correcta}</span>`;
        }
        repasoCont.appendChild(div);
    });
}

function actualizarInterfaz() {
    document.getElementById('timer').innerText = `Tiempo: ${tiempo}s`;
    document.getElementById('progress').innerText = `Pregunta ${indicePregunta + 1}/${cantidadDeseada}`;
}

document.getElementById('btn-enviar-abierta').onclick = () => validarRespuesta();

document.getElementById('input-abierta').onkeypress = (e) => {
    if (e.key === 'Enter') validarRespuesta();
};