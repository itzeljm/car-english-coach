/* More hotel lessons + three new categories: Technology, Talking About LA, Coffee Shop. */
const HOTEL_MORE = [
  L('Check-in help', 'Ayuda en el registro', [
    ["Welcome! Could I see your ID and credit card *for* check-in?", "¡Bienvenido! ¿Podría ver su identificación y tarjeta para el registro?"],
    ["Your room is *on* the third floor, *next to* the elevator.", "Su cuarto está en el tercer piso, junto al elevador."],
    ["Breakfast is served *from* seven *until* ten *in* the lobby.", "El desayuno se sirve de siete a diez en el lobby."],
    ["*If* you need anything, press nine *to* call the front desk.", "Si necesita algo, marque el nueve para llamar a recepción."],
    ["Checkout is *at* eleven, but we can keep your bags *until* the afternoon.", "La salida es a las once, pero podemos guardar sus maletas hasta la tarde."]
  ]),
  L('Lost and found', 'Objetos perdidos', [
    ["I found a phone *under* the bed *in* room 214.", "Encontré un teléfono debajo de la cama en el cuarto 214."],
    ["I gave it *to* the supervisor *so that* the guest can get it back.", "Se lo di a la supervisora para que el huésped pueda recuperarlo."],
    ["*According to* the policy, we keep lost items *for* thirty days.", "Según la política, guardamos los objetos perdidos por treinta días."],
    ["Please describe the item *in order to* help us find it.", "Por favor describa el objeto para ayudarnos a encontrarlo."],
    ["*As soon as* we find it, we will call you *at* your number.", "En cuanto lo encontremos, le llamaremos a su número."]
  ]),
  L('Safety and emergencies', 'Seguridad y emergencias', [
    ["*In case* of fire, use the stairs *instead of* the elevator.", "En caso de incendio, use las escaleras en lugar del elevador."],
    ["*If* you see water *on* the floor, tell me right away.", "Si ve agua en el piso, avíseme de inmediato."],
    ["The first aid kit is *next to* the front desk, *in* a white box.", "El botiquín está junto a la recepción, en una caja blanca."],
    ["Please keep the door locked, *especially* *at* night.", "Por favor mantenga la puerta con seguro, sobre todo en la noche."],
    ["*Because of* the storm, the pool is closed *until* tomorrow.", "Por la tormenta, la alberca está cerrada hasta mañana."]
  ]),
  L('Teamwork', 'Trabajo en equipo', [
    ["*When* I finish early, I help my coworker *with* her rooms.", "Cuando termino temprano, ayudo a mi compañera con sus cuartos."],
    ["We talk *about* the schedule *before* the shift starts.", "Hablamos del horario antes de que empiece el turno."],
    ["*As well as* cleaning, I also restock the cart *with* supplies.", "Además de limpiar, también reabastezco el carrito con suministros."],
    ["*Unless* we work together, we cannot finish *on* time.", "A menos que trabajemos juntos, no podemos terminar a tiempo."],
    ["I'm proud *of* my team *because of* how hard we work.", "Estoy orgullosa de mi equipo por lo mucho que trabajamos."]
  ])
];
CATEGORIES.find(c => c.id === 'hotel').lessons.push(...HOTEL_MORE);

