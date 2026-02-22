let historial = []; 
const bancoPreguntas = [
    // --- Capítulo 3: Ciclo Celular, Meiosis y Mitosis ---
    { tipo: 'abierta', q: "¿Qué es el ciclo celular?", correcta: "Serie de eventos moleculares, morfológicos y funcionales" },
    { tipo: 'cerrada', q: "¿Cuál es la duración promedio del ciclo celular?", opciones: ["12-16 hrs", "16-24 hrs", "24-48 hrs"], correcta: "16-24 hrs" },
    { tipo: 'cerrada', q: "En las células somáticas, ¿de qué periodos consta el ciclo celular?", opciones: ["Interfase y mitosis", "Interfase y meiosis", "G1 y G2"], correcta: "Interfase y mitosis" },
    { tipo: 'cerrada', q: "¿Cómo se le conoce a la fase S?", opciones: ["Crecimiento inicial", "Crecimiento final", "Replicación del ADN"], correcta: "Replicación del ADN" },
    { tipo: 'cerrada', q: "Durante la segmentación del cigoto, ¿aumenta el volumen celular?", opciones: ["Verdadero", "Falso"], correcta: "Falso" },
    { tipo: 'abierta', q: "¿Por qué la división en la segmentación es muy acelerada?", correcta: "Porque solo consta de dos fases: S y M" },
    { tipo: 'cerrada', q: "¿En qué estadio se inicia el ciclo celular completo?", opciones: ["Cigoto", "Mórula", "Blastocisto"], correcta: "Blastocisto" },
    { tipo: 'cerrada', q: "¿Hacia qué fase se derivan las células que salen del ciclo en G1?", opciones: ["Fase S", "Fase G0", "Fase M"], correcta: "Fase G0" },
    { tipo: 'abierta', q: "Ejemplo de células altamente especializadas que abandonan el ciclo celular:", correcta: "Neuronas" },
    { tipo: 'cerrada', q: "Ejemplo de células en periodo variable de G0 (vuelven al ciclo con estímulo):", opciones: ["Hepatocitos", "Neuronas", "Hematopoyéticas"], correcta: "Hepatocitos" },

    // --- Capítulo 4: Gametogénesis ---
    { tipo: 'abierta', q: "¿Cuándo se originan las células germinales primordiales?", correcta: "Segunda semana en el epiblasto" },
    { tipo: 'cerrada', q: "¿A dónde migran las CGP desde el saco vitelino?", opciones: ["Al corazón", "A las gónadas en desarrollo", "Al hígado"], correcta: "A las gónadas en desarrollo" },
    { tipo: 'abierta', q: "¿Qué nombre reciben los tumores originados por CGP que migran a sitios erróneos?", correcta: "Teratomas" },
    
    // --- Espermatogénesis ---
    { tipo: 'cerrada', q: "¿A qué edad promedio inicia la espermatogénesis?", opciones: ["10 años", "13 años", "18 años"], correcta: "13 años" },
    { tipo: 'abierta', q: "¿En qué estructuras se transforman los cordones seminíferos en la pubertad?", correcta: "Túbulos seminíferos" },
    { tipo: 'cerrada', q: "¿Qué células forman la barrera hematotesticular?", opciones: ["Células de Leydig", "Espermatogonias", "Células de Sertoli"], correcta: "Células de Sertoli" },
    { tipo: 'cerrada', q: "¿Dónde se sitúan las células espermatogénicas más maduras?", opciones: ["Parte periférica", "Lámina basal", "Parte central (luz del túbulo)"], correcta: "Parte central (luz del túbulo)" },
    { tipo: 'abierta', q: "¿Qué carga cromosómica tienen las espermatogonias primitivas?", correcta: "Diploide (2n) bivalente" },
    { tipo: 'cerrada', q: "¿Cuál es la última generación de espermatogonias que hace mitosis?", opciones: ["Espermatogonias A1", "Espermatogonias B", "Espermatocitos primarios"], correcta: "Espermatogonias B" },
    { tipo: 'cerrada', q: "¿Qué carga cromosómica tienen los espermatocitos secundarios?", opciones: ["46 XY", "23X o 23Y (haploide bivalente)", "23X o 23Y (haploide monovalente)"], correcta: "23X o 23Y (haploide bivalente)" },
    { tipo: 'abierta', q: "¿Cuánto dura la meiosis I de los espermatocitos primarios?", correcta: "24 días" },
    { tipo: 'cerrada', q: "¿Cuál es el resultado de la meiosis II?", opciones: ["Espermatocitos", "Espermátides", "Espermatozoides"], correcta: "Espermátides" },
    { tipo: 'abierta', q: "¿Cómo se llama el proceso de diferenciación de espermátide a espermatozoide?", correcta: "Espermiogénesis" },
    { tipo: 'cerrada', q: "¿Qué estructuras constituyen al espermatozoide?", opciones: ["Cabeza, cuerpo y cola", "Cabeza, cuello y cola", "Núcleo y flagelo"], correcta: "Cabeza, cuello y cola" }
];

let preguntasSeleccionadas = [];
let indicePregunta = 0;
let buenas = 0;
let tiempo = 30;
let cronometro;

function iniciarQuiz() {
    preguntasSeleccionadas = bancoPreguntas.sort(() => 0.5 - Math.random()).slice(0, 10);
    indicePregunta = 0;
    buenas = 0;
    historial = []; 
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
        // Validación: que la respuesta contenga palabras clave importantes
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
    if (indicePregunta < 10) {
        mostrarPregunta();
    } else {
        finalizarQuiz();
    }
}

function finalizarQuiz() {
    document.getElementById('question-area').style.display = 'none';
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('puntaje-texto').innerText = `Puntaje: ${buenas} / 10`;

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
    document.getElementById('progress').innerText = `Pregunta ${indicePregunta + 1}/10`;
}

document.getElementById('btn-enviar-abierta').onclick = () => validarRespuesta();

document.getElementById('input-abierta').onkeypress = (e) => {
    if (e.key === 'Enter') validarRespuesta();
};

iniciarQuiz();