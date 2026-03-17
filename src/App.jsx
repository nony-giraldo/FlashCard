import React, { useState, useEffect } from 'react';
import DeckSelector from './components/DeckSelector';
import Flashcard from './components/Flashcard';
import { vocabulary } from './data/vocabulary';
import { processReview, isDue } from './utils/srs';
import { getCardStatus } from './utils/storage';
import { ChevronLeft, Info, HelpCircle } from 'lucide-react';
import IpaTable from './components/IpaTable';

function App() {
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [dueQueue, setDueQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState('study'); // 'study' or 'listening'
  const [voiceRegion, setVoiceRegion] = useState('US'); // 'US' or 'UK'
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('lingoflash_history');
    return saved ? JSON.parse(saved) : [];
  });
  const [viewingHistory, setViewingHistory] = useState(null); // stores deckId if viewing history
  const [expandedHistoryItem, setExpandedHistoryItem] = useState(null); // stores index of expanded history item
  const [showIpaTable, setShowIpaTable] = useState(false);

  const [allSystemVoices, setAllSystemVoices] = useState([]);
  const [availableVoices, setAvailableVoices] = useState([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState('');

  // 1. Fetch all voices once
  useEffect(() => {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      if (allVoices.length > 0) {
        const engVoices = allVoices.filter(v => v.lang.startsWith('en'));
        setAllSystemVoices(engVoices);
      }
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  // Save history to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('lingoflash_history', JSON.stringify(history));
  }, [history]);

  // 2. Filter voices based on US/UK region
  useEffect(() => {
    if (allSystemVoices.length > 0) {
      const prefix = voiceRegion === 'US' ? 'en-US' : 'en-GB';
      const filtered = allSystemVoices.filter(v => v.lang === prefix || v.lang.startsWith(prefix));
      setAvailableVoices(filtered);

      // Select the best voice for this region if there are any
      if (filtered.length > 0) {
        const def = filtered.find(v => v.name.includes('Premium') || v.name === 'Samantha' || v.name === 'Daniel') || filtered[0];
        setSelectedVoiceName(def.name);
      }
    }
  }, [allSystemVoices, voiceRegion]);

  // When a deck is selected, load its vocabulary and filter the due queue
  useEffect(() => {
    if (selectedDeck && vocabulary[selectedDeck]) {
      const allWords = vocabulary[selectedDeck];
      // Filter words that are due or haven't been studied
      const due = allWords.filter(word => {
        const status = getCardStatus(word.id);
        return isDue(status);
      });
      // Shuffle them for variety
      const shuffled = [...due].sort(() => Math.random() - 0.5);
      setDueQueue(shuffled);
      setCurrentIndex(0);
    }
  }, [selectedDeck, mode]);

  const handleReview = (rating) => {
    const word = dueQueue[currentIndex];
    processReview(word.id, rating);
    setHistory(prev => {
      const newHistory = prev.map(h => ({ ...h, items: [...h.items] }));
      const levelHistory = newHistory.find(h => h.deckId === selectedDeck);
      if (levelHistory) {
        levelHistory.items.unshift({ word, rating });
      } else {
        newHistory.push({ deckId: selectedDeck, items: [{ word, rating }] });
      }
      return newHistory;
    });
    moveToNext();
  };

  const handleSkip = () => {
    const word = dueQueue[currentIndex];
    processReview(word.id, 0); // 0 corresponds to Skip/Known
    setHistory(prev => {
      const newHistory = prev.map(h => ({ ...h, items: [...h.items] }));
      const levelHistory = newHistory.find(h => h.deckId === selectedDeck);
      if (levelHistory) {
        levelHistory.items.unshift({ word, rating: 0 });
      } else {
        newHistory.push({ deckId: selectedDeck, items: [{ word, rating: 0 }] });
      }
      return newHistory;
    });
    moveToNext();
  };

  const moveToNext = () => {
    if (currentIndex < dueQueue.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed the queue for today
      // Check if there are more due immediately (e.g. ones they just marked 'Hard')
      // Wait a moment so animation finishes
      setTimeout(() => {
        const allWords = vocabulary[selectedDeck];
        const newDue = allWords.filter(word => isDue(getCardStatus(word.id)));
        setDueQueue(newDue);
        setCurrentIndex(0);
      }, 500);
    }
  };

  const handleBackToDecks = () => {
    setSelectedDeck(null);
    setViewingHistory(null);
    setExpandedHistoryItem(null);
    setDueQueue([]);
    // Do NOT clear history when going back to decks so the history persists.
  };

  const currentWord = dueQueue[currentIndex];

  return (
    <div className="h-[100dvh] w-full flex flex-col items-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      <header className="w-full max-w-md flex flex-col gap-4 mb-4 mt-2 shrink-0">
        <div className="flex items-center justify-between">
          {(selectedDeck || viewingHistory) ? (
            <button
              onClick={handleBackToDecks}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
              <span className="font-medium">Back</span>
            </button>
          ) : (
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              LingoFlash B2
            </h1>
          )}

          {(!selectedDeck && !viewingHistory) && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowIpaTable(true)}
                className="glass p-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                title="IPA Reference Guide"
              >
                <HelpCircle size={16} />
              </button>
            </div>
          )}

          {selectedDeck && !viewingHistory && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowIpaTable(true)}
                className="glass p-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                title="IPA Reference Guide"
              >
                <HelpCircle size={16} />
              </button>

              <div className="glass flex items-center rounded-xl p-0.5 max-w-40 sm:max-w-max">
                <button
                  onClick={() => setVoiceRegion(voiceRegion === 'US' ? 'UK' : 'US')}
                  className="px-2 py-1 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition-colors hover:bg-white/10 mr-1"
                >
                  {voiceRegion === 'US' ? '🇺🇸' : '🇬🇧'}
                </button>
                <div className="h-4 w-px bg-white/20 mx-1"></div>
                <select
                  title="Select Voice"
                  className="px-2 py-1 rounded-r-xl text-xs font-semibold text-slate-300 hover:text-white transition-colors outline-none bg-transparent appearance-none truncate cursor-pointer grow max-w-[80px]"
                  value={selectedVoiceName}
                  onChange={(e) => setSelectedVoiceName(e.target.value)}
                >
                  {availableVoices.length === 0 && <option>Default</option>}
                  {availableVoices.map((v, i) => (
                    <option key={i} value={v.name} className="bg-slate-900 text-slate-200">
                      {v.name.replace(' (English)', '').replace(' (United States)', '').replace(' (United Kingdom)', '')}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => setMode(mode === 'study' ? 'listening' : 'study')}
                className="glass px-3 py-1 rounded-full text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                title="Toggle Study / Listen mode"
              >
                {mode === 'study' ? '👁️' : '🎧'}
              </button>
              <div className="glass px-3 py-1 rounded-full text-sm font-semibold text-emerald-300">
                {selectedDeck}
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="w-full max-w-md flex-1 flex flex-col items-center overflow-hidden">
        {viewingHistory ? (
          <div className="w-full flex-1 flex flex-col pt-2 pb-4 overflow-hidden">
            <h2 className="text-xl font-bold text-white mb-4 text-center">{viewingHistory} Session History</h2>
            <div className="w-full flex-1 overflow-y-auto no-scrollbar scroll-smooth flex flex-col gap-3">
              {(() => {
                const deckHistory = history.find(h => h.deckId === viewingHistory);
                if (!deckHistory || deckHistory.items.length === 0) {
                  return <p className="text-slate-400 text-center mt-10">No history for this session yet.</p>;
                }
                return deckHistory.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setExpandedHistoryItem(expandedHistoryItem === idx ? null : idx)}
                    className="flex flex-col glass-dark p-4 rounded-2xl w-full hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5 group"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col text-left truncate pr-4">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-100 text-lg truncate">{item.word.en}</span>
                          <span className="text-[10px] text-emerald-400/50 uppercase tracking-widest font-bold">{item.word.type}</span>
                        </div>
                        <span className="text-sm text-emerald-400/80 truncate">{item.word.es}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider shrink-0 ${
                           item.rating === 0 ? 'bg-slate-700/50 text-slate-300' :
                           item.rating === 1 ? 'bg-red-500/20 text-red-400' :
                           item.rating === 2 ? 'bg-amber-500/20 text-amber-400' :
                           'bg-emerald-500/20 text-emerald-400'
                        }`}>
                          {item.rating === 0 ? 'Skip' : item.rating === 1 ? 'Hard' : item.rating === 2 ? 'Good' : 'Easy'}
                        </span>
                        <ChevronLeft size={16} className={`text-slate-500 transition-transform ${expandedHistoryItem === idx ? '-rotate-90' : 'rotate-180 group-hover:translate-y-1 group-hover:rotate-180'}`} style={expandedHistoryItem !== idx ? { transform: 'rotate(-90deg)' } : {}} />
                      </div>
                    </div>
                    
                    {/* Expanded Details */}
                    {expandedHistoryItem === idx && (
                      <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
                        {item.word.ipa && (
                          <p className="font-mono text-slate-400 text-sm">{item.word.ipa}</p>
                        )}
                        
                        {item.word.exampleEn && (
                          <div className="p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10 w-full text-left">
                            <p className="text-slate-200 text-sm font-medium italic mb-1">"{item.word.exampleEn}"</p>
                            <p className="text-slate-500 text-xs">{item.word.exampleEs}</p>
                          </div>
                        )}
                        
                        {item.word.tip && (
                          <div className="p-3 bg-white/5 rounded-xl border border-white/10 w-full text-left flex flex-col gap-1">
                            <span className="font-semibold text-[10px] text-blue-300 uppercase tracking-wider">Tip</span>
                            <p className="text-slate-300 text-xs leading-relaxed">{item.word.tip}</p>
                          </div>
                        )}

                        {item.word.tenses && (
                          <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 w-full text-left">
                            <span className="font-semibold text-[10px] text-indigo-400 uppercase tracking-wider mb-2 block">Verb Tenses</span>
                            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                              <div className="flex flex-col"><span className="text-indigo-400/70 text-[9px] uppercase">Present</span> {item.word.tenses.present}</div>
                              <div className="flex flex-col"><span className="text-indigo-400/70 text-[9px] uppercase">Past</span> {item.word.tenses.past}</div>
                              <div className="flex flex-col"><span className="text-indigo-400/70 text-[9px] uppercase">Participle</span> {item.word.tenses.participle}</div>
                              <div className="flex flex-col"><span className="text-indigo-400/70 text-[9px] uppercase">Continuous</span> {item.word.tenses.continuous}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ));
              })()}
            </div>
          </div>
        ) : !selectedDeck ? (
          <div className="w-full flex-1 overflow-y-auto no-scrollbar scroll-smooth pb-8">
            <DeckSelector onSelectDeck={setSelectedDeck} sessionHistory={history} onViewHistory={setViewingHistory} />
          </div>
        ) : (
          <div className="w-full flex-1 flex flex-col pt-2 pb-4 overflow-hidden">
            {dueQueue.length > 0 && currentWord ? (
              <>
                <div className="w-full flex justify-between items-center mb-4 px-2 text-sm text-slate-400 font-medium shrink-0">
                  <span>Card {currentIndex + 1} of {dueQueue.length}</span>
                </div>

                {/* Mount Flashcard key'd to ID to force unmount exactly on next */}
                <Flashcard
                  key={currentWord.id + currentIndex + mode + selectedVoiceName} // force remount on mode/voice switch
                  word={currentWord}
                  onReview={handleReview}
                  onSkip={handleSkip}
                  mode={mode}
                  selectedVoiceName={selectedVoiceName}
                />
              </>
            ) : (
              <div className="w-full h-[60vh] glass-dark rounded-3xl flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6 text-4xl shadow-lg shadow-emerald-500/20">
                  🎉
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">You're all caught up!</h2>
                <p className="text-slate-400 mb-8">
                  You've reviewed all cards due for {selectedDeck} today.
                </p>
                <button
                  onClick={handleBackToDecks}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-2xl transition-transform active:scale-95"
                >
                  Study Another Level
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {showIpaTable && (
        <IpaTable
          onClose={() => setShowIpaTable(false)}
          selectedVoiceName={selectedVoiceName}
        />
      )}
    </div>
  );
}

export default App;
