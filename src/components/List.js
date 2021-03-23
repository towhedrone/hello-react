import React from 'react'
import Person from './Person'

const List = () => {
const perosns = ['Rone','Polash','Mizan','joy','Fahim']
const personList = perosns.map((person,index)=> <Person key ={index} person={person} />)

    return (
        <div>
           {/* {
               perosns.map((person)=>{
                   return(
                       <h2>{person}</h2>
                   )
               })
           } */}

{
               personList
                   
}
        </div>
    )
}

export default List
