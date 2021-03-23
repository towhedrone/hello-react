import React, { Component } from 'react'

class Condition extends Component {
constructor(props) {
    super(props)

    this.state = {
         isUser: true
    }
}


    render() {

        return this.state.isUser && <div>
            Hello User
        </div>

        // return this.state.isUser ? <div>
        //     Hello User
        // </div> : <div>
        //     Hello Guest
        // </div>


            // let msg;
            // if(this.state.isUser){
           
            //     msg = <div>
            //         Hello User
            //     </div>
    
            // }else{
              
            //     msg = <div>
            //         Hello Guest
            //     </div>
              
            // }

            // return(
            //     <div>
            //         {msg}
            //     </div>
            // )

        // if(this.state.isUser){
        //     return(
        //         <div>
        //             hello User
        //         </div>
        //     )
        // }else{
        //     return(
        //         <div>
        //             hello Guest
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         Hello
        //     </div>
        // )
    }
}

export default Condition
