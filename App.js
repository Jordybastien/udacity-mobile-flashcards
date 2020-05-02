import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './Router';
import reducer from './reducers';
import middleware from './middleware';
import { setLocalNotification } from './utils/notificationsHelper';

class App extends Component {
  
  /**
   * @description function that runs when mounting the component and set local notification
   */
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    const store = createStore(reducer, middleware);

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
