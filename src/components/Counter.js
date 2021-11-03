import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { countAction } from '../store/index';

// useSelector: 스토어에 관리되는 데이터에 엑세스

const Counter = () => {
  // 리액트 리덕스에 의해 실행됨
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter); // 여러 useSelector를 이용하여 다른 상태값을 가져올 수 있음
  // console.log('counter', counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(countAction.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(countAction.increment());
  };

  const decrementHandler = () => {
    dispatch(countAction.decrement());
  };

  const increaseHandler = () => {
    dispatch(countAction.increase(10));
  };

  return (
    // eslint-disable-next-line no-undef
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* eslint-disable-next-line no-undef */}
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>increasee 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
