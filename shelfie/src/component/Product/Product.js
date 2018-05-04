import React from 'react';

export default function Product(props){

 

    return(
        <div>
            Product
            Name: {props.current.name}
            Price: {props.current.price}
            Image: {props.current.image}

        </div>
    )
}