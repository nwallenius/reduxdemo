// Store
const store = createStore();


// Reducers
const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }    
    }
    return state;
}


// Dispatching actions
store.dispatch({type: 'INC_COUNTER'});              // isoista kirjaimista tunnistaa, että on kyseessä action
store.dispatch({type: 'ADD_COUNTER', value: 5});



// Subscription