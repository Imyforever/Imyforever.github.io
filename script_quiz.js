let historial = []; 
const bancoPreguntas = [
    // --- Capítulo 3: Ciclo Celular ---
    { tipo: 'cerrada', q: "¿Qué es el ciclo celular?", opciones: ["Muerte programada de la célula", "Serie de eventos moleculares, morfológicos y funcionales", "Proceso exclusivo de síntesis proteica"], correcta: "Serie de eventos moleculares, morfológicos y funcionales" },
    { tipo: 'cerrada', q: "¿En qué culmina el ciclo celular?", opciones: ["Con la duplicación del ADN", "Con la división de las células", "Con la fase G0"], correcta: "Con la división de las células" },
    { tipo: 'cerrada', q: "¿Cuál es la duración promedio del ciclo celular?", opciones: ["8-12 hrs", "16-24 hrs", "30-36 hrs"], correcta: "16-24 hrs" },
    { tipo: 'cerrada', q: "En las células somáticas, ¿de qué periodos consta el ciclo celular?", opciones: ["Interfase y mitosis", "Interfase y meiosis", "G1 y S"], correcta: "Interfase y mitosis" },
    { tipo: 'cerrada', q: "En las células de la línea germinal, ¿de qué periodos consta el ciclo celular?", opciones: ["Interfase y mitosis", "Interfase y meiosis", "G2 y Meiosis"], correcta: "Interfase y meiosis" },
    { tipo: 'cerrada', q: "¿En cuántas fases se divide la interfase según la duplicación del material genético?", opciones: ["Dos: G1 y G2", "Tres: G1, S y G2", "Cuatro: G1, S, G2 y M"], correcta: "Tres: G1, S y G2" },
    { tipo: 'cerrada', q: "¿Cómo se le conoce a la fase G1?", opciones: ["Replicación del ADN", "Crecimiento inicial", "Crecimiento final"], correcta: "Crecimiento inicial" },
    { tipo: 'cerrada', q: "¿Cómo se le conoce a la fase S?", opciones: ["Replicación del ADN", "Crecimiento inicial", "Crecimiento final"], correcta: "Replicación del ADN" },
    { tipo: 'cerrada', q: "¿Cómo se le conoce a la fase G2?", opciones: ["Replicación del ADN", "Crecimiento inicial", "Crecimiento final y preparación"], correcta: "Crecimiento final y preparación" },
    { tipo: 'cerrada', q: "Durante la segmentación del cigoto hay crecimiento celular:", opciones: ["Verdadero", "Falso"], correcta: "Falso" },
    { tipo: 'cerrada', q: "Durante la segmentación del cigoto, los blastómeros aumentan en volumen:", opciones: ["Verdadero", "Falso"], correcta: "Falso" },
    { tipo: 'cerrada', q: "La división celular durante la segmentación del cigoto es muy acelerada:", opciones: ["Verdadero", "Falso"], correcta: "Verdadero" },
    { tipo: 'cerrada', q: "¿Por qué la división en la segmentación es tan acelerada?", opciones: ["Porque no hay replicación de ADN", "Porque solo consta de fases S y M", "Porque ocurre en el útero"], correcta: "Porque solo consta de fases S y M" },
    { tipo: 'cerrada', q: "¿En qué estadio se empieza a realizar el ciclo celular completo?", opciones: ["Cigoto", "Mórula", "Blastocisto"], correcta: "Blastocisto" },
    { tipo: 'cerrada', q: "Todas las células son cíclicas:", opciones: ["Verdadero", "Falso"], correcta: "Falso" },
    { tipo: 'cerrada', q: "¿Hacia qué fase se derivan las células que salen del ciclo en G1?", opciones: ["G0", "Fase S", "Fase M"], correcta: "G0" },
    { tipo: 'cerrada', q: "¿Qué sucede en la fase G0?", opciones: ["La célula muere", "Se encienden programas genéticos de diferenciación", "El ADN se duplica continuamente"], correcta: "Se encienden programas genéticos de diferenciación" },
    { tipo: 'cerrada', q: "¿Cuántas células se dividen por segundo en un adulto para reemplazo?", opciones: ["1 millón", "10 millones", "25 millones"], correcta: "25 millones" },
    { tipo: 'cerrada', q: "¿Qué significa un 'alto nivel de actividad mitótica'?", opciones: ["Células que nunca se dividen", "Células que se dividen permanentemente", "Células que mueren rápido"], correcta: "Células que se dividen permanentemente" },
    { tipo: 'cerrada', q: "¿Qué caracteriza a las células en periodo variable de G0?", opciones: ["No se dividen nunca", "Se dividen solo bajo estímulo", "Son células cancerígenas"], correcta: "Se dividen solo bajo estímulo" },
    { tipo: 'cerrada', q: "Ejemplo de células con alto nivel de actividad mitótica:", opciones: ["Neuronas", "Células hematopoyéticas", "Hepatocitos"], correcta: "Células hematopoyéticas" },
    { tipo: 'cerrada', q: "Ejemplo de células en periodo variable de G0:", opciones: ["Neuronas", "Hepatocitos", "Fibras musculares"], correcta: "Hepatocitos" },
    { tipo: 'cerrada', q: "Ejemplo de células que abandonan definitivamente el ciclo celular:", opciones: ["Hepatocitos", "Neuronas", "Células de la piel"], correcta: "Neuronas" },

    // --- Capítulo 4: Gametogénesis ---
    { tipo: 'cerrada', q: "¿Cuándo se originan las células germinales primordiales (CGP)?", opciones: ["2da y 3ra semana", "5ta semana", "En la pubertad"], correcta: "2da y 3ra semana" },
    { tipo: 'cerrada', q: "¿Desde dónde migran las CGP en la 4ta semana?", opciones: ["Del epiblasto al hipoblasto", "Del saco vitelino a las gónadas", "Del útero a los ovarios"], correcta: "Del saco vitelino a las gónadas" },
    { tipo: 'cerrada', q: "¿Dónde se sitúan las gónadas en desarrollo?", opciones: ["Pared anterior abdominal", "Pared posterior del celoma intraembrionario", "Saco vitelino"], correcta: "Pared posterior del celoma intraembrionario" },
    { tipo: 'cerrada', q: "Si las CGP migran a otro sitio y sobreviven, dan origen a:", opciones: ["Gemelos", "Teratomas", "Cáncer de colon"], correcta: "Teratomas" },
    { tipo: 'cerrada', q: "¿De qué otras células pueden provenir los teratomas?", opciones: ["Células musculares", "Células pluripotenciales", "Solo de las CGP"], correcta: "Células pluripotenciales" },

    // --- Espermatogénesis ---
    { tipo: 'cerrada', q: "¿Cuándo empieza la espermatogénesis?", opciones: ["Vida prenatal", "A los 10 años", "A los 13 años (pubertad)"], correcta: "A los 13 años (pubertad)" },
    { tipo: 'cerrada', q: "¿Qué estructuras hay dentro de los lobulillos antes de la pubertad?", opciones: ["Túbulos seminíferos", "Cordones seminíferos", "Epidídimo"], correcta: "Cordones seminíferos" },
    { tipo: 'cerrada', q: "¿En qué se transforman los cordones seminíferos en la pubertad?", opciones: ["Túbulos seminíferos", "Conductos eferentes", "Red testicular"], correcta: "Túbulos seminíferos" },
    { tipo: 'cerrada', q: "¿Qué tejido rodea a los túbulos seminíferos?", opciones: ["Tejido epitelial", "Tejido conectivo peritubular", "Tejido muscular liso"], correcta: "Tejido conectivo peritubular" },
    { tipo: 'cerrada', q: "¿Qué células se encuentran en el tejido conectivo peritubular?", opciones: ["Células de Sertoli", "Células de Leydig", "Espermatogonias"], correcta: "Células de Leydig" },
    { tipo: 'cerrada', q: "¿Qué estirpes celulares forman el epitelio seminífero?", opciones: ["Sertoli y espermatogénicas", "Leydig y Sertoli", "Leydig y espermatogénicas"], correcta: "Sertoli y espermatogénicas" },
    { tipo: 'cerrada', q: "¿Qué células forman la barrera hematotesticular?", opciones: ["Leydig", "Sertoli", "Espermátides"], correcta: "Sertoli" },
    { tipo: 'cerrada', q: "¿Qué hormonas captan las células de Sertoli?", opciones: ["LH y Prolactina", "Testosterona y FSH", "Estrógenos"], correcta: "Testosterona y FSH" },
    { tipo: 'cerrada', q: "¿Quién secreta el factor inhibidor mülleriano en el varón?", opciones: ["Células de Sertoli", "Células de Leydig", "Próstata"], correcta: "Células de Sertoli" },
    { tipo: 'cerrada', q: "¿Dónde se sitúan las células espermatogénicas más maduras?", opciones: ["En la periferia", "Cerca de la luz del túbulo", "En el tejido intersticial"], correcta: "Cerca de la luz del túbulo" },
    { tipo: 'cerrada', q: "¿Qué carga cromosómica tienen las espermatogonias primitivas?", opciones: ["Haploide (1n)", "Diploide (2n) bivalente", "Diploide (2n) monovalente"], correcta: "Diploide (2n) bivalente" },
    { tipo: 'cerrada', q: "¿Cómo se les llama a las espermatogonias A1?", opciones: ["Claras", "Oscuras", "Intermedias"], correcta: "Oscuras" },
    { tipo: 'cerrada', q: "¿Qué carga tienen los espermatocitos primarios?", opciones: ["46, XY", "23, X", "23, Y"], correcta: "46, XY" },
    { tipo: 'cerrada', q: "¿Cuál es la última generación de espermatogonias que hace mitosis?", opciones: ["Espermatogonias A", "Espermatogonias B", "Espermatocitos primarios"], correcta: "Espermatogonias B" },
    { tipo: 'cerrada', q: "¿Qué proceso realizan los espermatocitos primarios?", opciones: ["Mitosis", "Meiosis I", "Meiosis II"], correcta: "Meiosis I" },
    { tipo: 'cerrada', q: "¿Cuál es el resultado de la meiosis I en el varón?", opciones: ["Espermatocitos secundarios", "Espermátides", "Espermatozoides"], correcta: "Espermatocitos secundarios" },
    { tipo: 'cerrada', q: "¿Qué carga tienen los espermatocitos secundarios?", opciones: ["2n bivalente", "1n bivalente (23X o 23Y)", "1n monovalente"], correcta: "1n bivalente (23X o 23Y)" },
    { tipo: 'cerrada', q: "¿Cuánto dura la meiosis I del espermatocito primario?", opciones: ["8 horas", "12 días", "24 días"], correcta: "24 días" },
    { tipo: 'cerrada', q: "¿Qué proceso realizan los espermatocitos secundarios?", opciones: ["Meiosis I", "Meiosis II", "Espermiogénesis"], correcta: "Meiosis II" },
    { tipo: 'cerrada', q: "¿Cuál es el resultado de la meiosis II en el varón?", opciones: ["Espermatocitos primarios", "Espermátides", "Espermatozoides"], correcta: "Espermátides" },
    { tipo: 'cerrada', q: "¿Cuánto dura la meiosis II del espermatocito secundario?", opciones: ["8 horas", "24 horas", "24 días"], correcta: "8 horas" },
    { tipo: 'cerrada', q: "Carga cromosómica de las espermátides:", opciones: ["Haploide monovalente", "Haploide bivalente", "Diploide monovalente"], correcta: "Haploide monovalente" },
    { tipo: 'cerrada', q: "¿Cómo se le llama al proceso de diferenciación de las espermátides?", opciones: ["Espermatogénesis", "Espermiogénesis", "Meiosis III"], correcta: "Espermiogénesis" },
    { tipo: 'cerrada', q: "¿Qué estructura forma el acrosoma?", opciones: ["Mitocondrias", "Retículo de Golgi", "Centriolo distal"], correcta: "Retículo de Golgi" },
    { tipo: 'cerrada', q: "¿Qué estructura da origen al flagelo?", opciones: ["Centriolo distal", "Aparato de Golgi", "Núcleo"], correcta: "Centriolo distal" },
    { tipo: 'cerrada', q: "¿Dónde se localizan las mitocondrias en el espermatozoide?", opciones: ["En la cabeza", "Alrededor del cuello (vaina)", "A lo largo de toda la cola"], correcta: "Alrededor del cuello (vaina)" },
    { tipo: 'cerrada', q: "¿Cuánto tiempo tarda la maduración morfológica?", opciones: ["12 días", "30 días", "60-70 días"], correcta: "60-70 días" },
    { tipo: 'cerrada', q: "¿Dónde ocurre la maduración bioquímica de los espermatozoides?", opciones: ["En los testículos", "En el epidídimo", "En la vagina"], correcta: "En el epidídimo" },
    { tipo: 'cerrada', q: "¿Cuánto dura la maduración bioquímica?", opciones: ["8 horas", "12 días", "24 días"], correcta: "12 días" },
    { tipo: 'cerrada', q: "¿Qué adquieren en la maduración bioquímica?", opciones: ["Acrosoma", "Motilidad propia y cubierta glucoproteica", "Carga haploide"], correcta: "Motilidad propia y cubierta glucoproteica" },
    { tipo: 'cerrada', q: "Porcentaje de espermatozoides anómalos en un varón fértil:", opciones: ["0%", "10%", "50%"], correcta: "10%" },
    { tipo: 'cerrada', q: "¿Qué caracteriza a un espermatozoide bicéfalo?", opciones: ["Dos flagelos", "Dos cabezas y un flagelo", "Cabeza muy grande"], correcta: "Dos cabezas y un flagelo" },
    { tipo: 'cerrada', q: "Semen es la mezcla de espermatozoides con secreciones de:", opciones: ["Solo próstata", "Vesículas seminales, próstata y glándulas bulbouretrales", "Solo testículos"], correcta: "Vesículas seminales, próstata y glándulas bulbouretrales" },
    { tipo: 'cerrada', q: "Función de la fructosa en el semen:", opciones: ["Coagular el semen", "Energía para espermatozoides", "Neutralizar pH"], correcta: "Energía para espermatozoides" },
    { tipo: 'cerrada', q: "Función de la vesiculasa:", opciones: ["Nutrir", "Coagular el semen", "Dar movilidad"], correcta: "Coagular el semen" },
    { tipo: 'cerrada', q: "¿Qué porcentaje del semen aporta la próstata?", opciones: ["10%", "30%", "60%"], correcta: "30%" },
    { tipo: 'cerrada', q: "Cantidad normal de semen por eyaculación:", opciones: ["0.5-1ml", "2-3ml", "10ml"], correcta: "2-3ml" },
    { tipo: 'cerrada', q: "Concentración normal de espermatozoides por mililitro:", opciones: ["1-5 millones", "10-20 millones", "60-100 millones"], correcta: "60-100 millones" },
    { tipo: 'cerrada', q: "¿Qué hormona actúa sobre las células intersticiales (Leydig)?", opciones: ["FSH", "LH y Prolactina", "Estradiol"], correcta: "LH y Prolactina" },
    { tipo: 'cerrada', q: "Función de la inhibina producida por Sertoli:", opciones: ["Estimular FSH", "Frenar producción de FSH, LH y prolactina", "Producir testosterona"], correcta: "Frenar producción de FSH, LH y prolactina" },
    { tipo: 'cerrada', q: "¿Qué es un espermograma?", opciones: ["Análisis de forma", "Recuento de espermatozoides", "Prueba de ADN"], correcta: "Recuento de espermatozoides" },
    { tipo: 'cerrada', q: "Fórmula cromosómica del Síndrome de Klinefelter:", opciones: ["45, X", "47, XXY", "47, XY+21"], correcta: "47, XXY" },
    { tipo: 'cerrada', q: "Se considera oligozoospermia cuando el recuento es menor a:", opciones: ["50 millones/ml", "20 millones/ml", "1 millón/ml"], correcta: "20 millones/ml" },
    { tipo: 'cerrada', q: "¿Qué es la azoospermia?", opciones: ["Poca movilidad", "Ausencia de espermatozoides", "Muchos espermatozoides muertos"], correcta: "Ausencia de espermatozoides" },
    { tipo: 'cerrada', q: "¿Qué es la astenozoospermia?", opciones: ["Formas anómalas", "Vitalidad nula o deficiente", "Ausencia de eyaculado"], correcta: "Vitalidad nula o deficiente" },
    { tipo: 'cerrada', q: "Vida media del espermatozoide eyaculado:", opciones: ["24 horas", "3-4 días", "7 días"], correcta: "3-4 días" },

    // --- Ovogénesis ---
    { tipo: 'cerrada', q: "¿Cuándo inicia la ovogénesis?", opciones: ["En la pubertad", "En el periodo embrionario", "En el nacimiento"], correcta: "En el periodo embrionario" },
    { tipo: 'cerrada', q: "Número de ovogonias al quinto mes intrauterino:", opciones: ["2 millones", "7 millones", "40,000"], correcta: "7 millones" },
    { tipo: 'cerrada', q: "Número de ovogonias al séptimo mes intrauterino:", opciones: ["2 millones", "7 millones", "600,000"], correcta: "2 millones" },
    { tipo: 'cerrada', q: "¿Cómo se forma el folículo primordial?", opciones: ["Ovocito primario + células foliculares planas", "Ovocito secundario + zona pelúcida", "Ovogonia + teca"], correcta: "Ovocito primario + células foliculares planas" },
    { tipo: 'cerrada', q: "¿En qué fase se detiene la meiosis I del ovocito primario?", opciones: ["Metafase I", "Diploteno de la profase I", "Anafase I"], correcta: "Diploteno de la profase I" },
    { tipo: 'cerrada', q: "¿Por qué se detiene la meiosis en el ovocito primario?", opciones: ["Falta de LH", "Factor inhibidor de la meiosis de células foliculares", "Falta de nutrientes"], correcta: "Factor inhibidor de la meiosis de células foliculares" },
    { tipo: 'cerrada', q: "Ovocitos primarios al nacimiento:", opciones: ["2 millones", "600k a 800k", "40,000"], correcta: "600k a 800k" },
    { tipo: 'cerrada', q: "Ovocitos primarios que persisten hasta la pubertad:", opciones: ["40,000", "400,000", "1 millón"], correcta: "40,000" },
    { tipo: 'cerrada', q: "¿A qué edad termina el ciclo sexual de la mujer aprox?", opciones: ["40 años", "50 años", "65 años"], correcta: "50 años" },
    { tipo: 'cerrada', q: "¿Qué es la zona pelúcida?", opciones: ["Capa de tejido conectivo", "Estructura entre células granulosa y ovocito", "Membrana del ovario"], correcta: "Estructura entre células granulosa y ovocito" },
    { tipo: 'cerrada', q: "Hormona necesaria para el desarrollo folicular:", opciones: ["FSH", "LH", "Progesterona"], correcta: "FSH" },
    { tipo: 'cerrada', q: "Resultado de la meiosis I en la mujer:", opciones: ["Dos ovocitos secundarios", "Ovocito secundario y primer cuerpo polar", "Óvulo y segundo cuerpo polar"], correcta: "Ovocito secundario y primer cuerpo polar" },
    { tipo: 'cerrada', q: "¿En qué fase se detiene la meiosis II del ovocito secundario?", opciones: ["Profase II", "Metafase II", "Telofase II"], correcta: "Metafase II" },
    { tipo: 'cerrada', q: "¿Qué activa la terminación de la meiosis II en el ovocito?", opciones: ["Pico de LH", "Fertilización", "Menstruación"], correcta: "Fertilización" },
    { tipo: 'cerrada', q: "Vida del ovocito si no es fertilizado:", opciones: ["8 horas", "24 horas", "3-4 días"], correcta: "24 horas" },
    { tipo: 'cerrada', q: "Trisomía 21 es conocida como:", opciones: ["Síndrome de Edwards", "Síndrome de Down", "Síndrome de Patau"], correcta: "Síndrome de Down" },
    { tipo: 'cerrada', q: "Trisomía 18 es conocida como:", opciones: ["Síndrome de Down", "Síndrome de Edwards", "Síndrome de Turner"], correcta: "Síndrome de Edwards" },
    { tipo: 'cerrada', q: "Trisomía 13 es conocida como:", opciones: ["Síndrome de Patau", "Síndrome de Klinefelter", "Síndrome de Down"], correcta: "Síndrome de Patau" },
    { tipo: 'cerrada', q: "¿Qué órgano produce LH y FSH?", opciones: ["Ovarios", "Hipotálamo", "Adenohipófisis"], correcta: "Adenohipófisis" },
    { tipo: 'cerrada', q: "¿Qué enzima transforma testosterona en estradiol?", opciones: ["Vesiculasa", "Aromatasa", "Fibrinolisina"], correcta: "Aromatasa" },
    { tipo: 'cerrada', q: "¿Qué día ocurre la ovulación en un ciclo de 28 días?", opciones: ["Día 1", "Día 14", "Día 28"], correcta: "Día 14" },
    { tipo: 'cerrada', q: "¿Qué estructuras conforman el cúmulo oóforo?", opciones: ["Ovocito, zona pelúcida y corona radiada", "Teca interna y externa", "Cuerpo lúteo"], correcta: "Ovocito, zona pelúcida y corona radiada" },
    { tipo: 'cerrada', q: "El folículo roto se transforma inicialmente en:", opciones: ["Cuerpo albicans", "Folículo hemorrágico", "Cuerpo lúteo"], correcta: "Folículo hemorrágico" },
    { tipo: 'cerrada', q: "¿Qué hormona secreta principalmente el cuerpo lúteo?", opciones: ["FSH", "Progesterona y estrógenos", "hCG"], correcta: "Progesterona y estrógenos" },
    { tipo: 'cerrada', q: "Hormona que evita la menstruación si hay embarazo:", opciones: ["Estradiol", "hCG (Gonadotropina coriónica humana)", "LH"], correcta: "hCG (Gonadotropina coriónica humana)" },
    { tipo: 'cerrada', q: "¿En qué se transforma el cuerpo lúteo si no hay fertilización?", opciones: ["Cuerpo lúteo de la gestación", "Cuerpo lúteo en degeneración", "Folículo secundario"], correcta: "Cuerpo lúteo en degeneración" },
    { tipo: 'cerrada', q: "¿Qué capa endometrial se desprende en la menstruación?", opciones: ["Capa basal", "Capa funcional", "Miometrio"], correcta: "Capa funcional" },
    { tipo: 'cerrada', q: "Moco cervical en fase proliferativa:", opciones: ["Espeso y opaco", "Fluido y transparente", "Ausente"], correcta: "Fluido y transparente" },

    // --- Fertilización ---
    { tipo: 'cerrada', q: "Vida media de los espermatozoides tras ser liberados:", opciones: ["24 horas", "48-72 horas", "7 días"], correcta: "48-72 horas" },
    { tipo: 'cerrada', q: "pH vaginal modificado por el semen:", opciones: ["4.3", "7.2", "9.0"], correcta: "7.2" },
    { tipo: 'cerrada', q: "¿Dónde ocurre normalmente la fertilización?", opciones: ["Útero", "Porción ampular de la tuba", "Fimbrias"], correcta: "Porción ampular de la tuba" },
    { tipo: 'cerrada', q: "¿Cuántos espermatozoides llegan capacitados a la ampolla?", opciones: ["Millones", "200-300", "Solo 1"], correcta: "200-300" },
    { tipo: 'cerrada', q: "¿Qué glucoproteínas componen la zona pelúcida humana?", opciones: ["hZP1, hZP2, hZP3, hZP4", "Solo hZP3", "Colágeno y elastina"], correcta: "hZP1, hZP2, hZP3, hZP4" }
];

