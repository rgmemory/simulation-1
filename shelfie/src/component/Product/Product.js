import React from 'react';
import './Product.css'

export default function Product(props){

 

    return(
        <div className="product">
            Product
            <h2>Name: {props.current.name}</h2>
            <h2>Price: {props.current.price}</h2>
            Image: {props.current.image}

            <button >Edit</button>
            <button onClick={() => props.deleteProduct(props.current.id)}>Delete</button>

        </div>
    )
}