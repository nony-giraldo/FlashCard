export const STORAGE_KEY = 'lingoflash_progress';

export const getProgress = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error("Failed to parse progress from localStorage", error);
    return {};
  }
};

export const saveProgress = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Failed to save progress to localStorage", error);
  }
};

export const clearProgress = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const clearDeckProgress = (wordIds) => {
  const current = getProgress();
  wordIds.forEach(id => {
    delete current[id];
  });
  saveProgress(current);
};

export const updateCardStatus = (wordId, statusData) => {
  const current = getProgress();
  current[wordId] = statusData;
  saveProgress(current);
};

export const getCardStatus = (wordId) => {
  return getProgress()[wordId] || null;
};
