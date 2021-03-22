import React from 'react'

const ClickTwo = () => {
const clickhandler=()=>{
    console.log("clicked")
}

    return (
        <div>
            <button onClick={()=>clickhandler()} >Click</button>
        </div>
    )
}

export default ClickTwo
