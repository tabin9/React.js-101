import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // hooks usage
  let [counter, setCounter] = useState(0)       // hook responsible to change the state

  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;      // without hooks the UI does not update
    // setCounter(counter + 1);       // setCounter takes a new value for counter in useState
    if (counter < 20) {
      setCounter(counter + 1)
    }
    else {
      setCounter(counter)
    }
  }

  const decrementValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
    else {
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>React-101 | Tabin Tariq</h1>
      <h3>Counter Value: {counter}</h3>

      <button
      onClick={addValue}>Add Value</button>
      <br />
      <button
      onClick={decrementValue}>Decrement Value</button>
    </>
  )
}

export default App


/*
1.  UI updation is controlled by react:
    Without hooks the UI will not update.
    useContext is an example of a hook.
    Import useState to be able to use => useEffect hook

2. useState hook usage:
    let [variable, function] = useState(default value of variable)
    Inside the array two things => a variable and a function responsible to update the variable.
    Function take a new value value for variable everytime it's called.
    Name of function can be anything, preffered to name it as setCounter when variable is named counter

3. In this file, I made a counter with two buttons, add and decrement with the functionality as their name
    implies, the counter does not go below 0 and does not go above 20.
*/