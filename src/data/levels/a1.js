// A1 - Cimientos de Alta Frecuencia (~150 palabras)
// Fuentes: Oxford 3000, Cambridge English Profile, TOEFL Essential Words
// Foco: Verbos hiper-frecuentes, preposiciones, pronombres, sustantivos del día a día

export const a1Vocabulary = [
  // ============================================================
  // VERBOS ESENCIALES (Los 40 verbos más usados del inglés)
  // ============================================================
  {
    id:"a1-v1", en:"Be", type:"verb", ipa:"/biː/",
    es:"Ser / Estar", esLiteral:null,
    tip:"El verbo más importante del inglés. Tiene formas únicas: am, is, are, was, were.",
    exampleEn:"I am happy today.", exampleEs:"Estoy feliz hoy.",
    tenses:{present:"am / is / are", past:"was / were", participle:"been", continuous:"being"}
  },
  {
    id:"a1-v2", en:"Have", type:"verb", ipa:"/hæv/",
    es:"Tener / Haber", esLiteral:null,
    tip:"La 'a' es /æ/ (entre A y E). También se usa como auxiliar: 'I have eaten'.",
    exampleEn:"I have two brothers.", exampleEs:"Tengo dos hermanos.",
    tenses:{present:"have / has", past:"had", participle:"had", continuous:"having"}
  },
  {
    id:"a1-v3", en:"Do", type:"verb", ipa:"/duː/",
    es:"Hacer (Acciones / Tareas)", esLiteral:null,
    tip:"'Do' es para acciones generales. 'Make' es para crear algo nuevo. ¡Diferencia clave!",
    exampleEn:"I do my homework every night.", exampleEs:"Hago mi tarea todas las noches.",
    tenses:{present:"do / does", past:"did", participle:"done", continuous:"doing"}
  },
  {
    id:"a1-v4", en:"Say", type:"verb", ipa:"/seɪ/",
    es:"Decir", esLiteral:null,
    tip:"'Say' no requiere objeto directo (dices algo AL AIRE). Para persona usa 'tell': tell ME.",
    exampleEn:"What did you say?", exampleEs:"¿Qué dijiste?",
    tenses:{present:"say / says", past:"said", participle:"said", continuous:"saying"}
  },
  {
    id:"a1-v5", en:"Go", type:"verb", ipa:"/ɡoʊ/",
    es:"Ir", esLiteral:null,
    tip:"Termina con un diptongo /oʊ/, lleva la boca de 'o' a 'u'.",
    exampleEn:"Let's go to the park.", exampleEs:"Vamos al parque.",
    tenses:{present:"go / goes", past:"went", participle:"gone", continuous:"going"}
  },
  {
    id:"a1-v6", en:"Get", type:"verb", ipa:"/ɡet/",
    es:"Conseguir / Obtener / Llegar / Ponerse", esLiteral:null,
    tip:"El verbo más versátil. Cambia de significado según contexto: get home (llegar), get angry (ponerse).",
    exampleEn:"I need to get a new phone.", exampleEs:"Necesito conseguir un teléfono nuevo.",
    tenses:{present:"get / gets", past:"got", participle:"gotten (US) / got (UK)", continuous:"getting"}
  },
  {
    id:"a1-v7", en:"Make", type:"verb", ipa:"/meɪk/",
    es:"Hacer (Crear / Fabricar)", esLiteral:null,
    tip:"Úsalo cuando CREAS algo: make breakfast, make a decision, make money.",
    exampleEn:"She makes delicious cakes.", exampleEs:"Ella hace pasteles deliciosos.",
    tenses:{present:"make / makes", past:"made", participle:"made", continuous:"making"}
  },
  {
    id:"a1-v8", en:"Know", type:"verb", ipa:"/noʊ/",
    es:"Saber / Conocer", esLiteral:null,
    tip:"La 'k' es MUDA. Suena idéntico a 'no'.",
    exampleEn:"I don't know the answer.", exampleEs:"No sé la respuesta.",
    tenses:{present:"know / knows", past:"knew", participle:"known", continuous:"knowing"}
  },
  {
    id:"a1-v9", en:"Think", type:"verb", ipa:"/θɪŋk/",
    es:"Pensar / Creer", esLiteral:null,
    tip:"Lengua entre dientes para /θ/. Muy diferente de 'tink'.",
    exampleEn:"I think it's a good idea.", exampleEs:"Creo que es buena idea.",
    tenses:{present:"think / thinks", past:"thought", participle:"thought", continuous:"thinking"}
  },
  {
    id:"a1-v10", en:"Take", type:"verb", ipa:"/teɪk/",
    es:"Tomar / Llevar / Tardar", esLiteral:null,
    tip:"Muy versátil: take a photo, take a shower, take time, take the bus.",
    exampleEn:"It takes 20 minutes to get there.", exampleEs:"Toma 20 minutos llegar ahí.",
    tenses:{present:"take / takes", past:"took", participle:"taken", continuous:"taking"}
  },
  {
    id:"a1-v11", en:"See", type:"verb", ipa:"/siː/",
    es:"Ver (percibir con los ojos)", esLiteral:null,
    tip:"'See' es pasivo (ves sin esfuerzo). 'Watch' es activo (miras con atención). 'Look' requiere 'at'.",
    exampleEn:"I can see the mountains from here.", exampleEs:"Puedo ver las montañas desde aquí.",
    tenses:{present:"see / sees", past:"saw", participle:"seen", continuous:"seeing"}
  },
  {
    id:"a1-v12", en:"Come", type:"verb", ipa:"/kʌm/",
    es:"Venir", esLiteral:null,
    tip:"La 'o' suena /ʌ/ (como una 'a' ahogada corta).",
    exampleEn:"Come here, please.", exampleEs:"Ven aquí, por favor.",
    tenses:{present:"come / comes", past:"came", participle:"come", continuous:"coming"}
  },
  {
    id:"a1-v13", en:"Want", type:"verb", ipa:"/wɑːnt/",
    es:"Querer", esLiteral:null,
    tip:"En US la 'a' suena como una 'o' abierta. Nunca lleva 'to' antes de un sustantivo: I want coffee.",
    exampleEn:"I want to learn English.", exampleEs:"Quiero aprender inglés.",
    tenses:{present:"want / wants", past:"wanted", participle:"wanted", continuous:"wanting"}
  },
  {
    id:"a1-v14", en:"Give", type:"verb", ipa:"/ɡɪv/",
    es:"Dar", esLiteral:null,
    tip:"La 'i' es corta /ɪ/. La 'v' vibra contra el labio inferior.",
    exampleEn:"Can you give me a hand?", exampleEs:"¿Puedes echarme una mano?",
    tenses:{present:"give / gives", past:"gave", participle:"given", continuous:"giving"}
  },
  {
    id:"a1-v15", en:"Use", type:"verb", ipa:"/juːz/",
    es:"Usar / Utilizar", esLiteral:null,
    tip:"Como verbo termina en /z/ (zumbido). Como sustantivo 'the use' termina en /s/.",
    exampleEn:"May I use your phone?", exampleEs:"¿Puedo usar tu teléfono?",
    tenses:{present:"use / uses", past:"used", participle:"used", continuous:"using"}
  },
  {
    id:"a1-v16", en:"Find", type:"verb", ipa:"/faɪnd/",
    es:"Encontrar", esLiteral:null,
    tip:"Pronuncia bien la 'd' final. No confundir con 'fine' (bien/multa).",
    exampleEn:"I can't find my keys.", exampleEs:"No puedo encontrar mis llaves.",
    tenses:{present:"find / finds", past:"found", participle:"found", continuous:"finding"}
  },
  {
    id:"a1-v17", en:"Tell", type:"verb", ipa:"/tel/",
    es:"Decir (a alguien) / Contar", esLiteral:null,
    tip:"SIEMPRE necesita persona: Tell ME, Tell HIM. Nunca 'tell that...' solo.",
    exampleEn:"Tell me the truth.", exampleEs:"Dime la verdad.",
    tenses:{present:"tell / tells", past:"told", participle:"told", continuous:"telling"}
  },
  {
    id:"a1-v18", en:"Ask", type:"verb", ipa:"/æsk/",
    es:"Preguntar / Pedir", esLiteral:null,
    tip:"Para PEDIR algo, usa 'ask FOR': Ask for help. Para PREGUNTAR: Ask a question.",
    exampleEn:"Can I ask you a question?", exampleEs:"¿Puedo hacerte una pregunta?",
    tenses:{present:"ask / asks", past:"asked", participle:"asked", continuous:"asking"}
  },
  {
    id:"a1-v19", en:"Work", type:"verb", ipa:"/wɜːrk/",
    es:"Trabajar / Funcionar", esLiteral:null,
    tip:"La 'o' suena como /ɜː/ (entre E y O). También significa funcionar: 'It doesn't work'.",
    exampleEn:"I work from home.", exampleEs:"Trabajo desde casa.",
    tenses:{present:"work / works", past:"worked", participle:"worked", continuous:"working"}
  },
  {
    id:"a1-v20", en:"Feel", type:"verb", ipa:"/fiːl/",
    es:"Sentir / Sentirse", esLiteral:null,
    tip:"'ee' larga. Puede ser físico o emocional: feel cold, feel happy.",
    exampleEn:"I feel tired today.", exampleEs:"Me siento cansado hoy.",
    tenses:{present:"feel / feels", past:"felt", participle:"felt", continuous:"feeling"}
  },
  {
    id:"a1-v21", en:"Try", type:"verb", ipa:"/traɪ/",
    es:"Intentar / Probar", esLiteral:null,
    tip:"La combinación 'tr' a menudo suena como 'chr' en inglés americano rápido.",
    exampleEn:"I will try my best.", exampleEs:"Haré mi mejor esfuerzo.",
    tenses:{present:"try / tries", past:"tried", participle:"tried", continuous:"trying"}
  },
  {
    id:"a1-v22", en:"Leave", type:"verb", ipa:"/liːv/",
    es:"Dejar / Irse / Salir", esLiteral:null,
    tip:"Vibra la 'v' al final. No confundir con 'live' /lɪv/ (vivir).",
    exampleEn:"I have to leave now.", exampleEs:"Tengo que irme ahora.",
    tenses:{present:"leave / leaves", past:"left", participle:"left", continuous:"leaving"}
  },
  {
    id:"a1-v23", en:"Call", type:"verb", ipa:"/kɔːl/",
    es:"Llamar", esLiteral:null,
    tip:"La 'a' es oscura, como una mezcla O-A.",
    exampleEn:"Call me when you arrive.", exampleEs:"Llámame cuando llegues.",
    tenses:{present:"call / calls", past:"called", participle:"called", continuous:"calling"}
  },
  {
    id:"a1-v24", en:"Need", type:"verb", ipa:"/niːd/",
    es:"Necesitar", esLiteral:null,
    tip:"'ee' larga como en 'see'. Mucho más fuerte que 'want'.",
    exampleEn:"I need some help.", exampleEs:"Necesito algo de ayuda.",
    tenses:{present:"need / needs", past:"needed", participle:"needed", continuous:"needing"}
  },
  {
    id:"a1-v25", en:"Become", type:"verb", ipa:"/bɪˈkʌm/",
    es:"Volverse / Convertirse en / Llegar a ser", esLiteral:null,
    tip:"El acento está en la segunda sílaba: be-COME.",
    exampleEn:"She became a doctor.", exampleEs:"Ella se convirtió en doctora.",
    tenses:{present:"become / becomes", past:"became", participle:"become", continuous:"becoming"}
  },
  {
    id:"a1-v26", en:"Put", type:"verb", ipa:"/pʊt/",
    es:"Poner / Colocar", esLiteral:null,
    tip:"La 'u' suena como /ʊ/ (relajada, como en 'book'). No cambia en pasado: put-put-put.",
    exampleEn:"Put the book on the table.", exampleEs:"Pon el libro sobre la mesa.",
    tenses:{present:"put / puts", past:"put", participle:"put", continuous:"putting"}
  },
  {
    id:"a1-v27", en:"Mean", type:"verb", ipa:"/miːn/",
    es:"Significar / Querer decir", esLiteral:null,
    tip:"Importantísimo para pedir aclaraciones: 'What do you mean?'",
    exampleEn:"What does this word mean?", exampleEs:"¿Qué significa esta palabra?",
    tenses:{present:"mean / means", past:"meant", participle:"meant", continuous:"meaning"}
  },
  {
    id:"a1-v28", en:"Keep", type:"verb", ipa:"/kiːp/",
    es:"Mantener / Quedarse con / Seguir (haciendo)", esLiteral:null,
    tip:"'Keep + -ing' = seguir haciendo algo: 'Keep trying' (sigue intentando).",
    exampleEn:"Keep going, you're doing great!", exampleEs:"¡Sigue adelante, lo estás haciendo genial!",
    tenses:{present:"keep / keeps", past:"kept", participle:"kept", continuous:"keeping"}
  },
  {
    id:"a1-v29", en:"Let", type:"verb", ipa:"/let/",
    es:"Dejar / Permitir", esLiteral:null,
    tip:"Siempre va seguido de objeto + verbo BASE (sin 'to'): Let me go.",
    exampleEn:"Let me help you.", exampleEs:"Déjame ayudarte.",
    tenses:{present:"let / lets", past:"let", participle:"let", continuous:"letting"}
  },
  {
    id:"a1-v30", en:"Begin", type:"verb", ipa:"/bɪˈɡɪn/",
    es:"Comenzar / Empezar", esLiteral:null,
    tip:"Más formal que 'start'. Acento en la segunda sílaba.",
    exampleEn:"The movie begins at 8 PM.", exampleEs:"La película comienza a las 8 PM.",
    tenses:{present:"begin / begins", past:"began", participle:"begun", continuous:"beginning"}
  },
  {
    id:"a1-v31", en:"Seem", type:"verb", ipa:"/siːm/",
    es:"Parecer", esLiteral:null,
    tip:"Se usa mucho para dar opiniones suaves: 'It seems like a good idea'.",
    exampleEn:"He seems tired.", exampleEs:"Él parece cansado.",
    tenses:{present:"seem / seems", past:"seemed", participle:"seemed", continuous:"seeming"}
  },
  {
    id:"a1-v32", en:"Help", type:"verb", ipa:"/help/",
    es:"Ayudar", esLiteral:null,
    tip:"Puede ir con 'to' o sin él: 'Help me (to) understand'.",
    exampleEn:"Can you help me with this?", exampleEs:"¿Puedes ayudarme con esto?",
    tenses:{present:"help / helps", past:"helped", participle:"helped", continuous:"helping"}
  },
  {
    id:"a1-v33", en:"Show", type:"verb", ipa:"/ʃoʊ/",
    es:"Mostrar / Enseñar (visualmente)", esLiteral:null,
    tip:"Comienza con el sonido 'sh' (como pedir silencio: shhhh).",
    exampleEn:"Show me your new house.", exampleEs:"Muéstrame tu nueva casa.",
    tenses:{present:"show / shows", past:"showed", participle:"shown", continuous:"showing"}
  },
  {
    id:"a1-v34", en:"Hear", type:"verb", ipa:"/hɪr/",
    es:"Oír (sin esfuerzo)", esLiteral:null,
    tip:"'Hear' es pasivo (oyes sin querer). 'Listen' es activo (pones atención). No confundir con 'here'.",
    exampleEn:"I can hear the birds singing.", exampleEs:"Puedo oír los pájaros cantando.",
    tenses:{present:"hear / hears", past:"heard", participle:"heard", continuous:"hearing"}
  },
  {
    id:"a1-v35", en:"Play", type:"verb", ipa:"/pleɪ/",
    es:"Jugar / Tocar (instrumento)", esLiteral:null,
    tip:"En inglés, no se 'juega' un instrumento, se 'toca' con 'play': play guitar.",
    exampleEn:"The children play in the garden.", exampleEs:"Los niños juegan en el jardín.",
    tenses:{present:"play / plays", past:"played", participle:"played", continuous:"playing"}
  },
  {
    id:"a1-v36", en:"Run", type:"verb", ipa:"/rʌn/",
    es:"Correr / Ejecutar / Manejar", esLiteral:null,
    tip:"También significa administrar: 'run a business' (manejar un negocio).",
    exampleEn:"She runs every morning.", exampleEs:"Ella corre todas las mañanas.",
    tenses:{present:"run / runs", past:"ran", participle:"run", continuous:"running"}
  },
  {
    id:"a1-v37", en:"Move", type:"verb", ipa:"/muːv/",
    es:"Mover / Mudarse", esLiteral:null,
    tip:"'Move to' un lugar = mudarse. 'Move' un objeto = moverlo.",
    exampleEn:"We moved to a new city last year.", exampleEs:"Nos mudamos a una nueva ciudad el año pasado.",
    tenses:{present:"move / moves", past:"moved", participle:"moved", continuous:"moving"}
  },
  {
    id:"a1-v38", en:"Live", type:"verb", ipa:"/lɪv/",
    es:"Vivir", esLiteral:null,
    tip:"La 'i' es CORTA /ɪ/. No confundir con 'leave' /liːv/ (irse) que tiene 'i' larga.",
    exampleEn:"I live in Lima.", exampleEs:"Vivo en Lima.",
    tenses:{present:"live / lives", past:"lived", participle:"lived", continuous:"living"}
  },
  {
    id:"a1-v39", en:"Believe", type:"verb", ipa:"/bɪˈliːv/",
    es:"Creer", esLiteral:null,
    tip:"Acento en 'lieve'. ¡Cuidado con la regla i-before-e!",
    exampleEn:"I believe you can do it.", exampleEs:"Creo que puedes hacerlo.",
    tenses:{present:"believe / believes", past:"believed", participle:"believed", continuous:"believing"}
  },
  {
    id:"a1-v40", en:"Bring", type:"verb", ipa:"/brɪŋ/",
    es:"Traer", esLiteral:null,
    tip:"'Bring' = traer (hacia ti). 'Take' = llevar (lejos de ti).",
    exampleEn:"Bring your umbrella, it might rain.", exampleEs:"Trae tu paraguas, podría llover.",
    tenses:{present:"bring / brings", past:"brought", participle:"brought", continuous:"bringing"}
  },
  // ============================================================
  // SUSTANTIVOS DE ALTA FRECUENCIA (~40)
  // ============================================================
  {
    id:"a1-n1", en:"Time", type:"noun", ipa:"/taɪm/",
    es:"Tiempo / Hora / Vez", esLiteral:null,
    tip:"El sustantivo #1 del inglés. 'What time is it?' / 'I had a great time'.",
    exampleEn:"I don't have time right now.", exampleEs:"No tengo tiempo ahora mismo."
  },
  {
    id:"a1-n2", en:"People", type:"noun", ipa:"/ˈpiː.pəl/",
    es:"Gente / Personas", esLiteral:null,
    tip:"Ya es plural. NUNCA digas 'peoples' (excepto para referirte a etnias).",
    exampleEn:"There are many people in the park.", exampleEs:"Hay mucha gente en el parque."
  },
  {
    id:"a1-n3", en:"Way", type:"noun", ipa:"/weɪ/",
    es:"Camino / Manera / Forma", esLiteral:null,
    tip:"'By the way' = Por cierto. 'No way!' = ¡De ninguna manera!",
    exampleEn:"This is the best way to learn.", exampleEs:"Esta es la mejor manera de aprender."
  },
  {
    id:"a1-n4", en:"Day", type:"noun", ipa:"/deɪ/",
    es:"Día", esLiteral:null,
    tip:"La 'a' suena /eɪ/.",
    exampleEn:"Have a nice day!", exampleEs:"¡Que tengas un buen día!"
  },
  {
    id:"a1-n5", en:"Thing", type:"noun", ipa:"/θɪŋ/",
    es:"Cosa", esLiteral:null,
    tip:"Lengua entre dientes para el sonido inicial /θ/.",
    exampleEn:"The thing is, I forgot.", exampleEs:"El caso es que, se me olvidó."
  },
  {
    id:"a1-n6", en:"Man", type:"noun", ipa:"/mæn/",
    es:"Hombre", esLiteral:null,
    tip:"Plural irregular: men /men/. La 'a' cambia a 'e'.",
    exampleEn:"That man is very tall.", exampleEs:"Ese hombre es muy alto."
  },
  {
    id:"a1-n7", en:"Woman", type:"noun", ipa:"/ˈwʊm.ən/",
    es:"Mujer", esLiteral:null,
    tip:"Plural irregular: women /ˈwɪm.ɪn/. La pronunciación cambia completamente.",
    exampleEn:"She is a strong woman.", exampleEs:"Ella es una mujer fuerte."
  },
  {
    id:"a1-n8", en:"Child", type:"noun", ipa:"/tʃaɪld/",
    es:"Niño/a", esLiteral:null,
    tip:"Plural MUY irregular: children. No 'childs'.",
    exampleEn:"Every child deserves a good education.", exampleEs:"Todo niño merece una buena educación."
  },
  {
    id:"a1-n9", en:"World", type:"noun", ipa:"/wɜːrld/",
    es:"Mundo", esLiteral:null,
    tip:"La 'or' suena /ɜːr/ (como 'er' en español). No confundir con 'word' (palabra).",
    exampleEn:"I want to travel the world.", exampleEs:"Quiero viajar por el mundo."
  },
  {
    id:"a1-n10", en:"Life", type:"noun", ipa:"/laɪf/",
    es:"Vida", esLiteral:null,
    tip:"Plural irregular: lives /laɪvz/ (con V, no F).",
    exampleEn:"Life is beautiful.", exampleEs:"La vida es hermosa."
  },
  {
    id:"a1-n11", en:"Hand", type:"noun", ipa:"/hænd/",
    es:"Mano", esLiteral:null,
    tip:"'Give me a hand' = Ayúdame (no literalmente tu mano).",
    exampleEn:"Raise your hand if you have a question.", exampleEs:"Levanta la mano si tienes una pregunta."
  },
  {
    id:"a1-n12", en:"Part", type:"noun", ipa:"/pɑːrt/",
    es:"Parte", esLiteral:null,
    tip:"'Take part in' = Participar en. Pronuncia la R americana fuerte.",
    exampleEn:"This is the best part of the movie.", exampleEs:"Esta es la mejor parte de la película."
  },
  {
    id:"a1-n13", en:"Place", type:"noun", ipa:"/pleɪs/",
    es:"Lugar / Sitio", esLiteral:null,
    tip:"'Take place' = Tener lugar (ocurrir un evento).",
    exampleEn:"This is a beautiful place.", exampleEs:"Este es un lugar hermoso."
  },
  {
    id:"a1-n14", en:"Problem", type:"noun", ipa:"/ˈprɑː.bləm/",
    es:"Problema", esLiteral:null,
    tip:"'No problem!' = ¡No hay problema! (respuesta común a 'Thank you').",
    exampleEn:"That's not my problem.", exampleEs:"Ese no es mi problema."
  },
  {
    id:"a1-n15", en:"Fact", type:"noun", ipa:"/fækt/",
    es:"Hecho", esLiteral:null,
    tip:"'In fact' = De hecho (conector muy útil).",
    exampleEn:"In fact, he was right.", exampleEs:"De hecho, él tenía razón."
  },
  {
    id:"a1-n16", en:"Week", type:"noun", ipa:"/wiːk/",
    es:"Semana", esLiteral:null,
    tip:"No confundir con 'weak' /wiːk/ (débil). ¡Suenan igual! (homófonos).",
    exampleEn:"I work five days a week.", exampleEs:"Trabajo cinco días a la semana."
  },
  {
    id:"a1-n17", en:"Money", type:"noun", ipa:"/ˈmʌn.i/",
    es:"Dinero", esLiteral:null,
    tip:"Es INCONTABLE en inglés: never 'moneys'. Usa 'much money', no 'many money'.",
    exampleEn:"I need to save more money.", exampleEs:"Necesito ahorrar más dinero."
  },
  {
    id:"a1-n18", en:"Night", type:"noun", ipa:"/naɪt/",
    es:"Noche", esLiteral:null,
    tip:"La 'gh' es MUDA. 'Good night' es para despedirse (no saludar).",
    exampleEn:"I had a wonderful night.", exampleEs:"Tuve una noche maravillosa."
  },
  {
    id:"a1-n19", en:"Name", type:"noun", ipa:"/neɪm/",
    es:"Nombre", esLiteral:null,
    tip:"'What's your name?' Tu primera frase en inglés.",
    exampleEn:"My name is Carlos.", exampleEs:"Mi nombre es Carlos."
  },
  {
    id:"a1-n20", en:"Family", type:"noun", ipa:"/ˈfæm.əl.i/",
    es:"Familia", esLiteral:null,
    tip:"Solo tiene 3 sílabas en inglés: FAM-uh-lee (no fa-mi-lia).",
    exampleEn:"I love spending time with my family.", exampleEs:"Me encanta pasar tiempo con mi familia."
  },
  {
    id:"a1-n21", en:"Food", type:"noun", ipa:"/fuːd/",
    es:"Comida / Alimento", esLiteral:null,
    tip:"Generalmente INCONTABLE. Dices 'some food', no 'a food'.",
    exampleEn:"The food here is delicious.", exampleEs:"La comida aquí es deliciosa."
  },
  {
    id:"a1-n22", en:"Water", type:"noun", ipa:"/ˈwɔː.tər/",
    es:"Agua", esLiteral:null,
    tip:"En US, la 't' suena como una 'r' suave (Flap T): /wɑːɾɚ/.",
    exampleEn:"Can I have a glass of water?", exampleEs:"¿Me da un vaso de agua?"
  },
  {
    id:"a1-n23", en:"Friend", type:"noun", ipa:"/frend/",
    es:"Amigo/a", esLiteral:null,
    tip:"La 'i' es muda. Suena como 'frend', no 'fri-end'.",
    exampleEn:"She is my best friend.", exampleEs:"Ella es mi mejor amiga."
  },
  {
    id:"a1-n24", en:"House", type:"noun", ipa:"/haʊs/",
    es:"Casa (la estructura)", esLiteral:null,
    tip:"'House' = la estructura física. 'Home' = el concepto de hogar. 'I'm going home' (sin 'to').",
    exampleEn:"They bought a new house.", exampleEs:"Ellos compraron una casa nueva."
  },
  {
    id:"a1-n25", en:"School", type:"noun", ipa:"/skuːl/",
    es:"Escuela / Colegio", esLiteral:null,
    tip:"'At school' = en la escuela (como alumno). 'At the school' = en el edificio físico.",
    exampleEn:"My children go to school by bus.", exampleEs:"Mis hijos van a la escuela en autobús."
  },
  // ============================================================
  // ADJETIVOS ESENCIALES (~25)
  // ============================================================
  {
    id:"a1-adj1", en:"Good", type:"adjective", ipa:"/ɡʊd/",
    es:"Bueno/a", esLiteral:null,
    tip:"Comparativo irregular: better. Superlativo: best. NUNCA 'gooder' o 'goodest'.",
    exampleEn:"She is a good teacher.", exampleEs:"Ella es una buena profesora."
  },
  {
    id:"a1-adj2", en:"New", type:"adjective", ipa:"/njuː/",
    es:"Nuevo/a", esLiteral:null,
    tip:"Empieza con un sonido nasal /nj/.",
    exampleEn:"I got a new job.", exampleEs:"Conseguí un nuevo trabajo."
  },
  {
    id:"a1-adj3", en:"Old", type:"adjective", ipa:"/oʊld/",
    es:"Viejo/a / Antiguo/a", esLiteral:null,
    tip:"Para preguntar la edad: 'How old are you?' (¿Cuántos años tienes?), no 'How many years'.",
    exampleEn:"How old are you?", exampleEs:"¿Cuántos años tienes?"
  },
  {
    id:"a1-adj4", en:"Big", type:"adjective", ipa:"/bɪɡ/",
    es:"Grande", esLiteral:null,
    tip:"Para cosas concretas. Para importancia usa 'great' o 'major'.",
    exampleEn:"They live in a big city.", exampleEs:"Ellos viven en una ciudad grande."
  },
  {
    id:"a1-adj5", en:"Small", type:"adjective", ipa:"/smɔːl/",
    es:"Pequeño/a", esLiteral:null,
    tip:"Más neutro que 'little' (que es más cariñoso/diminutivo).",
    exampleEn:"I grew up in a small town.", exampleEs:"Crecí en un pueblo pequeño."
  },
  {
    id:"a1-adj6", en:"Long", type:"adjective", ipa:"/lɔːŋ/",
    es:"Largo/a", esLiteral:null,
    tip:"'How long?' = ¿Cuánto tiempo? / ¿Qué tan largo?",
    exampleEn:"How long have you been here?", exampleEs:"¿Cuánto tiempo llevas aquí?"
  },
  {
    id:"a1-adj7", en:"Great", type:"adjective", ipa:"/ɡreɪt/",
    es:"Genial / Grandioso", esLiteral:null,
    tip:"Muy informal para decir 'genial'. Prácticamente intercambiable con 'awesome'.",
    exampleEn:"That's a great idea!", exampleEs:"¡Esa es una gran idea!"
  },
  {
    id:"a1-adj8", en:"Right", type:"adjective", ipa:"/raɪt/",
    es:"Correcto / Derecho", esLiteral:null,
    tip:"Homófono con 'write' (escribir). Tres significados: correcto, derecha, derecho (legal).",
    exampleEn:"You are absolutely right.", exampleEs:"Tienes toda la razón."
  },
  {
    id:"a1-adj9", en:"Different", type:"adjective", ipa:"/ˈdɪf.ər.ənt/",
    es:"Diferente", esLiteral:null,
    tip:"En inglés se dice 'different FROM' (no 'different of').",
    exampleEn:"This book is different from the movie.", exampleEs:"Este libro es diferente de la película."
  },
  {
    id:"a1-adj10", en:"Important", type:"adjective", ipa:"/ɪmˈpɔːr.tənt/",
    es:"Importante", esLiteral:null,
    tip:"Acento en la segunda sílaba: im-POR-tant.",
    exampleEn:"Education is very important.", exampleEs:"La educación es muy importante."
  },
  {
    id:"a1-adj11", en:"Hard", type:"adjective", ipa:"/hɑːrd/",
    es:"Difícil / Duro", esLiteral:null,
    tip:"Dos significados: difícil (It's hard) y duro/firme (a hard rock). Como adverbio: work hard.",
    exampleEn:"This test is really hard.", exampleEs:"Este examen es realmente difícil."
  },
  {
    id:"a1-adj12", en:"Sure", type:"adjective", ipa:"/ʃʊr/",
    es:"Seguro/a (de algo)", esLiteral:null,
    tip:"'I'm sure' = Estoy seguro. 'Sure!' = ¡Claro! (respuesta afirmativa casual).",
    exampleEn:"Are you sure about that?", exampleEs:"¿Estás seguro de eso?"
  },
  {
    id:"a1-adj13", en:"Happy", type:"adjective", ipa:"/ˈhæp.i/",
    es:"Feliz / Contento/a", esLiteral:null,
    tip:"Exhala la 'h' inicial. 'I'm happy' se oirá raro sin la H.",
    exampleEn:"I am so happy to see you!", exampleEs:"¡Estoy muy feliz de verte!"
  },
  {
    id:"a1-adj14", en:"Tired", type:"adjective", ipa:"/taɪrd/",
    es:"Cansado/a", esLiteral:null,
    tip:"Una sola sílaba: /taɪrd/. No lo pronuncies como dos sílabas.",
    exampleEn:"I am so tired after work.", exampleEs:"Estoy muy cansado después del trabajo."
  },
  {
    id:"a1-adj15", en:"Ready", type:"adjective", ipa:"/ˈred.i/",
    es:"Listo/a / Preparado/a", esLiteral:null,
    tip:"'Get ready' = Prepararse. 'Are you ready?' = ¿Estás listo?",
    exampleEn:"I'm not ready yet.", exampleEs:"Todavía no estoy listo."
  },
  // ============================================================
  // PREPOSICIONES CRÍTICAS (~15)
  // ============================================================
  {
    id:"a1-p1", en:"In", type:"preposition", ipa:"/ɪn/",
    es:"En (dentro de)", esLiteral:null,
    tip:"Para ciudades, países, meses, años y períodos largos. 'In Lima', 'in January', 'in 2025'.",
    exampleEn:"I live in Peru.", exampleEs:"Vivo en Perú."
  },
  {
    id:"a1-p2", en:"On", type:"preposition", ipa:"/ɒn/",
    es:"En (sobre una superficie) / El (día)", esLiteral:null,
    tip:"Para superficies, días y fechas. 'On the table', 'on Monday', 'on March 5th'.",
    exampleEn:"The book is on the table.", exampleEs:"El libro está sobre la mesa."
  },
  {
    id:"a1-p3", en:"At", type:"preposition", ipa:"/æt/",
    es:"En (punto exacto)", esLiteral:null,
    tip:"Para horas y puntos específicos. 'At 5 PM', 'at home', 'at the corner'.",
    exampleEn:"I will meet you at 3 o'clock.", exampleEs:"Te encontraré a las 3 en punto."
  },
  {
    id:"a1-p4", en:"To", type:"preposition", ipa:"/tuː/ (tə)",
    es:"A / Hacia / Para", esLiteral:null,
    tip:"En habla rápida se reduce a /tə/. Se usa para dirección: 'go TO school'.",
    exampleEn:"I am going to the store.", exampleEs:"Voy a la tienda."
  },
  {
    id:"a1-p5", en:"For", type:"preposition", ipa:"/fɔːr/ (fər)",
    es:"Para / Por / Durante", esLiteral:null,
    tip:"'For' + duración de tiempo: 'I lived there for 3 years'. Se reduce a /fər/ en habla rápida.",
    exampleEn:"This gift is for you.", exampleEs:"Este regalo es para ti."
  },
  {
    id:"a1-p6", en:"With", type:"preposition", ipa:"/wɪð/",
    es:"Con", esLiteral:null,
    tip:"Lengua entre dientes vibra para /ð/ (th sonora).",
    exampleEn:"I want to go with you.", exampleEs:"Quiero ir contigo."
  },
  {
    id:"a1-p7", en:"About", type:"preposition", ipa:"/əˈbaʊt/",
    es:"Acerca de / Sobre / Aproximadamente", esLiteral:null,
    tip:"La primera sílaba es una schwa débil /ə/.",
    exampleEn:"Tell me about your trip.", exampleEs:"Cuéntame sobre tu viaje."
  },
  {
    id:"a1-p8", en:"From", type:"preposition", ipa:"/frʌm/",
    es:"De / Desde (origen)", esLiteral:null,
    tip:"Se usa para ORIGEN. 'I am from Peru' (no 'I am of Peru').",
    exampleEn:"Where are you from?", exampleEs:"¿De dónde eres?"
  },
  {
    id:"a1-p9", en:"By", type:"preposition", ipa:"/baɪ/",
    es:"Por / Junto a / Para (fecha límite)", esLiteral:null,
    tip:"Tres grandes usos: transporte (by car), autoría (by Picasso), y tiempo límite (by Friday).",
    exampleEn:"I usually travel by bus.", exampleEs:"Usualmente viajo en autobús."
  },
  {
    id:"a1-p10", en:"Between", type:"preposition", ipa:"/bɪˈtwiːn/",
    es:"Entre (dos cosas)", esLiteral:null,
    tip:"Para DOS elementos. Para 3+, usa 'among'.",
    exampleEn:"The bank is between the bakery and the pharmacy.", exampleEs:"El banco está entre la panadería y la farmacia."
  },
  {
    id:"a1-p11", en:"After", type:"preposition", ipa:"/ˈæf.tər/",
    es:"Después de", esLiteral:null,
    tip:"'After' como preposición y conjunción: 'After lunch' / 'After I eat'.",
    exampleEn:"Let's go after lunch.", exampleEs:"Vamos después del almuerzo."
  },
  {
    id:"a1-p12", en:"Before", type:"preposition", ipa:"/bɪˈfɔːr/",
    es:"Antes de", esLiteral:null,
    tip:"Acento en la segunda sílaba: be-FORE.",
    exampleEn:"Wash your hands before eating.", exampleEs:"Lávate las manos antes de comer."
  },
  // ============================================================
  // ADVERBIOS Y PALABRAS FUNCIONALES (~25)
  // ============================================================
  {
    id:"a1-adv1", en:"Also", type:"adverb", ipa:"/ˈɔːl.soʊ/",
    es:"También", esLiteral:null,
    tip:"Se coloca ANTES del verbo principal pero DESPUÉS de 'to be': 'She is also tall' / 'She also speaks French'.",
    exampleEn:"I also speak Spanish.", exampleEs:"Yo también hablo español."
  },
  {
    id:"a1-adv2", en:"Always", type:"adverb", ipa:"/ˈɔːl.weɪz/",
    es:"Siempre", esLiteral:null,
    tip:"La 's' final vibra como /z/.",
    exampleEn:"She always arrives on time.", exampleEs:"Ella siempre llega a tiempo."
  },
  {
    id:"a1-adv3", en:"Never", type:"adverb", ipa:"/ˈnev.ər/",
    es:"Nunca / Jamás", esLiteral:null,
    tip:"Ya es negativo. NO pongas 'don't': 'I never eat meat' (no 'I don't never').",
    exampleEn:"I have never been to Japan.", exampleEs:"Nunca he estado en Japón."
  },
  {
    id:"a1-adv4", en:"Sometimes", type:"adverb", ipa:"/ˈsʌm.taɪmz/",
    es:"A veces", esLiteral:null,
    tip:"Puede ir al inicio o en medio de la oración.",
    exampleEn:"Sometimes I work from home.", exampleEs:"A veces trabajo desde casa."
  },
  {
    id:"a1-adv5", en:"Here", type:"adverb", ipa:"/hɪr/",
    es:"Aquí", esLiteral:null,
    tip:"Exhala la 'h' claramente para diferenciar de 'ear' (oreja).",
    exampleEn:"Come over here.", exampleEs:"Ven acá."
  },
  {
    id:"a1-adv6", en:"There", type:"adverb", ipa:"/ðer/",
    es:"Ahí / Allí", esLiteral:null,
    tip:"Th sonora /ð/. No confundir con 'their' (su) ni 'they're' (ellos son). ¡Los 3 suenan igual!",
    exampleEn:"Put your bag over there.", exampleEs:"Pon tu bolsa por allí."
  },
  {
    id:"a1-adv7", en:"Now", type:"adverb", ipa:"/naʊ/",
    es:"Ahora", esLiteral:null,
    tip:"El diptongo /aʊ/ es como la exclamación '¡Au!'.",
    exampleEn:"I need it right now.", exampleEs:"Lo necesito ahora mismo."
  },
  {
    id:"a1-adv8", en:"Then", type:"adverb", ipa:"/ðen/",
    es:"Entonces / Luego", esLiteral:null,
    tip:"Th sonora. Muy útil para narrar secuencias: 'First..., then...'.",
    exampleEn:"First I eat, then I study.", exampleEs:"Primero como, luego estudio."
  },
  {
    id:"a1-adv9", en:"Just", type:"adverb", ipa:"/dʒʌst/",
    es:"Solo / Solamente / Justo / Recién", esLiteral:null,
    tip:"Extremadamente versátil. 'Just a minute' (solo un minuto). 'I just arrived' (acabo de llegar).",
    exampleEn:"I just finished my homework.", exampleEs:"Acabo de terminar mi tarea."
  },
  {
    id:"a1-adv10", en:"Only", type:"adverb", ipa:"/ˈoʊn.li/",
    es:"Solo / Únicamente", esLiteral:null,
    tip:"El lugar donde lo coloques cambia el significado de toda la oración.",
    exampleEn:"I only have five dollars.", exampleEs:"Solo tengo cinco dólares."
  },
  {
    id:"a1-adv11", en:"Really", type:"adverb", ipa:"/ˈriː.ə.li/",
    es:"Realmente / De verdad / Muy", esLiteral:null,
    tip:"Se pronuncia con dos sílabas fuertes: REE-lee. Intensifica cualquier adjetivo: 'really good'.",
    exampleEn:"I'm really tired.", exampleEs:"Estoy muy cansado."
  },
  {
    id:"a1-adv12", en:"Very", type:"adverb", ipa:"/ˈver.i/",
    es:"Muy", esLiteral:null,
    tip:"Cuidado: la 'v' vibra (dientes sobre labio inferior). En español no tenemos /v/.",
    exampleEn:"It is very cold today.", exampleEs:"Hoy hace mucho frío."
  },
  {
    id:"a1-adv13", en:"Well", type:"adverb", ipa:"/wel/",
    es:"Bien", esLiteral:null,
    tip:"'Good' describe sustantivos (a good book). 'Well' describe verbos (she sings well).",
    exampleEn:"She speaks English very well.", exampleEs:"Ella habla inglés muy bien."
  },
  {
    id:"a1-adv14", en:"Again", type:"adverb", ipa:"/əˈɡen/",
    es:"Otra vez / De nuevo", esLiteral:null,
    tip:"La primera sílaba es débil (schwa). Acento en 'gen'.",
    exampleEn:"Can you say that again?", exampleEs:"¿Puedes decir eso otra vez?"
  },
  {
    id:"a1-adv15", en:"Together", type:"adverb", ipa:"/təˈɡeð.ər/",
    es:"Juntos/as", esLiteral:null,
    tip:"Tres sílabas: tuh-GEH-ther. La 'th' intermedia es sonora.",
    exampleEn:"We work better together.", exampleEs:"Trabajamos mejor juntos."
  },
  // ============================================================
  // QUESTION WORDS & PRONOUNS (~10)
  // ============================================================
  {
    id:"a1-qw1", en:"Who", type:"pronoun", ipa:"/huː/",
    es:"¿Quién? / Quien", esLiteral:null,
    tip:"La 'w' es MUDA. Suena /huː/.",
    exampleEn:"Who is your favorite teacher?", exampleEs:"¿Quién es tu profesor favorito?"
  },
  {
    id:"a1-qw2", en:"What", type:"pronoun", ipa:"/wɒt/",
    es:"¿Qué? / ¿Cuál?", esLiteral:null,
    tip:"'What' para definiciones y cosas no limitadas. 'Which' para elegir entre opciones.",
    exampleEn:"What is your name?", exampleEs:"¿Cuál es tu nombre?"
  },
  {
    id:"a1-qw3", en:"Where", type:"adverb", ipa:"/wer/",
    es:"¿Dónde?", esLiteral:null,
    tip:"No confundir con 'were' /wɜːr/ (pasado de 'be') o 'wear' /wer/ (usar ropa).",
    exampleEn:"Where do you live?", exampleEs:"¿Dónde vives?"
  },
  {
    id:"a1-qw4", en:"When", type:"adverb", ipa:"/wen/",
    es:"¿Cuándo?", esLiteral:null,
    tip:"También funciona como conjunción: 'Call me when you arrive'.",
    exampleEn:"When is your birthday?", exampleEs:"¿Cuándo es tu cumpleaños?"
  },
  {
    id:"a1-qw5", en:"Why", type:"adverb", ipa:"/waɪ/",
    es:"¿Por qué?", esLiteral:null,
    tip:"Respóndelo con 'because' (porque). 'Why?' → 'Because...'.",
    exampleEn:"Why are you late?", exampleEs:"¿Por qué llegas tarde?"
  },
  {
    id:"a1-qw6", en:"How", type:"adverb", ipa:"/haʊ/",
    es:"¿Cómo?", esLiteral:null,
    tip:"Combina con adjetivos: 'How old?', 'How far?', 'How much?', 'How many?'.",
    exampleEn:"How are you doing?", exampleEs:"¿Cómo estás?"
  },
  {
    id:"a1-qw7", en:"Which", type:"pronoun", ipa:"/wɪtʃ/",
    es:"¿Cuál? (de un grupo)", esLiteral:null,
    tip:"Úsalo cuando hay opciones limitadas: 'Which color: red or blue?'.",
    exampleEn:"Which one do you prefer?", exampleEs:"¿Cuál prefieres?"
  },
  // ============================================================
  // CONJUNCIONES BÁSICAS (~10)
  // ============================================================
  {
    id:"a1-conj1", en:"And", type:"conjunction", ipa:"/ænd/",
    es:"Y", esLiteral:null,
    tip:"En habla rápida se reduce a /ən/ o /n/.",
    exampleEn:"I like coffee and tea.", exampleEs:"Me gustan el café y el té."
  },
  {
    id:"a1-conj2", en:"But", type:"conjunction", ipa:"/bʌt/",
    es:"Pero", esLiteral:null,
    tip:"Introduce un contraste directo.",
    exampleEn:"I am tired, but I can't sleep.", exampleEs:"Estoy cansado, pero no puedo dormir."
  },
  {
    id:"a1-conj3", en:"Or", type:"conjunction", ipa:"/ɔːr/",
    es:"O", esLiteral:null,
    tip:"Para dar alternativas.",
    exampleEn:"Do you want coffee or tea?", exampleEs:"¿Quieres café o té?"
  },
  {
    id:"a1-conj4", en:"Because", type:"conjunction", ipa:"/bɪˈkɒz/",
    es:"Porque", esLiteral:null,
    tip:"Acento en la segunda sílaba. En habla rápida: /kəz/ ('cause).",
    exampleEn:"I stayed home because it was raining.", exampleEs:"Me quedé en casa porque estaba lloviendo."
  },
  {
    id:"a1-conj5", en:"If", type:"conjunction", ipa:"/ɪf/",
    es:"Si (condicional)", esLiteral:null,
    tip:"Introduce condiciones. 'If it rains, I will stay home'.",
    exampleEn:"If you need help, call me.", exampleEs:"Si necesitas ayuda, llámame."
  },
  {
    id:"a1-conj6", en:"So", type:"conjunction", ipa:"/soʊ/",
    es:"Así que / Entonces / Tan", esLiteral:null,
    tip:"Como conjunción: resultado. Como adverbio: intensificador ('I'm so happy').",
    exampleEn:"It was late, so I went home.", exampleEs:"Era tarde, así que me fui a casa."
  },
  {
    id:"a1-conj7", en:"While", type:"conjunction", ipa:"/waɪl/",
    es:"Mientras", esLiteral:null,
    tip:"Para acciones simultáneas. También puede significar 'aunque' en contexto formal.",
    exampleEn:"I listen to music while I cook.", exampleEs:"Escucho música mientras cocino."
  },
  {
    id:"a1-conj8", en:"Until", type:"conjunction", ipa:"/ʌnˈtɪl/",
    es:"Hasta (que)", esLiteral:null,
    tip:"'I will wait until you arrive' = Esperaré hasta que llegues.",
    exampleEn:"Wait here until I come back.", exampleEs:"Espera aquí hasta que regrese."
  },
  // ============================================================
  // VERBOS DE ACCIÓN DIARIA (Completando hasta 150)
  // ============================================================
  {
    id:"a1-v41", en:"Eat", type:"verb", ipa:"/iːt/",
    es:"Comer", esLiteral:null,
    tip:"Pasado irregular: ate /eɪt/ (suena como 'eight', el número 8).",
    exampleEn:"I eat breakfast at 7 AM.", exampleEs:"Yo desayuno a las 7 AM.",
    tenses:{present:"eat / eats", past:"ate", participle:"eaten", continuous:"eating"}
  },
  {
    id:"a1-v42", en:"Drink", type:"verb", ipa:"/drɪŋk/",
    es:"Beber / Tomar", esLiteral:null,
    tip:"La 'i' es corta. 'Drink water' no 'take water'.",
    exampleEn:"I drink coffee every morning.", exampleEs:"Tomo café todas las mañanas.",
    tenses:{present:"drink / drinks", past:"drank", participle:"drunk", continuous:"drinking"}
  },
  {
    id:"a1-v43", en:"Read", type:"verb", ipa:"/riːd/ (pres.) /red/ (past)",
    es:"Leer", esLiteral:null,
    tip:"¡Se escribe igual en pasado pero se pronuncia /red/ (como el color 'red')!",
    exampleEn:"I read the news every morning.", exampleEs:"Leo las noticias todas las mañanas.",
    tenses:{present:"read /riːd/", past:"read /red/", participle:"read /red/", continuous:"reading"}
  },
  {
    id:"a1-v44", en:"Write", type:"verb", ipa:"/raɪt/",
    es:"Escribir", esLiteral:null,
    tip:"La 'w' es MUDA. Suena idéntico a 'right' (correcto/derecha).",
    exampleEn:"Please write your name here.", exampleEs:"Por favor escribe tu nombre aquí.",
    tenses:{present:"write / writes", past:"wrote", participle:"written", continuous:"writing"}
  },
  {
    id:"a1-v45", en:"Sleep", type:"verb", ipa:"/sliːp/",
    es:"Dormir", esLiteral:null,
    tip:"'Go to sleep' = irse a dormir. 'Fall asleep' = quedarse dormido.",
    exampleEn:"I need to sleep more.", exampleEs:"Necesito dormir más.",
    tenses:{present:"sleep / sleeps", past:"slept", participle:"slept", continuous:"sleeping"}
  },
  {
    id:"a1-v46", en:"Buy", type:"verb", ipa:"/baɪ/",
    es:"Comprar", esLiteral:null,
    tip:"Suena igual que 'by' y 'bye'. Pasado: bought /bɔːt/.",
    exampleEn:"I want to buy a new car.", exampleEs:"Quiero comprar un auto nuevo.",
    tenses:{present:"buy / buys", past:"bought", participle:"bought", continuous:"buying"}
  },
  {
    id:"a1-v47", en:"Sell", type:"verb", ipa:"/sel/",
    es:"Vender", esLiteral:null,
    tip:"No confundir con 'sale' (rebaja/venta como sustantivo).",
    exampleEn:"They sell fresh fruit here.", exampleEs:"Venden fruta fresca aquí.",
    tenses:{present:"sell / sells", past:"sold", participle:"sold", continuous:"selling"}
  },
  {
    id:"a1-v48", en:"Pay", type:"verb", ipa:"/peɪ/",
    es:"Pagar", esLiteral:null,
    tip:"'Pay FOR something' (pagar por algo). 'Pay attention' (prestar atención).",
    exampleEn:"Can I pay with a credit card?", exampleEs:"¿Puedo pagar con tarjeta de crédito?",
    tenses:{present:"pay / pays", past:"paid", participle:"paid", continuous:"paying"}
  },
  {
    id:"a1-v49", en:"Sit", type:"verb", ipa:"/sɪt/",
    es:"Sentarse", esLiteral:null,
    tip:"'Sit down' = siéntate. 'Have a seat' = tome asiento (más formal).",
    exampleEn:"Please sit down.", exampleEs:"Por favor, siéntate.",
    tenses:{present:"sit / sits", past:"sat", participle:"sat", continuous:"sitting"}
  },
  {
    id:"a1-v50", en:"Stand", type:"verb", ipa:"/stænd/",
    es:"Estar de pie / Pararse / Soportar", esLiteral:null,
    tip:"'Stand up' = ponerse de pie. 'I can't stand it' = No lo soporto.",
    exampleEn:"Please stand up.", exampleEs:"Por favor, ponte de pie.",
    tenses:{present:"stand / stands", past:"stood", participle:"stood", continuous:"standing"}
  },
  {
    id:"a1-v51", en:"Open", type:"verb", ipa:"/ˈoʊ.pən/",
    es:"Abrir", esLiteral:null,
    tip:"También funciona como adjetivo: 'The door is open' (la puerta está abierta).",
    exampleEn:"Open the window, please.", exampleEs:"Abre la ventana, por favor.",
    tenses:{present:"open / opens", past:"opened", participle:"opened", continuous:"opening"}
  },
  {
    id:"a1-v52", en:"Close", type:"verb", ipa:"/kloʊz/",
    es:"Cerrar", esLiteral:null,
    tip:"Como verbo: /kloʊz/. Como adjetivo (cercano): /kloʊs/ con S sorda.",
    exampleEn:"Please close the door.", exampleEs:"Por favor cierra la puerta.",
    tenses:{present:"close / closes", past:"closed", participle:"closed", continuous:"closing"}
  },
  {
    id:"a1-v53", en:"Wait", type:"verb", ipa:"/weɪt/",
    es:"Esperar", esLiteral:null,
    tip:"'Wait FOR someone/something'. Nunca 'wait someone'. Homófono de 'weight' (peso).",
    exampleEn:"Wait for me!", exampleEs:"¡Espérame!",
    tenses:{present:"wait / waits", past:"waited", participle:"waited", continuous:"waiting"}
  },
  {
    id:"a1-v54", en:"Walk", type:"verb", ipa:"/wɔːk/",
    es:"Caminar", esLiteral:null,
    tip:"La 'l' es MUDA: suena /wɔːk/.",
    exampleEn:"I walk to work every day.", exampleEs:"Camino al trabajo todos los días.",
    tenses:{present:"walk / walks", past:"walked", participle:"walked", continuous:"walking"}
  },
  {
    id:"a1-v55", en:"Drive", type:"verb", ipa:"/draɪv/",
    es:"Conducir / Manejar", esLiteral:null,
    tip:"'Drive' un auto. 'Ride' una bicicleta o moto.",
    exampleEn:"I drive to work.", exampleEs:"Manejo al trabajo.",
    tenses:{present:"drive / drives", past:"drove", participle:"driven", continuous:"driving"}
  },
  {
    id:"a1-v56", en:"Teach", type:"verb", ipa:"/tiːtʃ/",
    es:"Enseñar", esLiteral:null,
    tip:"El que enseña: teacher. 'Teach someone something'.",
    exampleEn:"She teaches math at the university.", exampleEs:"Ella enseña matemáticas en la universidad.",
    tenses:{present:"teach / teaches", past:"taught", participle:"taught", continuous:"teaching"}
  },
  {
    id:"a1-v57", en:"Learn", type:"verb", ipa:"/lɜːrn/",
    es:"Aprender", esLiteral:null,
    tip:"'Learn' es más permanente. 'Study' es el proceso.",
    exampleEn:"I want to learn English.", exampleEs:"Quiero aprender inglés.",
    tenses:{present:"learn / learns", past:"learned / learnt", participle:"learned / learnt", continuous:"learning"}
  },
  {
    id:"a1-v58", en:"Speak", type:"verb", ipa:"/spiːk/",
    es:"Hablar (un idioma / formalmente)", esLiteral:null,
    tip:"'Speak' es más formal que 'talk'. 'Speak English', no 'speak in English'.",
    exampleEn:"Do you speak English?", exampleEs:"¿Hablas inglés?",
    tenses:{present:"speak / speaks", past:"spoke", participle:"spoken", continuous:"speaking"}
  },
  {
    id:"a1-v59", en:"Talk", type:"verb", ipa:"/tɔːk/",
    es:"Hablar / Conversar / Platicar", esLiteral:null,
    tip:"La 'l' es MUDA: /tɔːk/. 'Talk TO someone' / 'Talk ABOUT something'.",
    exampleEn:"Can we talk for a minute?", exampleEs:"¿Podemos hablar un minuto?",
    tenses:{present:"talk / talks", past:"talked", participle:"talked", continuous:"talking"}
  },
  {
    id:"a1-v60", en:"Watch", type:"verb", ipa:"/wɒtʃ/",
    es:"Mirar (con atención) / Ver (TV/películas)", esLiteral:null,
    tip:"'Watch' = mirar activamente (TV, partido). 'See' = percibir. 'Look at' = dirigir la vista.",
    exampleEn:"Let's watch a movie tonight.", exampleEs:"Veamos una película esta noche.",
    tenses:{present:"watch / watches", past:"watched", participle:"watched", continuous:"watching"}
  },
  // ============================================================
  // SUSTANTIVOS DEL CUERPO Y HOGAR
  // ============================================================
  {
    id:"a1-n26", en:"Head", type:"noun", ipa:"/hed/",
    es:"Cabeza", esLiteral:null,
    tip:"La 'ea' suena /e/ (corta), no /iː/.",
    exampleEn:"I have a headache.", exampleEs:"Tengo dolor de cabeza."
  },
  {
    id:"a1-n27", en:"Eye", type:"noun", ipa:"/aɪ/",
    es:"Ojo", esLiteral:null,
    tip:"Suena exactamente como 'I' (yo). Homófono.",
    exampleEn:"She has beautiful eyes.", exampleEs:"Ella tiene ojos hermosos."
  },
  {
    id:"a1-n28", en:"Heart", type:"noun", ipa:"/hɑːrt/",
    es:"Corazón", esLiteral:null,
    tip:"No confundir con 'hurt' /hɜːrt/ (doler). La 'ea' suena /ɑː/.",
    exampleEn:"Follow your heart.", exampleEs:"Sigue tu corazón."
  },
  {
    id:"a1-n29", en:"Door", type:"noun", ipa:"/dɔːr/",
    es:"Puerta", esLiteral:null,
    tip:"Una sola sílaba. Rima con 'floor' (piso), 'more' (más).",
    exampleEn:"Someone is knocking on the door.", exampleEs:"Alguien está tocando la puerta."
  },
  {
    id:"a1-n30", en:"Room", type:"noun", ipa:"/ruːm/",
    es:"Habitación / Cuarto / Espacio", esLiteral:null,
    tip:"'There's no room' = No hay espacio. 'Bedroom' = dormitorio. 'Bathroom' = baño.",
    exampleEn:"This room is very bright.", exampleEs:"Esta habitación es muy luminosa."
  },
  {
    id:"a1-n31", en:"Car", type:"noun", ipa:"/kɑːr/",
    es:"Auto / Carro / Coche", esLiteral:null,
    tip:"En UK: 'car park'. En US: 'parking lot'.",
    exampleEn:"I go to work by car.", exampleEs:"Voy al trabajo en auto."
  },
  {
    id:"a1-n32", en:"Year", type:"noun", ipa:"/jɪr/",
    es:"Año", esLiteral:null,
    tip:"'All year long' = Todo el año. No confundir con 'ear' (oreja).",
    exampleEn:"I have lived here for three years.", exampleEs:"He vivido aquí durante tres años."
  },
  {
    id:"a1-n33", en:"Country", type:"noun", ipa:"/ˈkʌn.tri/",
    es:"País / Campo (rural)", esLiteral:null,
    tip:"Doble significado: nación y zona rural ('the countryside').",
    exampleEn:"What country are you from?", exampleEs:"¿De qué país eres?"
  },
  {
    id:"a1-n34", en:"City", type:"noun", ipa:"/ˈsɪt.i/",
    es:"Ciudad", esLiteral:null,
    tip:"La 't' en US suena como una 'r' suave: /sɪɾi/.",
    exampleEn:"Lima is a big city.", exampleEs:"Lima es una ciudad grande."
  },
  {
    id:"a1-n35", en:"Street", type:"noun", ipa:"/striːt/",
    es:"Calle", esLiteral:null,
    tip:"'Main street' = calle principal. 'Cross the street' = cruzar la calle.",
    exampleEn:"I live on a quiet street.", exampleEs:"Vivo en una calle tranquila."
  }
];
