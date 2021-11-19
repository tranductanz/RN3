import React, { Component } from 'react';

import { Provider } from 'react-redux';
// import {store} from './src/Buoi6/redux/store';
import rootStore from './src/Buoi7/redux/store';
import RootScreen from './src/Buoi10_11';
//Stateful Component
class App extends Component {
  render() {
    return (
      <Provider store={rootStore}>
        <RootScreen />
      </Provider>
    );
  }
}

export default App;
