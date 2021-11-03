import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

// 리덕스 툴킷 적용
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// 여러 리듀서를 하나로 병합하기 위함
const store = configureStore({
  reducer: counterSlice.reducer,
});

// counter action create function
export const countAction = counterSlice.actions;
export default store;
