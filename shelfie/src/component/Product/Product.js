import React from 'react';

export default function Product(props){

    // var inventoryList = props.inventoryList.map((current, index) => {
    //     return(
    //         <div key={current + index}>
    //             Name: {current.name}
    //             Price: {current.price}
    //             Image: {current.image}
    //         </div>
    //     )
    // })

    return(
        <div>
            Product
            Name: {props.inventoryList.name}
            Price: {props.inventoryList.price}
            Image: {props.inventoryList.image}
        </div>
    )
}