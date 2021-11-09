import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true,
  isAuthenticated: false,
};

// 리덕스 툴킷 적용
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState, // counter 전용
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

const initialAuthState = {
  isAuthenticated: false,
};

// 인증 전용 슬라이스
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  // 리듀서 등록(상태변경)
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    }, // state: 현 상태값
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// 여러 리듀서를 하나로 병합하기 위함(자동병합
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// counter action create function
export const countAction = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;
