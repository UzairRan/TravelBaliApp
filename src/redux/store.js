import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import itinerarySlice from './itinerarySlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    itinerary: itinerarySlice,
  },
});

export default store;
