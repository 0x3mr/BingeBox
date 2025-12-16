import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan: null, // { id, name, price, resolution, devices, ... }
  status: "inactive", // 'inactive' | 'trial' | 'active' | 'past_due' | 'canceled'
  renewalDate: null,
  isLoading: false,
  error: null,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setSubscription(state, action) {
      const { plan, status, renewalDate } = action.payload;
      state.plan = plan ?? null;
      state.status = status ?? state.status;
      state.renewalDate = renewalDate ?? null;
      state.error = null;
    },
    setSubscriptionStatus(state, action) {
      state.status = action.payload;
    },
    setSubscriptionLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSubscriptionError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearSubscription(state) {
      state.plan = null;
      state.status = "inactive";
      state.renewalDate = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  setSubscription,
  setSubscriptionStatus,
  setSubscriptionLoading,
  setSubscriptionError,
  clearSubscription,
} = subscriptionSlice.actions;

export default subscriptionSlice.reducer;