CATEGORIES.push(
{ id: 'tech', icon: '📱', name: 'Technology', es: 'Tecnología', stop: 'Silicon Beach', lessons: [
  L('My phone', 'Mi teléfono', [
    ["My phone is *out of* storage *because of* all the photos.", "A mi teléfono se le acabó el espacio por todas las fotos."],
    ["I charge it *at* night *so that* the battery lasts *during* the day.", "Lo cargo en la noche para que la batería dure todo el día."],
    ["*If* the screen freezes, hold the button *for* ten seconds.", "Si la pantalla se congela, mantén el botón diez segundos."],
    ["Can you help me *with* the settings *on* my new phone?", "¿Me ayudas con la configuración de mi teléfono nuevo?"],
    ["I turned off the notifications *in order to* focus *on* my work.", "Apagué las notificaciones para concentrarme en mi trabajo."]
  ]),
  L('Apps and the internet', 'Aplicaciones e internet', [
    ["I downloaded an app *to* translate words *from* English *to* Spanish.", "Descargué una aplicación para traducir palabras del inglés al español."],
    ["You need Wi-Fi *in order to* update the app, *unless* you use your data.", "Necesitas Wi-Fi para actualizar la aplicación, a menos que uses tus datos."],
    ["*According to* the reviews, this app is easy *to* use.", "Según las reseñas, esta aplicación es fácil de usar."],
    ["I use maps *instead of* asking *for* directions.", "Uso mapas en lugar de pedir indicaciones."],
    ["The internet is slow, *even though* I restarted the router.", "El internet está lento, aunque reinicié el router."]
  ]),
  L('Passwords and safety', 'Contraseñas y seguridad', [
    ["Never share your password *with* anyone, *especially* *by* text message.", "Nunca compartas tu contraseña con nadie, sobre todo por mensaje de texto."],
    ["I use a password manager *in case* I forget them.", "Uso un administrador de contraseñas por si las olvido."],
    ["*If* you get a strange message, don't click *on* the link.", "Si recibes un mensaje extraño, no hagas clic en el enlace."],
    ["The bank will never ask *for* your code *over* the phone.", "El banco nunca pide tu código por teléfono."],
    ["*Before* you pay online, check that the website is safe.", "Antes de pagar en línea, verifica que el sitio sea seguro."]
  ]),
  L('Video calls and messages', 'Videollamadas y mensajes', [
    ["I talk *to* my family *on* video calls *on* Sundays.", "Hablo con mi familia por videollamada los domingos."],
    ["Can you hear me, *or* should I turn up the volume?", "¿Me escuchas, o subo el volumen?"],
    ["Please mute your microphone *while* you are not speaking.", "Por favor silencia tu micrófono mientras no hablas."],
    ["I sent you the photos *as soon as* I found them.", "Te mandé las fotos en cuanto las encontré."],
    ["*Instead of* calling, I'll send a voice message, *since* you are at work.", "En lugar de llamar, te mando un mensaje de voz, ya que estás en el trabajo."]
  ]),
  L('Computers and printing', 'Computadoras e impresiones', [
    ["I need to print this form *for* my appointment *on* Monday.", "Necesito imprimir este formulario para mi cita del lunes."],
    ["Please save the file *before* you close the computer.", "Por favor guarda el archivo antes de cerrar la computadora."],
    ["The printer is *out of* paper, *so* I'll get more *from* the office.", "A la impresora se le acabó el papel, así que voy por más a la oficina."],
    ["I can send the document *as* a PDF, *or* *by* email.", "Puedo enviar el documento como PDF, o por correo electrónico."],
    ["*Although* I'm not good *with* computers, I'm learning fast.", "Aunque no soy buena con las computadoras, estoy aprendiendo rápido."]
  ])
]},
{ id: 'la', icon: '🌴', name: 'Talking About LA', es: 'Hablar de Los Ángeles', stop: 'Hollywood Sign', lessons: [
  L('Weather and neighborhoods', 'Clima y colonias', [
    ["The weather *in* Los Angeles is warm *during* most *of* the year.", "El clima en Los Ángeles es cálido durante casi todo el año."],
    ["I live *in* a quiet neighborhood, *close to* the beach.", "Vivo en una colonia tranquila, cerca de la playa."],
    ["It's usually sunny, *except* *in* the winter, when it rains.", "Casi siempre hace sol, excepto en invierno, cuando llueve."],
    ["*Because of* the traffic, it takes an hour *to* get downtown.", "Por el tráfico, se tarda una hora en llegar al centro."],
    ["*Although* it is big, the city has many friendly neighborhoods.", "Aunque es grande, la ciudad tiene muchas colonias amigables."]
  ]),
  L('Places to visit', 'Lugares para visitar', [
    ["*On* weekends we walk *along* the pier *in* Santa Monica.", "Los fines de semana caminamos por el muelle de Santa Mónica."],
    ["The Griffith Observatory is *above* the city, *with* a great view.", "El Observatorio Griffith está sobre la ciudad, con una gran vista."],
    ["You can see the stars *from* the hills, *as long as* the sky is clear.", "Se pueden ver las estrellas desde las colinas, siempre que el cielo esté despejado."],
    ["*Instead of* paying *for* a museum, we visit the free parks.", "En lugar de pagar un museo, visitamos los parques gratis."],
    ["*According to* my son, the best beach is *near* Venice.", "Según mi hijo, la mejor playa está cerca de Venecia."]
  ]),
  L('Food and culture', 'Comida y cultura', [
    ["Los Angeles has food *from* all over the world, *such as* tacos and sushi.", "Los Ángeles tiene comida de todo el mundo, como tacos y sushi."],
    ["I love the street tacos, *especially* *at* night *near* the market.", "Me encantan los tacos de la calle, sobre todo en la noche cerca del mercado."],
    ["*On the other hand*, restaurants *in* the city can be expensive.", "Por otro lado, los restaurantes en la ciudad pueden ser caros."],
    ["Many people speak Spanish here, *so* you can talk *in* both languages.", "Mucha gente habla español aquí, así que puedes hablar en los dos idiomas."],
    ["*In spite of* the crowds, the farmers market is worth the trip.", "A pesar de las multitudes, vale la pena ir al mercado."]
  ]),
  L('Getting around LA', 'Moverse por LA', [
    ["*Without* a car, it is hard *to* get around, but the metro helps.", "Sin carro es difícil moverse, pero el metro ayuda."],
    ["I take the bus *to* work *in order to* save money *on* gas.", "Tomo el autobús al trabajo para ahorrar en gasolina."],
    ["Leave early *so that* you avoid the traffic *on* the freeway.", "Sal temprano para evitar el tráfico en la autopista."],
    ["*If* you use the app, you can see *when* the bus will arrive.", "Si usas la aplicación, puedes ver cuándo llegará el autobús."],
    ["*Before* you drive downtown, check *whether* there is parking.", "Antes de manejar al centro, revisa si hay estacionamiento."]
  ]),
  L('Talking with visitors', 'Hablar con visitantes', [
    ["Welcome *to* Los Angeles! Are you here *for* work *or* *for* fun?", "¡Bienvenido a Los Ángeles! ¿Vienes por trabajo o por diversión?"],
    ["I recommend the beach in the morning, *before* it gets crowded.", "Te recomiendo la playa en la mañana, antes de que se llene."],
    ["*If* you like hiking, try the trails *in* Runyon Canyon.", "Si te gusta caminar, prueba los senderos de Runyon Canyon."],
    ["I've lived here *for* ten years, and I still love it.", "Llevo diez años viviendo aquí y todavía me encanta."],
    ["*In the end*, every neighborhood has something special *to* offer.", "Al final, cada colonia tiene algo especial que ofrecer."]
  ])
]},
{ id: 'coffee', icon: '☕', name: 'Coffee Shop', es: 'Cafetería', stop: 'Abbot Kinney', lessons: [
  L('Ordering a drink', 'Pedir una bebida', [
    ["Can I have a medium latte *with* oat milk?", "¿Me da un latte mediano con leche de avena?"],
    ["I'd like it *without* sugar, *or* *with* just a little honey.", "Lo quiero sin azúcar, o con solo un poco de miel."],
    ["*Instead of* regular coffee, I'll have a decaf.", "En lugar de café normal, quiero uno descafeinado."],
    ["Is that *for* here *or* *to* go?", "¿Es para aquí o para llevar?"],
    ["*As long as* it's hot, I don't mind waiting *for* a few minutes.", "Mientras esté caliente, no me importa esperar unos minutos."]
  ]),
  L('Food and pastries', 'Comida y pan dulce', [
    ["I'll take a croissant *with* butter, and a muffin *to* go.", "Quiero un croissant con mantequilla y un muffin para llevar."],
    ["Does the sandwich come *with* a side *of* fruit?", "¿El sándwich viene con una guarnición de fruta?"],
    ["I'm allergic *to* nuts, *so* I can't eat the banana bread.", "Soy alérgica a las nueces, así que no puedo comer el pan de plátano."],
    ["Could you warm it up *before* you put it *in* the bag?", "¿Podría calentarlo antes de ponerlo en la bolsa?"],
    ["*Except for* the cookies, everything *in* the case is fresh today.", "Excepto las galletas, todo en el aparador es fresco de hoy."]
  ]),
  L('Paying and tips', 'Pagar y propinas', [
    ["That comes *to* six fifty *in* total.", "Son seis cincuenta en total."],
    ["I'd like *to* pay *with* my phone, *instead of* a card.", "Quisiera pagar con mi teléfono, en lugar de tarjeta."],
    ["Can I leave a tip *on* the screen *or* *in* the jar?", "¿Puedo dejar propina en la pantalla o en el frasco?"],
    ["Do you have a rewards card *for* free drinks?", "¿Tiene una tarjeta de recompensas para bebidas gratis?"],
    ["Could I get a receipt *in case* my boss asks *for* it?", "¿Me da un recibo por si mi jefe lo pide?"]
  ]),
  L('Chatting with the barista', 'Platicar con el barista', [
    ["I come here *in* the morning, *before* I go *to* work.", "Vengo aquí en la mañana, antes de ir al trabajo."],
    ["This is the best coffee *in* the neighborhood, *according to* my friends.", "Este es el mejor café de la colonia, según mis amigos."],
    ["*If* you like sweet drinks, try the caramel latte.", "Si te gustan las bebidas dulces, prueba el latte de caramelo."],
    ["*Even though* it's busy, the staff is always friendly.", "Aunque hay mucha gente, el personal siempre es amable."],
    ["You remember my order; *as a result*, I always come back.", "Recuerdas mi pedido; como resultado, siempre regreso."]
  ]),
  L('Problems and changes', 'Problemas y cambios', [
    ["Excuse me, I asked *for* decaf, but this one tastes regular.", "Disculpe, pedí descafeinado, pero este sabe normal."],
    ["Could you remake it, *because* the milk is too cold?", "¿Podría prepararlo de nuevo, porque la leche está muy fría?"],
    ["I'll wait *until* my name is called, *unless* it takes too long.", "Esperaré hasta que llamen mi nombre, a menos que tarde mucho."],
    ["*In case* you run *out of* oat milk, I can use regular milk.", "Por si se les acaba la leche de avena, puedo tomar leche normal."],
    ["*Thanks to* your help, I got my coffee *within* five minutes.", "Gracias a su ayuda, recibí mi café en cinco minutos."]
  ])
]}
);