let preguntasSeleccionadas = [];
let indicePregunta = 0;
let buenas = 0;
let tiempo = 30;
let cronometro;
let cantidadDeseada = 10;

window.onload = () => {
    const infoMax = document.getElementById('info-max');
    if (infoMax) {
        infoMax.innerText = `Disponibles: ${bancoPreguntas.length}`;
    }
};

// Función para barajar arrays (Algoritmo Fisher-Yates)
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
    if (isNaN(valor) || valor < 5) { 
        alert("Mínimo 5 preguntas"); 
        return; 
    }
    cantidadDeseada = Math.min(valor, bancoPreguntas.length);
    iniciarQuiz();
}

function iniciarQuiz() {
    // Mezcla el banco de preguntas y selecciona la cantidad
    preguntasSeleccionadas = shuffle(bancoPreguntas).slice(0, cantidadDeseada);
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
    optionsCont.innerHTML = '';
    
    // BARAJADO DE RESPUESTAS: Mezclamos las opciones antes de crear los botones
    const opcionesMezcladas = shuffle(p.opciones);
    
    opcionesMezcladas.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'opcion-btn';
        btn.innerText = opt;
        btn.onclick = () => validarRespuesta(opt);
        optionsCont.appendChild(btn);
    });
    
    iniciarTimer();
}

