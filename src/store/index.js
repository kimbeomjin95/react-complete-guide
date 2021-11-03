import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

// 리덕스 툴킷 적용
createSlice({
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
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// reducer 생성
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter, // 값 증가일 때 showCounter 설정 필요(왜냐하면 전체상태의 객체를 리턴해줘야 함)
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

// 스토어 생성
const store = createStore(counterReducer);

// store 내보내기
export default store;
