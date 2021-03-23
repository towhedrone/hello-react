import React from 'react'

const Child = (props) => {
    return (
        <div>
            <button onClick={()=> props.grettingMethods("Children")}>Gretting</button>
        </div>
    )
}

export default Child
