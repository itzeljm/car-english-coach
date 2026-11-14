/* Family categories: Dad's car work, brother's swap meet, fashion. Then the final category order. */
CATEGORIES.push(
{ id: 'detail', icon: '🚗', name: 'Car Detailing', es: 'Detallado de autos', stop: 'Car wash', lessons: [
  L('Greeting customers', 'Saludar a los clientes', [
    ["Welcome! Are you here *for* a wash *or* a full detail?", "¡Bienvenido! ¿Viene por un lavado o un detallado completo?"],
    ["We clean the inside *as well as* the outside *of* the car *in* about three hours.", "Limpiamos el interior y el exterior del carro en unas tres horas."],
    ["*If* you leave the keys *with* me, I can start right away.", "Si me deja las llaves, puedo empezar de inmediato."],
    ["Your car will be ready *by* five o'clock, *as long as* we start now.", "Su carro estará listo para las cinco, siempre que empecemos ahora."],
    ["*According to* the price list, a basic wash is thirty dollars.", "Según la lista de precios, un lavado básico cuesta treinta dólares."]
  ]),
  L('Services and prices', 'Servicios y precios', [
    ["We offer services *such as* waxing, polishing, and interior cleaning.", "Ofrecemos servicios como encerado, pulido y limpieza interior."],
    ["The ceramic coating protects the paint *for* up *to* two years.", "El recubrimiento cerámico protege la pintura hasta por dos años."],
    ["*Instead of* the full package, I can give you a discount *on* the wash.", "En lugar del paquete completo, le puedo dar descuento en el lavado."],
    ["The price depends *on* the size *of* the car, *whether* it's a sedan *or* an SUV.", "El precio depende del tamaño del carro, si es sedán o camioneta."],
    ["You can pay *with* cash, *or* *with* a card *at* the end.", "Puede pagar en efectivo, o con tarjeta al final."]
  ]),
  L('Stains and scratches', 'Manchas y rayones', [
    ["I removed the stain *from* the seat *with* a special cleaner.", "Quité la mancha del asiento con un limpiador especial."],
    ["*Although* the scratch is deep, we can make it less visible.", "Aunque el rayón es profundo, podemos hacerlo menos visible."],
    ["*Unless* the paint is damaged, the polish will remove the marks.", "A menos que la pintura esté dañada, el pulido quitará las marcas."],
    ["*Because of* the sun, the dashboard has small cracks.", "Por el sol, el tablero tiene pequeñas grietas."],
    ["I cannot promise perfect results, *even though* I try my best.", "No puedo prometer resultados perfectos, aunque hago mi mejor esfuerzo."]
  ]),
  L('Taking care of the car', 'Cuidar el carro', [
    ["Wash your car twice a month *in order to* protect the paint.", "Lave su carro dos veces al mes para proteger la pintura."],
    ["Try not to park *under* trees, *because* the sap damages the paint.", "Trate de no estacionarse debajo de árboles, porque la savia daña la pintura."],
    ["Use a soft towel *instead of* a rough one, *so that* you don't scratch it.", "Use una toalla suave en lugar de una áspera, para no rayarlo."],
    ["*Before* you vacuum, take everything *out of* the car.", "Antes de aspirar, saque todo del carro."],
    ["*If* you keep it clean, the car will keep its value *for* years.", "Si lo mantiene limpio, el carro conservará su valor por años."]
  ]),
  L('Business and reviews', 'Negocio y reseñas', [
    ["Thank you *for* choosing us; please leave a review *on* our page.", "Gracias por elegirnos; por favor deje una reseña en nuestra página."],
    ["We work *by* appointment, *from* Monday *to* Saturday.", "Trabajamos con cita, de lunes a sábado."],
    ["*As soon as* you book online, we send you a reminder.", "En cuanto reserve en línea, le mandamos un recordatorio."],
    ["*In case* you need to cancel, please call us *before* the appointment.", "En caso de que necesite cancelar, llámenos antes de la cita."],
    ["*In the end*, happy customers are the best advertising *for* our business.", "Al final, los clientes contentos son la mejor publicidad para nuestro negocio."]
  ])
]},
{ id: 'repair', icon: '🔧', name: 'Fixing Cars', es: 'Reparar autos', stop: 'Garage', lessons: [
  L('Diagnosing problems', 'Diagnosticar problemas', [
    ["What seems *to* be the problem *with* your car?", "¿Cuál parece ser el problema con su carro?"],
    ["The engine makes a strange noise *when* I brake *or* accelerate.", "El motor hace un ruido extraño cuando freno o acelero."],
    ["The check engine light came on *after* I filled the tank.", "Se prendió la luz del motor después de llenar el tanque."],
    ["*According to* the scanner, the problem is *in* the sensor.", "Según el escáner, el problema está en el sensor."],
    ["*Since* the battery is old, the car doesn't start *in* the morning.", "Como la batería es vieja, el carro no arranca en la mañana."]
  ]),
  L('Brakes, tires and oil', 'Frenos, llantas y aceite', [
    ["You need new brake pads *because of* the noise *when* you stop.", "Necesita pastillas de freno nuevas por el ruido al frenar."],
    ["The tire pressure is low; I'll add air *so that* it's safe *to* drive.", "La presión de la llanta está baja; le pondré aire para que sea seguro manejar."],
    ["Change the oil *within* five thousand miles *in order to* protect the engine.", "Cambie el aceite dentro de cinco mil millas para proteger el motor."],
    ["*If* the tire has a nail *in* it, we can patch it *instead of* replacing it.", "Si la llanta tiene un clavo, podemos parcharla en lugar de cambiarla."],
    ["I recommend rotating the tires, *as well as* checking the alignment.", "Recomiendo rotar las llantas, además de revisar la alineación."]
  ]),
  L('Estimates and parts', 'Presupuestos y refacciones', [
    ["The repair will cost about two hundred dollars, *including* parts.", "La reparación costará unos doscientos dólares, incluyendo las refacciones."],
    ["I can use original parts, *or* cheaper ones *from* another brand.", "Puedo usar refacciones originales, o más baratas de otra marca."],
    ["*Before* I start, I need your approval *for* the estimate.", "Antes de empezar, necesito su aprobación del presupuesto."],
    ["The part arrives *within* two days, *unless* it's *out of* stock.", "La refacción llega en dos días, a menos que esté agotada."],
    ["*As soon as* the part arrives, we'll call you *about* the repair.", "En cuanto llegue la refacción, le llamamos sobre la reparación."]
  ]),
  L('Working in the shop', 'Trabajar en el taller', [
    ["Please hand me the wrench *from* the toolbox, *next to* the door.", "Por favor pásame la llave del cajón de herramientas, junto a la puerta."],
    ["I lift the car *with* a jack *in order to* work *under* it.", "Levanto el carro con un gato para trabajar debajo."],
    ["Always wear gloves *to* protect your hands *from* the oil.", "Siempre usa guantes para proteger tus manos del aceite."],
    ["*Even though* the job is dirty, I enjoy fixing cars.", "Aunque el trabajo es sucio, disfruto arreglar carros."],
    ["*During* the day, I fix cars; *on* weekends, I rest *with* my family.", "Durante el día arreglo carros; los fines de semana descanso con mi familia."]
  ]),
  L('Buying and selling cars', 'Comprar y vender carros', [
    ["I'm looking *for* a used car *with* low mileage.", "Busco un carro usado con poco kilometraje."],
    ["*According to* the report, the car has never been *in* an accident.", "Según el reporte, el carro nunca ha tenido un accidente."],
    ["*Before* you buy, take it *for* a test drive, *as well as* a mechanic check.", "Antes de comprar, pruébalo manejando y que lo revise un mecánico."],
    ["*Although* the price is good, the engine needs work.", "Aunque el precio es bueno, el motor necesita trabajo."],
    ["I'll buy it *as long as* you fix the brakes first.", "Lo compro siempre que arregle los frenos primero."]
  ])
]},
{ id: 'swap', icon: '🏷️', name: 'Swap Meet Business', es: 'Negocio en el swap meet', stop: 'Swap meet', lessons: [
  L('Setting up the stall', 'Armar el puesto', [
    ["I get *to* the swap meet *at* six *in order to* set up my stall.", "Llego al swap meet a las seis para armar mi puesto."],
    ["I hang the shirts *on* the rack, *and* put the shoes *next to* the table.", "Cuelgo las camisas en el tubo y pongo los zapatos junto a la mesa."],
    ["*If* it's windy, I use heavy boxes *to* hold the tent.", "Si hay viento, uso cajas pesadas para sostener la carpa."],
    ["*Before* the customers arrive, I check that everything has a price tag.", "Antes de que lleguen los clientes, reviso que todo tenga etiqueta de precio."],
    ["I pay *for* the space *by* the day, *so* I try *to* sell a lot.", "Pago el espacio por día, así que trato de vender mucho."]
  ]),
  L('Talking with customers', 'Hablar con los clientes', [
    ["Hi! Let me know *if* you need a different size.", "¡Hola! Avíseme si necesita otra talla."],
    ["This jacket looks great *on* you, *especially* *with* those jeans.", "Esta chamarra le queda muy bien, sobre todo con esos jeans."],
    ["We have it *in* black, blue, *or* gray.", "La tenemos en negro, azul o gris."],
    ["You can try it on *behind* the curtain, *next to* the mirror.", "Puede probárselo detrás de la cortina, junto al espejo."],
    ["Thank you *for* shopping *with* us; come back soon!", "Gracias por comprar con nosotros, ¡regrese pronto!"]
  ]),
  L('Prices and bargaining', 'Precios y regateo', [
    ["These shirts are ten dollars each, *or* three *for* twenty-five.", "Estas camisas cuestan diez dólares cada una, o tres por veinticinco."],
    ["I can lower the price *as long as* you buy two things.", "Puedo bajar el precio siempre que compre dos cosas."],
    ["*Instead of* twenty, I can offer it *for* eighteen.", "En lugar de veinte, se lo puedo dejar en dieciocho."],
    ["*Even though* it's already cheap, I'll give you a small discount.", "Aunque ya está barato, le doy un pequeño descuento."],
    ["*In the end*, we agreed *on* a fair price *for* both.", "Al final, acordamos un precio justo para los dos."]
  ]),
  L('Stock and suppliers', 'Inventario y proveedores', [
    ["I buy the clothes *from* a supplier *in* downtown Los Angeles.", "Compro la ropa a un proveedor en el centro de Los Ángeles."],
    ["*According to* my notes, I'm *out of* medium shirts.", "Según mis notas, se me acabaron las camisas medianas."],
    ["I order more *before* the weekend *so that* I don't run out.", "Pido más antes del fin de semana para no quedarme sin."],
    ["*Because of* the new styles, the old ones sell *at* a discount.", "Por los estilos nuevos, los viejos se venden con descuento."],
    ["I check the quality *before* I buy, *in case* something is damaged.", "Reviso la calidad antes de comprar, por si algo está dañado."]
  ]),
  L('Slow and busy days', 'Días tranquilos y de mucha venta', [
    ["*On* Saturdays it's very busy, *especially* *in* the afternoon.", "Los sábados hay mucha gente, sobre todo en la tarde."],
    ["*When* it rains, fewer people come *to* the swap meet.", "Cuando llueve, viene menos gente al swap meet."],
    ["*Although* sales were slow today, I'm happy *with* the week.", "Aunque las ventas fueron lentas hoy, estoy contento con la semana."],
    ["*If* you need help, I can come work *with* you *on* Sunday.", "Si necesitas ayuda, puedo ir a trabajar contigo el domingo."],
    ["I'm proud *of* you *for* building your own business.", "Estoy orgullosa de ti por construir tu propio negocio."]
  ])
]},
{ id: 'bro', icon: '🤝', name: 'Talking with My Brother', es: 'Platicar con mi hermano', stop: 'Family', lessons: [
  L('Family news', 'Noticias de la familia', [
    ["How is the family doing? I haven't heard *from* you *since* Sunday.", "¿Cómo está la familia? No he sabido de ti desde el domingo."],
    ["The kids are fine, *except for* a small cold.", "Los niños están bien, excepto por un pequeño resfriado."],
    ["*If* you want, come *for* dinner *on* Friday.", "Si quieres, ven a cenar el viernes."],
    ["I'll cook your favorite dish *as long as* you bring the drinks.", "Cocino tu platillo favorito siempre que traigas las bebidas."],
    ["Say hi *to* everyone *for* me.", "Saluda a todos de mi parte."]
  ]),
  L('Planning the week', 'Planear la semana', [
    ["Can you pick me up *after* work, *or* should I take the bus?", "¿Puedes recogerme después del trabajo, o tomo el autobús?"],
    ["I'm free *on* Sunday *until* three, and then I work.", "Estoy libre el domingo hasta las tres, y luego trabajo."],
    ["Let's meet *at* the swap meet *before* it opens.", "Veámonos en el swap meet antes de que abra."],
    ["*Unless* something comes up, I'll visit you *on* Saturday.", "A menos que pase algo, te visito el sábado."],
    ["Text me *as soon as* you get home *so that* I know you're safe.", "Mándame mensaje en cuanto llegues a casa para saber que estás bien."]
  ]),
  L('Helping each other', 'Ayudarnos', [
    ["Thank you *for* helping me *with* the move last weekend.", "Gracias por ayudarme con la mudanza el fin de semana pasado."],
    ["I can lend you money *in case* you need it *for* the rent.", "Te puedo prestar dinero por si lo necesitas para la renta."],
    ["*Instead of* paying a stranger, let me help you *with* the paperwork.", "En lugar de pagarle a un extraño, déjame ayudarte con los papeles."],
    ["*If* you need a ride *to* the airport, just call me.", "Si necesitas que te lleve al aeropuerto, solo llámame."],
    ["We always help each other, *no matter* what happens.", "Siempre nos ayudamos, pase lo que pase."]
  ]),
  L('Advice and opinions', 'Consejos y opiniones', [
    ["*In my opinion*, you should save money *for* the slow months.", "En mi opinión, deberías ahorrar para los meses lentos."],
    ["*Although* it's a lot *of* work, your business is growing.", "Aunque es mucho trabajo, tu negocio está creciendo."],
    ["You could sell online, *as well as* at the swap meet.", "Podrías vender en línea, además de en el swap meet."],
    ["*On the other hand*, don't spend too much *on* new stock.", "Por otro lado, no gastes demasiado en mercancía nueva."],
    ["I'm worried *about* you, *because* you work too many hours.", "Me preocupo por ti, porque trabajas demasiadas horas."]
  ]),
  L('Memories and plans', 'Recuerdos y planes', [
    ["Do you remember when we sold things *with* our parents *in* Mexico?", "¿Te acuerdas cuando vendíamos cosas con nuestros papás en México?"],
    ["*In spite of* the hard times, we always had fun together.", "A pesar de los tiempos difíciles, siempre nos divertíamos juntos."],
    ["I hope *to* visit Mexico *with* the whole family *during* the holidays.", "Espero visitar México con toda la familia durante las fiestas."],
    ["*If* the business goes well, you could open a real store.", "Si el negocio va bien, podrías abrir una tienda de verdad."],
    ["*In the end*, the most important thing is that we have each other.", "Al final, lo más importante es que nos tenemos el uno al otro."]
  ])
]},
{ id: 'fashion', icon: '👟', name: 'Fashion and Shoes', es: 'Moda y zapatos', stop: 'Fashion', lessons: [
  L('Describing outfits', 'Describir atuendos', [
    ["That dress looks beautiful *on* you, *especially* *with* those shoes.", "Ese vestido te queda hermoso, sobre todo con esos zapatos."],
    ["I like to dress nicely *for* special occasions, *such as* birthdays.", "Me gusta vestirme bien para ocasiones especiales, como cumpleaños."],
    ["This color goes well *with* black *or* white.", "Este color combina bien con negro o blanco."],
    ["*Instead of* a plain shirt, I'll wear one *with* a pattern.", "En lugar de una camisa lisa, me pondré una con estampado."],
    ["*According to* the magazine, bright colors are in style *for* spring.", "Según la revista, los colores brillantes están de moda en primavera."]
  ]),
  L('Shoes', 'Zapatos', [
    ["I'm looking *for* shoes that are comfortable *as well as* stylish.", "Busco zapatos que sean cómodos y también elegantes."],
    ["Do you have these sneakers *in* a size seven?", "¿Tiene estos tenis en talla siete?"],
    ["*Although* the heels are beautiful, they hurt my feet.", "Aunque los tacones son bonitos, me lastiman los pies."],
    ["I'll buy the white pair *as long as* I can return them.", "Compro el par blanco siempre que pueda devolverlos."],
    ["I clean my shoes *with* a soft brush *so that* they look new.", "Limpio mis zapatos con un cepillo suave para que se vean nuevos."]
  ]),
  L('Shopping for style', 'Comprar con estilo', [
    ["I found a great jacket *on* sale *for* half the price.", "Encontré una gran chamarra en oferta a mitad de precio."],
    ["*If* it doesn't fit, I can exchange it *within* thirty days.", "Si no me queda, puedo cambiarla dentro de treinta días."],
    ["I never buy clothes *without* trying them on first.", "Nunca compro ropa sin probármela primero."],
    ["*Because of* the quality, I prefer *to* spend more *on* fewer items.", "Por la calidad, prefiero gastar más en menos prendas."],
    ["I love vintage clothes, *such as* old denim and leather jackets.", "Me encanta la ropa vintage, como mezclilla vieja y chamarras de piel."]
  ]),
  L('Compliments and opinions', 'Cumplidos y opiniones', [
    ["I love your outfit; where did you get it *from*?", "Me encanta tu atuendo, ¿dónde lo conseguiste?"],
    ["Thank you! I got it *at* the swap meet *for* only twenty dollars.", "¡Gracias! Lo conseguí en el swap meet por solo veinte dólares."],
    ["*In my opinion*, simple clothes look more elegant *than* flashy ones.", "En mi opinión, la ropa sencilla se ve más elegante que la llamativa."],
    ["That's a nice style, *even though* it's different *from* what I usually wear.", "Es un buen estilo, aunque es diferente de lo que uso normalmente."],
    ["You always look good, *no matter* what you wear.", "Siempre te ves bien, sin importar lo que te pongas."]
  ]),
  L('Getting ready to go out', 'Arreglarse para salir', [
    ["I need an hour *to* get ready *before* the party.", "Necesito una hora para arreglarme antes de la fiesta."],
    ["Which looks better *with* this skirt, the red top *or* the black one?", "¿Cuál se ve mejor con esta falda, la blusa roja o la negra?"],
    ["I'll wear a jacket *in case* it gets cold *at* night.", "Me pondré una chamarra por si hace frío en la noche."],
    ["*As soon as* I finish my hair, we can leave.", "En cuanto termine mi cabello, nos podemos ir."],
    ["*After* a long week, it feels good *to* dress up.", "Después de una semana larga, se siente bien arreglarse."]
  ])
]}
);

/* Final order: work first, then daily life, medical, Dad's work, brother's business, then fun topics. */
(function(){
  const ORDER = ['hotel', 'interview', 'home', 'bills', 'rent', 'shopping', 'restaurants', 'phone', 'transport', 'gov',
    'medical', 'detail', 'repair', 'swap', 'bro', 'fashion', 'social', 'la', 'coffee', 'tech'];
  const idx = id => { const i = ORDER.indexOf(id); return i < 0 ? 999 : i; };
  CATEGORIES.sort((a, b) => idx(a.id) - idx(b.id));
})();
