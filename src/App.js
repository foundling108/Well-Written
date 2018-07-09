import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        {/* <Nav/> */}
      </div>
        <div className="Auth-box">
          <p>USERNAME:</p>
          <input type="text"/>
          <p>PASSWORD:</p>
          <input type="text"/>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default App;
