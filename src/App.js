import React from 'react';
import Counter from "./Counter";
import './App.css';
import CounterRedux from './CounterRedux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


// START Redux only code

const initialState = {
  count: 0
}

// reducer manages changes to store
const reducer = (state = initialState, action) => {
  // use switch statement to take commands from inside components
  switch (action.type) {
    case 'INCREMENT':
      // return new object with old state + modification (never mutates state!)
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
  state
}
  // store is a singe source of truth lives in root component, and is passed down via Provider and connect() (in component export)
const store = createStore(reducer)

// END Redux only code

const App = () => (
  <div>
    {/* With only React */}
    <Counter />

    {/* With React + Redux */}
    <Provider store = {store}>
      <CounterRedux />
    </Provider>
  </div>
)

export default App;
