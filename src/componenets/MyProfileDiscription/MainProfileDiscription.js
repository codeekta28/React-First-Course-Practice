import react from 'react'
import './MainProfileDiscription.css'

function MainProfileDiscription (props) {
  return (
    <div>
      <div className='profileContainer'>
        <h4>{props.name}</h4>
        <h4>{props.age}</h4>
        <h4>{props.email}</h4>
      </div>
    </div>
  )
}
export default MainProfileDiscription
