import React from 'react'; // JSX가 큰 틀에서 이 리액트 라이브러리를 사용함
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
