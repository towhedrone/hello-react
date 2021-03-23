import React, { Component } from 'react'

 class BindEvent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"Welcome"
         }
         console.log(this)
        //  this.clickHandler = this.clickHandler.bind(this)
     }
     clickHandler (){
         this.setState({
             message:"Good by"
         })
        }
     
     
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button  onClick={()=>this.clickHandler()} >click</button>
                
            </div>
        )
    }
}

export default BindEvent
