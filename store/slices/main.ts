import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   // ваше начальное состояние
};

const slice = createSlice({
   name: 'counter',
   initialState,
   reducers: {
      increment(state) {
         state.value += 1;
      },
      decrement(state) {
         state.value -= 1;
      },
   },
});

export const { increment, decrement } = slice.actions;
export const selectCount = state => state.counter.value;

export default slice.reducer;
