import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Product from './component/Product/Product'
import Header from './component/Header/Header'
import axios from 'axios'

class App extends Component {

  constructor(){
    super()

    this.state = {
      inventoryList: [],
      selectedProduct: null
    }

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res => {
      console.log(res);
      this.setState({
        inventoryList: res.data
      })
    }).catch(e => {console.log("this is the error", e)})
  }

  getProducts(){
    axios.get('/api/inventory').then(res => {
      console.log(res);
      this.setState({
        inventoryList: res.data
      })
    }).catch(e => {console.log("this is the error", e)})
  }




  render() {
    return (
      <div className="App">
        <Header />

        <Dashboard inventoryList={this.state.inventoryList} getProducts={this.getProducts}/>
        
        <Form getProducts={this.getProducts} selectedProduct={this.state.selectedProduct}/>
      </div>
    );
  }
}

export default App;

