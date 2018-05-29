import React, { Component } from 'react';
import LoginComponent from './LoginComponent'
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  islogin = false

   roster= () => (
    <Switch>
          <Route path='/register' component={LoginComponent}/>
    </Switch>
  );


  render() {
    const showwhat = this.islogin ? <div>已经登录</div> : <LoginComponent />
    return (
      <div>
        {this.roster()}
        <Link to='/register'>register</Link>
        </div>
    );
  }
}

export default App;
