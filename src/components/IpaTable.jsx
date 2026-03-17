import React, { useState } from 'react';
import { Volume2, X } from 'lucide-react';

const VOWELS = [
  { ipa: 'iː', example: 'see', esSimil: 'Como "i" pero sostenida', regional: '' },
  { ipa: 'ɪ', example: 'sit', esSimil: 'Corta, entre "i" y "e"', regional: '' },
  { ipa: 'e', example: 'ten', esSimil: 'Como la "e" en español', regional: '' },
  { ipa: 'æ', example: 'cat', esSimil: 'Abre la boca como "a", di "e"', regional: 'US: Más tensa / UK: Más relajada' },
  { ipa: 'ɑː', example: 'car', esSimil: 'Como "a" profunda', regional: 'UK: No pronuncia la "r" final' },
  { ipa: 'ɒ', example: 'hot', esSimil: 'Como "o" corta y abierta', regional: 'US suele pronunciarla como "ɑː" (hat)' },
  { ipa: 'ɔː', example: 'saw', esSimil: 'Como "o" pero más alargada', regional: '' },
  { ipa: 'ʊ', example: 'book', esSimil: 'Entre "u" y "o", relajada', regional: '' },
  { ipa: 'uː', example: 'blue', esSimil: 'Como "u" alargada', regional: '' },
  { ipa: 'ʌ', example: 'cup', esSimil: 'Corta, sale de la garganta (como "a")', regional: '' },
  { ipa: 'ɜː', example: 'bird', esSimil: 'Casi una "o" y "e" mezcladas', regional: 'UK: Sin "r" / US: Con "r" marcada' },
  { ipa: 'ə', example: 'sofa', esSimil: 'Schwa. El sonido más débil (casi no suena)', regional: '' },
];

const CONSONANTS = [
  { ipa: 'p', example: 'pen', esSimil: 'Como en español, pero expulsando aire', regional: '' },
  { ipa: 'b', example: 'bad', esSimil: 'Como en español', regional: '' },
  { ipa: 't', example: 'tea', esSimil: 'Expulsando aire', regional: 'US: Suena como "r" suave entre vocales (water)' },
  { ipa: 'd', example: 'did', esSimil: 'Como en español', regional: '' },
  { ipa: 'k', example: 'cat', esSimil: 'Expulsando aire', regional: '' },
  { ipa: 'ɡ', example: 'got', esSimil: 'Como "g" de "gato"', regional: '' },
  { ipa: 'tʃ', example: 'chain', esSimil: 'Como "ch" en español', regional: '' },
  { ipa: 'dʒ', example: 'jam', esSimil: 'Como "y" fuerte en "yo" (con vibración)', regional: '' },
  { ipa: 'f', example: 'fall', esSimil: 'Como en español', regional: '' },
  { ipa: 'v', example: 'van', esSimil: 'Muerde labio inferior (vibrante)', regional: '' },
  { ipa: 'θ', example: 'thin', esSimil: 'Como "z" de España', regional: '' },
  { ipa: 'ð', example: 'this', esSimil: 'Como "d" en "nada" pero sacando lengua', regional: '' },
  { ipa: 's', example: 'see', esSimil: 'Como en español', regional: '' },
  { ipa: 'z', example: 'zoo', esSimil: 'Como s de zumbido de abeja', regional: '' },
  { ipa: 'ʃ', example: 'shoe', esSimil: 'Pidiendo silencio "shhh"', regional: '' },
  { ipa: 'ʒ', example: 'vision', esSimil: 'Como "sh" pero haciendo vibrar garganta', regional: '' },
  { ipa: 'h', example: 'hat', esSimil: 'Como "j" suave o suspiro', regional: '' },
  { ipa: 'm', example: 'man', esSimil: 'Como en español', regional: '' },
  { ipa: 'n', example: 'now', esSimil: 'Como en español', regional: '' },
  { ipa: 'ŋ', example: 'sing', esSimil: 'Como "n" desde la garganta', regional: '' },
  { ipa: 'l', example: 'leg', esSimil: 'Como en español pero lengua al paladar', regional: '' },
  { ipa: 'r', example: 'red', esSimil: 'Lengua hacia atrás sin tocar paladar', regional: 'UK: No suena al final de sílaba' },
  { ipa: 'j', example: 'yes', esSimil: 'Como "i" rápida o "ll" suave', regional: '' },
  { ipa: 'w', example: 'wet', esSimil: 'Como "u" rápida', regional: '' },
];

export default function IpaTable({ onClose, selectedVoiceName }) {
  const playSound = (text) => {
    if (!window.speechSynthesis) return;
    
    // Stop currently playing audio
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0 && selectedVoiceName) {
      const explicitVoice = voices.find(v => v.name === selectedVoiceName);
      if (explicitVoice) utterance.voice = explicitVoice;
    }
    
    window.speechSynthesis.speak(utterance);
  };

  const renderGrid = (title, items) => (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 text-emerald-400">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, idx) => (
          <button 
            key={idx}
            onClick={() => playSound(item.example)}
            className="glass p-4 rounded-xl flex flex-col items-center hover:bg-white/10 active:scale-95 transition-all text-center group relative overflow-hidden"
          >
            <div className="flex w-full justify-between items-start mb-2">
               <span className="text-3xl font-bold text-emerald-300 group-hover:text-emerald-400 transition-colors drop-shadow-md">{item.ipa}</span>
               <div className="flex items-center gap-1 text-slate-400 group-hover:text-white transition-colors">
                  <span className="text-sm font-semibold">{item.example}</span>
                  <Volume2 size={14} className="opacity-50 group-hover:opacity-100" />
               </div>
            </div>
            
            <div className="w-full text-left mt-2 border-t border-white/5 pt-2">
               <p className="text-xs text-slate-300 mb-1 leading-snug">
                 <span className="font-semibold text-emerald-500 mr-1">Sonido:</span> 
                 {item.esSimil}
               </p>
               {item.regional && (
                 <p className="text-[11px] text-amber-200/90 leading-snug mt-1 bg-amber-500/10 p-1 rounded-md border border-amber-500/20">
                   <strong className="mr-1 text-amber-400">Nota:</strong>{item.regional}
                 </p>
               )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="glass-dark w-full max-w-2xl h-[85vh] rounded-3xl flex flex-col overflow-hidden shadow-2xl">
        
        <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-slate-900/50 backdrop-blur-lg z-10">
          <div>
            <h2 className="text-2xl font-bold text-white">IPA Pronunciation Guide</h2>
            <p className="text-sm text-slate-400">International Phonetic Alphabet Reference</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full glass hover:bg-white/10 text-slate-300 active:scale-90 transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <p className="text-slate-300 mb-8 bg-slate-800/50 p-4 rounded-xl text-sm leading-relaxed border border-slate-700/50">
            Tap on any symbol to hear its corresponding example word spoken aloud. This will help you map the written IPA symbol to its actual sound.
          </p>

          {renderGrid("Vowels & Diphthongs", VOWELS)}
          {renderGrid("Consonants", CONSONANTS)}
          
        </div>
      </div>
    </div>
  );
}
