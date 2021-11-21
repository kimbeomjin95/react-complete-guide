import './ExpenseItem.css';
import ExpensiveDate from './ExpenseDate';
import React, { useState } from 'react';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('update');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpensiveDate date={props.date} />
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
