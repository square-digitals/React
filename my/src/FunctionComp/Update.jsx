import React, { useState } from 'react'

const Update = () => {

    const[update, setUpdate] = useState("This is a function component")

    const handleChangeText =()=>{
        setUpdate('This was updated')
    }
  
    return (
    
    
    <div>
        <h1>Change Text</h1>
        <p> {update} </p>

        <button onClick={handleChangeText}>  </button>
    </div>
  )
}

export default Update