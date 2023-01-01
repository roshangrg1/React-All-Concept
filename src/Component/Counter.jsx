import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <div>Counter {count}</div>
        <button onClick={()=>(count>9 ? "":setCount(count + 1))}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default Counter