import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          category = {expense.category}
          make = {expense.make}
          qty = {expense.qty}
          unit = {expense.unit}
          vendor = {expense.vendor}
          type = {expense.type}
          bo = {expense.bo}
          po = {expense.bo}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
