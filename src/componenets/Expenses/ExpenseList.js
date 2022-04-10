import react from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItems'

function ExpenseList (props) {
  if (props.items.length === 0) {
    return <h1 className='expenses-list__fallback'>Nothing Found</h1>
  } else {
    return (
      <ul className='expenses-list'>
        {props.items.map(expense => (
          <ExpenseItem
            key={expense.id}
            product={expense.product}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </ul>
    )
  }
}
export default ExpenseList
