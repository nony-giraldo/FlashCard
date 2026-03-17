import { a1Vocabulary } from './levels/a1';
import { a2Vocabulary } from './levels/a2';

export const vocabulary = {
  A1: a1Vocabulary,
  A2: a2Vocabulary,
  B1: [
    {
      id: "b1-1",
      en: "Look forward to",
      type: "phrase",
      ipa: "/lʊk ˈfɔːrwərd tu/",
      es: "Estar deseando / Esperar con ansias",
      esLiteral: "Mirar adelante a",
      tip: "Expresión muy común para terminar emails. 'To' es seguido siempre por verbo terminado en -ing.",
      exampleEn: "I look forward to hearing from you soon.",
      exampleEs: "Espero con ansias escuchar de ti pronto.",
      tenses: {
        present: "look forward to",
        past: "looked forward to",
        participle: "looked forward to",
        continuous: "looking forward to"
      }
    },
    {
      id: "b1-2",
      en: "Therefore",
      type: "adverb",
      ipa: "/ˈðer.fɔːr/",
      es: "Por lo tanto",
      esLiteral: null,
      tip: "Pon la lengua entre los dientes ligeramente (th sonora) al inicio.",
      exampleEn: "It is raining; therefore, we will stay indoors.",
      exampleEs: "Está lloviendo; por lo tanto, nos quedaremos adentro."
    }
  ],
  B2: [
    {
      id: "b2-1",
      en: "Beat around the bush",
      type: "idiom",
      ipa: "/biːt əˈraʊnd ðə bʊʃ/",
      es: "Dar rodeos (no ir al grano)",
      esLiteral: "Golpear alrededor del arbusto",
      tip: "Acentúa la palabra 'beat' y 'bush'.",
      exampleEn: "Stop beating around the bush and tell me the truth.",
      exampleEs: "Deja de dar rodeos y dime la verdad.",
      tenses: {
        present: "beat around the bush",
        past: "beat around the bush",
        participle: "beaten around the bush",
        continuous: "beating around the bush"
      }
    },
    {
      id: "b2-2",
      en: "Overwhelming",
      type: "adjective",
      ipa: "/ˌoʊ.vɚˈwel.mɪŋ/",
      es: "Abrumador",
      esLiteral: null,
      tip: "Asegúrate de marcar fuerte la sílaba 'wel'.",
      exampleEn: "The amount of work left is overwhelming.",
      exampleEs: "La cantidad de trabajo pendiente es abrumadora."
    }
  ]
};

// Helper: Get grouped decks.
export const getDecks = () => {
  return [
    { id: 'A1', title: 'Nivel A1', description: 'Principiante', count: vocabulary.A1.length },
    { id: 'A2', title: 'Nivel A2', description: 'Fundacional', count: vocabulary.A2.length },
    { id: 'B1', title: 'Nivel B1', description: 'Intermedio', count: vocabulary.B1.length },
    { id: 'B2', title: 'Nivel B2', description: 'Intermedio-Alto', count: vocabulary.B2.length },
  ];
};
