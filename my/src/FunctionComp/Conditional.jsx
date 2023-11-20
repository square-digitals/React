import React, { useState } from 'react'

const Conditional = () => {
    const [age, setAge] = useState(60);
    const [greetings, setGreetings] = useState("Morningg");



    // const handleCOndition = () =>{
    //     setAge(()=>{
    //         if (age <= 50) {
    //             return <div>Not an Adult</div>
    //         }

    //         else {
    //             return <div>An adult!</div>
    //         }
    //     })
    // }



  return (
    <div>
        <h1>This is a Conditional Rendering</h1>
        <p> Good {
            greetings ==="Morning" ? <div> Morning</div>:
            <div>Afternoon</div>
        } </p>

        {/* <button onClick={handleCOndition}>Check Age</button> */}
    </div>
  )
}

export default Conditional