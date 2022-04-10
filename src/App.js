import logo from './logo.svg'
import React, { useState } from 'react'
import './App.css'
import InitialForm from './componenets/NewExpenses/InitialForm'
import InitialExpense from './componenets/Expenses/InitialExpense'
// import InitialProfileForm from './componenets/MyProfileForm/InitialProfileForm'
// import InitialProfileDiscription from './componenets/MyProfileDiscription/InitialProfileDiscription'
const DummyData = [
  {
    id:'e1',
    date: new Date(2021, 11, 5),
    product: 'Sherwai',
    price: '1699'
  },
  {
    id:'e2',
    date: new Date(2020, 11, 6),
    product: 'Suit',
    price: '1599'
  },
  {
    id:'e3',
    date: new Date(2021, 11, 7),
    product: 'Cake',
    price: '900'
  },
  {
    id:'e4',
    date: new Date(2021, 11, 8),
    product: 'Mixer',
    price: '3000'
  }
]
// let dummyProfile=[
//   {
//   name:"ekta",
//   age:30,
//   email:'mishra.ekta57@gmail.com'
//   },
//   {
//   name:"pooja",
//   age:30,
//   email:'mishra.ekta57@gmail.com'
//   },
// ]
function App () {
  const [userInputData, setUserInputData] = useState(DummyData)
  const initialFormDataHandler = data => {
    console.log("data",data);
    //  setUserInputData(previousExpense=>{
    //    return[data,...previousExpense]
    //  })
    // Another way of doing this
    setUserInputData([data,...userInputData]);
  }
  return (
    <div className='firstDiv'>
      <InitialForm
        onRecievingDataFromIntialForm={initialFormDataHandler}
      ></InitialForm>
      <InitialExpense items={userInputData} />
    </div>
  )
  // ************************************************************************
  // const[userInputProfile,setUserInputProfile]= useState('')
  //   const initialProfileDataHandler=(initialProfileData)=>{
  //     setUserInputProfile((previousData)=>{
  //       return[initialProfileData,...previousData]
  //     })
  //   }
  //   return(
  //     <div>
  // <InitialProfileForm onRecievingDataFromInitialProfile={initialProfileDataHandler}/>

  // <InitialProfileDiscription items={userInputProfile}/>

  //     </div>
  //   )
}

export default App
