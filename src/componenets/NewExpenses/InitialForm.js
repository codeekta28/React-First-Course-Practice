import './InitialForm.css'
import Form from './Form'
import React, { useState } from 'react'
import Card from '../UI/Card'


function InitialForm (props) {
  const[isEditing,setIsEditing]=useState(false);
  const formDataHandler = (userData) => {
    const newUserData={
      ...userData,
      id:Math.random().toString() 
    }
  props.onRecievingDataFromIntialForm(newUserData); 
  setIsEditing(false); 
  }
  const showFormHandler=()=>{
    setIsEditing(true);
  }
  const cancelFormHandler=()=>{
    setIsEditing(false)
  }
  return (
    <Card className='formContainer'>
      {!isEditing && <button className="btn" onClick={showFormHandler}>Show Expense Form</button>}
      {isEditing && <Form onRecievingValueFromForm={formDataHandler} onCancelForm={cancelFormHandler} />}
    </Card>
  )
}
export default InitialForm
