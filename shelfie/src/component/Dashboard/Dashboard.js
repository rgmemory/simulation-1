import React, {Component} from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component{
    constructor(){
        super()
    }

    render(){

        let inventory = this.props.inventoryList.map((current, index) => {
            return(
                <div key={current + index}>
                    {/* <Product inventoryList={this.props.inventoryList}/> */}
                    <Product current={current}/>
                </div>
            )
        })

        return(
            <div>
                Dashboard

                {/* <Product /> */}
                {inventory}
            </div>
        )
    }
}