import React, { useState, useEffect } from 'react';
import { getDecks, vocabulary } from '../data/vocabulary';
import { getCardStatus, clearDeckProgress } from '../utils/storage';
import { BookOpen, CheckCircle2, RotateCcw, History } from 'lucide-react';

export default function DeckSelector({ onSelectDeck, sessionHistory = [], onViewHistory }) {
  const decks = getDecks();
  const [progressData, setProgressData] = useState({});

  const loadProgress = () => {
    const stats = {};
    decks.forEach(deck => {
      const wordsInDeck = vocabulary[deck.id] || [];
      let learnedCount = 0;
      
      wordsInDeck.forEach(word => {
        const status = getCardStatus(word.id);
        if (status && (status.skipped || status.interval > 0)) {
          learnedCount++;
        }
      });
      
      stats[deck.id] = {
        total: wordsInDeck.length,
        learned: learnedCount,
        percent: wordsInDeck.length > 0 ? Math.round((learnedCount / wordsInDeck.length) * 100) : 0
      };
    });
    setProgressData(stats);
  };

  useEffect(() => {
    loadProgress();
  }, []);

  const handleResetLevel = (e, deckId) => {
    e.stopPropagation(); // prevent opening the deck
    if (window.confirm(`Are you sure you want to reset all your progress for ${deckId}? This cannot be undone.`)) {
      const wordsInDeck = vocabulary[deckId] || [];
      const wordIds = wordsInDeck.map(w => w.id);
      clearDeckProgress(wordIds);
      loadProgress();
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <h2 className="text-xl font-semibold mb-2 text-slate-200">Select a Level</h2>
      
      {decks.map(deck => (
        <div key={deck.id} className="w-full flex flex-col gap-2">
          <button 
            onClick={() => onSelectDeck(deck.id)}
            className="glass-dark hover:bg-white/10 transition-colors w-full rounded-2xl p-5 flex items-center justify-between group active:scale-95 duration-200"
          >
            <div className="flex items-center gap-4 w-full">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                <span className="font-bold text-slate-900">{deck.id}</span>
              </div>
              <div className="text-left w-full flex flex-col">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-lg text-slate-100">{deck.title}</h3>
                  {progressData[deck.id] && progressData[deck.id].percent === 100 && (
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 ml-2" />
                  )}
                </div>
                <p className="text-xs text-slate-400 mb-2">{deck.description} • {deck.count} words</p>
                
                {/* Progress bar */}
                {progressData[deck.id] && (
                  <div className="w-full">
                    <div className="flex justify-between text-[10px] text-slate-500 mb-1 font-medium">
                      <span>Progress</span>
                      <span>{progressData[deck.id].learned} / {progressData[deck.id].total} ({progressData[deck.id].percent}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ease-out ${progressData[deck.id].percent === 100 ? 'bg-emerald-400' : 'bg-cyan-500'}`}
                        style={{ width: `${progressData[deck.id].percent}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col items-center gap-1.5 ml-2 shrink-0">
                 <div className="p-2 sm:p-1.5 text-slate-500 group-hover:text-emerald-400 transition-colors">
                   <BookOpen size={18} />
                 </div>
                 {progressData[deck.id] && progressData[deck.id].learned > 0 && (
                   <div 
                     onClick={(e) => handleResetLevel(e, deck.id)}
                     title="Reset this level's progress"
                     className="p-2 sm:p-1.5 rounded-full text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                   >
                     <RotateCcw size={18} />
                   </div>
                 )}
                 {sessionHistory.find(h => h.deckId === deck.id)?.items.length > 0 && (
                   <div 
                     onClick={(e) => { e.stopPropagation(); onViewHistory(deck.id); }}
                     title="View session history"
                     className="p-2 sm:p-1.5 rounded-full transition-colors cursor-pointer text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10"
                   >
                     <History size={18} />
                   </div>
                 )}
              </div>
            </div>
          </button>
        </div>
      ))}
      
      <div className="mt-8 p-4 glass rounded-xl text-center flex flex-col items-center gap-4 border border-white/5">
        <p className="text-sm text-slate-300">
          Your progress is automatically saved to your device for each level.
        </p>
      </div>
    </div>
  );
}
