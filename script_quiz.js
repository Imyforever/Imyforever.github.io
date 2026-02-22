let historial = []; 
const bancoPreguntas = [
    // --- Capítulo 3: Ciclo Celular ---
    { tipo: 'cerrada', q: "¿Qué es el ciclo celular?", opciones: ["Serie de eventos moleculares, morfológicos y funcionales", "Muerte programada de la célula", "Proceso de síntesis proteica"], correcta: "Serie de eventos moleculares, morfológicos y funcionales" },
    { tipo: 'cerrada', q: "¿En qué culmina el ciclo celular?", opciones: ["Con la duplicación del ADN", "Con la división de las células", "Con la fase G0"], correcta: "Con la división de las células" },
    { tipo: 'cerrada', q: "¿Cuál es la duración promedio del ciclo celular?", opciones: ["8-12 hrs", "16-24 hrs", "30-36 hrs"], correcta: "16-24 hrs" },
    { tipo: 'cerrada', q: "En las células somáticas, ¿de qué periodos consta el ciclo celular?", opciones: ["Interfase y mitosis", "Interfase y meiosis", "G1 y S"], correcta: "Interfase y mitosis" },
    { tipo: 'cerrada', q: "En las células de la línea germinal, ¿de qué periodos consta el ciclo celular?", opciones: ["Interfase y mitosis", "Interfase y meiosis", "G2 y Meiosis"], correcta: "Interfase y meiosis" },
    { tipo: 'cerrada', q: "¿En cuántas fases se divide la interfase según la duplicación del material genético?", opciones: ["Tres: G1, S y G2", "Dos: G1 y G2", "Cuatro: G1, S, G2 y M"], correcta: "Tres: G1, S y G2" },
    { tipo: 'cerrada', q: "¿Cómo se le conoce a la fase G1?", opciones: ["Crecimiento inicial", "Replicación del ADN", "Crecimiento final"], correcta: "Crecimiento inicial" },
    { tipo: 'cerrada', q: "¿Cómo se le conoce a la fase S?", opciones: ["Replicación del ADN", "Crecimiento inicial", "Crecimiento final"], correcta: "Replicación del ADN" },
    { tipo: 'cerrada', q: "¿Cómo se le conoce a la fase G2?", opciones: ["Crecimiento final y preparación", "Replicación del ADN", "Crecimiento inicial"], correcta: "Crecimiento final y preparación" },
    { tipo: 'cerrada', q: "Durante la segmentación del cigoto hay crecimiento celular:", opciones: ["Verdadero", "Falso"], correcta: "Falso" },
    { tipo: 'cerrada', q: "Durante la segmentación del cigoto, los blastómeros aumentan en volumen:", opciones: ["Verdadero", "Falso"], correcta: "Falso" },
    { tipo: 'cerrada', q: "La división celular durante la segmentación del cigoto es muy acelerada:", opciones: ["Verdadero", "Falso"], correcta: "Verdadero" },
    { tipo: 'cerrada', q: "¿Por qué la división en la segmentación es tan acelerada?", opciones: ["Porque no hay replicación de ADN", "Porque solo consta de fases S y M", "Porque ocurre en el útero"], correcta: "Porque solo consta de fases S y M" },
    { tipo: 'cerrada', q: "¿En qué estadio se empieza a realizar el ciclo celular completo?", opciones: ["Cigoto", "Mórula", "Blastocisto, poco antes de la implantación"], correcta: "Blastocisto, poco antes de la implantación" },
    { tipo: 'cerrada', q: "Todas las células son cíclicas:", opciones: ["Verdadero", "Falso"], correcta: "Falso" },
    { tipo: 'cerrada', q: "¿Hacia qué fase se derivan las células que salen del ciclo en G1?", opciones: ["G0", "Fase S", "Fase M"], correcta: "G0" },
    { tipo: 'cerrada', q: "¿Qué sucede en la fase G0?", opciones: ["Se encienden programas genéticos de diferenciación y morfogénesis", "La célula muere por apoptosis", "El ADN se duplica de forma descontrolada"], correcta: "Se encienden programas genéticos de diferenciación y morfogénesis" },
    { tipo: 'cerrada', q: "¿Cuántas células se dividen por segundo en un adulto para reemplazo?", opciones: ["1 millón", "10 millones", "25 millones"], correcta: "25 millones" },
    { tipo: 'cerrada', q: "Ejemplo de células con alto nivel de actividad mitótica:", opciones: ["Neuronas", "Células hematopoyéticas", "Hepatocitos"], correcta: "Células hematopoyéticas" },
    { tipo: 'cerrada', q: "Ejemplo de células en periodo variable de G0 (quiescentes):", opciones: ["Neuronas", "Hepatocitos", "Fibras musculares"], correcta: "Hepatocitos" },
    { tipo: 'cerrada', q: "Ejemplo de células altamente especializadas que abandonan el ciclo celular:", opciones: ["Hepatocitos", "Neuronas", "Células de la piel"], correcta: "Neuronas" },

    // --- Capítulo 4: Gametogénesis ---
    { tipo: 'cerrada', q: "¿Cuándo se originan las células germinales primordiales (CGP)?", opciones: ["2da semana (epiblasto) y 3ra (gastrulación)", "5ta semana en el saco vitelino", "En la pubertad"], correcta: "2da semana (epiblasto) y 3ra (gastrulación)" },
    { tipo: 'cerrada', q: "¿En qué semana ocurre la migración de las CGP hacia las gónadas?", opciones: ["2da semana", "4ta semana", "6ta semana"], correcta: "4ta semana" },
    { tipo: 'cerrada', q: "Si las CGP migran a otro sitio y sobreviven, dan origen a:", opciones: ["Gemelos", "Teratomas", "Cáncer de próstata"], correcta: "Teratomas" },

    // --- Espermatogénesis ---
    { tipo: 'cerrada', q: "¿Cuándo empieza la espermatogénesis?", opciones: ["Vida prenatal", "Inicio de la pubertad (~13 años)", "Nacimiento"], correcta: "Inicio de la pubertad (~13 años)" },
    { tipo: 'cerrada', q: "¿Qué estructuras hay dentro de los lobulillos testiculares antes de la pubertad?", opciones: ["Túbulos seminíferos", "Cordones seminíferos", "Conducto eyaculador"], correcta: "Cordones seminíferos" },
    { tipo: 'cerrada', q: "¿Qué células forman la barrera hematotesticular?", opciones: ["Células de Sertoli", "Células de Leydig", "Espermatogonias"], correcta: "Células de Sertoli" },
    { tipo: 'cerrada', q: "¿Qué carga cromosómica tienen los espermatocitos primarios?", opciones: ["46 XY (Diploide bivalente)", "23 X", "23 Y"], correcta: "46 XY (Diploide bivalente)" },
    { tipo: 'cerrada', q: "¿Cuál es el resultado de la meiosis I en el varón?", opciones: ["Espermatocitos secundarios", "Espermátides", "Espermatozoides"], correcta: "Espermatocitos secundarios" },
    { tipo: 'cerrada', q: "¿Qué carga tienen los espermatocitos secundarios?", opciones: ["2n bivalente", "1n bivalentes (23X o 23Y)", "1n monovalente"], correcta: "1n bivalentes (23X o 23Y)" },
    { tipo: 'cerrada', q: "¿Cuánto dura la meiosis I del espermatocito primario?", opciones: ["8 horas", "12 días", "24 días"], correcta: "24 días" },
    { tipo: 'cerrada', q: "¿Cuál es el resultado de la meiosis II en el varón?", opciones: ["Espermátides", "Espermatogonias", "Espermatozoides"], correcta: "Espermátides" },
    { tipo: 'cerrada', q: "Carga cromosómica de las espermátides:", opciones: ["Haploide monovalente", "Haploide bivalente", "Diploide monovalente"], correcta: "Haploide monovalente" },
    { tipo: 'cerrada', q: "¿Cómo se le conoce al proceso de diferenciación de las espermátides?", opciones: ["Espermiogénesis", "Espermatogénesis", "Meiosis III"], correcta: "Espermiogénesis" },
    { tipo: 'cerrada', q: "¿Qué estructura celular forma el acrosoma?", opciones: ["Retículo de Golgi", "Mitocondrias", "Centriolo distal"], correcta: "Retículo de Golgi" },
    { tipo: 'cerrada', q: "¿Dónde ocurre la maduración bioquímica de los espermatozoides?", opciones: ["En los testículos", "En el epidídimo", "En la uretra"], correcta: "En el epidídimo" },
    { tipo: 'cerrada', q: "¿Qué componentes aporta la vesícula seminal?", opciones: ["Fructosa, prostaglandinas y vesiculasa", "Ácido cítrico y zinc", "Galactosa y ácido siálico"], correcta: "Fructosa, prostaglandinas y vesiculasa" },
    { tipo: 'cerrada', q: "Concentración normal de espermatozoides por mililitro:", opciones: ["10 millones", "60-100 millones", "500 millones"], correcta: "60-100 millones" },
    { tipo: 'cerrada', q: "¿Qué es la azoospermia?", opciones: ["Poca movilidad", "Ausencia de espermatozoides", "Muchos anómalos"], correcta: "Ausencia de espermatozoides" },

    // --- Ovogénesis ---
    { tipo: 'cerrada', q: "¿Cuándo inicia la ovogénesis?", opciones: ["En la pubertad", "En el periodo embrionario", "En el nacimiento"], correcta: "En el periodo embrionario" },
    { tipo: 'cerrada', q: "Número de ovogonias al quinto mes intrauterino:", opciones: ["2 millones", "7 millones", "40,000"], correcta: "7 millones" },
    { tipo: 'cerrada', q: "¿En qué fase se detiene la meiosis I del ovocito primario al nacer?", opciones: ["Diploteno de la profase I", "Metafase I", "Anafase I"], correcta: "Diploteno de la profase I" },
    { tipo: 'cerrada', q: "¿Qué causa la detención de la meiosis I en el ovocito primario?", opciones: ["Factor inhibidor de la meiosis de células foliculares", "Falta de estrógenos", "Falta de LH"], correcta: "Factor inhibidor de la meiosis de células foliculares" },
    { tipo: 'cerrada', q: "Resultado de la meiosis I en la mujer:", opciones: ["Ovocito secundario y primer cuerpo polar", "Óvulo y segundo cuerpo polar", "Dos ovocitos secundarios"], correcta: "Ovocito secundario y primer cuerpo polar" },
    { tipo: 'cerrada', q: "¿En qué fase se detiene la meiosis II del ovocito secundario?", opciones: ["Profase II", "Metafase II", "Telofase II"], correcta: "Metafase II" },
    { tipo: 'cerrada', q: "¿Cuál es el estímulo para completar la meiosis II en el ovocito?", opciones: ["Fertilización", "Ovulación", "Pico de FSH"], correcta: "Fertilización" },
    { tipo: 'cerrada', q: "¿Qué hormona estimula la ovulación?", opciones: ["FSH", "LH (Pico de LH)", "Progesterona"], correcta: "LH (Pico de LH)" },
    { tipo: 'cerrada', q: "¿Qué hormona secreta principalmente el cuerpo lúteo?", opciones: ["Estrógenos y progesterona", "Solo FSH", "Gonadotropina coriónica"], correcta: "Estrógenos y progesterona" },
    { tipo: 'cerrada', q: "Moco cervical en fase proliferativa (bajo estrógenos):", opciones: ["Espeso y opaco", "Fluido, transparente y filante", "Ausente"], correcta: "Fluido, transparente y filante" },

    // --- Fertilización ---
    { tipo: 'cerrada', q: "Vida media del ovocito liberado:", opciones: ["24 horas", "48 horas", "72 horas"], correcta: "24 horas" },
    { tipo: 'cerrada', q: "Vida media de los espermatozoides en el tracto genital femenino:", opciones: ["24 horas", "48-72 horas", "7 días"], correcta: "48-72 horas" },
    { tipo: 'cerrada', q: "¿Dónde ocurre normalmente la fertilización?", opciones: ["Útero", "Porción ampular de la tuba", "Istmo"], correcta: "Porción ampular de la tuba" },
    { tipo: 'cerrada', q: "¿Qué es la reacción acrosómica?", opciones: ["Liberación de enzimas para penetrar la zona pelúcida", "Fusión de pronúcleos", "Compactación del ADN"], correcta: "Liberación de enzimas para penetrar la zona pelúcida" }
];

