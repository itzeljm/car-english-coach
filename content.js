/* Curriculum. Connectors are wrapped in *asterisks*. Each sentence is [English, Mexican Spanish]. */
const L = (t, es, s) => ({ t, es, s });

const CATEGORIES = [
{ id: 'hotel', icon: '🛎️', name: 'Hotel Work', es: 'Trabajo en el hotel', stop: 'Santa Monica Pier', lessons: [
  L('Talking with guests', 'Hablar con los huéspedes', [
    ["Good morning, I'm here *to* clean your room, *if* that's okay *with* you.", "Buenos días, vengo a limpiar su habitación, si a usted le parece bien."],
    ["I can bring more towels *to* your room *in* a few minutes.", "Puedo llevarle más toallas a su habitación en unos minutos."],
    ["There is a box *of* tissues *on* the table *next to* the bed.", "Hay una caja de pañuelos desechables sobre la mesa, junto a la cama."],
    ["Please let me know *if* you need anything *for* the room.", "Por favor avíseme si necesita algo para la habitación."],
    ["The ice machine is *at* the end *of* the hall, *on* the left.", "La máquina de hielo está al final del pasillo, a la izquierda."]
  ]),
  L('Supplies and the cart', 'Los suministros y el carrito', [
    ["I need to finish twelve rooms *by* two o'clock *with* only one cart.", "Necesito terminar doce habitaciones para las dos con un solo carrito."],
    ["*Instead of* waiting, I asked the supervisor *for* extra sheets.", "En lugar de esperar, le pedí sábanas extra a la supervisora."],
    ["The room was not ready *because of* a spill *on* the carpet.", "El cuarto no estaba listo por un derrame en la alfombra."],
    ["I can have the room ready *within* thirty minutes *for* the next guest.", "Puedo tener el cuarto listo en treinta minutos para el siguiente huésped."],
    ["I'm worried *about* running *out of* cleaning supplies *by* the afternoon.", "Me preocupa que se nos acaben los productos de limpieza para la tarde."]
  ]),
  L('Working with my supervisor', 'Trabajar con mi supervisora', [
    ["I started early *in order to* finish all the rooms *before* lunch.", "Empecé temprano para terminar todas las habitaciones antes del almuerzo."],
    ["I can start the next floor *as soon as* you give me the keys.", "Puedo empezar el siguiente piso en cuanto me dé las llaves."],
    ["I always carry extra gloves *in case* I run out during my shift.", "Siempre traigo guantes extra por si se me acaban durante mi turno."],
    ["Some guests leave things behind, *such as* phones, glasses, and jewelry.", "Algunos huéspedes dejan cosas olvidadas, como teléfonos, lentes y joyas."],
    ["I clean the bathrooms *as well as* the floors and the windows.", "Limpio los baños, además de los pisos y las ventanas."]
  ]),
  L('Problems at work', 'Problemas en el trabajo', [
    ["*Even though* the hotel was full, we finished *on* time.", "Aunque el hotel estaba lleno, terminamos a tiempo."],
    ["I can't enter the room *unless* the guest gives me permission.", "No puedo entrar al cuarto a menos que el huésped me dé permiso."],
    ["*In spite of* the heavy workload, I stayed positive.", "A pesar de la carga de trabajo, me mantuve positiva."],
    ["I can work extra hours *as long as* you tell me a day *in* advance.", "Puedo trabajar horas extra siempre y cuando me avise con un día de anticipación."],
    ["I don't know *whether* the guest wants the room cleaned *or* not.", "No sé si el huésped quiere que limpien el cuarto o no."]
  ]),
  L('Reporting and asking', 'Reportar y preguntar', [
    ["*According to* my schedule, I work *from* eight *to* four, but I can stay later *if* you need me.", "Según mi horario, trabajo de ocho a cuatro, pero puedo quedarme más tarde si me necesitan."],
    ["I found a wallet *in* room 214, *so* I took it *to* the front desk *as soon as* I could.", "Encontré una cartera en el cuarto 214, así que la llevé a la recepción en cuanto pude."],
    ["The work is tiring; *on the other hand*, I enjoy meeting people *from* many countries.", "El trabajo es cansado; por otro lado, disfruto conocer gente de muchos países."],
    ["I would like to ask *about* changing my schedule *so that* I can attend my English class.", "Quisiera preguntar sobre cambiar mi horario para poder asistir a mi clase de inglés."],
    ["*In the end*, the guest was happy *because of* the extra care we gave *to* the room.", "Al final, el huésped quedó contento por el cuidado extra que le dimos al cuarto."]
  ])
]},

{ id: 'interview', icon: '💼', name: 'Job Interviews', es: 'Entrevistas de trabajo', stop: 'Downtown Los Angeles', lessons: [
  L('Introducing myself', 'Presentarme', [
    ["I have worked *in* hotels *for* more than ten years.", "He trabajado en hoteles por más de diez años."],
    ["I am good *at* working *with* people and solving problems.", "Soy buena para trabajar con la gente y resolver problemas."],
    ["I'm looking *for* a position *at* a company *with* good values.", "Busco un puesto en una empresa con buenos valores."],
    ["I live *in* Los Angeles, *close to* the bus line, so I can arrive *on* time.", "Vivo en Los Ángeles, cerca de la línea del autobús, así que puedo llegar a tiempo."],
    ["I'm interested *in* this job *because of* the schedule and the team.", "Me interesa este trabajo por el horario y el equipo."]
  ]),
  L('My experience', 'Mi experiencia', [
    ["I was responsible *for* training new employees *at* my last job.", "Yo era responsable de capacitar a los empleados nuevos en mi último trabajo."],
    ["I worked *with* guests *from* many countries *during* busy seasons.", "Trabajé con huéspedes de muchos países durante las temporadas de mucho trabajo."],
    ["*Instead of* complaining, I looked *for* solutions.", "En lugar de quejarme, buscaba soluciones."],
    ["I'm proud *of* my work, *especially* the attention *to* detail.", "Estoy orgullosa de mi trabajo, sobre todo de la atención al detalle."],
    ["I have never been late *to* work, *except* once *because of* an accident *on* the freeway.", "Nunca he llegado tarde al trabajo, excepto una vez por un accidente en la autopista."]
  ]),
  L('Why hire me', 'Por qué contratarme', [
    ["I arrive early *in order to* be ready *before* my shift starts.", "Llego temprano para estar lista antes de que empiece mi turno."],
    ["I can start working *as soon as* you need me.", "Puedo empezar a trabajar en cuanto me necesiten."],
    ["I always have a backup plan *in case* something goes wrong.", "Siempre tengo un plan de respaldo por si algo sale mal."],
    ["I have experience *with* many tasks, *such as* cleaning, training, and organizing schedules.", "Tengo experiencia en muchas tareas, como limpiar, capacitar y organizar horarios."],
    ["I speak Spanish *as well as* English, and that helps *with* our guests.", "Hablo español además de inglés, y eso ayuda con los huéspedes."]
  ]),
  L('Difficult questions', 'Preguntas difíciles', [
    ["*Even though* English is my second language, I communicate clearly *with* customers.", "Aunque el inglés es mi segundo idioma, me comunico con claridad con los clientes."],
    ["*Although* I have a lot of experience, I'm always ready to learn something new.", "Aunque tengo mucha experiencia, siempre estoy lista para aprender algo nuevo."],
    ["*In spite of* the long hours, I never miss a day.", "A pesar de las largas horas, nunca falto un día."],
    ["I can work weekends *as long as* I know my schedule *in* advance.", "Puedo trabajar fines de semana siempre y cuando sepa mi horario con anticipación."],
    ["I'm not sure *whether* I'm ready *for* a manager role, but I'd like to grow.", "No estoy segura de si estoy lista para ser gerente, pero me gustaría crecer."]
  ]),
  L('Questions I can ask', 'Preguntas que puedo hacer', [
    ["*According to* the job post, the position is full-time; is there any chance *of* flexible hours?", "Según el anuncio, el puesto es de tiempo completo; ¿hay alguna posibilidad de horarios flexibles?"],
    ["Could you tell me more *about* the training, *as well as* the benefits?", "¿Podría decirme más sobre la capacitación, además de los beneficios?"],
    ["I like the location; *on the other hand*, I'd like to know *about* the pay.", "Me gusta la ubicación; por otro lado, me gustaría saber sobre el sueldo."],
    ["Thank you *for* your time; I'm looking forward *to* hearing *from* you.", "Gracias por su tiempo; espero con gusto saber de usted."],
    ["I want to grow *with* this company *so that* we both succeed.", "Quiero crecer con esta empresa para que ambos tengamos éxito."]
  ])
]},

{ id: 'medical', icon: '🩺', name: 'Medical and Insurance', es: 'Médico y seguro', stop: 'Griffith Observatory', lessons: [
  L('Making an appointment', 'Hacer una cita', [
    ["I'd like to make an appointment *with* Doctor Ramirez *for* next week.", "Quisiera hacer una cita con el doctor Ramírez para la próxima semana."],
    ["Do you have anything *in* the morning, *or* later *in* the afternoon?", "¿Tiene algo en la mañana, o más tarde en la tarde?"],
    ["I'm calling *about* my test results *from* last Tuesday.", "Llamo por los resultados de mis análisis del martes pasado."],
    ["I need to talk *to* someone *about* my insurance.", "Necesito hablar con alguien sobre mi seguro."],
    ["I've had a pain *in* my back *for* two weeks.", "Tengo un dolor en la espalda desde hace dos semanas."]
  ]),
  L('At the clinic', 'En la clínica', [
    ["I'm allergic *to* penicillin, and I'm afraid *of* needles.", "Soy alérgica a la penicilina y le tengo miedo a las agujas."],
    ["I take medicine *for* my blood pressure *in* the morning and *at* night.", "Tomo medicina para la presión en la mañana y en la noche."],
    ["*Instead of* pills, can I try something *with* fewer side effects?", "En lugar de pastillas, ¿puedo probar algo con menos efectos secundarios?"],
    ["I'm worried *about* the swelling, *because of* my knee surgery last year.", "Me preocupa la hinchazón, por mi cirugía de rodilla del año pasado."],
    ["Can the doctor see me *within* the hour? I have to be *at* work *by* noon.", "¿Puede verme el doctor dentro de una hora? Tengo que estar en el trabajo para el mediodía."]
  ]),
  L('At the pharmacy', 'En la farmacia', [
    ["I need a refill *in order to* continue my treatment.", "Necesito que me resurtan la receta para continuar mi tratamiento."],
    ["Please call me *as soon as* the prescription is ready.", "Por favor llámeme en cuanto esté lista la receta."],
    ["I keep a list of my medicines *in case* of an emergency.", "Guardo una lista de mis medicinas por si hay una emergencia."],
    ["Do you have cheaper options, *such as* the same medicine *without* the brand name?", "¿Tiene opciones más baratas, como la misma medicina sin la marca?"],
    ["I need the medicine *as well as* the instructions *in* Spanish.", "Necesito la medicina, además de las instrucciones en español."]
  ]),
  L('Insurance questions', 'Preguntas del seguro', [
    ["*Even though* I pay every month, the claim was denied.", "Aunque pago cada mes, rechazaron el reclamo."],
    ["*Unless* I get approval first, the insurance won't cover the visit.", "A menos que reciba aprobación primero, el seguro no cubrirá la consulta."],
    ["*In spite of* sending all the documents, they asked me *for* more.", "A pesar de enviar todos los documentos, me pidieron más."],
    ["I'll go to that clinic *as long as* it's covered *by* my plan.", "Iré a esa clínica siempre y cuando esté cubierta por mi plan."],
    ["I don't know *whether* this doctor is *in* my network *or* not.", "No sé si este doctor está en mi red de proveedores o no."]
  ]),
  L('Billing and claims', 'Facturas y reclamos', [
    ["*According to* my statement, I owe two hundred dollars, but I think there's a mistake.", "Según mi estado de cuenta, debo doscientos dólares, pero creo que hay un error."],
    ["I'd like to ask *about* a payment plan *so that* I can pay a little each month.", "Quisiera preguntar por un plan de pagos para poder pagar un poco cada mes."],
    ["I was charged twice; *as a result*, I need a refund *within* thirty days.", "Me cobraron dos veces; como resultado, necesito un reembolso dentro de treinta días."],
    ["The doctor is good; *on the other hand*, the office is hard to reach *by* phone.", "El doctor es bueno; por otro lado, es difícil comunicarse con el consultorio por teléfono."],
    ["*In the end*, I want to understand every charge *before* I pay *for* it.", "Al final, quiero entender cada cargo antes de pagarlo."]
  ])
]},

{ id: 'rent', icon: '🏠', name: 'Renting My Apartment', es: 'Rentar mi departamento', stop: 'Venice Beach', lessons: [
  L('Paying rent', 'Pagar la renta', [
    ["My rent is due *on* the first *of* every month.", "Mi renta vence el primero de cada mes."],
    ["I pay my rent *by* check and leave it *in* the office.", "Pago mi renta con cheque y lo dejo en la oficina."],
    ["Could you send me a receipt *for* the payment *at* this email?", "¿Podría enviarme un recibo del pago a este correo?"],
    ["I've lived *in* this apartment *for* six years.", "He vivido en este departamento por seis años."],
    ["The apartment is *on* the second floor, *next to* the laundry room.", "El departamento está en el segundo piso, junto al cuarto de lavandería."]
  ]),
  L('Repairs', 'Reparaciones', [
    ["The sink *in* the kitchen has been leaking *since* Monday.", "El lavabo de la cocina gotea desde el lunes."],
    ["I'm worried *about* the mold *in* the bathroom.", "Me preocupa el moho del baño."],
    ["*Instead of* waiting, I'm sending you pictures *of* the problem.", "En lugar de esperar, le estoy enviando fotos del problema."],
    ["The lights stopped working *because of* a problem *with* the wiring.", "Las luces dejaron de funcionar por un problema con el cableado."],
    ["Could someone come *within* two days? I'll be home *until* five.", "¿Podría venir alguien dentro de dos días? Estaré en casa hasta las cinco."]
  ]),
  L('Talking to the landlord', 'Hablar con el dueño', [
    ["I'm writing *in order to* ask *about* the repair.", "Le escribo para preguntar sobre la reparación."],
    ["Please call me *as soon as* the plumber arrives.", "Por favor llámeme en cuanto llegue el plomero."],
    ["I'll leave the key *with* my neighbor *in case* I'm not home.", "Dejaré la llave con mi vecina por si no estoy en casa."],
    ["The building has problems, *such as* broken lights and a noisy elevator.", "El edificio tiene problemas, como luces descompuestas y un elevador ruidoso."],
    ["I pay on time, *as well as* keeping the apartment clean.", "Pago a tiempo, además de mantener el departamento limpio."]
  ]),
  L('Lease and rent increases', 'Contrato y aumentos de renta', [
    ["*Even though* I always pay on time, the rent went up.", "Aunque siempre pago a tiempo, la renta subió."],
    ["I can't sign the lease *unless* the repairs are done first.", "No puedo firmar el contrato a menos que se hagan primero las reparaciones."],
    ["*In spite of* the increase, I'd like to stay *in* this apartment.", "A pesar del aumento, me gustaría quedarme en este departamento."],
    ["I'll renew the lease *as long as* the rent stays *under* two thousand dollars.", "Renovaré el contrato siempre y cuando la renta se quede en menos de dos mil dólares."],
    ["I'm not sure *whether* the new price includes parking *or* not.", "No estoy segura de si el nuevo precio incluye estacionamiento o no."]
  ]),
  L('Notices and neighbors', 'Avisos y vecinos', [
    ["*According to* the lease, I must give thirty days' notice *before* moving out.", "Según el contrato, debo avisar con treinta días de anticipación antes de mudarme."],
    ["My neighbors are loud *at* night; *as a result*, I can't sleep *before* midnight.", "Mis vecinos hacen ruido de noche; como resultado, no puedo dormir antes de la medianoche."],
    ["I like the neighborhood; *on the other hand*, parking is very difficult.", "Me gusta el vecindario; por otro lado, es muy difícil estacionarse."],
    ["I'd like to talk *about* a payment plan *so that* I won't fall behind.", "Me gustaría hablar sobre un plan de pagos para no atrasarme."],
    ["*In the end*, I want a safe home *for* my family *at* a fair price.", "Al final, quiero un hogar seguro para mi familia a un precio justo."]
  ])
]},

{ id: 'restaurants', icon: '🍽️', name: 'Restaurants', es: 'Restaurantes', stop: 'Olvera Street', lessons: [
  L('Ordering', 'Pedir la comida', [
    ["I'd like the chicken soup *with* a side *of* rice, please.", "Quisiera la sopa de pollo con una guarnición de arroz, por favor."],
    ["We have a table *for* four *at* seven o'clock.", "Tenemos una mesa para cuatro a las siete."],
    ["Could I have a glass *of* water *with* lemon?", "¿Me podría traer un vaso de agua con limón?"],
    ["I'm *in* the mood *for* something light *for* lunch.", "Se me antoja algo ligero para el almuerzo."],
    ["What do you recommend *for* dessert?", "¿Qué me recomienda de postre?"]
  ]),
  L('Special requests', 'Peticiones especiales', [
    ["I'm allergic *to* nuts, so please make it *without* them.", "Soy alérgica a las nueces, así que por favor prepárelo sin ellas."],
    ["Could you put the sauce *on* the side *instead of* *on* top?", "¿Podría poner la salsa aparte en lugar de encima?"],
    ["I'm worried *about* the spice level *because of* my stomach.", "Me preocupa lo picante por mi estómago."],
    ["Can we get the check *within* a few minutes? We have to be *at* the theater *by* eight.", "¿Nos puede traer la cuenta en unos minutos? Tenemos que estar en el teatro a las ocho."],
    ["Could you pack the leftovers *to* go, *with* extra napkins?", "¿Podría empacar las sobras para llevar, con servilletas extra?"]
  ]),
  L('Talking with the server', 'Hablar con el mesero', [
    ["I came here *in order to* celebrate my son's birthday.", "Vine aquí para celebrar el cumpleaños de mi hijo."],
    ["Please bring the check *as soon as* we finish dessert.", "Por favor traiga la cuenta en cuanto terminemos el postre."],
    ["We'd like to sit inside *in case* it rains.", "Preferimos sentarnos adentro por si llueve."],
    ["I like Mexican dishes, *such as* tacos, tamales, and enchiladas.", "Me gustan los platillos mexicanos, como tacos, tamales y enchiladas."],
    ["Could we have rice *as well as* beans *with* the meal?", "¿Nos podría dar arroz además de frijoles con la comida?"]
  ]),
  L('Problems with the food', 'Problemas con la comida', [
    ["*Even though* I ordered it medium, the steak is raw.", "Aunque lo pedí término medio, el filete está crudo."],
    ["*Although* the food is good, the service is very slow.", "Aunque la comida es buena, el servicio es muy lento."],
    ["*In spite of* waiting forty minutes, we still have no drinks.", "A pesar de esperar cuarenta minutos, todavía no tenemos las bebidas."],
    ["We can wait *as long as* the soup arrives hot.", "Podemos esperar siempre y cuando la sopa llegue caliente."],
    ["I don't know *whether* this dish has meat *or* not.", "No sé si este platillo tiene carne o no."]
  ]),
  L('The bill and leaving', 'La cuenta y despedirse', [
    ["*According to* the menu, this dish costs fifteen dollars, but the bill says eighteen.", "Según el menú, este platillo cuesta quince dólares, pero la cuenta dice dieciocho."],
    ["The food was delicious; *on the other hand*, the music was very loud.", "La comida estuvo deliciosa; por otro lado, la música estaba muy fuerte."],
    ["We were charged twice; *as a result*, we asked *to* speak *with* the manager.", "Nos cobraron dos veces; como resultado, pedimos hablar con el gerente."],
    ["I'm leaving a tip *so that* the server knows we appreciated the service.", "Voy a dejar propina para que el mesero sepa que apreciamos el servicio."],
    ["*In the end*, we had a great evening *with* the whole family.", "Al final, pasamos una gran noche con toda la familia."]
  ])
]},

{ id: 'shopping', icon: '🛍️', name: 'Shopping', es: 'De compras', stop: 'The Grove', lessons: [
  L('Finding things', 'Buscar cosas', [
    ["Excuse me, where is the section *for* shoes *on* this floor?", "Disculpe, ¿dónde está la sección de zapatos en este piso?"],
    ["I'm looking *for* a jacket *in* a medium size.", "Busco una chamarra en talla mediana."],
    ["Do you have this shirt *in* blue or *in* black?", "¿Tiene esta camisa en azul o en negro?"],
    ["The fitting room is *at* the back *of* the store.", "El probador está al fondo de la tienda."],
    ["I'm shopping *for* a gift *for* my son.", "Estoy buscando un regalo para mi hijo."]
  ]),
  L('Sizes and prices', 'Tallas y precios', [
    ["This dress is too small *for* me; do you have a bigger one?", "Este vestido me queda muy chico; ¿tiene uno más grande?"],
    ["How much is it *with* tax and *without* the discount?", "¿Cuánto cuesta con impuestos y sin el descuento?"],
    ["The shoes are expensive *because of* the brand name.", "Los zapatos son caros por la marca."],
    ["*Instead of* the red one, I'd like the green one *with* pockets.", "En lugar del rojo, quiero el verde con bolsas."],
    ["The sale ends *within* the week, so I need to decide *by* Friday.", "La oferta termina dentro de la semana, así que tengo que decidir para el viernes."]
  ]),
  L('Asking for help', 'Pedir ayuda', [
    ["I came *in order to* exchange these shoes *for* a bigger size.", "Vine para cambiar estos zapatos por una talla más grande."],
    ["Please call me *as soon as* the blue sweater arrives.", "Por favor llámeme en cuanto llegue el suéter azul."],
    ["I'll keep the receipt *in case* I need to return it.", "Guardaré el recibo por si necesito devolverlo."],
    ["I need some things *for* the kitchen, *such as* plates, cups, and pans.", "Necesito algunas cosas para la cocina, como platos, tazas y sartenes."],
    ["Do you sell towels *as well as* sheets and blankets?", "¿Venden toallas además de sábanas y cobijas?"]
  ]),
  L('Returns and problems', 'Devoluciones y problemas', [
    ["*Even though* I kept the tag, they wouldn't take it back.", "Aunque conservé la etiqueta, no quisieron aceptar la devolución."],
    ["*Although* the coat looks nice, it doesn't fit well.", "Aunque el abrigo se ve bonito, no me queda bien."],
    ["*In spite of* the discount, it's still too expensive *for* me.", "A pesar del descuento, sigue siendo muy caro para mí."],
    ["I'll buy it *as long as* I can return it *within* thirty days.", "Lo compraré siempre y cuando pueda devolverlo dentro de treinta días."],
    ["I can't return it *unless* I have the original receipt.", "No puedo devolverlo a menos que tenga el recibo original."]
  ]),
  L('Deals and decisions', 'Ofertas y decisiones', [
    ["*According to* the sign, everything is fifty percent off, but this item is not included.", "Según el letrero, todo tiene cincuenta por ciento de descuento, pero este artículo no está incluido."],
    ["I like the red one; *on the other hand*, the black one matches everything.", "Me gusta el rojo; por otro lado, el negro combina con todo."],
    ["The price went up; *as a result*, I decided to wait *for* the next sale.", "El precio subió; como resultado, decidí esperar la próxima oferta."],
    ["I'm saving money *so that* I can buy a new couch *for* the living room.", "Estoy ahorrando para poder comprar un sillón nuevo para la sala."],
    ["*In the end*, I bought both *because of* the great deal.", "Al final, compré los dos por la gran oferta."]
  ])
]},

{ id: 'phone', icon: '📞', name: 'Phone Calls and Appointments', es: 'Llamadas y citas', stop: 'Hollywood Sign', lessons: [
  L('Starting the call', 'Empezar la llamada', [
    ["Hello, I'm calling *about* an appointment *for* next Monday.", "Hola, llamo por una cita para el próximo lunes."],
    ["Could I speak *to* someone *in* the billing department?", "¿Podría hablar con alguien del departamento de facturación?"],
    ["This is Maria Lopez, calling *from* Los Angeles.", "Habla María López, llamo desde Los Ángeles."],
    ["I'm returning a call *from* your office *about* my account.", "Estoy devolviendo una llamada de su oficina sobre mi cuenta."],
    ["Could you please repeat that *for* me, a little slower?", "¿Podría repetirlo para mí, por favor, un poco más despacio?"]
  ]),
  L('Scheduling', 'Programar citas', [
    ["I'm available *on* Tuesday *in* the afternoon, *after* two o'clock.", "Estoy disponible el martes por la tarde, después de las dos."],
    ["Could we move my appointment *from* Friday *to* Monday?", "¿Podríamos cambiar mi cita del viernes al lunes?"],
    ["I need to cancel *because of* a work schedule change.", "Necesito cancelar por un cambio en mi horario de trabajo."],
    ["Is there anything *within* the next two weeks, *instead of* next month?", "¿Hay algo dentro de las próximas dos semanas, en lugar del próximo mes?"],
    ["I'll be there *by* nine, *with* all my documents.", "Estaré ahí para las nueve, con todos mis documentos."]
  ]),
  L('Leaving messages', 'Dejar mensajes', [
    ["I'm calling *in order to* confirm my appointment *for* tomorrow.", "Llamo para confirmar mi cita de mañana."],
    ["Please call me back *as soon as* you get this message.", "Por favor devuélvame la llamada en cuanto reciba este mensaje."],
    ["I'll try again later *in case* you didn't get my first message.", "Intentaré de nuevo más tarde por si no recibió mi primer mensaje."],
    ["You can reach me at different times, *such as* mornings and evenings.", "Puede localizarme a diferentes horas, como por la mañana y por la tarde."],
    ["You can call me *at* this number, *as well as* send an email.", "Puede llamarme a este número, además de enviar un correo."]
  ]),
  L('Holds and problems', 'Esperas y problemas', [
    ["*Even though* I've called three times, nobody has called me back.", "Aunque he llamado tres veces, nadie me ha devuelto la llamada."],
    ["*Although* I was on hold for an hour, I didn't hang up.", "Aunque estuve en espera una hora, no colgué."],
    ["*In spite of* the long wait, the agent was very kind.", "A pesar de la larga espera, la agente fue muy amable."],
    ["I'll hold *as long as* you can help me today.", "Esperaré en la línea siempre y cuando me pueda ayudar hoy."],
    ["I'm not sure *whether* I called the right department *or* not.", "No estoy segura de si llamé al departamento correcto o no."]
  ]),
  L('Following up', 'Dar seguimiento', [
    ["*According to* your email, someone would call me *within* two days.", "Según su correo, alguien me llamaría dentro de dos días."],
    ["I sent the form yesterday; *as a result*, I'm waiting *for* a confirmation.", "Envié el formulario ayer; como resultado, estoy esperando una confirmación."],
    ["The first agent was helpful; *on the other hand*, the second one didn't know anything.", "La primera agente fue útil; por otro lado, la segunda no sabía nada."],
    ["I'm following up *so that* nothing gets lost *in* the process.", "Estoy dando seguimiento para que nada se pierda en el proceso."],
    ["*In the end*, I solved the problem *with* a simple phone call.", "Al final, resolví el problema con una simple llamada."]
  ])
]},

{ id: 'home', icon: '👨‍👦‍👦', name: 'My Sons and Home', es: 'Mis hijos y la casa', stop: 'Dodger Stadium', lessons: [
  L('Daily life', 'La vida diaria', [
    ["Dinner will be ready *at* six, *with* rice and beans.", "La cena estará lista a las seis, con arroz y frijoles."],
    ["Please put your clothes *in* the basket *by* the door.", "Por favor pongan su ropa en el cesto que está junto a la puerta."],
    ["I'm proud *of* both *of* my sons.", "Estoy orgullosa de mis dos hijos."],
    ["Are you coming home *for* dinner, or are you going out *with* friends?", "¿Vienes a casa a cenar o vas a salir con tus amigos?"],
    ["I'm worried *about* you driving *at* night.", "Me preocupa que manejes de noche."]
  ]),
  L('Chores and plans', 'Quehaceres y planes', [
    ["I need help *with* the groceries *from* the car.", "Necesito ayuda con las compras del carro."],
    ["*Instead of* watching TV, can you help me *with* the dishes?", "En lugar de ver la tele, ¿me ayudas con los platos?"],
    ["We can't go out *because of* the rain *on* Saturday.", "No podemos salir por la lluvia del sábado."],
    ["Please finish the laundry *within* the hour *so that* we can eat.", "Por favor termina la ropa en una hora para que podamos comer."],
    ["I'm thinking *about* a trip *to* Mexico *with* the whole family.", "Estoy pensando en un viaje a México con toda la familia."]
  ]),
  L('Helping and advising', 'Ayudar y aconsejar', [
    ["I'm telling you this *in order to* help you.", "Te lo digo para ayudarte."],
    ["Call me *as soon as* you arrive safely.", "Llámame en cuanto llegues con bien."],
    ["Take a jacket *in case* it gets cold tonight.", "Lleva una chamarra por si hace frío esta noche."],
    ["You should save money *for* things *such as* rent, insurance, and car repairs.", "Deberías ahorrar para cosas como la renta, el seguro y las reparaciones del carro."],
    ["I'll cook dinner *as well as* pack your lunch.", "Voy a cocinar la cena, además de empacarte el almuerzo."]
  ]),
  L('Disagreements', 'Desacuerdos', [
    ["*Even though* I'm tired, I'll listen *to* you.", "Aunque estoy cansada, te voy a escuchar."],
    ["*Although* I don't agree *with* you, I respect your decision.", "Aunque no estoy de acuerdo contigo, respeto tu decisión."],
    ["*In spite of* our differences, we love each other.", "A pesar de nuestras diferencias, nos queremos."],
    ["You can go out *as long as* you call me when you arrive.", "Puedes salir siempre y cuando me llames cuando llegues."],
    ["I don't know *whether* you're ready *for* this *or* not.", "No sé si estás listo para esto o no."]
  ]),
  L('Big conversations', 'Conversaciones importantes', [
    ["*According to* the doctor, you need to rest *for* a few days.", "Según el doctor, necesitas descansar unos días."],
    ["I like that you're independent; *on the other hand*, I miss cooking *for* you.", "Me gusta que seas independiente; por otro lado, extraño cocinar para ti."],
    ["You worked hard; *as a result*, you got the job.", "Trabajaste duro; como resultado, conseguiste el trabajo."],
    ["I'm saying this *so that* you know I'm always here *for* you.", "Te digo esto para que sepas que siempre estoy aquí para ti."],
    ["*In the end*, the most important thing is being *with* family.", "Al final, lo más importante es estar con la familia."]
  ])
]},

{ id: 'bills', icon: '🧾', name: 'Bills and Banking', es: 'Cuentas y banco', stop: 'Union Station', lessons: [
  L('Paying bills', 'Pagar cuentas', [
    ["My electric bill is due *on* the fifteenth *of* this month.", "Mi recibo de luz vence el quince de este mes."],
    ["I pay my bills *by* phone or *at* the bank.", "Pago mis cuentas por teléfono o en el banco."],
    ["Could you send the statement *to* my new address?", "¿Podría enviar el estado de cuenta a mi nueva dirección?"],
    ["I've been a customer *with* this company *for* five years.", "He sido clienta de esta empresa por cinco años."],
    ["There is a charge *of* thirty dollars *on* my account.", "Hay un cargo de treinta dólares en mi cuenta."]
  ]),
  L('Utilities', 'Servicios', [
    ["The internet has been down *since* yesterday *in* my building.", "El internet no funciona desde ayer en mi edificio."],
    ["I'm worried *about* the high bill *because of* the air conditioner.", "Me preocupa el recibo tan alto por el aire acondicionado."],
    ["*Instead of* paying late, can I set up a payment *with* a later date?", "En lugar de pagar tarde, ¿puedo programar un pago con una fecha posterior?"],
    ["Could a technician come *within* three days? I'm home *in* the mornings.", "¿Podría venir un técnico dentro de tres días? Estoy en casa por las mañanas."],
    ["I'd like to ask *about* a discount *for* low-income families.", "Quisiera preguntar por un descuento para familias de bajos ingresos."]
  ]),
  L('At the bank', 'En el banco', [
    ["I'm here *in order to* open a savings account.", "Estoy aquí para abrir una cuenta de ahorros."],
    ["Please text me *as soon as* the deposit arrives.", "Por favor envíeme un mensaje en cuanto llegue el depósito."],
    ["I keep some cash at home *in case* of an emergency.", "Guardo algo de efectivo en casa por si hay una emergencia."],
    ["I pay many things *by* card, *such as* groceries, gas, and medicine.", "Pago muchas cosas con tarjeta, como el súper, la gasolina y las medicinas."],
    ["I need a new card *as well as* a new PIN.", "Necesito una tarjeta nueva, además de un nuevo NIP."]
  ]),
  L('Disputes', 'Disputas', [
    ["*Even though* I paid *on* time, they charged me a late fee.", "Aunque pagué a tiempo, me cobraron un cargo por pago tardío."],
    ["*Although* I called twice, the charge is still *on* my account.", "Aunque llamé dos veces, el cargo sigue en mi cuenta."],
    ["*In spite of* the explanation, I don't understand this fee.", "A pesar de la explicación, no entiendo este cargo."],
    ["I'll keep the account *as long as* there are no hidden fees.", "Voy a conservar la cuenta siempre y cuando no haya cargos ocultos."],
    ["I don't know *whether* this charge is mine *or* a mistake.", "No sé si este cargo es mío o es un error."]
  ]),
  L('Planning', 'Planear', [
    ["*According to* my budget, I can save fifty dollars every month.", "Según mi presupuesto, puedo ahorrar cincuenta dólares cada mes."],
    ["Saving is hard; *on the other hand*, it gives me peace *of* mind.", "Ahorrar es difícil; por otro lado, me da tranquilidad."],
    ["I paid off the card; *as a result*, my interest went down.", "Pagué la tarjeta; como resultado, bajaron mis intereses."],
    ["I'm setting up automatic payments *so that* I never forget a due date.", "Estoy programando pagos automáticos para nunca olvidar una fecha de vencimiento."],
    ["*In the end*, I feel safer *with* a plan *for* my money.", "Al final, me siento más segura con un plan para mi dinero."]
  ])
]},

{ id: 'transport', icon: '🚌', name: 'Getting Around', es: 'Moverme por la ciudad', stop: 'Malibu', lessons: [
  L('Directions', 'Direcciones', [
    ["Excuse me, how do I get *to* the bus stop *on* Main Street?", "Disculpe, ¿cómo llego a la parada del autobús en la calle Main?"],
    ["Turn left *at* the corner, *next to* the pharmacy.", "Da vuelta a la izquierda en la esquina, junto a la farmacia."],
    ["The station is *in* front *of* the big park.", "La estación está enfrente del parque grande."],
    ["Is this bus going *to* downtown or *to* the airport?", "¿Este autobús va al centro o al aeropuerto?"],
    ["I'm *on* my way *to* work; I'll be there *in* twenty minutes.", "Voy en camino al trabajo; llegaré en veinte minutos."]
  ]),
  L('Parking and the car', 'Estacionamiento y el carro', [
    ["I parked *in* the garage, *on* the third floor.", "Estacioné en el garaje, en el tercer piso."],
    ["*Instead of* paying for parking, I took the bus.", "En lugar de pagar el estacionamiento, tomé el autobús."],
    ["I got a ticket *because of* the street cleaning sign.", "Me pusieron una multa por el letrero de limpieza de calles."],
    ["Could the mechanic finish *within* two days? I need the car *for* work.", "¿Podría el mecánico terminar dentro de dos días? Necesito el carro para el trabajo."],
    ["I'm worried *about* the noise *from* the engine.", "Me preocupa el ruido del motor."]
  ]),
  L('Bus and rides', 'Autobús y viajes', [
    ["I take the bus early *in order to* avoid traffic.", "Tomo el autobús temprano para evitar el tráfico."],
    ["Please text me *as soon as* you're outside.", "Por favor mándame un mensaje en cuanto estés afuera."],
    ["I always carry a bus pass *in case* my car breaks down.", "Siempre llevo un pase de autobús por si se descompone mi carro."],
    ["There are many ways to travel, *such as* buses, trains, and rides *with* friends.", "Hay muchas formas de viajar, como autobuses, trenes y viajes con amigos."],
    ["I need a ride *to* the clinic *as well as* *to* the pharmacy.", "Necesito que me lleven a la clínica, además de a la farmacia."]
  ]),
  L('Problems on the road', 'Problemas en el camino', [
    ["*Even though* I left early, I arrived late.", "Aunque salí temprano, llegué tarde."],
    ["*Although* the freeway was closed, we found another way.", "Aunque la autopista estaba cerrada, encontramos otro camino."],
    ["*In spite of* the traffic, I stayed calm.", "A pesar del tráfico, me mantuve tranquila."],
    ["I can drive *as long as* it's not raining too hard.", "Puedo manejar siempre y cuando no llueva demasiado fuerte."],
    ["I don't know *whether* the bus runs *on* Sundays *or* not.", "No sé si el autobús pasa los domingos o no."]
  ]),
  L('Planning trips', 'Planear viajes', [
    ["*According to* the app, the bus arrives *in* five minutes.", "Según la aplicación, el autobús llega en cinco minutos."],
    ["The train is faster; *on the other hand*, the bus is cheaper.", "El tren es más rápido; por otro lado, el autobús es más barato."],
    ["There was an accident; *as a result*, the whole freeway stopped.", "Hubo un accidente; como resultado, toda la autopista se detuvo."],
    ["I'm leaving early *so that* I can find parking *near* the clinic.", "Voy a salir temprano para encontrar estacionamiento cerca de la clínica."],
    ["*In the end*, I arrived *on* time *because of* a shortcut.", "Al final, llegué a tiempo por un atajo."]
  ])
]},

{ id: 'social', icon: '💬', name: 'Small Talk and Friends', es: 'Plática y amistades', stop: 'Rodeo Drive', lessons: [
  L('Small talk', 'Plática', [
    ["How was your weekend? Did you go anywhere *with* your family?", "¿Cómo estuvo tu fin de semana? ¿Fuiste a algún lado con tu familia?"],
    ["I'm *from* Mexico, and I've lived *in* Los Angeles *for* many years.", "Soy de México, y he vivido en Los Ángeles por muchos años."],
    ["I'm interested *in* learning more *about* your culture.", "Me interesa aprender más sobre tu cultura."],
    ["Thank you *for* inviting me *to* your party.", "Gracias por invitarme a tu fiesta."],
    ["What do you like to do *on* the weekends?", "¿Qué te gusta hacer los fines de semana?"]
  ]),
  L('Neighbors', 'Vecinos', [
    ["I live *on* the third floor, *next to* the elevator.", "Vivo en el tercer piso, junto al elevador."],
    ["Could you turn the music down a little *because of* the baby?", "¿Podrías bajarle un poco a la música por el bebé?"],
    ["*Instead of* complaining, I decided to talk *to* my neighbor.", "En lugar de quejarme, decidí hablar con mi vecino."],
    ["Could you collect my mail *within* the week? I'll be away.", "¿Podrías recoger mi correo esta semana? Voy a estar fuera."],
    ["I'm worried *about* the noise *in* the hallway *at* night.", "Me preocupa el ruido en el pasillo por la noche."]
  ]),
  L('Making plans', 'Hacer planes', [
    ["I'm calling *in order to* invite you *to* dinner.", "Llamo para invitarte a cenar."],
    ["Let me know *as soon as* you decide.", "Avísame en cuanto decidas."],
    ["Bring a sweater *in case* it gets cold.", "Trae un suéter por si hace frío."],
    ["We can eat something light, *such as* salad, soup, or fruit.", "Podemos comer algo ligero, como ensalada, sopa o fruta."],
    ["I'll bring dessert *as well as* drinks.", "Voy a llevar postre, además de bebidas."]
  ]),
  L('Opinions', 'Opiniones', [
    ["*Even though* we think differently, we can still be friends.", "Aunque pensamos distinto, podemos seguir siendo amigas."],
    ["*Although* I like the idea, I need more time *to* decide.", "Aunque me gusta la idea, necesito más tiempo para decidir."],
    ["*In spite of* the distance, we talk every week.", "A pesar de la distancia, hablamos cada semana."],
    ["I'll join you *as long as* we're home *by* ten.", "Te acompaño siempre y cuando regresemos a casa para las diez."],
    ["I'm not sure *whether* I should say yes *or* no.", "No estoy segura de si debo decir que sí o que no."]
  ]),
  L('Conversation skills', 'Habilidades para platicar', [
    ["*According to* my friend, the restaurant is excellent.", "Según mi amiga, el restaurante es excelente."],
    ["I enjoy meeting new people; *on the other hand*, I get tired *of* big crowds.", "Disfruto conocer gente nueva; por otro lado, me cansan las multitudes."],
    ["I practiced a lot; *as a result*, I feel more confident.", "Practiqué mucho; como resultado, me siento más segura."],
    ["I speak slowly *so that* everyone can understand me.", "Hablo despacio para que todos me entiendan."],
    ["*In the end*, the best way *to* learn is *to* keep talking.", "Al final, la mejor manera de aprender es seguir hablando."]
  ])
]},

{ id: 'gov', icon: '📄', name: 'Government and Paperwork', es: 'Trámites y documentos', stop: 'City Hall', lessons: [
  L('Offices and forms', 'Oficinas y formularios', [
    ["I'm here *for* an appointment *at* ten o'clock.", "Vengo a una cita a las diez."],
    ["Where do I sign, *at* the bottom *of* this page?", "¿Dónde firmo, al final de esta página?"],
    ["I need a copy *of* my birth certificate *for* the application.", "Necesito una copia de mi acta de nacimiento para la solicitud."],
    ["I'm applying *for* a new driver's license.", "Estoy solicitando una nueva licencia de manejo."],
    ["Is this window *for* renewals or new applications?", "¿Esta ventanilla es para renovaciones o para solicitudes nuevas?"]
  ]),
  L('Waiting and documents', 'Esperas y documentos', [
    ["I've been waiting *for* an hour *in* this line.", "He estado esperando una hora en esta fila."],
    ["*Instead of* coming back tomorrow, can I finish my paperwork today?", "En lugar de regresar mañana, ¿puedo terminar mis papeles hoy?"],
    ["My form was rejected *because of* a missing signature.", "Rechazaron mi formulario por una firma que faltaba."],
    ["Will I receive my card *within* two weeks?", "¿Recibiré mi tarjeta dentro de dos semanas?"],
    ["I'm worried *about* the deadline *for* my application.", "Me preocupa la fecha límite de mi solicitud."]
  ]),
  L('Applications', 'Solicitudes', [
    ["I'm submitting these documents *in order to* renew my license.", "Estoy entregando estos documentos para renovar mi licencia."],
    ["Please notify me *as soon as* my application is approved.", "Por favor avíseme en cuanto aprueben mi solicitud."],
    ["I made copies *in case* you need an extra set.", "Hice copias por si necesita un juego extra."],
    ["I brought several documents, *such as* my passport, a bill, and my lease.", "Traje varios documentos, como mi pasaporte, un recibo y mi contrato de renta."],
    ["I need a stamp *as well as* a signature *on* this form.", "Necesito un sello además de una firma en este formulario."]
  ]),
  L('Problems', 'Problemas', [
    ["*Even though* I brought everything, they asked *for* another paper.", "Aunque traje todo, me pidieron otro papel."],
    ["*Although* the office was closed, I found help online.", "Aunque la oficina estaba cerrada, encontré ayuda en línea."],
    ["*In spite of* my appointment, I waited two hours.", "A pesar de tener cita, esperé dos horas."],
    ["I can come back tomorrow *as long as* my application stays valid.", "Puedo regresar mañana siempre y cuando mi solicitud siga vigente."],
    ["I don't know *whether* I need an appointment *or* not.", "No sé si necesito una cita o no."]
  ]),
  L('Following up', 'Dar seguimiento', [
    ["*According to* the website, the office opens *at* eight.", "Según el sitio web, la oficina abre a las ocho."],
    ["The line is long; *on the other hand*, the staff is very helpful.", "La fila es larga; por otro lado, el personal es muy amable."],
    ["I submitted everything; *as a result*, I received my card *within* a month.", "Entregué todo; como resultado, recibí mi tarjeta dentro de un mes."],
    ["I'm keeping copies *so that* I have proof *of* everything.", "Estoy guardando copias para tener prueba de todo."],
    ["*In the end*, the process was easier *with* the right documents.", "Al final, el trámite fue más fácil con los documentos correctos."]
  ])
]}
];
