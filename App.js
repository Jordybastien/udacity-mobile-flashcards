import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './Router';
import reducer from './reducers';
import AddCard from './components/addCard'

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        {/* <Router /> */}
        <AddCard />
      </Provider>
    );
  }
}

export default App;
