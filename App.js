import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './Router';
import reducer from './reducers';
import { getDeck, getDecks, saveDeckTitle } from './utils/api';

class App extends Component {
  componentDidMount() {
    getDecks();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <Router />
      </Provider>
    );
  }
}

export default App;
