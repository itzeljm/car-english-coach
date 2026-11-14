/* Extra lessons (added to the end of each category) and the Connectors Podcast scripts. */
const MORE = {
hotel: [
  L('Guest requests', 'Peticiones de los huéspedes', [
    ["I will bring the extra pillows *as soon as* I finish this room.", "Le llevo las almohadas extra en cuanto termine este cuarto."],
    ["The guest asked *for* a quiet room *away from* the elevator.", "El huésped pidió un cuarto tranquilo lejos del elevador."],
    ["Please call the front desk *if* you need another key *or* a late checkout.", "Por favor llame a la recepción si necesita otra llave o salida tardía."],
    ["*Instead of* waiting *in* the hall, you can sit *in* the lobby.", "En lugar de esperar en el pasillo, puede sentarse en el lobby."],
    ["I'm sorry *for* the noise; we are cleaning this floor *until* noon.", "Disculpe el ruido; estamos limpiando este piso hasta el mediodía."]
  ]),
  L('Cleaning routine', 'Rutina de limpieza', [
    ["I always start *with* the bathroom, *before* I make the bed.", "Siempre empiezo con el baño, antes de hacer la cama."],
    ["I wear gloves *in order to* protect my hands *from* the chemicals.", "Uso guantes para proteger mis manos de los químicos."],
    ["I check *under* the bed *in case* a guest forgot something.", "Reviso debajo de la cama por si un huésped olvidó algo."],
    ["*According to* the schedule, I have fifteen rooms *during* the morning shift.", "Según el horario, tengo quince cuartos durante el turno de la mañana."],
    ["*Even though* I'm tired, I always leave the room clean *for* the next guest.", "Aunque estoy cansada, siempre dejo el cuarto limpio para el siguiente huésped."]
  ])
],
interview: [
  L('My strengths', 'Mis fortalezas', [
    ["I'm very organized, *especially* when I have many tasks *at* the same time.", "Soy muy organizada, sobre todo cuando tengo muchas tareas al mismo tiempo."],
    ["I work well *under* pressure, *as well as* *in* a team.", "Trabajo bien bajo presión, así como en equipo."],
    ["*Although* English is my second language, I communicate clearly *with* customers.", "Aunque el inglés es mi segundo idioma, me comunico con claridad con los clientes."],
    ["I'm available *to* work weekends *as long as* I know the schedule *in advance*.", "Puedo trabajar los fines de semana siempre que sepa el horario con anticipación."],
    ["People can count *on* me *because of* my attendance record.", "La gente puede contar conmigo por mi historial de asistencia."]
  ]),
  L('Closing the interview', 'Cerrar la entrevista', [
    ["Thank you *for* your time; I'm excited *about* this opportunity.", "Gracias por su tiempo; me entusiasma esta oportunidad."],
    ["Could you tell me *when* I might hear *from* you *about* the decision?", "¿Podría decirme cuándo sabré de ustedes sobre la decisión?"],
    ["I'm happy to start *as soon as* you need me.", "Con gusto empiezo en cuanto me necesiten."],
    ["*If* you have any more questions, please call me *at* this number.", "Si tiene más preguntas, por favor llámeme a este número."],
    ["*Before* I go, I want to say that I would be proud *to* work *with* your team.", "Antes de irme, quiero decir que me daría orgullo trabajar con su equipo."]
  ])
],
medical: [
  L('Describing symptoms', 'Describir síntomas', [
    ["I've had a headache *since* Monday, *especially* *in* the morning.", "Tengo dolor de cabeza desde el lunes, sobre todo en las mañanas."],
    ["The pain is *in* my lower back, *close to* my right hip.", "El dolor está en la parte baja de la espalda, cerca de la cadera derecha."],
    ["I feel dizzy *after* I stand up, *even though* I drink enough water.", "Me mareo después de pararme, aunque tomo suficiente agua."],
    ["I can't sleep *because of* the pain *in* my knee.", "No puedo dormir por el dolor en la rodilla."],
    ["My son has a fever *with* a cough, *so* I'm calling *to* make an appointment.", "Mi hijo tiene fiebre con tos, así que llamo para hacer una cita."]
  ]),
  L('Doctor instructions', 'Instrucciones del doctor', [
    ["Take one pill *in* the morning *with* food, and another *at* night.", "Tome una pastilla en la mañana con comida, y otra en la noche."],
    ["Drink plenty of water *during* the day *so that* your body can recover.", "Tome mucha agua durante el día para que su cuerpo se recupere."],
    ["Don't take this medicine *unless* you have pain.", "No tome esta medicina a menos que tenga dolor."],
    ["Come back *within* two weeks, *or* sooner *if* the fever returns.", "Regrese dentro de dos semanas, o antes si regresa la fiebre."],
    ["*According to* the test, everything looks normal, *except for* your vitamin levels.", "Según el análisis, todo se ve normal, excepto sus niveles de vitaminas."]
  ])
],
rent: [
  L('Move-in and deposit', 'Mudanza y depósito', [
    ["I paid the deposit *in order to* reserve the apartment *before* someone else took it.", "Pagué el depósito para apartar el departamento antes de que alguien más lo tomara."],
    ["Could you give me a receipt *for* the deposit, *with* the date and the amount?", "¿Podría darme un recibo del depósito, con la fecha y el monto?"],
    ["I get the deposit back *as long as* I leave the apartment clean.", "Me devuelven el depósito siempre que deje el departamento limpio."],
    ["*Before* I move in, I would like to take photos *of* any damage.", "Antes de mudarme, quisiera tomar fotos de cualquier daño."],
    ["*According to* the lease, the keys are ready *on* the first *of* the month.", "Según el contrato, las llaves están listas el primero del mes."]
  ]),
  L('Utilities and rules', 'Servicios y reglas', [
    ["Is water included *in* the rent, *or* do I pay *for* it separately?", "¿El agua está incluida en la renta o la pago por separado?"],
    ["We turn off the music *after* ten *so that* the neighbors can sleep.", "Apagamos la música después de las diez para que los vecinos puedan dormir."],
    ["Pets are allowed *as long as* they don't make noise *during* the night.", "Se permiten mascotas siempre que no hagan ruido durante la noche."],
    ["Please take the trash *out of* the apartment *by* eight *in* the morning.", "Por favor saque la basura del departamento antes de las ocho de la mañana."],
    ["*In case* of an emergency, I will call the manager *at* any hour.", "En caso de emergencia, llamaré al administrador a cualquier hora."]
  ])
],
restaurants: [
  L('Reservations', 'Reservaciones', [
    ["I'd like a table *for* four *at* seven o'clock.", "Quisiera una mesa para cuatro a las siete."],
    ["We have a reservation *under* the name Garcia, *for* tonight.", "Tenemos una reservación a nombre de García, para esta noche."],
    ["Could we sit *near* the window, *or* *next to* the door?", "¿Podríamos sentarnos cerca de la ventana o junto a la puerta?"],
    ["We will be ten minutes late *because of* the traffic.", "Vamos a llegar diez minutos tarde por el tráfico."],
    ["We would love a table outside, *as long as* it is not too cold.", "Nos encantaría una mesa afuera, siempre que no haga mucho frío."]
  ]),
  L('Dietary needs', 'Necesidades alimenticias', [
    ["I can't eat anything *with* nuts, *because of* my allergy.", "No puedo comer nada con nueces por mi alergia."],
    ["Is this dish made *without* dairy, *or* can you change it?", "¿Este platillo es sin lácteos o pueden cambiarlo?"],
    ["I'm vegetarian, *so* I'd like the pasta *instead of* the chicken.", "Soy vegetariana, así que quisiera la pasta en lugar del pollo."],
    ["Please put the sauce on the side, *in case* my daughter doesn't like it.", "Por favor ponga la salsa aparte, por si a mi hija no le gusta."],
    ["*Except for* the salad, everything *on* the menu has meat.", "Excepto la ensalada, todo en el menú tiene carne."]
  ])
],
shopping: [
  L('At the checkout', 'En la caja', [
    ["Do you accept credit cards, *or* only cash?", "¿Aceptan tarjetas de crédito o solo efectivo?"],
    ["I'd like to pay *with* my card, *instead of* cash.", "Quisiera pagar con mi tarjeta, en lugar de efectivo."],
    ["Could you put these items *in* separate bags?", "¿Podría poner estos artículos en bolsas separadas?"],
    ["*As soon as* you scan the coupon, the price should go down.", "En cuanto escanee el cupón, el precio debe bajar."],
    ["Is there a discount *for* seniors *on* Tuesdays?", "¿Hay descuento para adultos mayores los martes?"]
  ]),
  L('Comparing and deciding', 'Comparar y decidir', [
    ["This one is cheaper; *on the other hand*, the other one lasts longer.", "Este es más barato; por otro lado, el otro dura más."],
    ["I'll buy it *as long as* I can return it *within* thirty days.", "Lo compro siempre que pueda devolverlo dentro de treinta días."],
    ["I'm not sure *whether* to buy the blue one *or* the black one.", "No estoy segura de comprar el azul o el negro."],
    ["*Even though* it is on sale, it's still too expensive *for* me.", "Aunque está en oferta, sigue siendo muy caro para mí."],
    ["*In the end*, I decided *to* wait *until* the next sale.", "Al final, decidí esperar hasta la próxima oferta."]
  ])
],
phone: [
  L('Calling a business', 'Llamar a un negocio', [
    ["Hello, I'm calling *about* my appointment *on* Thursday.", "Hola, llamo por mi cita del jueves."],
    ["Could I speak *with* someone *in* the billing department?", "¿Podría hablar con alguien del departamento de facturación?"],
    ["I'm calling *to* ask *about* the hours *of* the pharmacy.", "Llamo para preguntar por el horario de la farmacia."],
    ["Could you spell your name *so that* I write it correctly?", "¿Podría deletrear su nombre para escribirlo correctamente?"],
    ["Thank you *for* your help; have a nice day.", "Gracias por su ayuda; que tenga buen día."]
  ]),
  L('Voicemail and callbacks', 'Buzón y devolver llamadas', [
    ["This is Maria calling *from* Los Angeles *about* the apartment.", "Habla María desde Los Ángeles, por el departamento."],
    ["Please call me back *as soon as* you can, *at* this number.", "Por favor devuélvame la llamada en cuanto pueda, a este número."],
    ["I'm available *until* five today, *or* *after* nine tomorrow.", "Estoy disponible hasta las cinco hoy, o después de las nueve mañana."],
    ["*If* I don't answer, please leave a message *with* your name.", "Si no contesto, deje un mensaje con su nombre."],
    ["I'm returning your call *from* this morning *about* the paperwork.", "Le devuelvo la llamada de esta mañana sobre los documentos."]
  ])
],
home: [
  L('School and homework', 'Escuela y tarea', [
    ["You must finish your homework *before* you play video games.", "Tienes que terminar tu tarea antes de jugar videojuegos."],
    ["I talked *to* your teacher *about* your grades *at* the meeting.", "Hablé con tu maestro sobre tus calificaciones en la junta."],
    ["Please pack your lunch *in order to* save money *on* the cafeteria.", "Prepárate el lunch para ahorrar dinero en la cafetería."],
    ["*Even though* you are tired, you need *to* wake up *for* school.", "Aunque estés cansado, tienes que despertarte para la escuela."],
    ["*If* you need help *with* math, ask me *after* dinner.", "Si necesitas ayuda con matemáticas, pregúntame después de la cena."]
  ]),
  L('Family time', 'Tiempo en familia', [
    ["*On* Sundays we cook together, *instead of* going out.", "Los domingos cocinamos juntos, en lugar de salir."],
    ["We can watch a movie *as long as* everyone helps *with* the dishes.", "Podemos ver una película siempre que todos ayuden con los platos."],
    ["I'm proud *of* you *for* helping your brother *with* his project.", "Estoy orgullosa de ti por ayudar a tu hermano con su proyecto."],
    ["Let's go *to* the park *unless* it rains *during* the afternoon.", "Vamos al parque a menos que llueva en la tarde."],
    ["*In the end*, the most important thing is *to* spend time *with* each other.", "Al final, lo más importante es pasar tiempo juntos."]
  ])
],
bills: [
  L('Late payments', 'Pagos atrasados', [
    ["I'm calling *about* a late fee *on* my electric bill.", "Llamo por un cargo por pago tardío en mi recibo de luz."],
    ["Could you remove the fee, *since* it's my first late payment?", "¿Podría quitar el cargo, ya que es mi primer pago atrasado?"],
    ["I'll pay the full amount *by* Friday, *as long as* you don't shut off the service.", "Pagaré el monto completo para el viernes, siempre que no corten el servicio."],
    ["*Because of* an error, I was charged twice *for* the same bill.", "Por un error, me cobraron dos veces el mismo recibo."],
    ["*Unless* I hear *from* you, I'll assume the problem is fixed.", "A menos que sepa de ustedes, asumiré que el problema está resuelto."]
  ]),
  L('Saving and budgeting', 'Ahorrar y presupuesto', [
    ["I save fifty dollars every month *in order to* build an emergency fund.", "Ahorro cincuenta dólares cada mes para formar un fondo de emergencia."],
    ["*Instead of* eating out, I cook at home *to* spend less.", "En lugar de comer fuera, cocino en casa para gastar menos."],
    ["*According to* my budget, I can spend two hundred dollars *on* groceries.", "Según mi presupuesto, puedo gastar doscientos dólares en comida."],
    ["I use a calendar *so that* I never forget *to* pay *on* time.", "Uso un calendario para nunca olvidar pagar a tiempo."],
    ["*As a result of* the changes, I'm saving more than before.", "Como resultado de los cambios, estoy ahorrando más que antes."]
  ])
],
transport: [
  L('Asking for directions', 'Preguntar direcciones', [
    ["Excuse me, how do I get *to* the train station *from* here?", "Disculpe, ¿cómo llego a la estación del tren desde aquí?"],
    ["Go straight *until* you see the bank, then turn left *at* the corner.", "Siga derecho hasta ver el banco, luego dé vuelta a la izquierda en la esquina."],
    ["The pharmacy is *across from* the school, *next to* the bakery.", "La farmacia está enfrente de la escuela, junto a la panadería."],
    ["It's about ten minutes *on* foot, *or* five *by* bus.", "Son unos diez minutos a pie, o cinco en autobús."],
    ["*If* you get lost, call me; I'm *close to* the station.", "Si se pierde, llámeme; estoy cerca de la estación."]
  ]),
  L('Rides and delays', 'Viajes y retrasos', [
    ["The bus is late *because of* the traffic *on* the freeway.", "El autobús llegó tarde por el tráfico en la autopista."],
    ["I'll leave early *so that* I arrive *before* my shift starts.", "Saldré temprano para llegar antes de que empiece mi turno."],
    ["*Instead of* driving, I take the metro *to* avoid parking costs.", "En lugar de manejar, tomo el metro para evitar el costo del estacionamiento."],
    ["*As soon as* the bus arrives, I'll text you *from* the stop.", "En cuanto llegue el autobús, te mando mensaje desde la parada."],
    ["*In case* the train is canceled, I have a second route *to* work.", "Por si cancelan el tren, tengo una segunda ruta al trabajo."]
  ])
],
social: [
  L('Opinions and agreeing', 'Opiniones y estar de acuerdo', [
    ["I agree *with* you *about* the weather; it's too hot.", "Estoy de acuerdo contigo sobre el clima; hace demasiado calor."],
    ["*In my opinion*, this neighborhood is great *for* families.", "En mi opinión, este barrio es bueno para las familias."],
    ["I see your point; *on the other hand*, I think it's expensive.", "Entiendo tu punto; por otro lado, creo que es caro."],
    ["*Although* I don't like spicy food, I enjoy this dish.", "Aunque no me gusta lo picante, disfruto este platillo."],
    ["I'm not sure *whether* I should go *or* stay home.", "No sé si debería ir o quedarme en casa."]
  ]),
  L('Invitations', 'Invitaciones', [
    ["Would you like to come *to* my house *for* dinner *on* Saturday?", "¿Quieres venir a mi casa a cenar el sábado?"],
    ["I'd love to, but I have to work *until* six.", "Me encantaría, pero tengo que trabajar hasta las seis."],
    ["We can meet *at* the park, *as long as* the weather is nice.", "Podemos vernos en el parque, siempre que haga buen clima."],
    ["Thanks *for* inviting me; I'll bring dessert *in case* you need more food.", "Gracias por invitarme; llevaré postre por si necesitan más comida."],
    ["*If* you need a ride, I can pick you up *on* my way.", "Si necesitas que te lleve, puedo recogerte en mi camino."]
  ])
],
gov: [
  L('License and ID', 'Licencia e identificación', [
    ["I'm here *to* renew my driver's license *before* it expires.", "Estoy aquí para renovar mi licencia antes de que venza."],
    ["I need *to* bring proof *of* address, *such as* a bill *or* a lease.", "Necesito traer comprobante de domicilio, como un recibo o un contrato."],
    ["*According to* the website, I can make an appointment online.", "Según el sitio web, puedo hacer una cita en línea."],
    ["How long does it take *to* receive the card *in* the mail?", "¿Cuánto tarda en llegar la tarjeta por correo?"],
    ["*As soon as* I pass the test, I can drive *without* a permit.", "En cuanto apruebe el examen, puedo manejar sin permiso."]
  ]),
  L('Taxes and benefits', 'Impuestos y beneficios', [
    ["I need help *with* my tax return *before* the deadline.", "Necesito ayuda con mi declaración de impuestos antes de la fecha límite."],
    ["*Whether* I owe money *or* get a refund, I must file *by* April.", "Ya sea que deba dinero o reciba un reembolso, debo declarar antes de abril."],
    ["Please keep a copy *of* every form *in case* they ask *for* it again.", "Guarde una copia de cada formulario por si se lo piden otra vez."],
    ["I qualify *for* the program *because of* my income.", "Califico para el programa por mis ingresos."],
    ["*In the end*, the office approved my application *within* three weeks.", "Al final, la oficina aprobó mi solicitud en tres semanas."]
  ])
]
};
Object.keys(MORE).forEach(id => { const c = CATEGORIES.find(x => x.id === id); if (c) c.lessons.push(...MORE[id]); });

