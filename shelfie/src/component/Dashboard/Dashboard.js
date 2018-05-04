import React, {Component} from 'react';
import Product from '../Product/Product'
import './Dashboard.css'
import axios from 'axios'

export default class Dashboard extends Component{
    constructor(){
        super()

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        console.log("delete called", id)
        axios.delete(`/api/delete/${id}`).then(res => {
            console.log(res)
        })

        this.props.getProducts()
    }

    render(){

        let inventory = this.props.inventoryList.map((current, index) => {
            return(
                <div key={current + index}>
                    <Product current={current} deleteProduct={this.deleteProduct}/>
                    
                </div>
            )
        })

        return(
            <div className="dashboard">
                Dashboard (product is in dashboard)
                {inventory}

                
            </div>
        )
    }
}