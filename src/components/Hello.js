import React from 'react'

const Hello = (props) =>{
    
    return (
        <div>
            <h1>Hello {props.name} and ages {props.age}</h1>
        <h3>{props.children}</h3>
        </div>
    )
}

export default Hello;