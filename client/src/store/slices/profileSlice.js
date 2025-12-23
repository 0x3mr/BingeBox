import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null, // { id, fullName, email, avatar, ..}
  preferences: {
    language: "en",
    theme: "dark",
    autoplayNext: true,
    defaultQuality: "auto",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
    updateProfile(state, action) {
      if (!state.profile) return;
      state.profile = { ...state.profile, ...action.payload };
    },
    setPreferences(state, action) {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    resetProfile(state) {
      state.profile = null;
      state.preferences = initialState.preferences;
    },
  },
});

export const { setProfile, updateProfile, setPreferences, resetProfile } =
  profileSlice.actions;

export default profileSlice.reducer;


