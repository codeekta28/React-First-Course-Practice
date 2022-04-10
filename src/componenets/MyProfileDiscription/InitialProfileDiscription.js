import react from 'react'
import './InitialProfileDiscription.css'
import Container from '../MyProfileContainer/Container'
import MainProfileDiscription from './MainProfileDiscription'

function InitialProfileDiscription (props) {
  console.log(props.items)
  if (props.items.length === 0) {
    return (
      <Container>
        <h1>There is nothing to show</h1>
      </Container>
    )
  } else {
    return (
      <Container>
        <h1>This is a Discription Of Above Profile</h1>
        {props.items.map(value => (
          <MainProfileDiscription
          Key={value.id}
          name={value.name}
          age={value.age}
          email={value.email}
          />
        ))}
      </Container>
    )
  }
}
export default InitialProfileDiscription
