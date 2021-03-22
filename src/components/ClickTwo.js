import React, { Component } from 'react'
class ClickTwo extends Component {
    clickHandler =()=>{
        console.log("you Clicked me")
    }

    render() {
        return (
            <div>
               <button onClick ={()=> this.clickHandler()} >Click Me</button> 
            </div>
        )
    }
}

export default ClickTwo
