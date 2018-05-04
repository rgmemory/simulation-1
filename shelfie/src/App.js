import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Product from './component/Product/Product'
import Header from './component/Header/Header'

// let inventory = ;

class App extends Component {

  constructor(){
    super()

    this.state = {
      inventoryList: [
        {
          name: "shoes",
          price: 10,
          image: 'www.shoes.com'
        },
        {
          name: "shirt",
          price: 20,
          image: 'www.shirt.com'
        },
        {
          name: "pants",
          price: 30,
          image: 'www.pants.com'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Dashboard inventoryList={this.state.inventoryList}/>
        
        <Form />
      </div>
    );
  }
}

export default App;
