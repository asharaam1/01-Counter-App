import React, { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function increaseCount() {
    setCount(count + 1)
  }
  function decreaseCount() {
    count < 1 ? count = 0 : setCount(count - 1)
  }
  function resetCount() {
    setCount(count = 0)
  }


  return (
    <React.Fragment>
      <h1>Counter App</h1>
      <div>
        <div className='count'>
          <button onClick={decreaseCount}>--</button>
          <p className='counting'>{count}</p>
          <button onClick={increaseCount}>+</button>
        </div>
        <div className='reset'>
          <button onClick={resetCount}>Reset</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App