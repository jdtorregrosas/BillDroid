/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login.js';
const RouterComponent = () => {
  return (
    <Router>
      <Scene hideNavBar="true" key="login" component={Login} title="Login"/>
    </Router>
  );
};

export default RouterComponent;
