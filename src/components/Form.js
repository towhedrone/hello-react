import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             comment:"",
             color:"green",
        }
        this.nameChangeHandler=this.nameChangeHandler.bind(this)
        this.commentChangeHandler= this.commentChangeHandler.bind(this)
        this.submitHandler= this.submitHandler.bind(this)
        this.colorChangeHandler= this.colorChangeHandler.bind(this)
    }

    nameChangeHandler(event){
        this.setState({
            name: event.target.value
        })

    }
    commentChangeHandler(event){
        this.setState({
            comment: event.target.value

        })

    }
    colorChangeHandler(event){
        this.setState({
            color: event.target.value

        })

    }
   
    submitHandler(event){
        alert(`${this.state.name} ${this.state.comment} ${this.state.color}`)
        event.preventdefault()
        this.setState({
            name:"",
            comment:"",
            color:""
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler} >
                    <div>
                        <label>Name</label>
                        <input type="text" name="" value={this.state.name} onChange={this.nameChangeHandler} />
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea rows="" cols="" value={this.state.comment} onChange={this.commentChangeHandler} ></textarea>
                    </div>
                    <div>
                        <select value={this.state.color} onChange={this.colorChangeHandler} >
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">green</option>
                            <option value="yeallow">yeallow</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
