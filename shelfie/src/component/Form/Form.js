import React, {Component} from 'react';

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

    //////post new prodcut to database




    //////


    render(){
        return(
            <div>
                Form
                <input onChange={event => {this.updateImage(event.target.value)}}/>
                <input onChange={event => {this.updateProductName(event.target.value)}}/>
                <input onChange={event => {this.updatePrice(event.target.value)}}/>

                <button onClick={this.cancel}>Cancel </button>
                <button>Add to Inventory </button>
                
            </div>
        )
    }
}