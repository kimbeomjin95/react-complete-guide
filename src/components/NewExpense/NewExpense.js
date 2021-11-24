import React, { useState } from 'react'; // JSX가 큰 틀에서 이 리액트 라이브러리를 사용함
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const [formState, setFormState] = useState(false);

  const AddNewExpensesHandler = () => {
    setFormState(!formState);
  };

  const NoRenderFormHandler = (data) => {
    setFormState(data);
  };

  return (
    <div className="new-expense">
      {formState && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onNoRenderForm={NoRenderFormHandler}
        />
      )}
      {!formState && (
        <button onClick={AddNewExpensesHandler}>Add New Expenses</button>
      )}
    </div>
  );
};

export default NewExpense;
