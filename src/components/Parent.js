import React, { Component } from 'react'
import Child from './Child'
 class Parent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message: "User"
         }
         this.gretting =this.gretting.bind(this)
     }

     gretting(data){
        //  alert("hello" + " " + this.state.message)
        alert(`Hello ${this.state.message} from ${data}`)
     }
     
    render() {
        return (
            <div>
               <Child grettingMethods= {this.gretting} /> 
            </div>
        )
    }
}

export default Parent
