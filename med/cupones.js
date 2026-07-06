// ==========================================
// 🍪 ARREGLO DE CUPONES: ANTOJOS & POSTRES
// ==========================================
// ==========================================
// 🍪 ARREGLO DE CUPONES: ANTOJOS & POSTRES (40 Cupones)
// ==========================================
const cuponesPostres = [
    { id: "01", titulo: "Un 'Zarzamora-Lover Supreme' 🍰", desc: "Válido por un cheesecake en el lugar que tú elijas." },
    { id: "02", titulo: "El 'Antídoto a la depresión' 😕", desc: "Canjeable por tu postre favorito para recuperar el ánimo y dejar de ver todo tan azul." },
    { id: "03", titulo: "Un 'Starbeess' ☕✨", desc: "Te invito tu bebida y postre favorito de Starbucks." },
    { id: "04", titulo: "El 'Antojo de Media Noche' (Edición Dulce) 🌙", desc: "No importa la hora ni el día, si tienes antojo de algo dulce, yo me encargo de conseguírtelo de donde tú quieras." },
    { id: "05", titulo: "Un 'Pequeño Gustito con Café' ☕🥐", desc: "Válido para ir a esa cafetería bonita que tengas en la mira para un postre e interminables horas de chisme." },
    { id: "06", titulo: "El 'Comodín de la Dulzura' 🍬", desc: "Tú eliges el postre, la pastelería y el momento exacto. Válido para consentirte por completo y sin protestas." },
    { id: "07", titulo: "El 'Azúcar revividor", desc: "Canjeable por un súper postre para recuperar toda la energía." },
    { id: "09", titulo: "El 'Glucosa Estudiante de Medicina' 🩺", desc: "Válido por una dosis masiva de chocolate o azúcar para sobrevivir a tus exámenes pesados." },
    { id: "10", titulo: "Un 'Frappé con Chisme' 🥤", desc: "Vamos por un frapuccino gigante al lugar que quieras solo para sentarnos a reirnos de todo." },
    { id: "11", titulo: "El 'Helado de la Victoria' 🍦", desc: "Canjeable por un helado doble del sabor que tú elijas para celebrar cualquier logro tuyo por pequeño que sea." },
    { id: "12", titulo: "Un 'Pancito Caliente para el Alma' 🍞", desc: "Válido por tu pan dulce favorito y una bebida caliente para consentirte en un día lluvioso o frío." },
    { id: "13", titulo: "El 'Postre Sorpresa a Domicilio' 📦", desc: "Haces clic en este cupón y yo me encargo de enviarte un postre sorpresa directo a donde estés." },
    { id: "14", titulo: "Un 'Crepa-Date' Personalizado 🥞", desc: "Vamos por unas crepas dulces con todos los toppings empalagosos que se te antojen hoy." },
    { id: "15", titulo: "El 'Antojo de Panadería Local' 🥐", desc: "Válido para ir a buscar croissants o postres finos a una panadería artesanal." },
    { id: "16", titulo: "Un 'Waffle Monumental' 🧇", desc: "Canjeable por un waffle gigante cubierto de frutas, chocolate, helado y todo lo que dicte tu corazón." },
    { id: "17", titulo: "El 'Churros Express' 🎡", desc: "Válido por una orden de churros crujientes rellenos o con chocolate caliente donde tú digas." },
    { id: "18", titulo: "Un 'Donut Lover' Box 🍩", desc: "Te compro una caja de tus donas favoritas para que las disfrutes a lo largo de la semana." },
    { id: "19", titulo: "El 'Antojo Frutal pero Dulce' 🍓", desc: "Válido por unas fresas con crema, fresas con chocolate o cualquier postre frutal de tu preferencia." },
    { id: "21", titulo: "El 'Macaron Elegante' 🧁", desc: "Válido por una cajita de macarons coloridos o postres miniatura franceses en el lugar de tu elección." },
    { id: "22", titulo: "Un 'Brownie con Helado Infalible' 🍫", desc: "El clásico que nunca falla: un brownie calientito con helado de vainilla encima." },
    { id: "23", titulo: "El 'Boba Tea del Chisme' 🧋", desc: "Canjeable por un té de burbujas (Tapioca) gigante del sabor que quieras para refrescar la tarde." },
    { id: "24", titulo: "Un 'Postre para Compartir' (O no) 🥄", desc: "Pedimos el postre más grande del menú que quieras. Yo solo te acompaño a verlo o te ayudo con una cucharada si me dejas." },
    { id: "25", titulo: "El 'Suplemento de Ánimo' 🔋", desc: "Un postre sorpresa de chocolate oscuro diseñado científicamente para resetear un mal día." },
    { id: "26", titulo: "Un 'Cinnabon de la Felicidad' 🌀", desc: "Válido por un rol de canela gigante, calientito y extra glaseado en donde tú elijas." },
    { id: "27", titulo: "El 'Ice Cream sándwich' 🍪🍦", desc: "Canjeable por un sándwich de galleta con helado artesanal en el lugar que tú escojas." },
    { id: "28", titulo: "Un 'Postre de Restaurante Caro' 🍽️", desc: "Nos saltamos la comida y vamos directo a un restaurante bonito solo a pedir su postre más top." },
    { id: "29", titulo: "El 'Gusto Culposo de Supermercado' 🛒", desc: "Vamos al súper y puedes elegir todos los pastelitos, galletas o golosinas procesadas que se te antojen sin juzgarte." },
    { id: "30", titulo: "Un 'Café helado XL' 🧊☕", desc: "Te invito el café helado más grande y personalizado que puedas armar para sobrevivir la tarde." },
    { id: "31", titulo: "El 'Postre Tradicional' 🍮", desc: "Válido por un flan napolitano, tres leches o arroz con leche casero en el lugar que tú prefieras." },
    { id: "32", titulo: "Un 'Maratón de Gomitas' 🍬", desc: "Canjeable por una bolsa gigante llena de gomitas ácidas, dulces y de panditas solo para ti." },
    { id: "33", titulo: "El 'Pay de Limón Salvador' 🍋", desc: "Válido por una rebanada de pay de limón frío (carlota) para quitar el calor y endulzar el día." },
    { id: "34", titulo: "Un 'Milhojas de Ensueño' 🍰", desc: "Canjeable por un pastel milhojas extra crujiente con cajeta o crema pastelera de tu lugar favorito." },
    { id: "35", titulo: "El 'Antojo de Chocolate Blanco' 🤍", desc: "Válido por cualquier postre, barra o bebida que tenga como protagonista el chocolate blanco." },
    { id: "36", titulo: "Un 'Tiramisú de Época' ☕🇮🇹", desc: "Válido por un tiramisú bien frío para sentirte parte de la realeza en tu cafetería preferida." },
    { id: "37", titulo: "El 'Postre de Feria' 🎡", desc: "Canjeable por unas marquesitas, plátanos fritos o el antojo callejero dulce que se te cruce por enfrente." },
    { id: "38", titulo: "Un 'Shot de Energía Dulce' 🍫", desc: "Unas ida a comprar galletas dr." },
    { id: "39", titulo: "El 'Menú de Degustación' 🍡", desc: "Vamos a un lugar de postres y pedimos tres cosas diferentes para probar de todo un poco." },
    { id: "40", titulo: "El 'Megacomodín del Repostería' 🏆", desc: "Válido por absolutamente cualquier capricho dulce que inventes en este momento de tu vida. Yo lo resuelvo." }
];

