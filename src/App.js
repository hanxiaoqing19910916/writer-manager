import React, { Component } from 'react';
import './App.css';
import { 
  Button,
  Input
} from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div style={{ marginBottom: 16 }}>
          <Input  />
       </div>
       <div style={{ marginBottom: 16 }}>
          <Input  />
       </div>
     
      </div>
    );
  }
}

export default App;
