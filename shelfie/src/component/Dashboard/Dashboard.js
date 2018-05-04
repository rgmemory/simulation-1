import React, {Component} from 'react';
import Product from '../Product/Product'
import './Dashboard.css'

export default class Dashboard extends Component{
    constructor(){
        super()
    }

    render(){

        let inventory = this.props.inventoryList.map((current, index) => {
            return(
                <div key={current + index}>
                    <Product current={current}/>
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