function iniciarTimer() {
    cronometro = setInterval(() => {
        tiempo--;
        document.getElementById('timer').innerText = `Tiempo: ${tiempo}s`;
        if (tiempo <= 0) validarRespuesta("Tiempo agotado");
    }, 1000);
}

function validarRespuesta(resp) {
    clearInterval(cronometro);
    const p = preguntasSeleccionadas[indicePregunta];
    const esCorrecta = (resp === p.correcta);
    if (esCorrecta) buenas++;
    
    historial.push({ q: p.q, c: p.correcta, ok: esCorrecta });
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
    
    document.getElementById('puntaje-texto').innerHTML = `
        <div style="font-size: 1.8rem; font-weight: bold; color: #845ec2;">
            ${buenas} / ${cantidadDeseada}
        </div>
    `;

    const repaso = document.getElementById('repaso-container');
    repaso.innerHTML = historial.map((item, i) => `
        <div style="margin-bottom:10px; border-bottom:1px solid #ddd; padding-bottom:5px;">
            <strong>${i+1}.</strong> ${item.ok ? '✅' : '❌'} ${item.q}<br>
            ${!item.ok ? `<small style="color:green; font-weight:bold;">Respuesta correcta: ${item.c}</small>` : ''}
        </div>
    `).join('');
}

function actualizarInterfaz() {
    document.getElementById('timer').innerText = `Tiempo: ${tiempo}s`;
    document.getElementById('progress').innerText = `Pregunta ${indicePregunta + 1}/${cantidadDeseada}`;
}