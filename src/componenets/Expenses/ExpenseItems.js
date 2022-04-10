import './ExpenseItem.css'
import React from 'react'
import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = props => {
  return (
    <li>
      <Card className='ExpenseItem'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='ExpenseItemProduct'>{props.product}</div>
        <div className='ExpenseItemPrice'>Rs.{props.price}</div>
      </Card>
    </li>
  )
}
export default ExpenseItem