// ==========================================
// 🌹 ARREGLO DE CUPONES: DATES & AVENTURAS (40 Cupones)
// ==========================================
const cuponesDates = [
    { id: "01", titulo: "Una Date Digna de Bridgerton 🌹", desc: "Válido por una cita súper romántica, bien vestidos y formales, digna del chisme y la elegancia de la alta sociedad." },
    { id: "02", titulo: "Maratón de Series & Snacks Ocultos 🎬", desc: "Tarde entera acurrucados viendo tu serie favorita con una montaña de los snacks que tú elijas." },
    { id: "03", titulo: "Paseo Fotográfico al Atardecer 🌅", desc: "Caminata tranquila para ver el atardecer, platicar bonito, reírnos de todo y tomarnos fotos increíbles juntos." },
    { id: "04", titulo: "Día de Desconexión y Mimos Total 💆‍♀️", desc: "Un día entero dedicado a relajarnos: masajes en casa, skincare juntos y cero preocupaciones del mundo exterior." },
    { id: "05", titulo: "Cena Especial Hecha en Casa 🕯️", desc: "Transformo el comedor, cocino algo delicioso que te encante, pongo velas y música suave solo para los dos." },
    { id: "06", titulo: "La Date de Exploración Urbana 🗺️", desc: "Pasamos el día entero conociendo un lugar nuevo, mercadito o rincón de la ciudad que tengas ganas de visitar." },
    { id: "07", titulo: "Noche de Juegos y Apuestas Dulces 🎮", desc: "Tarde/noche de videojuegos o juegos de mesa donde el perdedor le debe un masaje al ganador." },
    { id: "08", titulo: "La Date del Pijama y Cocina 👩‍🍳", desc: "Cocinamos juntos nuestra cena favorita usando pijamas cómodas, escuchando música y sin preocuparnos por el desastre." },
    { id: "09", titulo: "Paseo Nocturno Bajo las Estrellas 🌌", desc: "Caminata o viaje en auto de noche con tu playlist favorita de fondo para platicar de la vida y despejar la mente." },
    { id: "10", titulo: "Cita de Picnic Estético 🧺", desc: "Manta en el pasto, sándwiches cortados en triangulo, frutas, postres y una tarde entera desconectados de todo." },
    { id: "11", titulo: "Día de Shopping & Outfit Challenge 🛍️", desc: "Vamos de compras y tú me eliges un outfit a mí y yo te elijo uno a ti (¡con obligación de probárselo!)." },
    { id: "12", titulo: "La Date del Desayuno Eterno 🥞", desc: "Ir a desayunar deliciosamente un fin de semana por la mañana sin ninguna prisa y quedarnos platicando horas." },
    { id: "13", titulo: "Noche de Karaoke Privado 🎤", desc: "Ponemos videos en la pantalla y cantamos a todo pulmón esas canciones románticas o culposas que solo nosotros sabemos." },
    { id: "14", titulo: "Cita en una Librería Bonita 📚", desc: "Vamos a recorrer pasillos de libros, nos compramos algo lindo y leemos juntos acompañados de un buen café." },
    { id: "15", titulo: "Día de Turistas en Nuestra Zona 📸", desc: "Ir a esos lugares turísticos locales a los que nunca vamos, tomarnos fotos graciosas y comer comida típica." },
    { id: "16", titulo: "La Date del 'Sí a Todo' 📝", desc: "Durante 3 horas consecutivas, tú planeas y mandas en cada actividad que hagamos y yo solo digo 'sí a todo'." },
    { id: "17", titulo: "Tarde de Pintura e Ideas Alocadas 🎨", desc: "Compramos lienzos o alcancías de cerámica para pintar mientras tomamos o comemos algo rico en casa." },
    { id: "18", titulo: "Cita en un Bazar o Mercadito Alternativo 🎪", desc: "Pasar la tarde chachareando y buscando tesoros, plantas o accesorios en un bazar local que te llame la atención." },
    { id: "19", titulo: "Date de Alitas y Cerveza/Mocktail 🍗", desc: "Plan relajado e informal para comer alitas, ensuciarnos los dedos y reírnos de tonterías del día." },
    { id: "20", titulo: "Tarde de Skincare y Masaje de Pies 🧖‍♀️", desc: "Te pongo mascarillas, te consiento el cabello y te doy un masaje relajante después de una semana pesada de escuela." },
    { id: "21", titulo: "Cita de Sushi & Películas de Terror 🍣", desc: "Pedimos una charola gigante de sushi a la casa y nos armamos una mini función de cine abrazados." },
    { id: "22", titulo: "Paseo por Viveros y Plantitas 🌱", desc: "Vamos a ver plantas bonitas, compramos una para cuidarla juntos o decorar tu espacio favorito." },
    { id: "23", titulo: "Date de Fast Food en el Auto 🍔", desc: "Compramos hamburguesas o papas y nos las comemos en el coche estacionados en un lugar bonito con música." },
    { id: "24", titulo: "Tarde de Lego o Rompecabezas 🧩", desc: "Armamos un set de Lego o un rompecabezas juntos mientras platicamos y tomamos un cafecito helado." },
    { id: "25", titulo: "Cita Romántica de 'Petición de Deseos' ✨", desc: "Escribimos metas o planes que queremos hacer juntos a futuro mientras disfrutamos de una velada tranquila." },
    { id: "26", titulo: "Date de Brunch Instagrameable 🥑", desc: "Vamos a ese restaurante súper estético con desayunos bonitos solo para consentirte y tomarte fotos hermosas." },
    { id: "27", titulo: "Noche de Tacos Insuperable 🌮", desc: "Vamos a tus tacos favoritos de confianza a devorar una orden con todo el derecho a pedir el postre saliendo." },
    { id: "28", titulo: "Cita de Helado y Caminata sin Rumbo 🍦", desc: "Compramos un helado y caminamos por calles bonitas simplemente para ver las casas y hablar del futuro." },
    { id: "29", titulo: "Date de Manualidades DIY ✂️", desc: "Hacemos un proyecto manual juntos para regalárnoslo o decorar (pulseras, llaveros o algo divertido)." },
    { id: "30", titulo: "Noche de Pizza y Juegos de Rol/Mesa 🍕", desc: "Pedimos pizza familiar, abrimos un juego de mesa y pasamos horas compitiendo." },
    { id: "31", titulo: "Cita de Museo o Galería de Arte 🖼️", desc: "Pasamos una tarde cultural recorriendo una exposición bonita y tomándonos fotos estéticas en los pasillos." },
    { id: "32", titulo: "Tarde de Podcasts o Videos Graciosos 🎙️", desc: "Nos acostamos a escuchar nuestros episodios favoritos de podcast o ver videos absurdos de internet para reír juntos." },
    { id: "33", titulo: "Cita de Escape de la Rutina Completo 🚗", desc: "Tomamos el auto y manejamos un rato hacia las afueras o un pueblo cercano solo por la experiencia del viaje." },
    { id: "34", titulo: "Date de Postre en el Malecón / Parque Bonito 🎡", desc: "Compramos algo dulce para llevar y nos sentamos en una banca linda a ver pasar a la gente y relajarnos." },
    { id: "35", titulo: "Noche de Pasta Italiana en Casa 🍝", desc: "Preparo una pasta deliciosa desde cero, ponemos música italiana de fondo y cenamos increíble en pijamas." },
    { id: "36", titulo: "Cita de Helado al Amanecer 🌅", desc: "Nos despertamos súper temprano para ver salir el sol juntos acompañados de un buen antojo mañanero." },
    { id: "37", titulo: "Tarde de Repostería Competitiva 🧁", desc: "Compramos panquecitos listos y competimos por ver quién decora el más bonito o el más gracioso." },
    { id: "38", titulo: "Date de Cafetería Temática 🐈", desc: "Vamos a una cafetería fuera de lo común a pasar la tarde." },
    { id: "40", titulo: "El Comodín Supremo de Aventuras 👑", desc: "Canjeable por cualquier cita loca, viaje corto o plan extravagante que se te ocurra de la nada. Yo lo hago realidad." },
    { id: "41", titulo: "Las flores coloridas 🌹", desc: "Canjeable para una date pintando clavelitos"}
];