/* Connectors Podcast. Each item: [connector, meaning in Spanish, English example, Spanish example] */
const PODCAST = [
{ t: 'Words of place', es: 'Palabras de lugar', intro: 'Today we talk about the little words that tell us where things are.', introEs: 'Hoy hablamos de las palabras pequeñas que nos dicen dónde están las cosas.', items: [
  ['in', 'en, dentro de un lugar, una ciudad o un espacio', 'I live *in* Los Angeles.', 'Vivo en Los Ángeles.'],
  ['on', 'en o sobre una superficie, un piso o una calle', 'The towels are *on* the table.', 'Las toallas están sobre la mesa.'],
  ['at', 'en un punto exacto, como la esquina o el trabajo', "I'm *at* work right now.", 'Estoy en el trabajo ahora.'],
  ['next to', 'junto a', 'The ice machine is *next to* the elevator.', 'La máquina de hielo está junto al elevador.'],
  ['close to', 'cerca de', 'I live *close to* the bus stop.', 'Vivo cerca de la parada del autobús.'],
  ['across from', 'enfrente de', 'The pharmacy is *across from* the school.', 'La farmacia está enfrente de la escuela.'],
  ['under', 'debajo de', 'I check *under* the bed.', 'Reviso debajo de la cama.'],
  ['out of', 'fuera de, o sin cuando se acaba algo', 'We are *out of* clean towels.', 'Nos quedamos sin toallas limpias.']
], outro: 'That is all for places. Practice one of these words today.', outroEs: 'Eso es todo sobre lugares. Practica una de estas palabras hoy.' },
{ t: 'Words of time', es: 'Palabras de tiempo', intro: 'Today we talk about the little words that tell us when things happen.', introEs: 'Hoy hablamos de las palabras pequeñas que nos dicen cuándo pasan las cosas.', items: [
  ['at', 'a las, para una hora exacta', 'The meeting starts *at* nine.', 'La junta empieza a las nueve.'],
  ['on', 'el, para los días', 'My appointment is *on* Thursday.', 'Mi cita es el jueves.'],
  ['in', 'en, para los meses y partes del día', 'I work *in* the morning.', 'Trabajo en la mañana.'],
  ['by', 'para o antes de, una fecha límite', 'Please send it *by* Friday.', 'Por favor envíelo para el viernes.'],
  ['within', 'dentro de un plazo', 'I will get my card *within* a month.', 'Recibiré mi tarjeta dentro de un mes.'],
  ['until', 'hasta', 'I work *until* five.', 'Trabajo hasta las cinco.'],
  ['before', 'antes de', 'Call me *before* you leave.', 'Llámame antes de salir.'],
  ['after', 'después de', 'We eat *after* the kids finish their homework.', 'Comemos después de que los niños terminan la tarea.'],
  ['during', 'durante', 'Drink water *during* the day.', 'Toma agua durante el día.'],
  ['as soon as', 'en cuanto', "I'll call you *as soon as* I arrive.", 'Te llamo en cuanto llegue.'],
  ['since', 'desde, un punto en el pasado', 'I have worked here *since* 2020.', 'Trabajo aquí desde 2020.']
], outro: 'That is all for time words. See you in the next episode.', outroEs: 'Eso es todo sobre el tiempo. Nos vemos en el próximo episodio.' },
{ t: 'Reasons and results', es: 'Razones y resultados', intro: 'Today we talk about the words that explain why things happen.', introEs: 'Hoy hablamos de las palabras que explican por qué pasan las cosas.', items: [
  ['because of', 'por o debido a, seguido de un sustantivo', 'I was late *because of* the traffic.', 'Llegué tarde por el tráfico.'],
  ['so that', 'para que', 'I wrote it down *so that* I will not forget.', 'Lo anoté para no olvidarlo.'],
  ['in order to', 'para, cuando explicas el propósito', 'I came *in order to* ask a question.', 'Vine para hacer una pregunta.'],
  ['so', 'así que', 'I was tired, *so* I went home.', 'Estaba cansada, así que me fui a casa.'],
  ['as a result', 'como resultado', 'I studied a lot; *as a result*, I passed.', 'Estudié mucho; como resultado, aprobé.'],
  ['since', 'ya que, cuando da una razón', '*Since* it is raining, we will stay home.', 'Ya que está lloviendo, nos quedamos en casa.'],
  ['in the end', 'al final', '*In the end*, it was easy.', 'Al final, fue fácil.']
], outro: 'Now you can explain your reasons in English.', outroEs: 'Ahora puedes explicar tus razones en inglés.' },
{ t: 'Contrast and surprise', es: 'Contraste y sorpresa', intro: 'Today we talk about the words we use when something is different or unexpected.', introEs: 'Hoy hablamos de las palabras que usamos cuando algo es diferente o inesperado.', items: [
  ['although', 'aunque', '*Although* it is cold, I like walking.', 'Aunque hace frío, me gusta caminar.'],
  ['even though', 'aunque, pero más fuerte, porque es verdad', '*Even though* I am tired, I will finish.', 'Aunque estoy cansada, voy a terminar.'],
  ['in spite of', 'a pesar de', '*In spite of* the rain, we went out.', 'A pesar de la lluvia, salimos.'],
  ['on the other hand', 'por otro lado', 'It is cheap; *on the other hand*, it is far.', 'Es barato; por otro lado, queda lejos.'],
  ['instead of', 'en lugar de', 'Take the bus *instead of* driving.', 'Toma el autobús en lugar de manejar.'],
  ['except', 'excepto', 'Everything is ready *except* the paperwork.', 'Todo está listo excepto los papeles.'],
  ['without', 'sin', 'I drink coffee *without* sugar.', 'Tomo café sin azúcar.']
], outro: 'Contrast words make you sound natural. Try one today.', outroEs: 'Las palabras de contraste te hacen sonar natural. Prueba una hoy.' },
{ t: 'Conditions and choices', es: 'Condiciones y opciones', intro: 'Today we talk about the words for conditions, choices, and what if.', introEs: 'Hoy hablamos de las palabras para condiciones, opciones y qué pasaría si.', items: [
  ['if', 'si', '*If* you need help, call me.', 'Si necesitas ayuda, llámame.'],
  ['unless', 'a menos que', "I'll go *unless* it rains.", 'Voy a menos que llueva.'],
  ['as long as', 'siempre que', 'You can stay *as long as* you are quiet.', 'Puedes quedarte siempre que estés en silencio.'],
  ['in case', 'por si acaso', 'Take an umbrella *in case* it rains.', 'Lleva un paraguas por si llueve.'],
  ['whether', 'si, cuando hay dos posibilidades', "I don't know *whether* he is home.", 'No sé si él está en casa.'],
  ['or', 'o', 'Do you want tea *or* coffee?', '¿Quieres té o café?'],
  ['according to', 'según', '*According to* the lease, rent is due on the first.', 'Según el contrato, la renta se paga el primero.']
], outro: 'Great work. Conditions are everywhere in daily life.', outroEs: 'Muy bien. Las condiciones están en todas partes en la vida diaria.' },
{ t: 'Little words, big jobs', es: 'Palabras pequeñas, trabajos grandes', intro: 'Today we talk about the small words you hear in almost every sentence.', introEs: 'Hoy hablamos de las palabras pequeñas que escuchas en casi todas las oraciones.', items: [
  ['for', 'para o por; a veces no se traduce', 'Thank you *for* your help.', 'Gracias por tu ayuda.'],
  ['with', 'con', 'I work *with* children.', 'Trabajo con niños.'],
  ['about', 'sobre o acerca de', "I'm calling *about* my appointment.", 'Llamo por mi cita.'],
  ['of', 'de', 'I need a copy *of* the form.', 'Necesito una copia del formulario.'],
  ['to', 'a, o para cuando va con un verbo', 'I want *to* learn English.', 'Quiero aprender inglés.'],
  ['from', 'de o desde, para el origen', "I'm *from* Mexico.", 'Soy de México.'],
  ['such as', 'como, para dar ejemplos', 'I need documents, *such as* a bill.', 'Necesito documentos, como un recibo.'],
  ['as well as', 'así como, además de', 'I speak Spanish *as well as* English.', 'Hablo español así como inglés.'],
  ['especially', 'sobre todo', 'I like fruit, *especially* mangoes.', 'Me gusta la fruta, sobre todo los mangos.']
], outro: 'These small words do big work. Keep listening for them.', outroEs: 'Estas palabras pequeñas hacen un gran trabajo. Sigue escuchándolas.' }
];
