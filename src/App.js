import React from 'react';
import './App.css';
import CounterRedux from './CounterRedux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const initialState = {
  count: 0
}

// reducer manages changes to store
const reducer = (state = initialState, action) => {
  // use switch statement to take commands from inside components via dispatch()
  switch (action.type) {
    case 'INCREMENT':
      // return new object with old state + modification (never mutates state!)
      // returned component is then merged with state via dispatch (see component)
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}
  // store is a singe source of truth lives in root component, and is passed down via Provider and connect() (in component export)
const store = createStore(reducer)

const App = () => (
  <Provider store = {store}>
    <CounterRedux />
  </Provider>
)

export default App;