// Inicializar contenedores
const contenedorPostres = document.getElementById('cuponera-postres');
const contenedorDates = document.getElementById('cuponera-dates');
const modal = document.getElementById('modal-canje');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

let cupónSeleccionadoElemento = null;

// Función para renderizar los cupones ocultos de sorpresa
function renderCupones(lista, contenedor, prefijoKey) {
    lista.forEach(cupon => {
        const card = document.createElement('div');
        card.classList.add('cupon-card');
        
        const storageKey = `${prefijoKey}_cupon_${cupon.id}`;
        const yaCanjeado = localStorage.getItem(storageKey) === 'usado';

        if (yaCanjeado) {
            card.classList.add('usado');
            card.innerHTML = `
                <div class="cupon-header">
                    <span class="cupon-id">N° ${cupon.id}</span>
                    <span>✨</span>
                </div>
                <h3>${cupon.titulo}</h3>
                <p>${cupon.desc}</p>
                <div class="cupon-footer">CANJEADO ✓</div>
            `;
        } else {
            card.innerHTML = `
                <div class="cupon-header">
                    <span class="cupon-id">N° ${cupon.id}</span>
                    <span>❓</span>
                </div>
                <h3>Cupón Sorpresa</h3>
                <p style="text-align: center; font-size: 1.2rem; color: #ff7597; margin-top: 20px;">✉️ Haz clic para revelar tu sorpresa...</p>
                <div class="cupon-footer">¿QUÉ SERÁ?</div>
            `;
        }

        card.addEventListener('click', () => {
            if (!card.classList.contains('usado')) {
                abrirModalSorpresa(cupon, card, storageKey);
            }
        });

        contenedor.appendChild(card);
    });
}

