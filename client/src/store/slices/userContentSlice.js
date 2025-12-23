import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlist: [], // array of content ids or objects
  continueWatching: {}, // { [contentId]: { progress, lastWatchedAt, ... } }
  ratings: {}, // { [contentId]: ratingNumber }
};

const userContentSlice = createSlice({
  name: "userContent",
  initialState,
  reducers: {
    setWatchlist(state, action) {
      state.watchlist = action.payload ?? [];
    },
    addToWatchlist(state, action) {
      const id = action.payload;
      if (!state.watchlist.includes(id)) {
        state.watchlist.push(id);
      }
    },
    removeFromWatchlist(state, action) {
      const id = action.payload;
      state.watchlist = state.watchlist.filter((itemId) => itemId !== id);
    },
    setContinueWatching(state, action) {
      state.continueWatching = { ...state.continueWatching, ...action.payload };
    },
    updateProgress(state, action) {
      const { id, progress, lastWatchedAt } = action.payload;
      state.continueWatching[id] = {
        ...(state.continueWatching[id] || {}),
        progress,
        lastWatchedAt: lastWatchedAt ?? new Date().toISOString(),
      };
    },
    setRating(state, action) {
      const { id, rating } = action.payload;
      state.ratings[id] = rating;
    },
    clearUserContent(state) {
      state.watchlist = [];
      state.continueWatching = {};
      state.ratings = {};
    },
  },
});

export const {
  setWatchlist,
  addToWatchlist,
  removeFromWatchlist,
  setContinueWatching,
  updateProgress,
  setRating,
  clearUserContent,
} = userContentSlice.actions;

export default userContentSlice.reducer;


