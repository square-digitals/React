import React from 'react'

// const user = ['John', 'Joy', 'Charles', 'DEO', 'John' ]

const Person = [
    {
        id:1,
        name: 'John',
        age: '20',
        hobbies: 'coding'

    },
    {
        id:2,
        name: 'Joy',
        age: '21',
        hobbies: 'fcoding'

    },
    {
        id:3,
        name: 'Charlse',
        age: '25',
        hobbies: 'gcoding'

    },
    {
        id:4,
        name: 'DEO',
        age: '22',
        hobbies: 'fgcoding'

    }
]

const Persons = () => {



  return (
    <div>
        <h1>Profile Details</h1>

        {
            Person.map((value, key) =>{
                return(
                    <p> {value.name} </p>
                )
            })
        }
    </div>
  )
}

export default Persons