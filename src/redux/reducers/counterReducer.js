// add counter action creators imports here

import { INCREAMENT_COUNTER, RESET_COUNTER, DECREAMENT_COUNTER } from "../actions/counterActions";

const INITIAL_STATE = { count: 0 };

// define counter reducer function here

export function counterReducer(state = INITIAL_STATE, action){

switch(action.type){
case INCREAMENT_COUNTER:
    return {...state, count: state.count + 1 }
    case DECREAMENT_COUNTER:
return{...state, count: state.count-1}
case RESET_COUNTER:
    return{...state, count: state.count = 0}
    default:
        return state; // Make sure to have a default case returning the current state.
    
}

    
}
