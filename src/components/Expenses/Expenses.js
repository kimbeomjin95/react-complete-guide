import ExpenseItem from './Expenseitem';
import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  /*
   * TODO
   * 1) ExpenseFilter에서 Expense 컴포넌트로 state 올리기
   * 2) Expense 컴포넌트안에서 state로 저장
   * 3) 변경된 이벤트를 수신하고 데이터를 더 높은 레벨의 컴포넌트로 포워드 필요.
   * */
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </Card>
  );
};

export default Expenses;
