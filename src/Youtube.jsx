import { useState } from "react";
const Youtube = () => {
  const [counter, setCounter] = useState(0);
  // const AddValue = () => { 
  //   setCounter(counter + 1);
  //   console.log("Counter Increment", counter);
  // }

  // const RemoveValue = () => { 
  //   setCounter(counter - 1);
  //   console.log("Counter decrement", counter);
  // }
  return (
    <div>
      <h1>Welcome to Counter Application in react</h1>
      <h2>COunt value :{ counter}</h2>
      <button
        onClick={() => {
          setCounter(counter+1)
        }}
      >
        Increment
      </button>
      <button
      onClick={() => {
          setCounter(counter-1)
        }}
      >decrement</button>
    </div>
  )
}

export default Youtube
