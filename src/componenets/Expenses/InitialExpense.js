import ExpenseItem from './ExpenseItems'
import Card from '../UI/Card'
import React, { useState } from 'react'
import './InitialExpense.css'
import ExpensesFilter from './ExpensesFilter'
import ExpenseList from './ExpenseList'

const InitialExpense = props => {
  // filter Year function
  const [selectYear, setSelectYear] = useState('2021')
  const selectValueHandler = selectedValue => {
    setSelectYear(selectedValue)
  }
  // filtered array
  let filteredArray = props.items.filter(value => {
    if (value.date.getFullYear().toString() === selectYear) {
      return value
    }
  })
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={selectYear}
          onRecievingSelectValue={selectValueHandler}
        />
        <ExpenseList items={filteredArray} />
      </Card>
    </div>
  )
}
export default InitialExpense
