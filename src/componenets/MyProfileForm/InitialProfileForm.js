import react from 'react'
import './InitialProfileForm.css'
import Container from '../MyProfileContainer/Container'
import MainProfileForm from './MainProfileForm'
function InitialProfileForm (props) {
 const mainFormDataHandler=(userData)=>{
   const dataWithID={
     ...userData,
     id:Math.random().toString()
   }
   props.onRecievingDataFromInitialProfile(userData);
 }
  
  return (
    <Container className='formContainer'>
      <h1 className='formHeading'>This is My Profile</h1>
      <MainProfileForm onRecievingFromMainForm={mainFormDataHandler}/>
    </Container>
  )
}
export default InitialProfileForm
