const bancoPreguntas = [
    // --- BANCO DE PREGUNTAS: ANATOMÍA HUMANA (1-70) ---
    { tipo: 'cerrada', q: "El nervio musculocutáneo es rama terminal de cuál fascículo del plexo braquial?", opciones: ["Fascículo posterior", "Fascículo inferior", "Fascículo lateral", "Fascículo medial"], correcta: "Fascículo lateral" },
    { tipo: 'cerrada', q: "¿Cuál de los siguientes huesos del carpo pertenece a la fila proximal?", opciones: ["Grande", "Trapecio", "Trapezoide", "Pisiforme"], correcta: "Pisiforme" },
    { tipo: 'cerrada', q: "¿Cuáles son las raíces que forman el plexo braquial?", opciones: ["C3-T1", "C3-C7", "C5-T1", "C1-C8"], correcta: "C5-T1" },
    { tipo: 'cerrada', q: "La bifurcación de la arteria carótida común ocurre aproximadamente a nivel de:", opciones: ["C3", "C1", "C4", "C2"], correcta: "C4" },
    {
        tipo: 'relacion',
        q: "Relaciona las estructuras con sus respectivos orificios craneales:",
        emparejamientos: {
            "Arteria oftálmica": ["Conducto óptico", "Agujero espinoso", "Fisura orbitaria superior", "Agujero magno"],
            "Arteria meníngea media": ["Conducto óptico", "Agujero espinoso", "Fisura orbitaria superior", "Agujero magno"],
            "PC IV (Troclear)": ["Conducto óptico", "Agujero espinoso", "Fisura orbitaria superior", "Agujero magno"],
            "PC VI (Abducens)": ["Conducto óptico", "Agujero espinoso", "Fisura orbitaria superior", "Agujero magno"],
            "Arteria vertebral": ["Conducto óptico", "Agujero espinoso", "Fisura orbitaria superior", "Agujero magno"],
            "PC III (Oculomotor)": ["Conducto óptico", "Agujero espinoso", "Fisura orbitaria superior", "Agujero magno"]
        },
        correcta: {
            "Arteria oftálmica": "Conducto óptico",
            "Arteria meníngea media": "Agujero espinoso",
            "PC IV (Troclear)": "Fisura orbitaria superior",
            "PC VI (Abducens)": "Fisura orbitaria superior",
            "Arteria vertebral": "Agujero magno",
            "PC III (Oculomotor)": "Fisura orbitaria superior"
        }
    },
    { tipo: 'cerrada', q: "Los músculos de la lengua están inervados por un mismo nervio excepto el Palatogloso que está inervado por:", opciones: ["NC V", "NC IX", "NC XI", "NC X"], correcta: "NC X" },
    { tipo: 'cerrada', q: "Este músculo del brazo se considera el principal extensor del codo que ayuda a estabilizar la articulación escapulohumeral:", opciones: ["Coracobraquial", "Pronador cuadrado", "Bíceps braquial", "Tríceps braquial"], correcta: "Tríceps braquial" },
    { tipo: 'cerrada', q: "¿Cuál de las siguientes arterias es rama directa del arco aórtico?", opciones: ["Subclavia derecha", "Arteria carótida común izquierda", "Carótida externa derecha", "Carótida común derecha"], correcta: "Arteria carótida común izquierda" },
    { tipo: 'cerrada', q: "El cuerpo de las mamas femeninas descansa en el lecho de la mama, formado en sus dos terceras partes por:", opciones: ["Fascia pectoral", "1era y 3era costilla", "Pectoral menor", "Serrato anterior"], correcta: "Fascia pectoral" },
    { tipo: 'cerrada', q: "Estructura que forma parte del contenido del triángulo occipital del cuello:", opciones: ["Nervio vago", "Glándula submandibular", "Nervio hipogloso", "Nervio accesorio (NC XI)"], correcta: "Nervio accesorio (NC XI)" },
    { tipo: 'cerrada', q: "¿Cuál de las siguientes estructuras separa las aurículas de los ventrículos?", opciones: ["Tabique Interventricular", "Surco coronario", "Surco Interventricular anterior", "Septo interauricular"], correcta: "Surco coronario" },
    { tipo: 'cerrada', q: "Lesión en el triángulo posterior con dificultad para elevar el hombro y rotación lateral de la cabeza:", opciones: ["Omohioideo - Ncervical transverso", "Esternocleidomastoideo - Nhipogloso", "Escaleno medio - NFrénico", "Trapecio - Nervio accesorio (PC XI)"], correcta: "Trapecio - Nervio accesorio (PC XI)" },
    { tipo: 'cerrada', q: "Núcleo del PC III que participa en los reflejos fotomotor directo y consensual:", opciones: ["Núcleo del tracto solitario", "Núcleo motor dorsal", "Núcleo de Edinger-Westphal", "Núcleo sensitivo principal"], correcta: "Núcleo de Edinger-Westphal" },
    { tipo: 'cerrada', q: "¿Cuál arteria irriga principalmente el encéfalo anterior?", opciones: ["Arteria tiroidea inferior", "Arteria vertebral", "Arteria carótida interna", "Arteria carótida externa"], correcta: "Arteria carótida interna" },
    { tipo: 'cerrada', q: "¿Qué nervio se comprime en el síndrome del túnel del carpo?", opciones: ["NCubital", "NMusculocutaneo", "NMediano", "NRadial"], correcta: "NMediano" },
    { tipo: 'cerrada', q: "Las glándulas mamarias están unidas a la dermis por ligamentos cutáneos conocidos como:", opciones: ["Ligamentos de Louis", "Ligamentos de Cooper", "Ligamentos de Douglas", "Ligamentos de Spence"], correcta: "Ligamentos de Cooper" },
    { tipo: 'cerrada', q: "¿Cuál es el seno venoso más grande de la duramadre?", opciones: ["Seno cavernoso", "Seno recto", "Seno sagital superior", "Seno sagital inferior"], correcta: "Seno sagital superior" },
    { tipo: 'cerrada', q: "Con respecto a los lóbulos pulmonares ¿Cuál de ellos contiene a la língula?", opciones: ["Lóbulo inferior izquierdo", "Lóbulo superior del pulmón izquierdo", "Lóbulo medio derecho", "Lóbulo inferior derecho"], correcta: "Lóbulo superior del pulmón izquierdo" },
    { tipo: 'cerrada', q: "Infarto en la cara anterior del corazón, ¿qué arteria es más probable que esté ocluida?", opciones: ["Arteria marginal derecha", "Arteria coronaria derecha", "Arteria descendente anterior", "Arteria circunfleja"], correcta: "Arteria descendente anterior" },
    { tipo: 'cerrada', q: "Todos estos músculos conforman el manguito de los rotadores, excepto:", opciones: ["Infraespinoso", "Redondo mayor", "Supraespinoso", "Subescapular"], correcta: "Redondo mayor" },
    { tipo: 'cerrada', q: "Costilla que forma parte del grupo de las vertebrocondrales (falsas):", opciones: ["C1", "C6", "C8", "C11"], correcta: "C8" },
    { tipo: 'cerrada', q: "Músculo extensor del antebrazo que se inserta en la falange distal del dedo índice:", opciones: ["Extensor radial corto", "Extensor del meñique", "Extensor ulnar", "Extensor del índice"], correcta: "Extensor del índice" },
    { tipo: 'cerrada', q: "Nervio responsable de la inervación motora de la mayoría de los músculos intrínsecos de la mano:", opciones: ["NAxilar", "NCubital", "NMediano", "NRadial"], correcta: "NCubital" },
    { tipo: 'cerrada', q: "¿Cuál de las siguientes es una rama de la arteria carótida externa?", opciones: ["Arteria vertebral", "Arteria oftálmica", "Arteria cerebral media", "Arteria tiroidea superior"], correcta: "Arteria tiroidea superior" },
    { tipo: 'cerrada', q: "¿Qué músculo del antebrazo se inserta en la aponeurosis palmar y ayuda a tensarla?", opciones: ["Flexor radial del carpo", "Pronador redondo", "Flexor profundo de los dedos", "Palmar largo"], correcta: "Palmar largo" },
    { tipo: 'cerrada', q: "En relación al aparato lagrimal, es correcto que:", opciones: ["Los conductillos secretan líquido", "El saco lleva líquido a la glándula", "Las glándulas tarsales drenan el saco", "El conducto nasolagrimal conduce al meato inferior"], correcta: "El conducto nasolagrimal conduce al meato inferior" },
    { tipo: 'cerrada', q: "El ángulo del esternón (de Louis) se encuentra a nivel de:", opciones: ["T6 - T7", "T5 - T6", "T3 - T4", "Disco intervertebral T4 - T5"], correcta: "Disco intervertebral T4 - T5" },
    { tipo: 'cerrada', q: "El nervio radial es rama terminal de cuál fascículo:", opciones: ["Fascículo lateral", "Fascículo medial", "Tronco inferior", "Fascículo posterior"], correcta: "Fascículo posterior" },
    { tipo: 'cerrada', q: "Nervio que provee la sensibilidad somática (táctil, dolor, temperatura) de la cara:", opciones: ["NC IX", "NC XI", "NC VII", "NC V"], correcta: "NC V" },
    { tipo: 'cerrada', q: "Tipo de articulación que une las costillas verdaderas (2da-7ma) con el esternón:", opciones: ["Sinovial condilea", "Sinostosis", "Sinovial plana", "Sincondrosis"], correcta: "Sinovial plana" },
    { tipo: 'cerrada', q: "Función de las granulaciones aracnoideas:", opciones: ["Producción de LCR", "Producción de sangre", "Reabsorción de LCR hacia los senos venosos", "Paso de nervios"], correcta: "Reabsorción de LCR hacia los senos venosos" },
    { tipo: 'cerrada', q: "Músculo intrínseco que estrecha y alarga (protruye) la lengua:", opciones: ["Longitudinal superior", "Geniogloso", "Longitudinal anterior", "Transverso"], correcta: "Transverso" },
    { tipo: 'cerrada', q: "Principal responsable de la inspiración en reposo:", opciones: ["Esternocleidomastoideo", "Intercostal interno", "Escaleno anterior", "Diafragma"], correcta: "Diafragma" },
    { tipo: 'cerrada', q: "Parte del hueso esfenoides que participa en la formación del Pterion:", opciones: ["Alas menores", "Silla turca", "Cuerpo", "Alas mayores"], correcta: "Alas mayores" },
    { tipo: 'cerrada', q: "El paladar está irrigado principalmente por:", opciones: ["Arteria vertebral y Palatina", "Lingual y faríngea", "Facial y mandibular", "Arteria maxilar y arteria facial"], correcta: "Arteria maxilar y arteria facial" },
    { tipo: 'cerrada', q: "Válvula afectada en una disfunción entre aurícula izquierda y ventrículo izquierdo:", opciones: ["Aórtica", "Tricúspide", "Pulmonar", "Válvula Mitral"], correcta: "Válvula Mitral" },
    { tipo: 'cerrada', q: "La arteria vertebral es rama de la:", opciones: ["Arteria carótida externa", "Arteria carótida común", "Arteria carótida interna", "Arteria subclavia"], correcta: "Arteria subclavia" },
    { tipo: 'cerrada', q: "Principal responsable de la pronación rápida o con resistencia:", opciones: ["Pronador cuadrado", "Supinador", "Braquiorradial", "Pronador redondo"], correcta: "Pronador redondo" },
    { tipo: 'cerrada', q: "El hueso donde se localiza la sutura metópica (en el feto/recién nacido) es:", opciones: ["Parietal", "Nasal", "Temporal", "Frontal"], correcta: "Frontal" },
    { tipo: 'cerrada', q: "Los músculos extrínsecos de la lengua controlan principalmente su:", opciones: ["Forma", "Humedad", "Temperatura", "Posición"], correcta: "Posición" },
    { tipo: 'cerrada', q: "Músculo que conforma la mayor parte de la lengua y se inserta en la espina mentoniana:", opciones: ["Palatogloso", "Estilogloso", "Hiogloso", "Geniogloso"], correcta: "Geniogloso" },
    { tipo: 'cerrada', q: "Ubicación del soma de la neurona de 2do orden del tracto espinotalámico:", opciones: ["Ganglio raíz posterior", "Núcleo grácil", "Núcleo ventral posterolateral", "Sustancia gelatinosa"], correcta: "Sustancia gelatinosa" },
    { tipo: 'cerrada', q: "El túnel del carpo está limitado anteriormente por:", opciones: ["Ligamento dorsal", "Ligamento colateral", "Ligamento transverso", "Retináculo flexor"], correcta: "Retináculo flexor" },
    { tipo: 'cerrada', q: "Estructura nerviosa contenida en la vaina carotídea:", opciones: ["NFrénico", "NAccesorio", "NGlosofaríngeo", "Nervio Vago (NC X)"], correcta: "Nervio Vago (NC X)" },
    { tipo: 'cerrada', q: "En relación a las pleuras, la afirmación correcta es:", opciones: ["Fascia endotorácica", "Porción mediastínica", "Porción diafragmática", "La membrana suprapleural recubre la porción cervical"], correcta: "La membrana suprapleural recubre la porción cervical" },
    { tipo: 'cerrada', q: "Clasificación de la articulación del codo (humeroulnar):", opciones: ["Silla de montar", "Pivote", "Enartrosis", "Ginglimo"], correcta: "Ginglimo" },
    { tipo: 'cerrada', q: "Capa meníngea más externa en contacto con el hueso:", opciones: ["Piamadre", "Aracnoides", "Endoneuro", "Duramadre"], correcta: "Duramadre" },
    { tipo: 'cerrada', q: "Rama terminal de la carótida externa que irriga el cuero cabelludo:", opciones: ["Auricular posterior", "Facial", "Maxilar", "Arteria temporal superficial"], correcta: "Arteria temporal superficial" },
    { tipo: 'cerrada', q: "Estructuras que conforman el núcleo lenticular:", opciones: ["Estriado + Claustro", "Putamen + Amigdalino", "Caudado + putamen", "Putamen + Globo pálido"], correcta: "Putamen + Globo pálido" },
    { tipo: 'cerrada', q: "El seno cavernoso drena finalmente hacia la:", opciones: ["Vena subclavia", "Vena de Galeno", "Vena yugular externa", "Vena yugular interna"], correcta: "Vena yugular interna" },
    { tipo: 'cerrada', q: "El seno recto se forma por la unión de:", opciones: ["Senos transversos", "Venas yugulares", "Seno sagital superior y cavernoso", "Seno sagital inferior y vena cerebral magna"], correcta: "Seno sagital inferior y vena cerebral magna" },
    { tipo: 'cerrada', q: "La tienda del cerebelo (Tentorio) es un repliegue de la:", opciones: ["Piamadre", "Capa perióstica", "Aracnoides", "Duramadre"], correcta: "Duramadre" },
    { tipo: 'cerrada', q: "Dificultad para girar la cabeza y elevar el hombro derecho indica afectación del:", opciones: ["Deltoides", "Platisma", "Trapecio", "Músculo Esternocleidomastoideo"], correcta: "Músculo Esternocleidomastoideo" },
    { tipo: 'cerrada', q: "Fosa piramidal medial a la fosa infratemporal que contiene al nervio:", opciones: ["PC VII mandibular", "PC VII auricular", "PC V oftálmica", "PC V rama maxilar"], correcta: "PC V rama maxilar" },
    { tipo: 'cerrada', q: "Arterias que conectan las cerebrales anteriores en el polígono de Willis:", opciones: ["Basilar", "Comunicante posterior", "Vertebrales", "Arteria comunicante anterior"], correcta: "Arteria comunicante anterior" },
    { tipo: 'cerrada', q: "¿Qué músculo forma el límite posterior del triángulo anterior del cuello?", opciones: ["Omohioideo", "Escaleno medio", "Trapecio", "Esternocleidomastoideo"], correcta: "Esternocleidomastoideo" },
    { tipo: 'cerrada', q: "La producción del líquido lagrimal se estimula por impulsos parasimpáticos del par craneal:", opciones: ["PC X", "PC III", "PC V", "PC VII"], correcta: "PC VII" },
    { tipo: 'cerrada', q: "La arteria basilar se forma por la unión de las:", opciones: ["Carótidas internas", "Cerebrales anteriores", "Cerebrales posteriores", "Arterias vertebrales"], correcta: "Arterias vertebrales" },
    { tipo: 'cerrada', q: "¿Qué músculo realiza principalmente la oposición del pulgar?", opciones: ["Flexor largo del pulgar", "Aductor del pulgar", "Extensor corto del pulgar", "Oponente del pulgar"], correcta: "Oponente del pulgar" },
    { tipo: 'cerrada', q: "Músculo del cuello que va de los procesos transversos de C1-C4 al borde medial de la escápula:", opciones: ["Esplenio de la cabeza", "Escaleno medio", "Largo de la cabeza", "Elevador de la escápula"], correcta: "Elevador de la escápula" },
    { tipo: 'cerrada', q: "¿Cuál de los siguientes agujeros craneales transmite el nervio trigémino (V3)?", opciones: ["Agujero redondo", "Conducto óptico", "Agujero magno", "Agujero oval"], correcta: "Agujero oval" },
    { tipo: 'cerrada', q: "Estructura que conforma la pared superior de la órbita:", opciones: ["Septo orbitario", "Lámina orbitaria del etmoides", "Fosita del saco lagrimal", "Porción orbitaria del frontal"], correcta: "Porción orbitaria del frontal" },
    { tipo: 'cerrada', q: "Válvula cardíaca que contiene tres músculos papilares en la cavidad ventricular derecha:", opciones: ["Mitral", "Aórtica", "Pulmonar", "Válvula Tricúspide"], correcta: "Válvula Tricúspide" },
    {
        tipo: 'relacion',
        q: "Relaciona las siguientes columnas con las respuestas correctas:",
        emparejamientos: {
            "Base del corazón": ["Atrio izquierdo", "Ventrículo derecho", "Ventrículo izquierdo", "Atrio derecho"],
            "Cara anterior (esternocostal)": ["Atrio izquierdo", "Ventrículo derecho", "Ventrículo izquierdo", "Atrio derecho"],
            "Cara inferior del corazón": ["Atrio izquierdo", "Ventrículo derecho", "Ventrículo izquierdo", "Atrio derecho"],
            "Cara pulmonar derecha": ["Atrio izquierdo", "Ventrículo derecho", "Ventrículo izquierdo", "Atrio derecho"]
        },
        correcta: {
            "Base del corazón": "Atrio izquierdo",
            "Cara anterior (esternocostal)": "Ventrículo derecho",
            "Cara inferior del corazón": "Ventrículo izquierdo",
            "Cara pulmonar derecha": "Atrio derecho"
        }
    },
    { tipo: 'cerrada', q: "Los músculos del paladar reciben inervación del PC X, a excepción del tensor del velo del paladar que recibe fibras del:", opciones: ["PC IX", "PC V maxilar", "PC V mandibular", "PC VII"], correcta: "PC V mandibular" },
    { tipo: 'cerrada', q: "¿Qué nervio atraviesa el foramen redondo?", opciones: ["Nervio Oftálmico", "Nervio Mandibular", "Nervio Abducens", "Nervio Maxilar"], correcta: "Nervio Maxilar" },
    { tipo: 'cerrada', q: "El triángulo submandibular contiene principalmente a:", opciones: ["Nervio accesorio", "Arteria carótida", "Músculo escaleno", "La glándula submandibular"], correcta: "La glándula submandibular" },
    { tipo: 'cerrada', q: "Arteria que se origina de la arteria basilar y forma parte del polígono de Willis:", opciones: ["Arteria cerebral anterior", "Arteria comunicante anterior", "Arteria carótida interna", "Arteria cerebral posterior"], correcta: "Arteria cerebral posterior" },
    { tipo: 'cerrada', q: "El límite superior del estrecho superior de la pelvis está formado por:", opciones: ["Sínfisis del pubis", "Espina isquiática", "Cresta ilíaca", "El promontorio del sacro"], correcta: "El promontorio del sacro" },
    { tipo: 'cerrada', q: "¿Cuál es el nombre de la primera vértebra cervical?", opciones: ["Axis", "Prominente", "Coccígea", "Atlas"], correcta: "Atlas" }
];
let historial = []; 
let preguntasSeleccionadas = [];
let indicePregunta = 0;
let buenas = 0;
let tiempo = 30;
let cronometro;
let cantidadDeseada = 10;

