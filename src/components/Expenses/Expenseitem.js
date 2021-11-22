import './ExpenseItem.css';
import ExpensiveDate from './ExpenseDate';
import React from 'react';
import Card from '../UI/Card';

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpensiveDate date={date} />
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
