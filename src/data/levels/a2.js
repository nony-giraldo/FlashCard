// A2 - Collocations y Supervivencia (~200 palabras)
// Fuentes: Oxford 3000, Cambridge PET Vocabulary, English Profile
// Foco: Phrasal verbs comunes, collocations, falsos amigos latinos, vida diaria

export const a2Vocabulary = [
  // ============================================================
  // PHRASAL VERBS ESENCIALES (~40)
  // ============================================================
  {
    id:"a2-pv1", en:"Give up", type:"phrasal verb", ipa:"/ɡɪv ʌp/",
    es:"Rendirse / Dejar de hacer", esLiteral:"Dar arriba",
    tip:"Conecta los sonidos: /gɪ-vʌp/.",
    exampleEn:"Never give up on your dreams.", exampleEs:"Nunca te rindas con tus sueños.",
    tenses:{present:"give up", past:"gave up", participle:"given up", continuous:"giving up"}
  },
  {
    id:"a2-pv2", en:"Look for", type:"phrasal verb", ipa:"/lʊk fɔːr/",
    es:"Buscar", esLiteral:"Mirar para",
    tip:"La ACCIÓN de buscar. 'Find' es el RESULTADO de encontrar.",
    exampleEn:"I am looking for my glasses.", exampleEs:"Estoy buscando mis lentes.",
    tenses:{present:"look for", past:"looked for", participle:"looked for", continuous:"looking for"}
  },
  {
    id:"a2-pv3", en:"Find out", type:"phrasal verb", ipa:"/faɪnd aʊt/",
    es:"Averiguar / Descubrir / Enterarse", esLiteral:"Encontrar afuera",
    tip:"Más específico que 'find'. Es descubrir INFORMACIÓN o VERDADES.",
    exampleEn:"I need to find out what happened.", exampleEs:"Necesito averiguar qué pasó.",
    tenses:{present:"find out", past:"found out", participle:"found out", continuous:"finding out"}
  },
  {
    id:"a2-pv4", en:"Pick up", type:"phrasal verb", ipa:"/pɪk ʌp/",
    es:"Recoger / Levantar / Aprender (informal)", esLiteral:"Picar arriba",
    tip:"También significa aprender algo de forma natural: 'I picked up some Spanish in Mexico'.",
    exampleEn:"Can you pick me up from the airport?", exampleEs:"¿Puedes recogerme del aeropuerto?",
    tenses:{present:"pick up", past:"picked up", participle:"picked up", continuous:"picking up"}
  },
  {
    id:"a2-pv5", en:"Wake up", type:"phrasal verb", ipa:"/weɪk ʌp/",
    es:"Despertarse", esLiteral:null,
    tip:"Abrir los ojos. 'Get up' = levantarse de la cama (siguiente paso físico).",
    exampleEn:"I wake up at 6 AM every day.", exampleEs:"Me despierto a las 6 AM todos los días.",
    tenses:{present:"wake up", past:"woke up", participle:"woken up", continuous:"waking up"}
  },
  {
    id:"a2-pv6", en:"Get up", type:"phrasal verb", ipa:"/ɡet ʌp/",
    es:"Levantarse (de la cama/silla)", esLiteral:null,
    tip:"El acto FÍSICO de ponerte de pie.",
    exampleEn:"What time do you usually get up?", exampleEs:"¿A qué hora te levantas normalmente?",
    tenses:{present:"get up", past:"got up", participle:"gotten up", continuous:"getting up"}
  },
  {
    id:"a2-pv7", en:"Turn on", type:"phrasal verb", ipa:"/tɜːrn ɒn/",
    es:"Encender / Prender", esLiteral:"Girar en",
    tip:"Opuesto: 'turn off' (apagar).",
    exampleEn:"Please turn on the lights.", exampleEs:"Por favor enciende las luces.",
    tenses:{present:"turn on", past:"turned on", participle:"turned on", continuous:"turning on"}
  },
  {
    id:"a2-pv8", en:"Turn off", type:"phrasal verb", ipa:"/tɜːrn ɒf/",
    es:"Apagar", esLiteral:"Girar apagado",
    tip:"Para dispositivos, luces, agua, etc.",
    exampleEn:"Don't forget to turn off the TV.", exampleEs:"No olvides apagar la televisión.",
    tenses:{present:"turn off", past:"turned off", participle:"turned off", continuous:"turning off"}
  },
  {
    id:"a2-pv9", en:"Come back", type:"phrasal verb", ipa:"/kʌm bæk/",
    es:"Regresar / Volver", esLiteral:null,
    tip:"'I'll be back' = Regresaré (frase icónica).",
    exampleEn:"When are you coming back?", exampleEs:"¿Cuándo regresas?",
    tenses:{present:"come back", past:"came back", participle:"come back", continuous:"coming back"}
  },
  {
    id:"a2-pv10", en:"Grow up", type:"phrasal verb", ipa:"/ɡroʊ ʌp/",
    es:"Crecer (personas) / Madurar", esLiteral:null,
    tip:"Solo para personas. Para plantas usa solo 'grow'.",
    exampleEn:"I grew up in a small town.", exampleEs:"Crecí en un pueblo pequeño.",
    tenses:{present:"grow up", past:"grew up", participle:"grown up", continuous:"growing up"}
  },
  {
    id:"a2-pv11", en:"Hang out", type:"phrasal verb", ipa:"/hæŋ aʊt/",
    es:"Pasar el rato / Salir con amigos", esLiteral:"Colgar afuera",
    tip:"Muy informal y súper común entre jóvenes.",
    exampleEn:"Do you want to hang out this weekend?", exampleEs:"¿Quieres pasar el rato este fin de semana?",
    tenses:{present:"hang out", past:"hung out", participle:"hung out", continuous:"hanging out"}
  },
  {
    id:"a2-pv12", en:"Work out", type:"phrasal verb", ipa:"/wɜːrk aʊt/",
    es:"Ejercitarse / Resolver / Resultar", esLiteral:null,
    tip:"3 significados: hacer ejercicio, resolver un problema, y que algo salga bien.",
    exampleEn:"I work out at the gym three times a week.", exampleEs:"Hago ejercicio en el gimnasio tres veces por semana.",
    tenses:{present:"work out", past:"worked out", participle:"worked out", continuous:"working out"}
  },
  {
    id:"a2-pv13", en:"Set up", type:"phrasal verb", ipa:"/set ʌp/",
    es:"Configurar / Montar / Establecer", esLiteral:null,
    tip:"Muy usado en tecnología: 'set up your account'.",
    exampleEn:"I need to set up my new laptop.", exampleEs:"Necesito configurar mi nueva laptop.",
    tenses:{present:"set up", past:"set up", participle:"set up", continuous:"setting up"}
  },
  {
    id:"a2-pv14", en:"Come up with", type:"phrasal verb", ipa:"/kʌm ʌp wɪð/",
    es:"Idear / Inventar / Ocurrírsele", esLiteral:"Venir arriba con",
    tip:"Para generar ideas o soluciones creativas.",
    exampleEn:"She came up with a brilliant idea.", exampleEs:"A ella se le ocurrió una idea brillante.",
    tenses:{present:"come up with", past:"came up with", participle:"come up with", continuous:"coming up with"}
  },
  {
    id:"a2-pv15", en:"Run out of", type:"phrasal verb", ipa:"/rʌn aʊt ɒv/",
    es:"Quedarse sin / Agotarse", esLiteral:"Correr fuera de",
    tip:"Para cuando un recurso se acaba.",
    exampleEn:"We ran out of milk.", exampleEs:"Nos quedamos sin leche.",
    tenses:{present:"run out of", past:"ran out of", participle:"run out of", continuous:"running out of"}
  },
  // ============================================================
  // COLLOCATIONS DE LA VIDA DIARIA (~30)
  // ============================================================
  {
    id:"a2-col1", en:"Make a decision", type:"collocation", ipa:"/meɪk ə dɪˈsɪʒ.ən/",
    es:"Tomar una decisión", esLiteral:"Hacer una decisión",
    tip:"En inglés se HACEN decisiones, no se TOMAN. 'Take a decision' existe pero es mucho menos común.",
    exampleEn:"You need to make a decision soon.", exampleEs:"Necesitas tomar una decisión pronto."
  },
  {
    id:"a2-col2", en:"Make a mistake", type:"collocation", ipa:"/meɪk ə mɪˈsteɪk/",
    es:"Cometer un error", esLiteral:"Hacer un error",
    tip:"Nunca 'do a mistake'. Siempre 'MAKE a mistake'.",
    exampleEn:"Everyone makes mistakes.", exampleEs:"Todos cometen errores."
  },
  {
    id:"a2-col3", en:"Take a shower", type:"collocation", ipa:"/teɪk ə ˈʃaʊ.ər/",
    es:"Ducharse / Tomar una ducha", esLiteral:null,
    tip:"También 'have a shower' (más británico).",
    exampleEn:"I take a shower every morning.", exampleEs:"Me ducho todas las mañanas."
  },
  {
    id:"a2-col4", en:"Take a break", type:"collocation", ipa:"/teɪk ə breɪk/",
    es:"Tomar un descanso", esLiteral:null,
    tip:"Corto = break. Largo = vacation/holiday.",
    exampleEn:"Let's take a break.", exampleEs:"Tomemos un descanso."
  },
  {
    id:"a2-col5", en:"Do homework", type:"collocation", ipa:"/duː ˈhoʊm.wɜːrk/",
    es:"Hacer la tarea", esLiteral:null,
    tip:"'Homework' es INCONTABLE. Nunca 'homeworks'. Usa 'do', no 'make'.",
    exampleEn:"Have you done your homework?", exampleEs:"¿Has hecho tu tarea?"
  },
  {
    id:"a2-col6", en:"Pay attention", type:"collocation", ipa:"/peɪ əˈten.ʃən/",
    es:"Prestar atención", esLiteral:"Pagar atención",
    tip:"En inglés PAGAS atención, no la PRESTAS.",
    exampleEn:"Pay attention to the teacher.", exampleEs:"Presta atención al profesor."
  },
  {
    id:"a2-col7", en:"Have fun", type:"collocation", ipa:"/hæv fʌn/",
    es:"Divertirse / Pasarla bien", esLiteral:"Tener diversión",
    tip:"'Have fun!' = ¡Que te diviertas! Despedida muy común.",
    exampleEn:"We had so much fun at the party.", exampleEs:"Nos divertimos mucho en la fiesta."
  },
  {
    id:"a2-col8", en:"Make money", type:"collocation", ipa:"/meɪk ˈmʌn.i/",
    es:"Ganar dinero", esLiteral:"Hacer dinero",
    tip:"'Earn money' es más formal; 'make money' es más coloquial y común.",
    exampleEn:"He makes a lot of money.", exampleEs:"Él gana mucho dinero."
  },
  {
    id:"a2-col9", en:"Spend time", type:"collocation", ipa:"/spend taɪm/",
    es:"Pasar/Dedicar tiempo", esLiteral:"Gastar tiempo",
    tip:"'Spend' se usa tanto para tiempo como para dinero.",
    exampleEn:"I like spending time with my family.", exampleEs:"Me gusta pasar tiempo con mi familia."
  },
  {
    id:"a2-col10", en:"Catch a cold", type:"collocation", ipa:"/kætʃ ə koʊld/",
    es:"Resfriarse / Atrapar un resfriado", esLiteral:"Agarrar un frío",
    tip:"En inglés los resfriados se 'atrapan'.",
    exampleEn:"I caught a cold last week.", exampleEs:"Me resfrié la semana pasada."
  },
  // ============================================================
  // FALSOS AMIGOS (Trampas Latinas) (~15)
  // ============================================================
  {
    id:"a2-fa1", en:"Actually", type:"adverb", ipa:"/ˈæk.tʃu.ə.li/",
    es:"En realidad / De hecho", esLiteral:null,
    tip:"¡FALSO AMIGO! No significa 'actualmente'. 'Actualmente' = 'Currently' o 'Nowadays'.",
    exampleEn:"Actually, I changed my mind.", exampleEs:"De hecho, cambié de opinión."
  },
  {
    id:"a2-fa2", en:"Eventually", type:"adverb", ipa:"/ɪˈven.tʃu.ə.li/",
    es:"Finalmente / Al final / Con el tiempo", esLiteral:null,
    tip:"¡FALSO AMIGO! No significa 'eventualmente'. Significa 'al final, después de mucho tiempo'.",
    exampleEn:"He eventually found a good job.", exampleEs:"Finalmente encontró un buen trabajo."
  },
  {
    id:"a2-fa3", en:"Realize", type:"verb", ipa:"/ˈriː.ə.laɪz/",
    es:"Darse cuenta", esLiteral:null,
    tip:"¡FALSO AMIGO! No significa 'realizar' (hacer). 'Realizar' = 'carry out' o 'accomplish'.",
    exampleEn:"I didn't realize it was so late.", exampleEs:"No me di cuenta de que era tan tarde.",
    tenses:{present:"realize", past:"realized", participle:"realized", continuous:"realizing"}
  },
  {
    id:"a2-fa4", en:"Attend", type:"verb", ipa:"/əˈtend/",
    es:"Asistir (ir a un lugar)", esLiteral:null,
    tip:"¡FALSO AMIGO! 'Atender' a un cliente = 'serve' o 'assist'. 'Attend' = ir a un evento.",
    exampleEn:"I will attend the meeting tomorrow.", exampleEs:"Asistiré a la reunión mañana.",
    tenses:{present:"attend", past:"attended", participle:"attended", continuous:"attending"}
  },
  {
    id:"a2-fa5", en:"Support", type:"verb", ipa:"/səˈpɔːrt/",
    es:"Apoyar / Respaldar", esLiteral:null,
    tip:"¡FALSO AMIGO! No significa 'soportar' (aguantar). 'Soportar' = 'stand' o 'bear'.",
    exampleEn:"I will always support you.", exampleEs:"Siempre te apoyaré.",
    tenses:{present:"support", past:"supported", participle:"supported", continuous:"supporting"}
  },
  {
    id:"a2-fa6", en:"Sensible", type:"adjective", ipa:"/ˈsen.sə.bəl/",
    es:"Sensato / Prudente", esLiteral:null,
    tip:"¡FALSO AMIGO! No significa 'sensible'. 'Sensible' (español) = 'sensitive' en inglés.",
    exampleEn:"That's a very sensible decision.", exampleEs:"Esa es una decisión muy sensata."
  },
  {
    id:"a2-fa7", en:"Embarrassed", type:"adjective", ipa:"/ɪmˈbær.əst/",
    es:"Avergonzado/a", esLiteral:null,
    tip:"¡FALSO AMIGO! No significa 'embarazada'. 'Embarazada' = 'pregnant'.",
    exampleEn:"I was so embarrassed when I fell.", exampleEs:"Estaba tan avergonzado cuando me caí."
  },
  {
    id:"a2-fa8", en:"Introduce", type:"verb", ipa:"/ˌɪn.trəˈduːs/",
    es:"Presentar (a una persona)", esLiteral:null,
    tip:"¡FALSO AMIGO! 'Introducir' algo dentro = 'insert'. 'Introduce' = presentar a alguien.",
    exampleEn:"Let me introduce you to my friend.", exampleEs:"Déjame presentarte a mi amigo.",
    tenses:{present:"introduce", past:"introduced", participle:"introduced", continuous:"introducing"}
  },
  // ============================================================
  // ADJETIVOS DESCRIPTIVOS + EMOCIONES (~30)
  // ============================================================
  {
    id:"a2-adj1", en:"Amazing", type:"adjective", ipa:"/əˈmeɪ.zɪŋ/",
    es:"Increíble / Asombroso", esLiteral:null,
    tip:"Más fuerte que 'good'. Úsalo cuando algo te impresiona genuinamente.",
    exampleEn:"The view from here is amazing.", exampleEs:"La vista desde aquí es increíble."
  },
  {
    id:"a2-adj2", en:"Boring", type:"adjective", ipa:"/ˈbɔːr.ɪŋ/",
    es:"Aburrido (la cosa es aburrida)", esLiteral:null,
    tip:"'Boring' describe la COSA. 'Bored' describe la PERSONA. 'The movie is boring → I am bored'.",
    exampleEn:"This class is really boring.", exampleEs:"Esta clase es realmente aburrida."
  },
  {
    id:"a2-adj3", en:"Bored", type:"adjective", ipa:"/bɔːrd/",
    es:"Aburrido/a (la persona está aburrida)", esLiteral:null,
    tip:"USA: 'I am bored' (estoy aburrido). Nunca 'I am boring' (eso significa que TÚ aburres a otros).",
    exampleEn:"I'm bored. Let's do something fun.", exampleEs:"Estoy aburrido. Hagamos algo divertido."
  },
  {
    id:"a2-adj4", en:"Excited", type:"adjective", ipa:"/ɪkˈsaɪ.tɪd/",
    es:"Emocionado/a / Entusiasmado/a", esLiteral:null,
    tip:"'Excited about' = emocionado por/sobre algo.",
    exampleEn:"I'm so excited about the trip!", exampleEs:"¡Estoy muy emocionado por el viaje!"
  },
  {
    id:"a2-adj5", en:"Exciting", type:"adjective", ipa:"/ɪkˈsaɪ.tɪŋ/",
    es:"Emocionante", esLiteral:null,
    tip:"La COSA que te genera emoción. Mismo patrón: boring/bored, exciting/excited.",
    exampleEn:"It was an exciting game.", exampleEs:"Fue un partido emocionante."
  },
  {
    id:"a2-adj6", en:"Crowded", type:"adjective", ipa:"/ˈkraʊ.dɪd/",
    es:"Concurrido / Lleno de gente", esLiteral:null,
    tip:"La '-ed' se pronuncia /ɪd/.",
    exampleEn:"The subway is always crowded in the morning.", exampleEs:"El metro siempre está lleno en la mañana."
  },
  {
    id:"a2-adj7", en:"Useful", type:"adjective", ipa:"/ˈjuːs.fəl/",
    es:"Útil", esLiteral:null,
    tip:"Opuesto: 'useless' (inútil). La 's' en 'use-' suena /s/, no /z/.",
    exampleEn:"This app is really useful.", exampleEs:"Esta aplicación es realmente útil."
  },
  {
    id:"a2-adj8", en:"Comfortable", type:"adjective", ipa:"/ˈkʌmf.tər.bəl/",
    es:"Cómodo/a", esLiteral:null,
    tip:"Solo 3 sílabas en la práctica: CUMF-ter-bul (no co-mo-for-ta-ble).",
    exampleEn:"This chair is very comfortable.", exampleEs:"Esta silla es muy cómoda."
  },
  {
    id:"a2-adj9", en:"Interested", type:"adjective", ipa:"/ˈɪn.trə.stɪd/",
    es:"Interesado/a", esLiteral:null,
    tip:"'Interested IN' (not 'interested on'). La persona siente interés.",
    exampleEn:"I'm interested in learning Japanese.", exampleEs:"Estoy interesado en aprender japonés."
  },
  {
    id:"a2-adj10", en:"Interesting", type:"adjective", ipa:"/ˈɪn.trə.stɪŋ/",
    es:"Interesante", esLiteral:null,
    tip:"La COSA genera interés. 'This book is interesting' → 'I am interested in it'.",
    exampleEn:"That was a very interesting documentary.", exampleEs:"Fue un documental muy interesante."
  },
  {
    id:"a2-adj11", en:"Delicious", type:"adjective", ipa:"/dɪˈlɪʃ.əs/",
    es:"Delicioso/a", esLiteral:null,
    tip:"La 'c' antes de 'ious' suena /ʃ/ (como 'sh').",
    exampleEn:"The food was absolutely delicious.", exampleEs:"La comida estaba absolutamente deliciosa."
  },
  {
    id:"a2-adj12", en:"Expensive", type:"adjective", ipa:"/ɪkˈspen.sɪv/",
    es:"Caro/a / Costoso/a", esLiteral:null,
    tip:"Opuesto: 'cheap' (barato). Acento en la segunda sílaba.",
    exampleEn:"That restaurant is too expensive.", exampleEs:"Ese restaurante es demasiado caro."
  },
  {
    id:"a2-adj13", en:"Cheap", type:"adjective", ipa:"/tʃiːp/",
    es:"Barato / Económico", esLiteral:null,
    tip:"Puede sonar negativo (de mala calidad). Para neutral usa 'affordable' o 'inexpensive'.",
    exampleEn:"I found a cheap flight to Mexico.", exampleEs:"Encontré un vuelo barato a México."
  },
  {
    id:"a2-adj14", en:"Available", type:"adjective", ipa:"/əˈveɪ.lə.bəl/",
    es:"Disponible", esLiteral:null,
    tip:"'Are you available?' = ¿Estás disponible/libre?",
    exampleEn:"Is this table available?", exampleEs:"¿Esta mesa está disponible?"
  },
  {
    id:"a2-adj15", en:"Possible", type:"adjective", ipa:"/ˈpɑː.sə.bəl/",
    es:"Posible", esLiteral:null,
    tip:"'As soon as possible' (ASAP) = Lo más pronto posible.",
    exampleEn:"Is it possible to change my flight?", exampleEs:"¿Es posible cambiar mi vuelo?"
  },
  // ============================================================
  // VERBOS DE ACCIÓN COTIDIANA (~25)
  // ============================================================
  {
    id:"a2-v1", en:"Spend", type:"verb", ipa:"/spend/",
    es:"Gastar (dinero) / Pasar (tiempo)", esLiteral:null,
    tip:"Doble uso: 'spend money ON' y 'spend time WITH/doing'.",
    exampleEn:"I spend too much money on coffee.", exampleEs:"Gasto demasiado dinero en café.",
    tenses:{present:"spend", past:"spent", participle:"spent", continuous:"spending"}
  },
  {
    id:"a2-v2", en:"Forget", type:"verb", ipa:"/fərˈɡet/",
    es:"Olvidar", esLiteral:null,
    tip:"'Forget to do' = Olvidar hacer algo. 'Forget doing' = Olvidar que ya lo hiciste.",
    exampleEn:"I forgot my password.", exampleEs:"Olvidé mi contraseña.",
    tenses:{present:"forget", past:"forgot", participle:"forgotten", continuous:"forgetting"}
  },
  {
    id:"a2-v3", en:"Remember", type:"verb", ipa:"/rɪˈmem.bər/",
    es:"Recordar / Acordarse", esLiteral:null,
    tip:"Igual que forget: 'remember to do' vs 'remember doing'.",
    exampleEn:"Remember to call your mother.", exampleEs:"Recuerda llamar a tu madre.",
    tenses:{present:"remember", past:"remembered", participle:"remembered", continuous:"remembering"}
  },
  {
    id:"a2-v4", en:"Choose", type:"verb", ipa:"/tʃuːz/",
    es:"Elegir / Escoger", esLiteral:null,
    tip:"La 'oo' suena /uː/. Pasado: chose /tʃoʊz/.",
    exampleEn:"You can choose any color you want.", exampleEs:"Puedes elegir cualquier color que quieras.",
    tenses:{present:"choose", past:"chose", participle:"chosen", continuous:"choosing"}
  },
  {
    id:"a2-v5", en:"Agree", type:"verb", ipa:"/əˈɡriː/",
    es:"Estar de acuerdo / Concordar", esLiteral:null,
    tip:"'Agree WITH someone' / 'Agree ON something'. Nunca es 'I am agree' (es 'I agree').",
    exampleEn:"I totally agree with you.", exampleEs:"Estoy totalmente de acuerdo contigo.",
    tenses:{present:"agree", past:"agreed", participle:"agreed", continuous:"agreeing"}
  },
  {
    id:"a2-v6", en:"Depend", type:"verb", ipa:"/dɪˈpend/",
    es:"Depender", esLiteral:null,
    tip:"SIEMPRE 'depend ON'. Nunca 'depend of'. 'It depends' = Depende.",
    exampleEn:"It depends on the weather.", exampleEs:"Depende del clima.",
    tenses:{present:"depend", past:"depended", participle:"depended", continuous:"depending"}
  },
  {
    id:"a2-v7", en:"Enjoy", type:"verb", ipa:"/ɪnˈdʒɔɪ/",
    es:"Disfrutar", esLiteral:null,
    tip:"SIEMPRE seguido de sustantivo o -ing: 'enjoy playing'. Nunca 'enjoy to play'.",
    exampleEn:"I really enjoy reading books.", exampleEs:"Disfruto mucho leyendo libros.",
    tenses:{present:"enjoy", past:"enjoyed", participle:"enjoyed", continuous:"enjoying"}
  },
  {
    id:"a2-v8", en:"Suggest", type:"verb", ipa:"/səˈdʒest/",
    es:"Sugerir / Proponer", esLiteral:null,
    tip:"Seguido de -ing o 'that': 'I suggest going' o 'I suggest that we go'.",
    exampleEn:"I suggest trying the local food.", exampleEs:"Sugiero probar la comida local.",
    tenses:{present:"suggest", past:"suggested", participle:"suggested", continuous:"suggesting"}
  },
  {
    id:"a2-v9", en:"Explain", type:"verb", ipa:"/ɪkˈspleɪn/",
    es:"Explicar", esLiteral:null,
    tip:"'Explain something TO someone' (nunca 'explain someone something').",
    exampleEn:"Can you explain this to me?", exampleEs:"¿Puedes explicarme esto?",
    tenses:{present:"explain", past:"explained", participle:"explained", continuous:"explaining"}
  },
  {
    id:"a2-v10", en:"Improve", type:"verb", ipa:"/ɪmˈpruːv/",
    es:"Mejorar", esLiteral:null,
    tip:"Puede ser transitivo o intransitivo: 'Improve your English' / 'Your English improved'.",
    exampleEn:"I want to improve my English.", exampleEs:"Quiero mejorar mi inglés.",
    tenses:{present:"improve", past:"improved", participle:"improved", continuous:"improving"}
  },
  {
    id:"a2-v11", en:"Prefer", type:"verb", ipa:"/prɪˈfɜːr/",
    es:"Preferir", esLiteral:null,
    tip:"'Prefer A TO B' (no 'prefer A than B'): 'I prefer tea to coffee'.",
    exampleEn:"I prefer walking to driving.", exampleEs:"Prefiero caminar a manejar.",
    tenses:{present:"prefer", past:"preferred", participle:"preferred", continuous:"preferring"}
  },
  {
    id:"a2-v12", en:"Manage", type:"verb", ipa:"/ˈmæn.ɪdʒ/",
    es:"Lograr / Conseguir / Gestionar", esLiteral:null,
    tip:"'Manage to do' = lograr hacer algo difícil.",
    exampleEn:"I managed to finish the project on time.", exampleEs:"Logré terminar el proyecto a tiempo.",
    tenses:{present:"manage", past:"managed", participle:"managed", continuous:"managing"}
  },
  // ============================================================
  // SUSTANTIVOS DE VIAJE Y VIDA COTIDIANA (~20)
  // ============================================================
  {
    id:"a2-n1", en:"Weather", type:"noun", ipa:"/ˈweð.ər/",
    es:"Clima / Tiempo (atmosférico)", esLiteral:null,
    tip:"No confundir con 'whether' (si... condicional). La 'th' es sonora.",
    exampleEn:"The weather is beautiful today.", exampleEs:"El clima está hermoso hoy."
  },
  {
    id:"a2-n2", en:"Flight", type:"noun", ipa:"/flaɪt/",
    es:"Vuelo", esLiteral:null,
    tip:"'Book a flight' = Reservar un vuelo.",
    exampleEn:"My flight leaves at 6 AM.", exampleEs:"Mi vuelo sale a las 6 AM."
  },
  {
    id:"a2-n3", en:"Trip", type:"noun", ipa:"/trɪp/",
    es:"Viaje (corto, específico)", esLiteral:null,
    tip:"'Trip' = viaje con destino. 'Travel' = actividad general de viajar. 'Journey' = el trayecto.",
    exampleEn:"How was your trip to Mexico?", exampleEs:"¿Cómo estuvo tu viaje a México?"
  },
  {
    id:"a2-n4", en:"Meeting", type:"noun", ipa:"/ˈmiː.tɪŋ/",
    es:"Reunión / Junta", esLiteral:null,
    tip:"'Have a meeting' o 'attend a meeting'.",
    exampleEn:"We have a meeting at 10 AM.", exampleEs:"Tenemos una reunión a las 10 AM."
  },
  {
    id:"a2-n5", en:"Experience", type:"noun", ipa:"/ɪkˈspɪr.i.əns/",
    es:"Experiencia", esLiteral:null,
    tip:"Contable cuando es un evento: 'a great experience'. Incontable como conocimiento general.",
    exampleEn:"That was an unforgettable experience.", exampleEs:"Fue una experiencia inolvidable."
  },
  {
    id:"a2-n6", en:"Advice", type:"noun", ipa:"/ədˈvaɪs/",
    es:"Consejo(s)", esLiteral:null,
    tip:"¡INCONTABLE! Nunca 'advices'. Usa 'a piece of advice' para uno solo.",
    exampleEn:"Can you give me some advice?", exampleEs:"¿Puedes darme un consejo?"
  },
  {
    id:"a2-n7", en:"Opportunity", type:"noun", ipa:"/ˌɒp.ərˈtuː.nə.ti/",
    es:"Oportunidad", esLiteral:null,
    tip:"'Opportunity to do something' (no 'opportunity of doing').",
    exampleEn:"This is a great opportunity.", exampleEs:"Esta es una gran oportunidad."
  },
  {
    id:"a2-n8", en:"Customer", type:"noun", ipa:"/ˈkʌs.tə.mər/",
    es:"Cliente (de una tienda)", esLiteral:null,
    tip:"'Client' = cliente profesional (abogado, consultor). 'Customer' = comprador en tienda/restaurante.",
    exampleEn:"The customer is always right.", exampleEs:"El cliente siempre tiene la razón."
  },
  {
    id:"a2-n9", en:"Appointment", type:"noun", ipa:"/əˈpɔɪnt.mənt/",
    es:"Cita (con doctor, oficina)", esLiteral:null,
    tip:"Para citas formales/profesionales. Para citas románticas usa 'date'.",
    exampleEn:"I have a dentist appointment at 3 PM.", exampleEs:"Tengo cita con el dentista a las 3 PM."
  },
  {
    id:"a2-n10", en:"Traffic", type:"noun", ipa:"/ˈtræf.ɪk/",
    es:"Tráfico / Tránsito", esLiteral:null,
    tip:"INCONTABLE. 'Heavy traffic' (tráfico pesado), no 'many traffic'.",
    exampleEn:"There is a lot of traffic today.", exampleEs:"Hay mucho tráfico hoy."
  },
  // ============================================================
  // CONECTORES Y EXPRESIONES A2 (~15)
  // ============================================================
  {
    id:"a2-con1", en:"However", type:"adverb", ipa:"/haʊˈev.ər/",
    es:"Sin embargo", esLiteral:null,
    tip:"Más formal que 'but'. Suele ir entre punto y coma y coma: '; however,'.",
    exampleEn:"I was tired. However, I kept working.", exampleEs:"Estaba cansado. Sin embargo, seguí trabajando."
  },
  {
    id:"a2-con2", en:"Although", type:"conjunction", ipa:"/ɔːlˈðoʊ/",
    es:"Aunque", esLiteral:null,
    tip:"Va al inicio o en medio: 'Although it was late, I went out.' No usar con 'but' en la misma oración.",
    exampleEn:"Although it was raining, we went for a walk.", exampleEs:"Aunque estaba lloviendo, fuimos a caminar."
  },
  {
    id:"a2-con3", en:"Instead", type:"adverb", ipa:"/ɪnˈsted/",
    es:"En vez de / En lugar de", esLiteral:null,
    tip:"'Instead of + noun/-ing': 'Instead of driving, I walked'.",
    exampleEn:"I stayed home instead of going out.", exampleEs:"Me quedé en casa en vez de salir."
  },
  {
    id:"a2-con4", en:"Besides", type:"adverb", ipa:"/bɪˈsaɪdz/",
    es:"Además", esLiteral:null,
    tip:"No confundir con 'beside' (al lado de). 'Besides' = además.",
    exampleEn:"Besides, I don't have enough money.", exampleEs:"Además, no tengo suficiente dinero."
  },
  {
    id:"a2-con5", en:"Anyway", type:"adverb", ipa:"/ˈen.i.weɪ/",
    es:"De todas formas / En fin", esLiteral:null,
    tip:"Muy útil para cambiar de tema o concluir: 'Anyway, let's get started'.",
    exampleEn:"Anyway, what were you saying?", exampleEs:"En fin, ¿qué decías?"
  },
  // ============================================================
  // MÁS PHRASAL VERBS (~20)
  // ============================================================
  {
    id:"a2-pv16", en:"Put on", type:"phrasal verb", ipa:"/pʊt ɒn/",
    es:"Ponerse (ropa) / Encender (música)", esLiteral:null,
    tip:"Opuesto: 'take off' (quitarse). 'Put on your jacket' / 'Put on some music'.",
    exampleEn:"Put on your coat, it's cold outside.", exampleEs:"Ponte el abrigo, hace frío afuera.",
    tenses:{present:"put on", past:"put on", participle:"put on", continuous:"putting on"}
  },
  {
    id:"a2-pv17", en:"Take off", type:"phrasal verb", ipa:"/teɪk ɒf/",
    es:"Quitarse (ropa) / Despegar (avión)", esLiteral:null,
    tip:"Dos significados muy diferentes según contexto.",
    exampleEn:"The plane takes off at noon.", exampleEs:"El avión despega al mediodía.",
    tenses:{present:"take off", past:"took off", participle:"taken off", continuous:"taking off"}
  },
  {
    id:"a2-pv18", en:"Give back", type:"phrasal verb", ipa:"/ɡɪv bæk/",
    es:"Devolver", esLiteral:"Dar atrás",
    tip:"Siempre implica retornar algo a su dueño original.",
    exampleEn:"Can you give me back my book?", exampleEs:"¿Puedes devolverme mi libro?",
    tenses:{present:"give back", past:"gave back", participle:"given back", continuous:"giving back"}
  },
  {
    id:"a2-pv19", en:"Throw away", type:"phrasal verb", ipa:"/θroʊ əˈweɪ/",
    es:"Tirar a la basura / Botar / Desechar", esLiteral:"Lanzar lejos",
    tip:"También se dice 'throw out'.",
    exampleEn:"Don't throw away that box, I need it.", exampleEs:"No tires esa caja, la necesito.",
    tenses:{present:"throw away", past:"threw away", participle:"thrown away", continuous:"throwing away"}
  },
  {
    id:"a2-pv20", en:"Fill in", type:"phrasal verb", ipa:"/fɪl ɪn/",
    es:"Rellenar (un formulario)", esLiteral:"Llenar dentro",
    tip:"UK: 'fill in'. US: 'fill out'. Ambos significan lo mismo.",
    exampleEn:"Please fill in this form.", exampleEs:"Por favor rellena este formulario.",
    tenses:{present:"fill in", past:"filled in", participle:"filled in", continuous:"filling in"}
  },
  {
    id:"a2-pv21", en:"Slow down", type:"phrasal verb", ipa:"/sloʊ daʊn/",
    es:"Reducir la velocidad / Bajar el ritmo", esLiteral:null,
    tip:"Opuesto: 'speed up' (acelerar).",
    exampleEn:"Slow down, you're driving too fast!", exampleEs:"¡Baja la velocidad, estás manejando muy rápido!",
    tenses:{present:"slow down", past:"slowed down", participle:"slowed down", continuous:"slowing down"}
  },
  {
    id:"a2-pv22", en:"Show up", type:"phrasal verb", ipa:"/ʃoʊ ʌp/",
    es:"Aparecer / Presentarse / Llegar", esLiteral:null,
    tip:"Informal para 'arrive' o 'appear'. 'He didn't show up' = No se presentó.",
    exampleEn:"He didn't show up for the meeting.", exampleEs:"Él no se presentó a la reunión.",
    tenses:{present:"show up", past:"showed up", participle:"shown up", continuous:"showing up"}
  },
  {
    id:"a2-pv23", en:"Break down", type:"phrasal verb", ipa:"/breɪk daʊn/",
    es:"Descomponerse / Averiarse / Derrumbarse", esLiteral:null,
    tip:"Para máquinas: averiarse. Para personas: derrumbarse emocionalmente.",
    exampleEn:"My car broke down on the highway.", exampleEs:"Mi auto se averió en la autopista.",
    tenses:{present:"break down", past:"broke down", participle:"broken down", continuous:"breaking down"}
  },
  {
    id:"a2-pv24", en:"Get along", type:"phrasal verb", ipa:"/ɡet əˈlɒŋ/",
    es:"Llevarse bien (con alguien)", esLiteral:null,
    tip:"'Get along WITH someone'. También 'get on well with'.",
    exampleEn:"I get along well with my neighbors.", exampleEs:"Me llevo bien con mis vecinos.",
    tenses:{present:"get along", past:"got along", participle:"gotten along", continuous:"getting along"}
  },
  {
    id:"a2-pv25", en:"Look after", type:"phrasal verb", ipa:"/lʊk ˈæf.tər/",
    es:"Cuidar (de alguien/algo)", esLiteral:"Mirar después",
    tip:"Sinónimo de 'take care of'.",
    exampleEn:"Can you look after my cat while I'm away?", exampleEs:"¿Puedes cuidar a mi gato mientras no estoy?",
    tenses:{present:"look after", past:"looked after", participle:"looked after", continuous:"looking after"}
  },
  {
    id:"a2-pv26", en:"Go on", type:"phrasal verb", ipa:"/ɡoʊ ɒn/",
    es:"Continuar / Seguir / Suceder", esLiteral:null,
    tip:"'What's going on?' = ¿Qué pasa? 'Go on' = continúa (hablando).",
    exampleEn:"What's going on here?", exampleEs:"¿Qué está pasando aquí?",
    tenses:{present:"go on", past:"went on", participle:"gone on", continuous:"going on"}
  },
  {
    id:"a2-pv27", en:"Calm down", type:"phrasal verb", ipa:"/kɑːm daʊn/",
    es:"Calmarse / Tranquilizarse", esLiteral:null,
    tip:"La 'l' es MUDA en 'calm': /kɑːm/.",
    exampleEn:"Please calm down, everything will be fine.", exampleEs:"Por favor cálmate, todo estará bien.",
    tenses:{present:"calm down", past:"calmed down", participle:"calmed down", continuous:"calming down"}
  },
  {
    id:"a2-pv28", en:"Drop off", type:"phrasal verb", ipa:"/drɒp ɒf/",
    es:"Dejar (a alguien en un lugar) / Entregar", esLiteral:null,
    tip:"Opuesto de 'pick up'. 'Drop me off at the corner'.",
    exampleEn:"Can you drop me off at the station?", exampleEs:"¿Puedes dejarme en la estación?",
    tenses:{present:"drop off", past:"dropped off", participle:"dropped off", continuous:"dropping off"}
  },
  {
    id:"a2-pv29", en:"End up", type:"phrasal verb", ipa:"/end ʌp/",
    es:"Terminar (en una situación inesperada) / Acabar", esLiteral:null,
    tip:"Implica un resultado no planeado: 'We ended up staying home'.",
    exampleEn:"We ended up watching TV all night.", exampleEs:"Terminamos viendo TV toda la noche.",
    tenses:{present:"end up", past:"ended up", participle:"ended up", continuous:"ending up"}
  },
  {
    id:"a2-pv30", en:"Point out", type:"phrasal verb", ipa:"/pɔɪnt aʊt/",
    es:"Señalar / Indicar / Hacer notar", esLiteral:null,
    tip:"Para mencionar algo importante que otros no han visto.",
    exampleEn:"She pointed out several mistakes in the report.", exampleEs:"Ella señaló varios errores en el informe.",
    tenses:{present:"point out", past:"pointed out", participle:"pointed out", continuous:"pointing out"}
  },
  // ============================================================
  // VOCABULARIO DE SALUD (~15)
  // ============================================================
  {
    id:"a2-health1", en:"Sick", type:"adjective", ipa:"/sɪk/",
    es:"Enfermo/a", esLiteral:null,
    tip:"US: 'sick' = enfermo. UK: 'ill' es más común para enfermo general.",
    exampleEn:"I feel sick today.", exampleEs:"Me siento enfermo hoy."
  },
  {
    id:"a2-health2", en:"Hurt", type:"verb", ipa:"/hɜːrt/",
    es:"Doler / Lastimar / Herir", esLiteral:null,
    tip:"No cambia en pasado: hurt-hurt-hurt. 'My head hurts' = Me duele la cabeza.",
    exampleEn:"Does it hurt?", exampleEs:"¿Te duele?",
    tenses:{present:"hurt / hurts", past:"hurt", participle:"hurt", continuous:"hurting"}
  },
  {
    id:"a2-health3", en:"Medicine", type:"noun", ipa:"/ˈmed.ə.sən/",
    es:"Medicina / Medicamento", esLiteral:null,
    tip:"Solo 3 sílabas: MED-uh-sin.",
    exampleEn:"Take your medicine after eating.", exampleEs:"Toma tu medicina después de comer."
  },
  {
    id:"a2-health4", en:"Pain", type:"noun", ipa:"/peɪn/",
    es:"Dolor", esLiteral:null,
    tip:"'I have a pain in my back' o simplemente 'My back hurts'.",
    exampleEn:"I have a terrible pain in my knee.", exampleEs:"Tengo un dolor terrible en la rodilla."
  },
  {
    id:"a2-health5", en:"Temperature", type:"noun", ipa:"/ˈtem.prə.tʃər/",
    es:"Temperatura / Fiebre", esLiteral:null,
    tip:"'Have a temperature' = tener fiebre. Solo 3 sílabas: TEM-pruh-chur.",
    exampleEn:"I think I have a temperature.", exampleEs:"Creo que tengo fiebre."
  },
  {
    id:"a2-health6", en:"Rest", type:"verb", ipa:"/rest/",
    es:"Descansar", esLiteral:null,
    tip:"También sustantivo: 'Get some rest' = descansa un poco.",
    exampleEn:"You should rest for a few days.", exampleEs:"Deberías descansar por unos días.",
    tenses:{present:"rest / rests", past:"rested", participle:"rested", continuous:"resting"}
  },
  {
    id:"a2-health7", en:"Dizzy", type:"adjective", ipa:"/ˈdɪz.i/",
    es:"Mareado/a", esLiteral:null,
    tip:"'I feel dizzy' = Me siento mareado.",
    exampleEn:"I feel dizzy when I stand up too fast.", exampleEs:"Me siento mareado cuando me levanto muy rápido."
  },
  {
    id:"a2-health8", en:"Appointment", type:"noun", ipa:"/əˈpɔɪnt.mənt/",
    es:"Cita (médica / profesional)", esLiteral:null,
    tip:"Para citas románticas se usa 'date', no 'appointment'.",
    exampleEn:"I have a doctor's appointment at 3 PM.", exampleEs:"Tengo cita con el doctor a las 3 PM."
  },
  // ============================================================
  // VOCABULARIO DE COMPRAS Y RESTAURANTE (~15)
  // ============================================================
  {
    id:"a2-shop1", en:"Receipt", type:"noun", ipa:"/rɪˈsiːt/",
    es:"Recibo / Comprobante", esLiteral:null,
    tip:"La 'p' es MUDA: /rɪˈsiːt/. No confundir con 'recipe' (receta de cocina).",
    exampleEn:"Can I have the receipt, please?", exampleEs:"¿Me da el recibo, por favor?"
  },
  {
    id:"a2-shop2", en:"Discount", type:"noun", ipa:"/ˈdɪs.kaʊnt/",
    es:"Descuento", esLiteral:null,
    tip:"'Get a discount' = obtener un descuento. 'On sale' = en oferta.",
    exampleEn:"Is there any discount for students?", exampleEs:"¿Hay algún descuento para estudiantes?"
  },
  {
    id:"a2-shop3", en:"Size", type:"noun", ipa:"/saɪz/",
    es:"Talla / Tamaño", esLiteral:null,
    tip:"'What size are you?' = ¿Qué talla eres?",
    exampleEn:"Do you have this in a smaller size?", exampleEs:"¿Tiene esto en una talla más pequeña?"
  },
  {
    id:"a2-shop4", en:"Change", type:"noun", ipa:"/tʃeɪndʒ/",
    es:"Cambio (monedas) / Cambio (general)", esLiteral:null,
    tip:"Como sustantivo: 'Keep the change' (quédese con el cambio). Como verbo: cambiar.",
    exampleEn:"Keep the change.", exampleEs:"Quédese con el cambio."
  },
  {
    id:"a2-shop5", en:"Order", type:"verb", ipa:"/ˈɔːr.dər/",
    es:"Pedir / Ordenar", esLiteral:null,
    tip:"En restaurante: 'Are you ready to order?' = ¿Están listos para pedir?",
    exampleEn:"I would like to order a coffee.", exampleEs:"Me gustaría pedir un café.",
    tenses:{present:"order / orders", past:"ordered", participle:"ordered", continuous:"ordering"}
  },
  {
    id:"a2-shop6", en:"Bill", type:"noun", ipa:"/bɪl/",
    es:"Cuenta (restaurante) / Factura", esLiteral:null,
    tip:"UK: 'bill'. US: 'check'. 'Can I have the bill?' = ¿La cuenta, por favor?",
    exampleEn:"Can I have the bill, please?", exampleEs:"¿Me trae la cuenta, por favor?"
  },
  {
    id:"a2-shop7", en:"Tip", type:"noun", ipa:"/tɪp/",
    es:"Propina / Consejo", esLiteral:null,
    tip:"Doble significado: propina (dinero extra) y consejo (tip de pronunciación).",
    exampleEn:"Should I leave a tip?", exampleEs:"¿Debería dejar propina?"
  },
  {
    id:"a2-shop8", en:"Brand", type:"noun", ipa:"/brænd/",
    es:"Marca (comercial)", esLiteral:null,
    tip:"'Brand new' = completamente nuevo (de fábrica).",
    exampleEn:"What brand of shoes do you prefer?", exampleEs:"¿Qué marca de zapatos prefieres?"
  },
  {
    id:"a2-shop9", en:"Queue", type:"noun", ipa:"/kjuː/",
    es:"Fila / Cola", esLiteral:null,
    tip:"Palabra británica. En US usan 'line'. Suena exactamente como la letra 'Q'.",
    exampleEn:"There is a long queue at the supermarket.", exampleEs:"Hay una fila larga en el supermercado."
  },
  {
    id:"a2-shop10", en:"Refund", type:"noun", ipa:"/ˈriː.fʌnd/",
    es:"Reembolso / Devolución de dinero", esLiteral:null,
    tip:"'Get a refund' = obtener un reembolso. Como verbo: refund /rɪˈfʌnd/ (acento cambia).",
    exampleEn:"Can I get a refund?", exampleEs:"¿Puedo obtener un reembolso?"
  },
  // ============================================================
  // VOCABULARIO DE TRABAJO (~15)
  // ============================================================
  {
    id:"a2-work1", en:"Boss", type:"noun", ipa:"/bɒs/",
    es:"Jefe/a", esLiteral:null,
    tip:"Informal. Más formal: 'manager' o 'supervisor'.",
    exampleEn:"My boss is very understanding.", exampleEs:"Mi jefe es muy comprensivo."
  },
  {
    id:"a2-work2", en:"Salary", type:"noun", ipa:"/ˈsæl.ər.i/",
    es:"Salario / Sueldo", esLiteral:null,
    tip:"'Salary' = pago mensual fijo. 'Wage' = pago por hora/día.",
    exampleEn:"The salary is competitive.", exampleEs:"El salario es competitivo."
  },
  {
    id:"a2-work3", en:"Interview", type:"noun", ipa:"/ˈɪn.tər.vjuː/",
    es:"Entrevista", esLiteral:null,
    tip:"'Job interview' = entrevista de trabajo.",
    exampleEn:"I have a job interview tomorrow.", exampleEs:"Tengo una entrevista de trabajo mañana."
  },
  {
    id:"a2-work4", en:"Deadline", type:"noun", ipa:"/ˈded.laɪn/",
    es:"Fecha límite / Plazo", esLiteral:"Línea muerta",
    tip:"'Meet the deadline' = cumplir el plazo. 'Miss the deadline' = no cumplirlo.",
    exampleEn:"The deadline is next Friday.", exampleEs:"La fecha límite es el próximo viernes."
  },
  {
    id:"a2-work5", en:"Apply", type:"verb", ipa:"/əˈplaɪ/",
    es:"Aplicar / Postularse / Solicitar", esLiteral:null,
    tip:"'Apply FOR a job' = postularse a un empleo. 'Apply TO a university' = postularse a una universidad.",
    exampleEn:"I applied for three jobs this week.", exampleEs:"Me postulé a tres trabajos esta semana.",
    tenses:{present:"apply / applies", past:"applied", participle:"applied", continuous:"applying"}
  },
  {
    id:"a2-work6", en:"Hire", type:"verb", ipa:"/haɪr/",
    es:"Contratar", esLiteral:null,
    tip:"Opuesto: 'fire' (despedir).",
    exampleEn:"They hired 10 new employees.", exampleEs:"Contrataron 10 nuevos empleados.",
    tenses:{present:"hire / hires", past:"hired", participle:"hired", continuous:"hiring"}
  },
  {
    id:"a2-work7", en:"Resign", type:"verb", ipa:"/rɪˈzaɪn/",
    es:"Renunciar", esLiteral:null,
    tip:"La 'g' es MUDA. Más informal: 'quit'.",
    exampleEn:"She resigned from her job last month.", exampleEs:"Ella renunció a su trabajo el mes pasado.",
    tenses:{present:"resign / resigns", past:"resigned", participle:"resigned", continuous:"resigning"}
  },
  {
    id:"a2-work8", en:"Schedule", type:"noun", ipa:"/ˈsked.juːl/ (US) /ˈʃed.juːl/ (UK)",
    es:"Horario / Agenda / Programa", esLiteral:null,
    tip:"Pronunciación muy diferente entre US (sk-) y UK (sh-).",
    exampleEn:"What's your schedule for tomorrow?", exampleEs:"¿Cuál es tu horario para mañana?"
  },
  {
    id:"a2-work9", en:"Colleague", type:"noun", ipa:"/ˈkɒl.iːɡ/",
    es:"Colega / Compañero de trabajo", esLiteral:null,
    tip:"Más formal que 'coworker'. Solo dos sílabas: CO-leeg.",
    exampleEn:"I had lunch with my colleagues.", exampleEs:"Almorcé con mis colegas."
  },
  {
    id:"a2-work10", en:"Task", type:"noun", ipa:"/tæsk/",
    es:"Tarea / Encargo", esLiteral:null,
    tip:"A diferencia de 'homework' (tarea escolar), 'task' es más genérico y profesional.",
    exampleEn:"I have several tasks to complete today.", exampleEs:"Tengo varias tareas que completar hoy."
  },
  // ============================================================
  // VERBOS COTIDIANOS EXPANDIDOS (~20)
  // ============================================================
  {
    id:"a2-v13", en:"Borrow", type:"verb", ipa:"/ˈbɒr.oʊ/",
    es:"Pedir prestado", esLiteral:null,
    tip:"'Borrow' = tú RECIBES. 'Lend' = tú DAS. 'Can I borrow your pen?' (no 'lend me').",
    exampleEn:"Can I borrow your charger?", exampleEs:"¿Puedo pedirte prestado tu cargador?",
    tenses:{present:"borrow / borrows", past:"borrowed", participle:"borrowed", continuous:"borrowing"}
  },
  {
    id:"a2-v14", en:"Lend", type:"verb", ipa:"/lend/",
    es:"Prestar (dar algo temporalmente)", esLiteral:null,
    tip:"Tú PRESTAS a alguien. 'Can you lend me some money?'",
    exampleEn:"Could you lend me 20 dollars?", exampleEs:"¿Podrías prestarme 20 dólares?",
    tenses:{present:"lend / lends", past:"lent", participle:"lent", continuous:"lending"}
  },
  {
    id:"a2-v15", en:"Belong", type:"verb", ipa:"/bɪˈlɒŋ/",
    es:"Pertenecer", esLiteral:null,
    tip:"'Belong TO': This book belongs to me.",
    exampleEn:"Who does this bag belong to?", exampleEs:"¿A quién le pertenece esta bolsa?",
    tenses:{present:"belong / belongs", past:"belonged", participle:"belonged", continuous:"belonging"}
  },
  {
    id:"a2-v16", en:"Afford", type:"verb", ipa:"/əˈfɔːrd/",
    es:"Permitirse / Costear / Tener los medios para", esLiteral:null,
    tip:"Casi siempre con 'can/can't': 'I can't afford it' = No me alcanza.",
    exampleEn:"I can't afford to buy a new laptop.", exampleEs:"No puedo costearme una nueva laptop.",
    tenses:{present:"afford / affords", past:"afforded", participle:"afforded", continuous:"affording"}
  },
  {
    id:"a2-v17", en:"Complain", type:"verb", ipa:"/kəmˈpleɪn/",
    es:"Quejarse / Reclamar", esLiteral:null,
    tip:"'Complain ABOUT something' (no 'complain of').",
    exampleEn:"He always complains about the food.", exampleEs:"Él siempre se queja de la comida.",
    tenses:{present:"complain / complains", past:"complained", participle:"complained", continuous:"complaining"}
  },
  {
    id:"a2-v18", en:"Guess", type:"verb", ipa:"/ɡes/",
    es:"Adivinar / Suponer", esLiteral:null,
    tip:"'I guess so' = Supongo que sí. Muy informal y común.",
    exampleEn:"Can you guess my age?", exampleEs:"¿Puedes adivinar mi edad?",
    tenses:{present:"guess / guesses", past:"guessed", participle:"guessed", continuous:"guessing"}
  },
  {
    id:"a2-v19", en:"Invite", type:"verb", ipa:"/ɪnˈvaɪt/",
    es:"Invitar", esLiteral:null,
    tip:"Acento en la segunda sílaba: in-VITE.",
    exampleEn:"I invited all my friends to the party.", exampleEs:"Invité a todos mis amigos a la fiesta.",
    tenses:{present:"invite / invites", past:"invited", participle:"invited", continuous:"inviting"}
  },
  {
    id:"a2-v20", en:"Promise", type:"verb", ipa:"/ˈprɒm.ɪs/",
    es:"Prometer", esLiteral:null,
    tip:"'I promise' = Te lo prometo. Seguido de 'to + verb' o 'that'.",
    exampleEn:"I promise I will be on time.", exampleEs:"Prometo que llegaré a tiempo.",
    tenses:{present:"promise / promises", past:"promised", participle:"promised", continuous:"promising"}
  },
  {
    id:"a2-v21", en:"Warn", type:"verb", ipa:"/wɔːrn/",
    es:"Advertir / Avisar (peligro)", esLiteral:null,
    tip:"'Warn someone ABOUT something' o 'Warn someone NOT TO do something'.",
    exampleEn:"I warned you about this.", exampleEs:"Te advertí sobre esto.",
    tenses:{present:"warn / warns", past:"warned", participle:"warned", continuous:"warning"}
  },
  {
    id:"a2-v22", en:"Apologize", type:"verb", ipa:"/əˈpɒl.ə.dʒaɪz/",
    es:"Disculparse / Pedir perdón", esLiteral:null,
    tip:"'Apologize FOR something': 'I apologize for being late'.",
    exampleEn:"I want to apologize for the mistake.", exampleEs:"Quiero disculparme por el error.",
    tenses:{present:"apologize / apologizes", past:"apologized", participle:"apologized", continuous:"apologizing"}
  },
  {
    id:"a2-v23", en:"Recommend", type:"verb", ipa:"/ˌrek.əˈmend/",
    es:"Recomendar", esLiteral:null,
    tip:"Seguido de -ing o 'that + sujeto + verb': 'I recommend trying' o 'I recommend that you try'.",
    exampleEn:"I recommend this restaurant.", exampleEs:"Recomiendo este restaurante.",
    tenses:{present:"recommend", past:"recommended", participle:"recommended", continuous:"recommending"}
  },
  {
    id:"a2-v24", en:"Reply", type:"verb", ipa:"/rɪˈplaɪ/",
    es:"Responder / Contestar", esLiteral:null,
    tip:"'Reply TO someone/something'. Más formal que 'answer'.",
    exampleEn:"She hasn't replied to my email.", exampleEs:"Ella no ha respondido a mi correo.",
    tenses:{present:"reply / replies", past:"replied", participle:"replied", continuous:"replying"}
  },
  // ============================================================
  // ADJETIVOS COMPARATIVOS / DESCRIPCIONES EXPANDIDAS (~20)
  // ============================================================
  {
    id:"a2-adj16", en:"Quiet", type:"adjective", ipa:"/ˈkwaɪ.ət/",
    es:"Silencioso / Callado / Tranquilo", esLiteral:null,
    tip:"Dos sílabas: KWAI-ut. No confundir con 'quite' (bastante).",
    exampleEn:"The library is very quiet.", exampleEs:"La biblioteca es muy silenciosa."
  },
  {
    id:"a2-adj17", en:"Loud", type:"adjective", ipa:"/laʊd/",
    es:"Fuerte (sonido) / Ruidoso", esLiteral:null,
    tip:"'Loud' es solo para sonido. Para fuerza física usa 'strong'.",
    exampleEn:"The music is too loud!", exampleEs:"¡La música está demasiado fuerte!"
  },
  {
    id:"a2-adj18", en:"Empty", type:"adjective", ipa:"/ˈemp.ti/",
    es:"Vacío/a", esLiteral:null,
    tip:"Opuesto: 'full' (lleno).",
    exampleEn:"The restaurant is empty today.", exampleEs:"El restaurante está vacío hoy."
  },
  {
    id:"a2-adj19", en:"Full", type:"adjective", ipa:"/fʊl/",
    es:"Lleno/a / Completo/a", esLiteral:null,
    tip:"'I'm full' = Estoy lleno (después de comer). Nunca 'I'm satisfied' en contexto informal.",
    exampleEn:"I'm full, I can't eat more.", exampleEs:"Estoy lleno, no puedo comer más."
  },
  {
    id:"a2-adj20", en:"Safe", type:"adjective", ipa:"/seɪf/",
    es:"Seguro/a (sin peligro)", esLiteral:null,
    tip:"'Safe' = sin peligro. 'Sure' = estar seguro de algo (confianza).",
    exampleEn:"Is this neighborhood safe?", exampleEs:"¿Es seguro este barrio?"
  },
  {
    id:"a2-adj21", en:"Dangerous", type:"adjective", ipa:"/ˈdeɪn.dʒər.əs/",
    es:"Peligroso/a", esLiteral:null,
    tip:"Tres sílabas: DANE-juh-rus.",
    exampleEn:"It's dangerous to drive in the snow.", exampleEs:"Es peligroso manejar en la nieve."
  },
  {
    id:"a2-adj22", en:"Polite", type:"adjective", ipa:"/pəˈlaɪt/",
    es:"Educado/a / Cortés", esLiteral:null,
    tip:"Opuesto: 'rude' (grosero). 'Polite' no significa 'político'.",
    exampleEn:"She is always very polite.", exampleEs:"Ella siempre es muy educada."
  },
  {
    id:"a2-adj23", en:"Rude", type:"adjective", ipa:"/ruːd/",
    es:"Grosero/a / Maleducado/a", esLiteral:null,
    tip:"Más fuerte que 'impolite'. 'That's rude!' = ¡Eso es grosero!",
    exampleEn:"It's rude to talk with your mouth full.", exampleEs:"Es grosero hablar con la boca llena."
  },
  {
    id:"a2-adj24", en:"Lazy", type:"adjective", ipa:"/ˈleɪ.zi/",
    es:"Perezoso/a / Flojo/a", esLiteral:null,
    tip:"Opuesto: 'hardworking' (trabajador).",
    exampleEn:"I feel lazy on Sundays.", exampleEs:"Me siento perezoso los domingos."
  },
  {
    id:"a2-adj25", en:"Proud", type:"adjective", ipa:"/praʊd/",
    es:"Orgulloso/a", esLiteral:null,
    tip:"'Be proud OF someone/something': 'I'm proud of you'.",
    exampleEn:"I'm so proud of my daughter.", exampleEs:"Estoy tan orgulloso de mi hija."
  },
  {
    id:"a2-adj26", en:"Grateful", type:"adjective", ipa:"/ˈɡreɪt.fəl/",
    es:"Agradecido/a", esLiteral:null,
    tip:"'Grateful FOR something': 'I'm grateful for your help'.",
    exampleEn:"I am very grateful for your support.", exampleEs:"Estoy muy agradecido por tu apoyo."
  },
  {
    id:"a2-adj27", en:"Jealous", type:"adjective", ipa:"/ˈdʒel.əs/",
    es:"Celoso/a / Envidioso/a", esLiteral:null,
    tip:"'Jealous OF someone': 'She's jealous of her sister'.",
    exampleEn:"He gets jealous very easily.", exampleEs:"Él se pone celoso muy fácilmente."
  },
  {
    id:"a2-adj28", en:"Upset", type:"adjective", ipa:"/ʌpˈset/",
    es:"Molesto/a / Disgustado/a / Triste", esLiteral:null,
    tip:"Más suave que 'angry'. Implica tristeza mezclada con enojo.",
    exampleEn:"She was upset about the news.", exampleEs:"Ella estaba disgustada por la noticia."
  },
  {
    id:"a2-adj29", en:"Annoyed", type:"adjective", ipa:"/əˈnɔɪd/",
    es:"Molesto/a / Irritado/a", esLiteral:null,
    tip:"Menos fuerte que 'angry'. 'Annoyed WITH someone' / 'Annoyed BY something'.",
    exampleEn:"I'm annoyed by the noise.", exampleEs:"Estoy molesto por el ruido."
  },
  {
    id:"a2-adj30", en:"Nervous", type:"adjective", ipa:"/ˈnɜːr.vəs/",
    es:"Nervioso/a", esLiteral:null,
    tip:"'Nervous ABOUT something': 'I'm nervous about the exam'.",
    exampleEn:"I'm nervous about my presentation.", exampleEs:"Estoy nervioso por mi presentación."
  },
  // ============================================================
  // SUSTANTIVOS ESENCIALES EXPANDIDOS (~15)
  // ============================================================
  {
    id:"a2-n11", en:"Neighbor", type:"noun", ipa:"/ˈneɪ.bər/",
    es:"Vecino/a", esLiteral:null,
    tip:"UK: 'neighbour' (con u). La 'gh' es MUDA.",
    exampleEn:"My neighbor is very friendly.", exampleEs:"Mi vecino es muy amigable."
  },
  {
    id:"a2-n12", en:"Noise", type:"noun", ipa:"/nɔɪz/",
    es:"Ruido", esLiteral:null,
    tip:"'Make noise' = hacer ruido. La 'oi' suena como en 'boy'.",
    exampleEn:"Please don't make so much noise.", exampleEs:"Por favor no hagas tanto ruido."
  },
  {
    id:"a2-n13", en:"Mistake", type:"noun", ipa:"/mɪˈsteɪk/",
    es:"Error / Equivocación", esLiteral:null,
    tip:"'By mistake' = por error. 'Make a mistake' = cometer un error.",
    exampleEn:"I made a mistake on the test.", exampleEs:"Cometí un error en el examen."
  },
  {
    id:"a2-n14", en:"Conversation", type:"noun", ipa:"/ˌkɒn.vəˈseɪ.ʃən/",
    es:"Conversación", esLiteral:null,
    tip:"'Have a conversation' = tener una conversación.",
    exampleEn:"We had a long conversation about politics.", exampleEs:"Tuvimos una larga conversación sobre política."
  },
  {
    id:"a2-n15", en:"Habit", type:"noun", ipa:"/ˈhæb.ɪt/",
    es:"Hábito / Costumbre", esLiteral:null,
    tip:"'Bad habit' = mal hábito. 'Good habit' = buen hábito.",
    exampleEn:"Reading is a good habit.", exampleEs:"Leer es un buen hábito."
  },
  {
    id:"a2-n16", en:"Goal", type:"noun", ipa:"/ɡoʊl/",
    es:"Meta / Objetivo / Gol", esLiteral:null,
    tip:"Triple uso: meta personal, objetivo profesional, y gol deportivo.",
    exampleEn:"My goal is to speak English fluently.", exampleEs:"Mi meta es hablar inglés con fluidez."
  },
  {
    id:"a2-n17", en:"Skill", type:"noun", ipa:"/skɪl/",
    es:"Habilidad / Destreza", esLiteral:null,
    tip:"'Soft skills' = habilidades blandas. 'Hard skills' = habilidades técnicas.",
    exampleEn:"Communication is an important skill.", exampleEs:"La comunicación es una habilidad importante."
  },
  {
    id:"a2-n18", en:"Advantage", type:"noun", ipa:"/ədˈvæn.tɪdʒ/",
    es:"Ventaja", esLiteral:null,
    tip:"Opuesto: 'disadvantage'. 'Take advantage of' = aprovechar.",
    exampleEn:"Speaking English is a big advantage.", exampleEs:"Hablar inglés es una gran ventaja."
  },
  {
    id:"a2-n19", en:"Difference", type:"noun", ipa:"/ˈdɪf.ər.əns/",
    es:"Diferencia", esLiteral:null,
    tip:"'Make a difference' = hacer una diferencia (marcar la diferencia).",
    exampleEn:"What's the difference between these two?", exampleEs:"¿Cuál es la diferencia entre estos dos?"
  },
  {
    id:"a2-n20", en:"Choice", type:"noun", ipa:"/tʃɔɪs/",
    es:"Opción / Elección", esLiteral:null,
    tip:"'Have no choice' = no tener opción. 'Make a choice' = elegir.",
    exampleEn:"You have two choices.", exampleEs:"Tienes dos opciones."
  }
];

