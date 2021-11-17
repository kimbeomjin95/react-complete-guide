import './ExpenseItem.css';
import ExpensiveDate from './ExpenseDate';
import React from 'react';
import Card from './Card';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpensiveDate date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
