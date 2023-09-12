import { combineReducers } from "redux";
import { counterReducer } from "./redux/reducers/counterReducer";
import { timerReducer } from "./redux/reducers/timerReducer";
import * as redux from "redux";
// import counter reducer function here

// combine the reducer functions here
const result = combineReducers({
  timerReducer,
  counterReducer,
});
// add the root reducer function to store here
export const store = redux.createStore(result);
