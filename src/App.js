import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Product from './components/Product/Product'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <p> APP FILE</p> */}
        <Dashboard />
        {/* <Form /> */}
        
      </div>
    );
  }
}

export default App;
