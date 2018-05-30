import React, { Component } from 'react';

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  islogin = false
  render() {
    return (
      <div>
        <Link to='/login'>login</Link>
      </div>
    );
  }
}

export default App;
