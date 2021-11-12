import React, { Component } from 'react';

import { Provider } from 'react-redux';
// import {store} from './src/Buoi6/redux/store';
import rootStore from './src/Buoi7/redux/store';
import ListProductScreen from './src/Buoi9/ListProductScreen';


//Stateful Component
class App extends Component {
  render() {
    return (
      <Provider store={rootStore}>
        <ListProductScreen />
      </Provider>
    );
  }
}

export default App;
