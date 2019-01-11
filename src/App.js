import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Customers from './components/Customers/CustomersComponent'
import Home from './Home';

class App extends Component {
  render() {
    return (  
      <div>

    <Switch>
      <Route component={Customers} path='/' exact/>
      <Route component={Home} exact  path='/Home' />     
    </Switch>
  </div>
    );
  }
}

export default App;
