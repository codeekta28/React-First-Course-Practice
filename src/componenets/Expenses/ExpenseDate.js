import './ExpenseDate.css'
import React from 'react'
const ExpenseDate= (pros)=> {
  return (
    <div className="ExpenseDateDetails">
      <div className="ExpenseDateMonth">{pros.date.toLocaleDateString("en-us",{month:"long"})}</div>
      <div className="ExpenseDateYear">{pros.date.getFullYear()}</div>
      <div className="ExpenseDateDate">{pros.date.toLocaleDateString("en-us",{day:"2-digit"})}</div>
    </div>
  )
}
export default ExpenseDate
