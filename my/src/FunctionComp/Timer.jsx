import React, { useState } from 'react'

const Timer = () => {

    const [Timer, setTimer] = useState(0);

    const handleCount = () =>{

        setInterval(()=>{
            setTimer((count)=>{
                return(
                    count + 1
                )
            })
        }, 2000)

      
    }


  return (
    <div>
        <h1>Counter</h1>
        <h3> {Timer} </h3>
        <button onClick={handleCount}>Click Me</button>
    </div>
  )
}

export default Timer