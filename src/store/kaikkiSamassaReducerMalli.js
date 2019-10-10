import * as actionTypes from '../actions.js';


const initialState = {
    counter: 0,
    results: []
}


// const reducer = (state = initialState, action) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             ...state,
//             counter: state.counter + 1
//         }
//     }
//     if (action.type === 'DECREMENT') {
//         return {
//             ...state,
//             counter: state.counter - 1
//         }
//     }
//     if (action.type === 'ADD') {
//         return {
//             ...state,
//             counter: state.counter + action.value
//         }
//     }
//     if (action.type === 'REMOVE') {
//         return {
//             ...state,
//             counter: state.counter - action.value
//         }
//     }
//     return state;
// }


// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return { ...state, counter: state.counter + 1 };
//         case 'DECREMENT':
//             return { ...state, counter: state.counter - 1 };
//         case 'ADD':
//             return { ...state, counter: state.counter + action.value };
//         case 'REMOVE':
//             return { ...state, counter: state.counter - action.value };
//         case 'STORE_RESULT':
//             return { ...state, results: state.results.concat({id: new Date(), value: state.counter}) };
//         case 'DELETE_RESULT':
//             return { ...state, results: state.results.filter(result => result.id !== action.resultElementId) };
//     }
//     return state;
// }


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case actionTypes.DECREMENT:
            return { ...state, counter: state.counter - 1 };
        case actionTypes.ADD:
            return { ...state, counter: state.counter + action.value };
        case actionTypes.REMOVE:
            return { ...state, counter: state.counter - action.value };
        case actionTypes.STORE_RESULT:
            return { ...state, results: state.results.concat({id: new Date(), value: state.counter}) };
        case actionTypes.DELETE_RESULT:
            return { ...state, results: state.results.filter(result => result.id !== action.resultElementId) };
    }
    return state;
}


export default reducer;