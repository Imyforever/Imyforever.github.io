const propiedades = {
    solidaridad: {
        titulo: "Solidaridad",
        cuartos: "Calle Polyuc Lote 20",
        desc: "Disfruta de la máxima tranquilidad en este departamento diseñado para el descanso. Ofrece a cambio una ubicación privilegiada. El edificio dispone de una cómoda área común de lavado y, para tu facilidad, el servicio de internet de alta velocidad y el suministro de agua tratada ya están incluidos en el pago mensual.",
        imagenPrincipal: "img/solidaridad_principal.jpg",
        galeria: [
            "Solidaridad/img1.jpeg",
            "Solidaridad/img2.jpeg",
            "Solidaridad/img3.jpeg",
            "Solidaridad/img4.jpeg",
            "Solidaridad/img5.jpeg",
        ]
    },
    bosque: {
        titulo: "Bosque",
        cuartos: "J Mujica 582",
        desc: "Tu próximo hogar en un ambiente fresco, seguro y sumamente tranquilo. Disfruta de la serenidad de un espacio diseñado para el descanso, con amplias zonas y una atmósfera acogedora. La propiedad incluye cajón de estacionamiento y el beneficio de servicios integrados: internet y suministro de agua tratada incluidos en la renta. Ven a conocer un lugar donde la calma se siente en cada rincón.",
        imagenPrincipal: "img/bosque_principal.jpg",
        galeria: [
            "Mujica/img1.jpeg",
            "Mujica/img2.jpeg",
            "Mujica/img3.jpeg",
            "Mujica/img4.jpeg",
            "Mujica/img5.jpeg",
        ]
    },
    frinel: {
        titulo: "Salon de eventos Frinel",
        cuartos: "329 Calle Gral Francisco May",
        desc: "El espacio ideal para tus reuniones y celebraciones. Este salón combina tecnología de vanguardia con la máxima comodidad, equipado con proyector, dos pantallas de TV e internet de alta velocidad para presentaciones impecables. El área interior cuenta con aire acondicionado, barra, cocina completa con refrigerador y congelador, además de mobiliario (sillas y mesas) incluido. Para complementar, ofrece un área exterior fresca y bastante amplia, perfecta para momentos de recepción o convivencia al aire libre.",
        imagenPrincipal: "LogotipoSF.jpg",
        galeria: [
            "Frinel/img1.jpg",
            "Frinel/img2.jpg",
            "Frinel/img3.jpg",
            "Frinel/img4.jpg",
            "Frinel/img5.jpg",
        ]
    }
};

const container = document.getElementById('app-container');
const navHome = document.getElementById('nav-home');

function renderHome() {
    let html = '<div class="grid-container">';
    for (const id in propiedades) {
        const p = propiedades[id];
        html += `
            <div class="property-card" onclick="renderDetail('${id}')">
                <h2>${p.titulo}</h2>
                <p class="rooms">${p.cuartos}</p>
                <div class="image-box">
                    <img src="${p.imagenPrincipal}" alt="${p.titulo}" style="width:100%; height:100%; object-fit:cover;">
                </div>
            </div>
        `;
    }
    html += '</div>';
    container.innerHTML = html;
    window.scrollTo(0,0);
}
function renderDetail(id) {
    const p = propiedades[id];
    let galeriaHTML = '';
    
    p.galeria.forEach((imgUrl) => {
        galeriaHTML += `
            <div class="gallery-item" onclick="openLightbox('${imgUrl}')">
                <img src="${imgUrl}" alt="Galería" style="width:100%; height:100%; object-fit:cover;">
            </div>
        `;
    });

    container.innerHTML = `
        <div class="detail-view">
            <button class="back-btn" onclick="renderHome()">← Volver al catálogo</button>
            <div class="detail-header">
                <h2>${p.titulo}</h2>
                <p class="rooms-detail">${p.cuartos}</p>
            </div>
            <div class="big-image-box" onclick="openLightbox('${p.imagenPrincipal}')">
                <img src="${p.imagenPrincipal}" alt="${p.titulo}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div class="info-section">
                <h3>Propuesta de Valor</h3>
                <p class="description">${p.desc}</p>
            </div>
            <div class="gallery-section">
                <h3>Galería Detallada</h3>
                <div class="gallery-grid">${galeriaHTML}</div>
            </div>
        </div>
        <div id="lightbox" class="lightbox" onclick="closeLightbox()">
            <span class="close-lightbox">&times;</span>
            <div class="lightbox-modal">
                <img id="lightbox-img" src="" alt="Vista ampliada">
            </div>
        </div>
    `;
    window.scrollTo(0,0);
}

function openLightbox(url) {
    if (window.innerWidth < 768) {
        return; 
    }

    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    lbImg.src = url;
    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if(lb) {
        lb.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

navHome.addEventListener('click', renderHome);
renderHome();