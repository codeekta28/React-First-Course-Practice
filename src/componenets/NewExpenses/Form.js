import './Form.css'
import React from 'react'
import { useState } from 'react'
import './Form.css'

function Form (props) {
  const [currentTitle, setTitle] = useState('')
  const [currentPrice, setPrice] = useState('')
  const [currentDate, setDate] = useState('')

  function titleChangeHandler (event) {
    setTitle(event.target.value)
  }
  function priceChangeHandler (event) {
    setPrice(event.target.value)
  }
  function dateChangeHandler (event) {
    setDate(event.target.value)
  }
  let userInputValue = {
    product: currentTitle,
    price: currentPrice,
    date: new Date(currentDate)
  }
  const submitFormHandler = e => {
    e.preventDefault()
    setTitle('')
    setPrice('')
    setDate('');
   
    props.onRecievingValueFromForm(userInputValue)
  }
  return (
    <div className='newExpensesControls Card'>
      <form onSubmit={submitFormHandler}>
        <div className='newExpensesControl'>
          <label>Item</label>
          <input
            value={currentTitle}
            type='text'
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className='newExpensesControl'>
          <label>Price</label>
          <input
            type='number'
            min='10'
            max='100000'
            value={currentPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className='newExpensesControl'>
          <label>Date</label>
          <input
            type='date'
            min='2019-12-01'
            max='2022-12-31'
            value={currentDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className='newExpensesControl'>
          <button type='submit' className='btn'>
            Add Expense
          </button>
          <button type="button" className="btn" onClick={props.onCancelForm}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
export default Form
