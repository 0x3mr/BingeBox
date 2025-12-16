import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import subscriptionReducer from './slices/subscriptionSlice';
import userContentReducer from './slices/userContentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    subscription: subscriptionReducer,
    userContent: userContentReducer,
  },
});