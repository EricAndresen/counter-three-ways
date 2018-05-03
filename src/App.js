import React from 'react';
import Counter from "./Counter";
import './App.css';
import CounterRedux from './CounterRedux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


// START Redux only code

// reducer manages changes to store
const reducer = () => ({ count: 42 })
// singe source of truth (store) lives in root component, and is passed down via Provider and connect() (in component export)
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
