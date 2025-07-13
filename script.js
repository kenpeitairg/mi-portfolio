document.addEventListener('DOMContentLoaded', () => {
    // 1. Mapa Interactivo con Leaflet
    const mapElement = document.getElementById('map');
    if (mapElement) {
        const map = L.map('map').setView([0, 0], 2); 
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

      
        const locations = [
            { name: 'Río Gallegos, Argentina (Nacimiento)', coords: [-51.62, -69.28], description: 'Mi ciudad natal en la Patagonia argentina.' },
            { name: 'Punta Arenas, Chile', coords: [-53.1638329, -70.9170683], description: 'Explorando el extremo sur de Chile.' },
            { name: 'Itapema, Brasil', coords: [-27.0900, -48.6000], description: 'Playas y paisajes de Santa Catarina.' },
            { name: 'Perú', coords: [-9.181352, -75.002365], description: 'Aventuras en la tierra de los Incas.' },
            { name: 'Colombia', coords: [4.577316, -74.298973], description: 'Descubriendo la diversidad colombiana.' },
            { name: 'República Dominicana', coords: [19.3, -70.2], description: 'Sol, playa y cultura caribeña.' },
            { name: 'España', coords: [40.4637, -3.7492], description: 'Recorriendo la rica historia y vibrante cultura española.' },
            { name: 'Francia', coords: [46.232193, 2.209667], description: 'Explorando el arte, la historia y la gastronomía francesa.' },
            { name: 'Portugal', coords: [39.553444, -7.839319], description: 'Descubriendo las costas y ciudades históricas de Portugal.' },
            { name: 'Tromsø, Noruega', coords: [69.649722, 18.956944], description: 'Imponentes fiordos y paisajes nórdicos.' },
            { name: 'Croacia', coords: [43.5089, 16.433333], description: 'Navegando por el Adriático y explorando sus islas.' },
            { name: 'Alemania', coords: [51.165707, 10.452764], description: 'Ciudades históricas y paisajes diversos.' },
            { name: 'Hungría', coords: [47.164638, 19.508944], description: 'La majestuosidad de Budapest y más allá.' },
            { name: 'Malta', coords: [35.944694, 14.381008], description: 'Islas mediterráneas con una historia milenaria.' },
            { name: 'Países Bajos', coords: [52.3676, 4.9041], description: 'Mi vibrante hogar actual, Ámsterdam y sus alrededores.' },
            { name: 'Andorra', coords: [42.542268, 1.596865], description: 'El pequeño principado en los Pirineos.' },
            { name: 'Buenos Aires Ciudad, Argentina', coords: [-34.6037, -58.3816], description: 'La vibrante capital de Argentina, con su rica cultura y vida urbana.' },
            { name: 'Monte Caseros, Corrientes, Argentina', coords: [-30.2588, -57.6433], description: 'Una ciudad en Corrientes, conocida por su naturaleza y carnaval.' },
            { name: 'Córdoba Capital, Córdoba, Argentina', coords: [-31.4167, -64.1833], description: 'La segunda ciudad más grande de Argentina, con historia colonial y vida universitaria.' },
            { name: 'Monte Caseros, Corrientes, Argentina', coords: [-30.2588, -57.6433], description: 'Una ciudad en Corrientes, conocida por su naturaleza y carnaval.' },
            { name: 'Ushuaia, Tierra del Fuego, Argentina', coords: [-54.8019, -68.303], description: 'La "ciudad del fin del mundo", puerta de entrada a la Antártida.' },
            { name: 'Toay, La Pampa, Argentina', coords: [-36.6713, -64.3638], description: 'Un pueblo en La Pampa, cerca de Santa Rosa.' },
            { name: 'Comodoro Rivadavia, Chubut, Argentina', coords: [-45.8667, -67.4833], description: 'Importante ciudad petrolera en la Patagonia argentina.' },
        ];

        locations.forEach(loc => {
            const marker = L.marker(loc.coords).addTo(map);
            marker.bindPopup(`<b>${loc.name}</b><br>${loc.description}`).openPopup();
        });

        const bounds = new L.LatLngBounds(locations.map(loc => loc.coords));
        map.fitBounds(bounds, { padding: [50, 50] });
    }

    // 2. Menú de Hamburguesa para Responsive
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav && navLinks) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            burger.classList.toggle('toggle');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(item => item.style.animation = '');
            });
        });
    }

    const styleSheet = document.styleSheets[0];
    const navLinkFadeKeyframes = `@keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }`;
    if (![...styleSheet.cssRules].some(rule => rule.cssText.includes('navLinkFade'))) {
        styleSheet.insertRule(navLinkFadeKeyframes, styleSheet.cssRules.length);
    }

    // 3. ScrollSpy para navegación activa
    // Ajustado para que el "active" se asigne correctamente al inicio y al hacer scroll
    const sections = document.querySelectorAll('section[id]');
    const navHighlighter = () => {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            // Ajusta el offset para que la sección se active un poco antes de llegar a ella
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href*='${sectionId}']`);

            if (navLink) {
                // Si el scroll está dentro de los límites de la sección actual
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', navHighlighter);
    navHighlighter(); // aca llamo al "Sobre Mí"

    // 4. Botón "Volver arriba"
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 5. Modales para "Pasatiempos"
    const modalButtons = document.querySelectorAll('.view-details-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    // **MEDIDA DE SEGURIDAD CLAVE:** Asegúrate de que todos los modales estén ocultos al cargar la página.
    modals.forEach(modal => {
        modal.style.display = 'none';
    });

    modalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetModalId = event.target.dataset.modalTarget;
            const targetModal = document.querySelector(targetModalId);
            if (targetModal) {
                targetModal.style.display = 'flex'; // Muestra el modal con display: flex
                // Opcional: Deshabilita el scroll del body mientras el modal está abierto
                // document.body.style.overflow = 'hidden';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const modal = event.target.closest('.modal');
            if (modal) {
                modal.style.display = 'none'; // Oculta el modal
                // Opcional: Habilita el scroll del body
                // document.body.style.overflow = '';
            }
        });
    });

    // Cierra el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) { // Si el clic es directamente en el fondo oscuro del modal
                modal.style.display = 'none';
                // document.body.style.overflow = ''; // Habilita el scroll
            }
        });
    });
});

// Esta función es llamada desde el HTML, pero su lógica real está en el DOMContentLoaded
function toggleMenu() {
    // No es necesario añadir lógica aquí, ya está en el event listener de burger.
}