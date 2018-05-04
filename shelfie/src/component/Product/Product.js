import React from 'react';

export default function Product(props){

    // var inventoryList = props.inventoryList.map((current, index) => {
    //     return(
    //         <div key={current + index}>
    //             Name: {props.current.name}
    //             Price: {props.current.price}
    //             Image: {props.current.image}
    //         </div>
    //     )
    // })

    // let inventoryList = props.inventoryList.map((current, index) => {
    //     return(
    //         current[index].name
    //     )
    //     // return(
    //     //     Name: {current.name}
    //     // )
    // })

    return(
        <div>
            Product
            Name: {props.current.name}
            Price: {props.current.price}
            Image: {props.current.image}

            {/* {inventoryList} */}
        </div>
    )
}