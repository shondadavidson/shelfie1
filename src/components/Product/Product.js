import React from 'react';


export default function Product (props){
    // console.log(props)
    return (
        <div>
            <img src="{props.product.img}" alt={props.product.name} 
            // style="width:40px;height:60px;"
            />
            <p>{props.product.name}</p>
            <p>Price: ${props.product.price}</p>
            <button onClick={() => props.deleteProduct(props.product.id)}>Delete</button>
            <button>Edit</button>
            <p>______</p>
            
            
            
            
        </div>
    )
}