window.onload = () => {
    const infoMax = document.getElementById('info-max');
    if (infoMax && typeof bancoPreguntas !== 'undefined') {
        infoMax.innerText = `Disponibles: ${bancoPreguntas.length}`;
    }
};

function shuffle(array) {
    let copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function prepararQuiz() {
    let input = document.getElementById('num-preguntas');
    let valor = parseInt(input.value);
    cantidadDeseada = (isNaN(valor) || valor < 1) ? 10 : Math.min(valor, bancoPreguntas.length);
    iniciarQuiz();
}

function iniciarQuiz() {
    // Para ir en orden de la 1 a la 70, quitar el shuffle()
    preguntasSeleccionadas = shuffle(bancoPreguntas).slice(0, cantidadDeseada);
    indicePregunta = 0; buenas = 0; historial = [];
    
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
    const actionCont = document.getElementById('action-container');
    optionsCont.innerHTML = '';
    actionCont.style.display = 'none';

    if (p.tipo === 'cerrada') {
        const opcionesMezcladas = shuffle(p.opciones);
        opcionesMezcladas.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'opcion-btn';
            btn.innerText = opt;
            btn.onclick = () => validarRespuestaCerrada(opt);
            optionsCont.appendChild(btn);
        });
    } 
    else if (p.tipo === 'relacion') {
        actionCont.style.display = 'block';
        // Crear filas de emparejamiento
        for (const [item, opciones] of Object.entries(p.emparejamientos)) {
            const row = document.createElement('div');
            row.style.margin = "10px 0";
            row.innerHTML = `
                <label style="display:block; margin-bottom:5px;">${item}</label>
                <select class="relacion-select" data-key="${item}" style="width:100%; padding:8px; border-radius:5px;">
                    <option value="">Seleccione...</option>
                    ${opciones.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                </select>
            `;
            optionsCont.appendChild(row);
        }
    }
    iniciarTimer();
}

