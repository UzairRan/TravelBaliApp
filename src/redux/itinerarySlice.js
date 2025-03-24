import { createSlice } from '@reduxjs/toolkit';

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState: [],
  reducers: {
    addItinerary: (state, action) => {
      state.push(action.payload);
    },
    removeItinerary: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItinerary, removeItinerary } = itinerarySlice.actions;
export default itinerarySlice.reducer;
