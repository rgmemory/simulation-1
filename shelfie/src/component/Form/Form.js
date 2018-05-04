import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component{
    constructor(){
        super()

        this.state = {
            image: '',
            productName: '',
            price: 0
        }

        this.updateImage = this.updateImage.bind(this)
        this.updateProductName = this.updateProductName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.cancel = this.cancel.bind(this)
        this.updateProdcts = this.updateProdcts.bind(this)
    }

    updateImage(value){
        console.log(value);
        this.setState({
            image: value
        })
    }

    updateProductName(value){
        console.log(value)
        this.setState({
            productName: value
        })
    }

    updatePrice(value){
        console.log(value)
        this.setState({
            price: value
        })
    }

    cancel(){
        console.log("clicked");
        this.setState({
            image: '',
            productName: '',
            price: 0
        })
    }

    updateProdcts(){
        console.log("update products")
        axios.post('/api/product', {name: this.state.productName, price: this.state.price, image: this.state.image}).then(
            this.props.getProducts(),
            this.cancel()
        )
    }

    render(){
        return(
            <div>
                Form
                <input value={this.state.productName} onChange={event => {this.updateProductName(event.target.value)}}/>
                <input value={this.state.price} onChange={event => {this.updatePrice(event.target.value)}}/>
                <input value={this.state.image} onChange={event => {this.updateImage(event.target.value)}}/>

                <button onClick={this.cancel}>Cancel </button>
                <button onClick={this.updateProdcts}>Add to Inventory </button>
                
            </div>
        )
    }
}