import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Info } from 'lucide-react';
import { getNextIntervals } from '../utils/srs';

export default function Flashcard({ word, onReview, onSkip, mode = 'study', selectedVoiceName }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const intervals = getNextIntervals(word.id);

  const playAudio = (e) => {
    if (e) e.stopPropagation();
    if (!window.speechSynthesis) return;
    
    // Stop currently playing audio
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(word.en);
    utterance.rate = 0.85; // slightly slower for better clarity
    
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      if (selectedVoiceName) {
        const explicitVoice = voices.find(v => v.name === selectedVoiceName);
        if (explicitVoice) utterance.voice = explicitVoice;
      }
    }

    // Fallback for iOS Safari
    if (!utterance.voice && voices.length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        const v = window.speechSynthesis.getVoices();
        if (selectedVoiceName) {
          const explicitVoice = v.find(v => v.name === selectedVoiceName);
          if (explicitVoice) utterance.voice = explicitVoice;
        }
      };
    }

    window.speechSynthesis.speak(utterance);
  };

  // Auto-play in listening mode on mount
  useEffect(() => {
    if (mode === 'listening') {
      // Small timeout to ensure it plays after rendering
      const timer = setTimeout(() => {
        playAudio();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [word, mode]);

  return (
    <div className="w-full flex-1 flex flex-col relative perspective-1000 h-full">
      <div className="w-full flex justify-end mb-4 gap-2 shrink-0">
         <button 
           onClick={() => onSkip()}
           className="px-4 py-2 rounded-full glass text-sm font-medium hover:bg-white/20 active:scale-95 transition-all text-slate-300"
         >
           I already know this (Skip)
         </button>
      </div>

      <motion.div
        className="w-full flex-1 relative preserve-3d cursor-pointer"
        onClick={(e) => {
          setIsFlipped(!isFlipped);
          playAudio(e);
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className={`absolute w-full h-full glass-dark rounded-3xl flex flex-col items-center justify-center p-6 sm:p-8 backface-hidden ${isFlipped ? 'hidden' : 'flex'}`}>
          <button 
            onClick={playAudio}
            className="absolute top-6 right-6 p-3 rounded-full hover:bg-white/10 active:scale-90 transition-all text-emerald-400"
          >
            <Volume2 size={24} />
          </button>
          
          {mode === 'listening' ? (
             <div className="flex flex-col items-center animate-in zoom-in duration-300">
                <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6" onClick={playAudio}>
                  <Volume2 size={48} className="text-emerald-400" />
                </div>
                <p className="text-slate-300 text-lg">Listen and guess the word...</p>
             </div>
          ) : (
             <>
               <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">{word.type || 'Word'}</span>
               <h2 className="text-5xl font-bold mb-4 text-glow text-center break-words px-4">{word.en}</h2>
               <p className="text-slate-400 font-mono text-xl">{word.ipa}</p>
             </>
          )}

          <div className="absolute bottom-6 flex flex-col items-center animate-pulse">
            <span className="text-slate-500 text-sm mb-2">Tap to see translation</span>
          </div>
        </div>

        {/* Back */}
        <div className={`absolute w-full h-full glass-dark rounded-3xl flex flex-col backface-hidden [transform:rotateY(180deg)] ${!isFlipped ? 'hidden' : 'flex'} overflow-y-auto no-scrollbar p-6 sm:p-8`}>
          <div className="w-full m-auto flex flex-col items-center justify-start py-4">
          {mode === 'listening' && (
             <div className="mb-4 flex flex-col items-center">
                <span className="text-xs tracking-widest uppercase font-bold text-emerald-400 mb-1">{word.type || 'Word'}</span>
                <h2 className="text-3xl font-bold text-white mb-1 break-words px-2 text-center">{word.en}</h2>
                <p className="font-mono text-slate-400 text-sm">{word.ipa}</p>
             </div>
          )}
          <h2 className={`font-bold mb-2 text-emerald-400 text-center ${mode === 'listening' ? 'text-2xl pt-4 border-t border-white/10 w-full' : 'text-4xl'}`}>
            {word.es}
          </h2>
          
          {word.esLiteral && (
            <p className="text-slate-400 text-sm mb-4 italic text-center text-balance">Literal: "{word.esLiteral}"</p>
          )}

          {word.exampleEn && (
            <div className="mt-4 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 w-full text-left">
              <p className="text-slate-200 text-sm font-medium italic mb-1">"{word.exampleEn}"</p>
              <p className="text-slate-500 text-xs">{word.exampleEs}</p>
            </div>
          )}

          {word.tip && (
            <div className="mt-4 p-4 bg-white/5 rounded-2xl border border-white/10 w-full text-left shrink-0">
              <div className="flex items-center gap-2 mb-2 text-blue-300">
                <Info size={16} />
                <span className="font-semibold text-xs uppercase tracking-wider">Pronunciation tip</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">{word.tip}</p>
            </div>
          )}

          {word.tenses && (
            <div className="mt-4 p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 w-full text-left shrink-0">
              <div className="flex items-center gap-2 text-indigo-400 mb-2">
                <span className="font-semibold text-xs uppercase tracking-wider">Verb Tenses</span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-3 text-xs text-slate-300 border-t border-indigo-500/10 pt-3">
                <div className="flex flex-col"><span className="text-indigo-400/70 font-medium uppercase tracking-wider text-[10px] mb-0.5">Present</span> {word.tenses.present}</div>
                <div className="flex flex-col"><span className="text-indigo-400/70 font-medium uppercase tracking-wider text-[10px] mb-0.5">Past</span> {word.tenses.past}</div>
                <div className="flex flex-col"><span className="text-indigo-400/70 font-medium uppercase tracking-wider text-[10px] mb-0.5">Participle</span> {word.tenses.participle}</div>
                <div className="flex flex-col"><span className="text-indigo-400/70 font-medium uppercase tracking-wider text-[10px] mb-0.5">Continuous</span> {word.tenses.continuous}</div>
              </div>
            </div>
          )}
          </div>
        </div>
      </motion.div>

      {/* Fixed Footer Controls visible only when flipped */}
      <div className="w-full shrink-0 flex justify-center mt-4">
        <AnimatePresence>
          {isFlipped && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full"
            >
            <div className="flex gap-3">
              <button 
                onClick={(e) => { e.stopPropagation(); onReview(1); setIsFlipped(false); }}
                className="flex-1 flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl glass hover:bg-red-500/20 active:bg-red-500/30 active:scale-95 transition-all outline-none"
              >
                <span className="text-red-400 font-bold text-lg mb-1">Hard</span>
                <span className="text-xs text-slate-400">{intervals.hard}</span>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onReview(2); setIsFlipped(false); }}
                className="flex-1 flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl glass hover:bg-amber-500/20 active:bg-amber-500/30 active:scale-95 transition-all outline-none"
              >
                <span className="text-amber-400 font-bold text-lg mb-1">Good</span>
                <span className="text-xs text-slate-400">{intervals.good}</span>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onReview(3); setIsFlipped(false); }}
                className="flex-1 flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl glass hover:bg-emerald-500/20 active:bg-emerald-500/30 active:scale-95 transition-all outline-none"
              >
                <span className="text-emerald-400 font-bold text-lg mb-1">Easy</span>
                <span className="text-xs text-slate-400">{intervals.easy}</span>
              </button>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
