import React from 'react'
//props distructure


// const CarOne = ({brand,color}) => {
//     return (
//         <div>
//             <h1>Brand:{brand} , color:{color} </h1>
//         </div>
//     )
// }


const CarOne = (props) => {

    const {brand , color }= props

    return (
        <div>
            <h1>Brand:{brand} , color:{color} </h1>
        </div>
    )
}

export default CarOne
