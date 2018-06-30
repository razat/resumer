import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css'


import UserData from './Components/UserData';
import Resume from './Components/Resume';

class App extends Component {
  render() {
    return (
      <div className="hero">
        <Resume />
      </div>
    );
  }
}

export default App;
