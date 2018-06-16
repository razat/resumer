import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css'


import UserData from './Components/UserData.js';

class App extends Component {
  render() {
    return (
      <div className="hero">
        <UserData />
      </div>
    );
  }
}

export default App;
