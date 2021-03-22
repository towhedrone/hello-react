import React, {Component} from 'react'

class Subscribe extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Please Subscribe"
        }
    }

    changeMessage(){
        this.setState({
            message: "Thanks for Subscribe"
        })
    }
    render(){
        
        
        return(
            <div>
               <h1>{this.state.message}</h1>
               <button onClick={()=> this.changeMessage()} >Subscribe</button>
            </div>
        )
    }
}

export default Subscribe