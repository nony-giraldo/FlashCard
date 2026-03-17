// Very basic SuperMemo-2 style SRS algorithm
import { updateCardStatus, getCardStatus } from './storage';

// Ratings:
// 0: Skip / Already known (Never review, permanently learned)
// 1: Hard (Review very soon: 1 minute or same day)
// 2: Good (Review next day, or later depending on previous interval)
// 3: Easy (Review in 4 days, or multiplying previous interval)

// Helper to calculate the next interval without saving it (for UI display)
export const calculateNextInterval = (currentStatus, rating) => {
  if (!currentStatus) {
    currentStatus = { interval: 0, ease: 2.5 };
  }

  if (rating === 1) return 1; // 1 day
  if (rating === 2) {
    if (currentStatus.interval === 0) return 1;
    if (currentStatus.interval === 1) return 3;
    return Math.round(currentStatus.interval * currentStatus.ease);
  }
  if (rating === 3) {
    if (currentStatus.interval === 0) return 4;
    return Math.round(currentStatus.interval * (currentStatus.ease + 0.15) * 1.3);
  }
  return 0;
};

// Get formatted intervals for UI buttons (e.g. "1d", "3d")
export const getNextIntervals = (wordId) => {
  const status = getCardStatus(wordId);
  return {
    hard: `${calculateNextInterval(status, 1)}d`,
    good: `${calculateNextInterval(status, 2)}d`,
    easy: `${calculateNextInterval(status, 3)}d`
  };
};

export const processReview = (wordId, rating) => {
  const currentStatus = getCardStatus(wordId) || {
    interval: 0,
    ease: 2.5,
    lastReviewed: null,
    nextReview: null,
    skipped: false
  };

  const now = new Date();
  
  if (rating === 0) {
    currentStatus.skipped = true;
    currentStatus.lastReviewed = now.toISOString();
    currentStatus.nextReview = new Date(3000, 0, 1).toISOString();
    updateCardStatus(wordId, currentStatus);
    return;
  }

  let nextInterval = calculateNextInterval(currentStatus, rating);

  // Update ease
  if (rating === 1) {
    currentStatus.ease = Math.max(1.3, currentStatus.ease - 0.2);
  } else if (rating === 3 && currentStatus.interval > 0) {
    currentStatus.ease += 0.15;
  }

  currentStatus.interval = nextInterval;
  currentStatus.lastReviewed = now.toISOString();
  
  const nextDate = new Date();
  nextDate.setDate(now.getDate() + nextInterval);
  currentStatus.nextReview = nextDate.toISOString();

  updateCardStatus(wordId, currentStatus);
};

export const isDue = (cardStatus) => {
  if (!cardStatus) return true;
  if (cardStatus.skipped) return false;
  
  const now = new Date();
  const next = new Date(cardStatus.nextReview);
  return now >= next;
};
