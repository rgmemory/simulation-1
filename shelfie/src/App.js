import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Product from './component/Product/Product'
import Header from './component/Header/Header'
import axios from 'axios'

// let inventory = ;

class App extends Component {

  constructor(){
    super()

    this.state = {
      inventoryList: []
    }
  }

  componentDidMount(){
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
        
        <Form />
      </div>
    );
  }
}

export default App;


// {
//   name: "shoes",
//   price: 10,
//   image: 'www.shoes.com'
// },
// {
//   name: "shirt",
//   price: 20,
//   image: 'www.shirt.com'
// },
// {
//   name: "pants",
//   price: 30,
//   image: 'www.pants.com'
// }
