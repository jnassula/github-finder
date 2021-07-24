import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {

  render(){
    const name = 'Jonata Nassula'
    
    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
