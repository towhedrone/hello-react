import React, { Component } from 'react'

 class CarTow extends Component {
constructor(props) {
    super(props)

    this.state = {
         message:'hello'
    }
}


    render() {

        const { brand,color } = this.props
        const{message}= this.state
        return (
            <div>
                <h1>{message}</h1>
            </div>
        )
    }
}

export default CarTow
