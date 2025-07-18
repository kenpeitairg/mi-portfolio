document.addEventListener('DOMContentLoaded', () => {
    const photoGallery = document.getElementById('photo-gallery');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let allPhotos = []; 

   
    const photosData = [
   
        {
            src: 'artisticas/1 (1).jpg',
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Geometría del Alma',
            description: 'Un perfil sutilmente iluminado, casi desvaneciéndose en la oscuridad, como un pensamiento que se escapa.'
        },
        {
          src: 'artisticas/1 (2).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Silencio Distópico',
            description: ' La figura enmascarada, un recordatorio inquietante de que el aire es solo para unos pocos. O quizás es solo moda.'
        },
        {
             src: 'artisticas/1 (3).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Ecos del Pasado',
            description: 'Esa luz que se cuela, revelando un espacio vacío. Podría ser cualquier cosa, o nada.'
        },
              {
                 src: 'artisticas/1 (4).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'I love you but im too toxic for you',
            description: 'Dos figuras que se encuentran, en un abrazo que parece más una declaración abstracta que algo real.'
        },      {
                 src: 'artisticas/1 (5).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'This war of mine',
            description: 'La forma de una cabeza, envuelta en lo que parece un horizonte industrial. La soledad tiene su propia estética.'
        },      {
                 src: 'artisticas/1 (6).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Mirada Escondida',
            description: 'Hay ojos detrás de ese gorro, observando el mundo sin querer ser parte de él. O simplemente está frío.'
        },      {
                 src: 'artisticas/1 (7).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Contemplación Urbana',
            description: ' Un rostro en la penumbra, ajeno al bullicio. Probablemente pensando en el próximo café de especialidad.'
        },      {
                 src: 'artisticas/1 (8).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Anonimato Digital',
            description: ' La máscara de gas, el uniforme del siglo XXI. ¿Protesta? ¿O solo una pose cool?'
        },      {
                 src: 'artisticas/1 (9).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Luz de Mañana',
            description: 'Una chica rubia bajo la luz del día, con una sonrisa que no sé si es genuina o solo para la foto.'
        },      {
                 src: 'artisticas/1 (10).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'La Máscara interior',
            description: ' Otra figura con una máscara, esta vez verde. La expresión del no-rostro. Un clásico.'
        },      {
                 src: 'artisticas/1 (11).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Ritual Colectivo',
            description: 'Un montón de gente que no se conoce, pero comparte el mismo espacio. ¿Qué estarán buscando?'
        },      {
                 src: 'artisticas/1 (12).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: ' Identidad Fragmentada',
            description: 'El maquillaje, la cicatriz. Una obra de arte andante o una historia de la que no queremos saber mucho.'
        },      {
                 src: 'artisticas/1 (13).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Flash de Medianoche',
            description: ' La luz artificial rompiendo la oscuridad, creando un instante que probablemente nadie recordará.'
        },      {
                 src: 'artisticas/1 (14).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Resplandor Efímero',
            description: 'El cabello rojo como una flama. ¿Será un truco de luz o el alma en ebullición?'
        },      {
                 src: 'artisticas/1 (15).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Destino Ígneo',
            description: 'Alguien manipulando el fuego. Un poco performático, ¿no crees?'
        },      {
                 src: 'artisticas/1 (16).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Prometeo Olvidado',
            description: 'La antorcha encendida en la oscuridad. Demasiado dramático para mi gusto.'
        },      {
                 src: 'artisticas/1 (17).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Melancolía Cotidiana',
            description: 'Un chico mirando hacia afuera, con esa expresión de quien ha visto demasiado o muy poco.'
        },      {
                 src: 'artisticas/1 (18).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Ruido de Fondo',
            description: 'Ese coche blanco pasando. Solo un detalle más en el lienzo indiferente de la ciudad.'
        },      {
                 src: 'artisticas/1 (19).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Paseo Existencial',
            description: 'Una figura caminando por la calle, con un aire de ir a ninguna parte en particular.'
        },      {
                 src: 'artisticas/1 (20).jpg',  
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Libertad Instantánea',
            description: 'El salto en medio del movimiento. Un intento de desafiar la gravedad, o simplemente una forma de pasar el rato.'
        },      {
                 src: 'artisticas/1 (21).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'El Arte de Esperar',
            description: 'Alguien sentado en la acera, como si el tiempo fuera una broma interna.'
        },      {
                 src: 'artisticas/1 (22).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Fluir en el Asfalto',
            description: 'La silueta en el skate. La búsqueda de la libertad en el pavimento.'
        },      {
                 src: 'artisticas/1 (23).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Juventud Inmortal',
            description: 'Un rostro joven, con gorro, capturado en un momento cualquiera. Sin mucho que decir, realmente.'
        },      {
                 src: 'artisticas/1 (24).jpg',
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: ' Desidia Poética',
            description: 'Alguien tirado en el suelo, como si la vida fuera demasiado esfuerzo. O quizás solo una siesta.'
        },      {
                 src: 'artisticas/1 (25).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Reflejo Urbano',
            description: 'Un hombre en una silla de ruedas, observando. Como si la ciudad se reflejara en sus ojos.'
        },      {
                 src: 'artisticas/1 (26).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'El Viejo y el Mar (pero sin mar)',
            description: 'Un señor mayor con sombrero. Probablemente tiene historias, pero ¿quién tiene tiempo?'
        },      {
                 src: 'artisticas/1 (27).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Contemplando el Abismo',
            description: 'Una figura solitaria sentada, mirando hacia la nada. Quizás está meditando sobre el latte perfecto.'
        },      {
                 src: 'artisticas/1 (28).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Horizonte Difuso',
            description: 'Un brazo que apunta. Hacia dónde, no estoy seguro. El infinito, supongo.'
        },      {
                 src: 'artisticas/1 (29).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Serenidad ',
            description: ' La calma de la playa, la arena, el agua. Un poco aburrido si lo piensas bien.'
        },      {
                 src: 'artisticas/1 (30).jpg',
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Génesis de Arena',
            description: 'Alguien sentado en la playa, como si acabara de emerger del sedimento'
        },      {
                 src: 'artisticas/1 (31).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Invierno Colectivo',
            description: 'En el frio se encuentra lo mejor'
        },      {
                 src: 'artisticas/1 (32).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Elegancia Mórbida',
            description: 'El rostro pintado, como una calavera chic. Una declaración de estilo, sin duda.'
        },
      {
                 src: 'artisticas/1 (33).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Postales del Servicio',
            description: 'Un hombre en uniforme en la playa. Un contraste un tanto irónico.'
        },      {
                 src: 'artisticas/1 (34).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Franco Mar',
            description: 'Cuando se termina el servicio hay que relajarse.'
        },
         {
                 src: 'artisticas/1 (35).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Siluetas del Deber',
            description: 'Toca esperar el Franco'
        }, {
                 src: 'artisticas/1 (36).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Paz del Guerrero',
            description: 'Que es el aire que uno considera "puro"'
        }, {
                 src: 'artisticas/1 (37).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Espera Envuelta',
            description: 'Un estudio de las líneas y los volúmenes, invitando a la reflexión.'
        },
         {
                 src: 'artisticas/1 (38).jpg',
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Carga Simbólica',
            description: 'El uniforme, la mochila, el arma. Un peso más mental que físico..'
        },
         {
                 src: 'artisticas/1 (39).jpg', 
            alt: 'Composición Geométrica - Ejemplo 3',
            category: 'artisticas',
            title: 'Marcha Uniforme',
            description: 'Un grupo de figuras en formación. La disciplina es tan... lineal.'
        },

     
         {
            src: 'chalten/2 (1).jpg', 
            alt: 'Sendero a través de un bosque nativo en El Chaltén',
            category: 'chalten',
            title: 'La Ofrenda Silente',
            description: ' Un solitario mate en medio de un paisaje nevado.'
        },
            {
            src: 'chalten/2 (2).jpg', 
            alt: 'Sendero a través de un bosque nativo en El Chaltén',
            category: 'chalten',
            title: 'Penumbra Íntima',
            description: ' Una imagen casi abstracta de oscuridad texturizada.'
        },
            {
            src: 'chalten/2 (3).jpg',
            alt: 'Sendero a través de un bosque nativo en El Chaltén',
            category: 'chalten',
            title: 'Far over the misty mountanis cold',
            description: 'Bien adentro del glaciar perdido de todo rastro humano.'
        },    {
            src: 'chalten/2 (4).jpg', 
            alt: 'Sendero a través de un bosque nativo en El Chaltén',
            category: 'chalten',
            title: 'Cumbres Etéreas',
            description: 'Un paisaje montañoso imponente, donde los picos se elevan hacia un cielo dramático.'
        },    {
            src: 'chalten/2 (5).jpg', 
            alt: 'Sendero a través de un bosque nativo en El Chaltén',
            category: 'chalten',
            title: 'Caminos del Viento',
            description: 'Adentrándose en la inmensidad de la patagónia.'
        },    {
            src: 'chalten/2 (6).jpg', 
            alt: 'Sendero a través de un bosque nativo en El Chaltén',
            category: 'chalten',
            title: 'Retrato de Invierno',
            description: 'Un perfil enmarcado por la verticalidad de los árboles, con una mirada que se pierde en la distancia'
        },    {
            src: 'chalten/2 (7).jpg', 
            alt: 'Sendero a través de un bosque nativo en El Chaltén',
            category: 'chalten',
            title: 'El Camino ',
            description: 'Una mujer guiando el camino a seguir.'
        },    {
            src: 'chalten/2 (8).jpg', 
            alt: 'Sendero a través de un bosque nativo en El Chaltén.',
            category: 'chalten',
            title: 'El Viajero del Lago',
            description: ' Un fotógrafo capturando la belleza de un lago y sus montañas circundantes al atardecer.'
        },    {
            src: 'chalten/2 (9).jpg', 
            alt: 'Sendero a través de un bosque nativo en El Chaltén.',
            category: 'chalten',
            title: 'Silueta de Despertar',
            description: 'La figura contra la luz, en una pose que evoca movimiento o un despertar.'
        },    {
            src: 'chalten/2 (10).jpg', 
            alt: 'Sendero a través de un bosque nativo en El Chaltén',
            category: 'chalten',
            title: 'Marcha Hacia el Horizonte',
            description: 'Una figura solitaria caminando por la carretera, dirigiéndose hacia un horizonte dominado por montañas.'
        },    {
            src: 'chalten/2 (11).jpg', 
            alt: 'Sendero a través de un bosque nativo en El Chaltén',
            category: 'chalten',
            title: 'Espejo Turquesa',
            description: 'Un lago de aguas cristalinas y un color turquesa vibrante reflejando el cielo y las montañas.'
        },

        // --- CATEGORÍA: LUZ UV ---
            {
            src: 'Luz UV/3 (1).jpg', 
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'Retrato Fluorescente',
            description: 'Jugando con los colores ocultos que revela la luz UV.'
        },      {
            src: 'luz uv/3 (2).jpg', 
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'La Máscara Luminosa',
            description: 'Una composición donde líneas vibrantes de luz trazan una geografía facial.'
        },      {
            src: 'luz uv/3 (3).jpg', 
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'Emergencia Cromática',
            description: 'La luz neón esculpe los contornos de una figura que parece surgir de la negrura.'
        },      {
            src: 'luz uv/3 (4).jpg', 
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'Visión Espectral',
            description: 'Un rostro apenas discernible, envuelto en un aura de luz que lo hace parecer una aparición.'
        },      {
            src: 'luz uv/3 (5).jpg',
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'Deconstrucción de la Forma',
            description: 'Una exploración abstracta de la cabeza y el cuello, donde las bandas de luz se superponen y se interceptan, revelando y ocultando simultáneamente la anatomía subyacente.'
        },      {
            src: 'luz uv/3 (6).jpg',
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'El Aura Vibrante',
            description: 'Una figura en movimiento, cuya forma es definida por el resplandor de franjas de luz.'
        },      {
            src: 'luz uv/3 (7).jpg', 
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'Retrato Descodificado',
            description: 'l rostro se convierte en un mapa de luz, con cada línea cromática funcionando como un código visual. '
        },      {
            src: 'luz uv/3 (8).jpg',
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: '"El Velo Luminoso',
            description: ' La luz se convierte en un velo que cubre y revela.'
        },      {
            src: 'luz uv/3 (9).jpg', 
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'Silueta Eléctrica',
            description: 'Una silueta en la oscuridad, delineada por el contorno de la luz. '
        },      {
            src: 'luz uv/3 (10).jpg', 
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'Espectro de Color',
            description: 'Un rostro que parece estar disolviéndose o materializándose a través de la luz.'
        },      {
            src: 'luz uv/3 (11).jpg', 
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'Reflejos del Alma',
            description: 'La luz incide en el perfil, creando un reflejo casi líquido de colores sobre la piel.'
        },      {
            src: 'luz uv/3 (12).jpg', 
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'La Visión del Fantasma',
            description: 'Un rostro en la penumbra, apenas visible, como si fuera una aparición espectral definida por hilos de luz verde.'
        },      {
            src: 'luz uv/3 (13).jpg', 
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'Gestualidad Fluorescente',
            description: 'Una mano extendida, iluminada por la luz UV, que resalta los gestos y las texturas de la piel. '
        },      {
            src: 'luz uv/3 (14).jpg', 
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'El Eco Interior',
            description: 'Una cabeza vista de perfil, con la luz revelando las estructuras internas o los pensamientos que resuenan. '
        },      {
            src: 'luz uv/3 (15).jpg', 
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'Inmersión Violeta',
            description: ' Una figura sumergida en una atmósfera de luz violeta intensa, con un efecto que evoca una experiencia sensorial. '
        },      {
            src: 'luz uv/3 (16).jpg', 
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'La Caída Luminosa',
            description: 'Una figura que parece flotar o descender en un mar de luz azul, creando una sensación de ingravidez y misterio, casi como una danza cósmica.'
        },      {
            src: 'luz uv/3 (17).jpg',
            alt: 'Retrato de un rostro iluminado con luz ultravioleta',
            category: 'luz-uv',
            title: 'El Refugio Ultravioleta',
            description: 'La imagen transmite una sensación de introspección o protección en un espacio íntimamente iluminado.'
        },
     
        {
            src: 'paisajes/4 (1).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'El Abrazo Carmesí del Ocaso',
            description: 'Un cielo incendiado por los últimos rayos del sol, pintando la silueta de una ciudad con tonos dramáticos.'
        },
        {
             src: 'paisajes/4 (2).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'La Caricia Esmeralda',
            description: 'Una escena donde se ve una belleza delicada y efímera.'
        },
           {
             src: 'paisajes/4 (3).jpg',
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'El Éxtasis Púrpura del Atardecer',
            description: 'Un cielo que explota en una sinfonía de púrpuras y naranjas intensos, un momento de transición que invita a la contemplación de la vastedad celestial.'
        },    {
            src: 'paisajes/4 (4).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Siluetas Palmeras bajo el Sol Velado',
            description: 'Los Arboles se alzan como guardianes sombríos, sus siluetas definidas por la luz filtrada, evocando una atmósfera de misterio.'
        },    {
            src: 'paisajes/4 (5).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Floraciones Bajo el Sol Diáfano',
            description: ' Un estallido de color en primer plano, con flores que irradian vida bajo una luz solar suave.'
        },    {
            src: 'paisajes/4 (6).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Una Roza que solloza',
            description: 'Un detalle arquitectónico o natural donde la piedra revela la pátina del tiempo.'
        },    {
            src: 'paisajes/4 (7).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'El Guardián del Bosque',
            description: 'Una figura de ciervo, quizás una escultura o un adorno, bañada en una luz cálida.'
        },    {
            src: 'paisajes/4 (8).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Bouquet de Ensueño Nocturno',
            description: 'Un vibrante arreglo floral donde cada pétalo parece brillar con luz propia.'
        },    {
            src: 'paisajes/4 (9).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Armonía Floral en Blanco Puro',
            description: 'Flores blancas inmaculadas en plena floración, destacadas por una luz suave que realza su pureza y la delicadeza de sus formas.'
        },    {
            src: 'paisajes/4 (10).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'El Latido Fucsia de la Vida',
            description: 'Primer plano de pétalos de color fucsia intenso, donde la saturación del color y la textura se convierten en el foco principal.'
        },    {
            src: 'paisajes/4 (11).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Arcos Históricos bajo el Cielo Azul',
            description: ' Una estructura antigua, un puente o acueducto, que se alza majestuosamente bajo un cielo claro.'
        },    {
            src: 'paisajes/4 (12).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Reflejos Espejo de la Realidad Oculta',
            description: 'La parte inferior de figuras verticales que se reflejan en una superficie de agua oscura.'
        },    {
            src: 'paisajes/4 (13).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Horizonte Infinito',
            description: 'Similar a la anterior, esta composición profundiza en la dualidad de la percepción.'
        },    {
            src: 'paisajes/4 (14).jpg',
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'La Gracia Invernal en Movimiento',
            description: 'El verdadero Rey del Bosque.'
        },    {
            src: 'paisajes/4 (15).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Fragmento Lunar en la Inmensidad',
            description: ' Un primer plano de la luna creciente, con sus cráteres y sombras detallados contra la oscuridad del espacio. '
        },    {
            src: 'paisajes/4 (16).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Bosque de Sombras y Sueños Nocturnos',
            description: 'Siluetas de árboles desprovistos de hojas, destacando contra un cielo crepuscular.'
        },    {
            src: 'paisajes/4 (17).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'La Colina de las Fachadas Antiguas',
            description: ' Un conjunto de edificios apiñados en una colina, con fachadas de colores cálidos bajo la luz del sol.'
        },    {
            src: 'paisajes/4 (18).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'El Incendio Silencioso del Anochecer',
            description: 'Un atardecer dramático con cielos rojizos y naranjas intensos sobre un horizonte oscuro.'
        },    {
            src: 'paisajes/4 (19).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Velas al Viento del Ocaso Dorado',
            description: 'Mastiles y velas de un barco capturados contra el sol poniente, creando siluetas nítidas que transmiten una sensación de aventura y la promesa de un viaje.'
        },    {
            src: 'paisajes/4 (20).jpg',
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'El Horizonte Encendido de la Noche',
            description: 'Las luces de una ciudad o costa se extienden en la distancia, fusionándose con los últimos destellos del atardecer.'
        },    {
            src: 'paisajes/4 (21).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Colinas de Viviendas y Sueños Urbanos',
            description: 'Un asentamiento urbano en una ladera, con edificios que se escalonan por la topografía. '
        },    {
            src: 'paisajes/4 (22).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Viva España',
            description: 'Una bandera, ondeando con orgullo en un cielo azul'
        },    {
            src: 'paisajes/4 (23).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Mosaico Floral en el Jardín Escondido',
            description: 'Un grupo de flores de diferentes colores, formando una composición natural y vibrante'
        },    {
            src: 'paisajes/4 (24).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'La Serenidad Verde del Bosque Cordobes',
            description: 'Un paisaje boscoso, dominado por coníferas, bajo un cielo sereno.'
        },   {
            src: 'paisajes/4 (25).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'El Sendero Hacia lo Desconocido',
            description: 'Un camino de tierra flanqueado por árboles altos, que se pierde en la distancia.'
        },    {
            src: 'paisajes/4 (26).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Vela Solitaria en el Mar de Plata',
            description: 'Un velero navegando en un mar en calma, con la luz del sol reflejándose en el agua.'
        },      {
            src: 'paisajes/4 (27).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'La Metrópolis Costera bajo el Sol',
            description: 'Una vista panorámica de una ciudad costera con edificios modernos y una línea de costa animada.'
        },   {
            src: 'paisajes/4 (28).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'El Abrazo Cálido del Mar al Ocaso',
            description: 'El sol poniéndose sobre el horizonte marino, pintando el cielo y el agua con tonos cálidos.'
        },   {
            src: 'paisajes/4 (29).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'paisajes',
            title: 'Isla en el Mar de los Sueños',
            description: ' Una pequeña isla o afloramiento rocoso en medio de un mar en calma bajo un cielo claro.'
        },

        // --- CATEGORÍA: PERFILES ---
           {
            src: 'perfiles/5 (1).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'El Reflejo Escarlata ',
            description: 'Una figura se recorta contra un paisaje nevado y la vasta extensión de agua.'
        },
        {
            src: 'perfiles/5 (2).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'Alma Errante',
            description: 'Una figura solitaria camina por una calle urbana de Portugal.'
        },
           {
            src: 'perfiles/5 (3).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'El Gesto de la Resistencia',
            description: 'Un retrato potente que captura la concentración y la determinación en el rostro de un individuo.'
        },    {
            src: 'perfiles/5 (4).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'Abanderado',
            description: 'Una figura erguida portando una bandera, su silueta firme contra un fondo de multitud.'
        },    {
            src: 'perfiles/5 (5).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'El Cadete',
            description: 'Un Saludo en una formacion.'
        },    {
            src: 'perfiles/5 (6).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'Exhalación de lo Efímero',
            description: 'Un estudio sobre la transitoriedad.'
        },    {
            src: 'perfiles/5 (7).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'Luminiscencia de la Ceniza',
            description: 'Un primer plano de brasas o chispas en la oscuridad.'
        },    {
            src: 'perfiles/5 (8).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'Danza Acuática',
            description: 'a composición es un poema visual sobre la fluidez y la interacción en un medio etéreo.'
        },    {
            src: 'perfiles/5 (9).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'Ascenso al Abismo Interior',
            description: 'Una figura en una pose dramática, quizás en el acto de escalar o de superar un obstáculo.'
        },    {
            src: 'perfiles/5 (10).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'El Peso de la Existencia',
            description: 'Un retrato crudo de una figura con una expresión grave.'
        },    {
            src: 'perfiles/5 (11).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'Amargo y retruco',
            description: 'Bajo el sol de Portugal un mate no puede faltar.'
        },    {
            src: 'perfiles/5 (12).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: '¿Dulce o amargo?',
            description: 'Un momento acogedero en el frio.'
        },    {
            src: 'perfiles/5 (13).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'Interludio en lo Urbano',
            description: 'Una figura sentada en un banco, inmersa en sus pensamientos mientras el entorno se desdibuja.'
        },    {
            src: 'perfiles/5 (14).jpg',
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'El Rostro de la Contemplación',
            description: 'Un primer plano de un rostro pensativo, con una expresión de introspección profunda.'
        },    {
            src: 'perfiles/5 (15).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'Que Elegancia la de Francia',
            description: 'Una figura caminando con un estilo distintivo.'
        },    {
            src: 'perfiles/5 (16).jpg', 
            alt: 'Puesta de sol sobre el mar',
            category: 'perfiles',
            title: 'Camino al Infinito:',
            description: 'Una figura en el horizonte de una carretera que se pierde en la distancia, con montañas como telón de fondo.'
        },
      
    ];


    // Alejandro del futuro, si ves esto recorda que aca esta la funcion para cargar y mostrar imagenes
    const loadPhotos = (filterCategory = 'all') => {
        photoGallery.innerHTML = ''; // y aca limpiamos la galeria
        let filteredPhotos = photosData;

        if (filterCategory !== 'all') {
            filteredPhotos = photosData.filter(photo => photo.category === filterCategory);
        }

        allPhotos = filteredPhotos; // aca clabo el array para el modal
        
        filteredPhotos.forEach((photo, index) => {
            const photoItem = document.createElement('div');
            photoItem.classList.add('photo-item');
            photoItem.setAttribute('data-category', photo.category);
            photoItem.setAttribute('data-index', index); 

            photoItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
                <div class="photo-item-info">
                    <h4>${photo.title}</h4>
                    <p>${photo.description}</p>
                </div>
            `;
            photoGallery.appendChild(photoItem);
        });
    };

    loadPhotos();

    // filtro de categorias
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            loadPhotos(button.dataset.category);
        });
    });

    // El Modal para ver imagen grande
    const imageModal = document.createElement('div');
    imageModal.classList.add('image-modal');
    imageModal.innerHTML = `
        <span class="image-modal-close">&times;</span>
        <div class="image-modal-content">
            <img src="" alt="" id="modal-image">
            <a class="prev-arrow">&#10094;</a>
            <a class="next-arrow">&#10095;</a>
        </div>
    `;
    document.body.appendChild(imageModal);

    const modalImage = document.getElementById('modal-image');
    const modalCloseBtn = document.querySelector('.image-modal-close');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    let currentPhotoIndex = 0;

    photoGallery.addEventListener('click', (e) => {
        const photoItem = e.target.closest('.photo-item');
        if (photoItem) {
            currentPhotoIndex = parseInt(photoItem.getAttribute('data-index'));
            modalImage.src = allPhotos[currentPhotoIndex].src;
            imageModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });

    modalCloseBtn.addEventListener('click', () => {
        imageModal.style.display = 'none';
        document.body.style.overflow = ''; 
    });

    
    prevArrow.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex - 1 + allPhotos.length) % allPhotos.length;
        modalImage.src = allPhotos[currentPhotoIndex].src;
    });

    nextArrow.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex + 1) % allPhotos.length;
        modalImage.src = allPhotos[currentPhotoIndex].src;
    });

    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});
