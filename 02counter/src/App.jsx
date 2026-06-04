import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  const addValue = () => {
    if(counter >= 20){
      alert('Counter cannot be more than 20');
      return;
    }
    setCounter(counter + 1);
    console.log('clicked add',counter+1);
  }
  const removeValue = () => {
    if(counter <= 0){
      alert('Counter cannot be less than 0');
      return;
    }
    setCounter(counter - 1);
    console.log('clicked remove',counter-1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
