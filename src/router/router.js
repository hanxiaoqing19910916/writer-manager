import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import App from '../App.js';

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App}></Route>
        </Switch>
      </BrowserRouter>
    )
  }





}