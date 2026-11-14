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

/* Batch 2 categories are added below. */
{ id: 'restaurants', icon: '🍽️', name: 'Restaurants', es: 'Restaurantes', stop: 'Olvera Street', lessons: [] },
{ id: 'shopping', icon: '🛍️', name: 'Shopping', es: 'De compras', stop: 'The Grove', lessons: [] },
{ id: 'phone', icon: '📞', name: 'Phone Calls and Appointments', es: 'Llamadas y citas', stop: 'Hollywood Sign', lessons: [] },
{ id: 'home', icon: '👨‍👦‍👦', name: 'My Sons and Home', es: 'Mis hijos y la casa', stop: 'Dodger Stadium', lessons: [] },
{ id: 'bills', icon: '🧾', name: 'Bills and Banking', es: 'Cuentas y banco', stop: 'Union Station', lessons: [] },
{ id: 'transport', icon: '🚌', name: 'Getting Around', es: 'Moverme por la ciudad', stop: 'Malibu', lessons: [] },
{ id: 'social', icon: '💬', name: 'Small Talk and Friends', es: 'Plática y amistades', stop: 'Rodeo Drive', lessons: [] },
{ id: 'gov', icon: '📄', name: 'Government and Paperwork', es: 'Trámites y documentos', stop: 'City Hall', lessons: [] }
];