function iniciarTimer() {
    cronometro = setInterval(() => {
        tiempo--;
        document.getElementById('timer').innerText = `Tiempo: ${tiempo}s`;
        if (tiempo <= 0) {
            const p = preguntasSeleccionadas[indicePregunta];
            p.tipo === 'cerrada' ? validarRespuestaCerrada("Tiempo agotado") : validarRelacion();
        }
    }, 1000);
}

function validarRespuestaCerrada(resp) {
    clearInterval(cronometro);
    const p = preguntasSeleccionadas[indicePregunta];
    const esCorrecta = (resp === p.correcta);
    if (esCorrecta) buenas++;
    historial.push({ q: p.q, c: p.correcta, ok: esCorrecta, r: resp });
    siguientePregunta();
}

function validarRelacion() {
    clearInterval(cronometro);
    const p = preguntasSeleccionadas[indicePregunta];
    const selects = document.querySelectorAll('.relacion-select');
    let aciertos = 0;
    let totalItems = Object.keys(p.correcta).length;

    selects.forEach(select => {
        const key = select.getAttribute('data-key');
        if (select.value === p.correcta[key]) aciertos++;
    });

    const pasoPregunta = (aciertos === totalItems);
    if (pasoPregunta) buenas++;
    
    historial.push({ 
        q: p.q, 
        c: "Relación completada correctamente", 
        ok: pasoPregunta, 
        r: `Aciertos: ${aciertos}/${totalItems}` 
    });
    siguientePregunta();
}

function siguientePregunta() {
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
    document.getElementById('puntaje-texto').innerHTML = `Puntaje: ${buenas} / ${cantidadDeseada}`;

    const repaso = document.getElementById('repaso-container');
    repaso.innerHTML = historial.map((item, i) => `
        <div style="margin-bottom:10px; border-bottom:1px solid #ddd; padding-bottom:5px;">
            <strong>${i+1}.</strong> ${item.ok ? '✅' : '❌'} ${item.q}<br>
            <small>Tu respuesta: ${item.r}</small><br>
            ${!item.ok ? `<small style="color:green; font-weight:bold;">Correcta: ${item.c}</small>` : ''}
        </div>
    `).join('');
}

function actualizarInterfaz() {
    document.getElementById('timer').innerText = `Tiempo: ${tiempo}s`;
    document.getElementById('progress').innerText = `Pregunta ${indicePregunta + 1}/${cantidadDeseada}`;
}