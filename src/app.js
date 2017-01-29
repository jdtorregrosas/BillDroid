/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Router from './Router.js';

class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducers) }>
        <Router />
      </Provider>
    );
  }
}

export default App;