// Lógica del Modal Sorpresa
function abrirModalSorpresa(cupon, elemento, storageKey) {
    cupónSeleccionadoElemento = elemento;
    modalBody.innerHTML = `
        <h2>✨ ¿Quieres revelar este cupón? ✨</h2>
        <p style="margin: 15px 0; color: #666;">Una vez que lo abras, se marcará como canjeado y tendrás que usarlo en nuestra próxima oportunidad juntos.</p>
        <button class="modal-btn-confirm" id="btn-confirmar-revelacion">¡Sí, revelar sorpresa! 💝</button>
    `;
    
    // Vinculación dinámica del evento para evitar funciones globales molestas
    document.getElementById('btn-confirmar-revelacion').onclick = () => {
        revelarYCanjear(cupon.titulo, cupon.desc, storageKey);
    };
    
    modal.classList.remove('hidden');
}

// Proceso donde se guarda el estado y se muestra dinámicamente en la interfaz
function revelarYCanjear(titulo, desc, storageKey) {
    if (cupónSeleccionadoElemento) {
        localStorage.setItem(storageKey, 'usado');
        
        cupónSeleccionadoElemento.classList.add('usado');
        const idActual = cupónSeleccionadoElemento.querySelector('.cupon-id').innerText;
        
        cupónSeleccionadoElemento.innerHTML = `
            <div class="cupon-header">
                <span class="cupon-id">${idActual}</span>
                <span>✨</span>
            </div>
            <h3>${titulo}</h3>
            <p>${desc}</p>
            <div class="cupon-footer">CANJEADO ✓</div>
        `;

        modalBody.innerHTML = `
            <h2 style="color: #e05374;">¡Cupón Revelado! 🎉</h2>
            <p style="font-size: 1.3rem; margin: 15px 0;"><strong>${titulo}</strong></p>
            <p>${desc}</p>
            <button class="modal-btn-confirm" id="btn-cerrar-exito">¡Me encanta! 🥰</button>
        `;
        
        document.getElementById('btn-cerrar-exito').onclick = cerrarModalFunc;
    }
}

function cerrarModalFunc() {
    modal.classList.add('hidden');
    cupónSeleccionadoElemento = null;
}

closeModal.addEventListener('click', cerrarModalFunc);
window.addEventListener('click', (e) => {
    if (e.target === modal) cerrarModalFunc();
});

// Renderizar al cargar la página
renderCupones(cuponesPostres, contenedorPostres, 'postres');
renderCupones(cuponesDates, contenedorDates, 'dates');

// Botón de reinicio para tus pruebas locales
const btnReset = document.getElementById('btn-reset-pruebas');
if (btnReset) {
    btnReset.addEventListener('click', () => {
        localStorage.clear();
        alert('¡Cupones reiniciados para pruebas! 🚀');
        location.reload();
    });
}