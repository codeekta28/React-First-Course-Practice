import react, { useState } from 'react'
import './MainProfileForm.css'
import Container from '../MyProfileContainer/Container'

function MainProfileForm (props) {
  const [currentName, setCurrentName] = useState('')
  const [currentAge, setCurrentAge] = useState('')
  const [currentEmail, setCurrentEmail] = useState('')

  const nameFunctionHandler = e => {
    setCurrentName(e.target.value)
  }
  const ageFunctionHandler = e => {
    setCurrentAge(e.target.value)
  }
  const emailFunctionHandler = e => {
    setCurrentEmail(e.target.value)
  }
  let formDataCollection = {
    name: currentName,
    age: currentAge,
    email: currentEmail
  }
  const submitFormHandler = e => {
    e.preventDefault()
    setCurrentName('')
    setCurrentEmail('')
    setCurrentAge('')
    
    props.onRecievingFromMainForm(formDataCollection);
    // props.onRecievingFromMainProfile(formDataCollection)
   
  
  }

  return (
    <div className='mainProfileFormContainer'>
      <form onSubmit={submitFormHandler}>
        <div className='mainProfileFormSubContainer'>
          <label for='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={currentName}
            onChange={nameFunctionHandler}
          ></input>
        </div>
        <div className='mainProfileFormSubContainer'>
          <label for='age'>Age:</label>
          <input
            type='num'
            id='age'
            min='10'
            max='100'
            value={currentAge}
            onChange={ageFunctionHandler}
          ></input>
        </div>
        <div className='mainProfileFormSubContainer'>
          <label for='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={currentEmail}
            onChange={emailFunctionHandler}
          ></input>
        </div>
        <div className='mainProfileFormSubContainer'>
          <button className='btn'>Insert</button>
        </div>
      </form>
    </div>
  )
}
export default MainProfileForm
