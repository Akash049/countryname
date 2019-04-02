import React, { Component } from 'react';
import CustomNavbar from './components/CustomNavbar/CustomNavbar.jsx';
import Home from './components/Home/Home.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar-section">
          <CustomNavbar />
        </div>
        <div className="pages">
            <Home/>
        </div>
      </div>
    );
  }
}

export default App;
