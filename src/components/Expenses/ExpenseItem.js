import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        
          <ExpenseDate date={props.date} />
        
        <div className='expense-item__description'>
          
          <h2>{props.title}</h2>
          
          <div className='expense-item__price'>${props.amount}</div>

          <div> {props.vendor}</div>
          <div> {props.make}</div>
          <div> {props.qty}</div>
          <div> {props.bo}</div>
          <div> {props.po}</div>
          <div> {props.type}</div>
          <div> {props.category}</div>


        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
