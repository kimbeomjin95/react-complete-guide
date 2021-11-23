import React from 'react';
import _ from 'lodash';
import ExpenseItem from './Expenseitem';
import './ExpensesList.css';

const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {_.map(items, (expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