let preguntasSeleccionadas = [];
let indicePregunta = 0;
let buenas = 0;
let tiempo = 30;
let cronometro;
let cantidadDeseada = 10;

// CONFIGURACIÓN INICIAL
window.onload = () => {
    const infoMax = document.getElementById('info-max');
    const inputNum = document.getElementById('num-preguntas');
    if(infoMax) infoMax.innerText = `Preguntas disponibles: ${bancoPreguntas.length} (Mínimo 10)`;
    if(inputNum) inputNum.max = bancoPreguntas.length;
};

function prepararQuiz() {
    let input = document.getElementById('num-preguntas');
    let valor = parseInt(input.value);

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
    preguntasSeleccionadas = bancoPreguntas.sort(() => 0.5 - Math.random()).slice(0, cantidadDeseada);
    indicePregunta = 0;
    buenas = 0;
    historial = []; 

    document.getElementById('config-area').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('result-area').style.display = 'none';
    
    mostrarPregunta();
}



[Image of basic stages of meiosis and mitosis]


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
        div.className = "item-repaso";
        div.style.marginBottom = "12px";
        div.style.paddingBottom = "8px";
        div.style.borderBottom = "1px solid #eee";
        
        if (item.fueCorrecta) {
            div.innerHTML = `<span style="color: #00c9a7; font-weight: bold;">✔ Pregunta ${index+1}</span><br>
                             <small>${item.pregunta}</small>`;
        } else {
            div.innerHTML = `<span style="color: #ff4d6d; font-weight: bold;">❌ Pregunta ${index+1}</span><br>
                             <small>${item.pregunta}</small><br>
                             <span style="color: #00c9a7; font-size: 0.8rem;">Correcta: ${item.correcta}</span>`;
        }
        repasoCont.appendChild(div);
    });
}

function actualizarInterfaz() {
    document.getElementById('timer').innerText = `Tiempo: ${tiempo}s`;
    document.getElementById('progress').innerText = `Pregunta ${indicePregunta + 1}/${cantidadDeseada}`;
}

// EVENTOS DE BOTONES ADICIONALES
document.addEventListener('DOMContentLoaded', () => {
    const btnEnviar = document.getElementById('btn-enviar-abierta');
    if(btnEnviar) btnEnviar.onclick = () => validarRespuesta();

    const inputAbierta = document.getElementById('input-abierta');
    if(inputAbierta) {
        inputAbierta.onkeypress = (e) => {
            if (e.key === 'Enter') validarRespuesta();
        };
    }
});
