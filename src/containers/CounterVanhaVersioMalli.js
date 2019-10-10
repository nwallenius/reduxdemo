import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions.js';


class Counter extends Component {
    // state = {
    //     counter: 100
    // }
    
    // counterChangeHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }
    
    render () {
        return (
        <div>
            <h1>Your score is: {this.props.ctr}</h1>
            
            <div>
                <button onClick={this.props.onIncCounter}> Increment </button>
                <button onClick={this.props.onDecCounter}> Decrement </button>
                <button onClick={this.props.addCounter}> Add 5 </button>
                <button onClick={this.props.removeCounter}> Remove 5 </button>

                {/* <button onClick={this.props.onStoreCounter}>Store result</button> */}
                
                <button onClick={() => this.props.onStoreCounter(this.props.ctr)}>Store result</button>

                <ul>
                    {this.props.storedResult.map(item => (
                        <li key={item.id} onClick={() => this.props.onDeleteCounter(item.id)}>{item.value}</li>
                    ))}
                </ul>

                {/* <button onClick={() => this.counterChangeHandler( 'inc' )}> Increment </button>
                <button onClick={() => this.counterChangeHandler( 'dec' )}> Decrement </button>
                <button onClick={() => this.counterChangeHandler( 'add', 5 )}> Add 5 </button>
                <button onClick={() => this.counterChangeHandler( 'sub', 5 )}> Subtract 5 </button> */}
            </div>
        
        </div>
        );
    }
  
}

// const mapStateToProps = state => {
//     return {
//         ctr: state.counter,
//         storedResult: state.results
//     };
// }

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.results
    };
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onIncCounter: () => dispatch({type: 'INCREMENT'}),
//         onDecCounter: () => dispatch({type: 'DECREMENT'}),
//         addCounter: () => dispatch({type: 'ADD', value: 5}),
//         removeCounter: () => dispatch({type: 'REMOVE', value: 5}),
//         onStoreCounter: () => dispatch({type: 'STORE_RESULT'}),
//         onDeleteCounter: (id) => dispatch({type: 'DELETE_RESULT', resultElementId: id})
//     };
// }

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecCounter: () => dispatch({type: actionTypes.DECREMENT}),
        addCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
        removeCounter: () => dispatch({type: actionTypes.REMOVE, value: 5}),
        onStoreCounter: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteCounter: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElementId: id})
    };
}


// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// export default Counter;