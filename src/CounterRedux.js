import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
    increment = () => {
        // dispatch is injected by connect() in the export statement below
        // dispatch calls the reducer and passes the result to be merged with the store
        this.props.dispatch({ type: 'INCREMENT'})
    }
    
    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT'})
    }

    render() {
        return(
            <div>
                <h2>Redux Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    {/* Notice this is now props, not state (more functional, loosely coupled) */}
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )    
    }
}

// Keys in this become the props to the component called as the second argument to connect
const mapStateToProps = (state) => ({ count: state.count })

export default connect(mapStateToProps)(Counter);