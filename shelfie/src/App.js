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
      inventoryList: []
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

        <Dashboard inventoryList={this.state.inventoryList}/>
        
        <Form getProducts={this.getProducts}/>
      </div>
    );
  }
}

export default App;

