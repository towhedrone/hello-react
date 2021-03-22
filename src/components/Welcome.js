import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        return(
            <div>
                <h2>This is a class component</h2>
                <p>{this.props.name}</p>
                <p>age is {this.props.age}</p>
            </div>
        )
    }
}

export default Welcome