
import {reducerCounter} from "./reducer/reducer_counter";
import {combineReducers, createStore, Store} from "redux";

let a: string = '';
export default a;

let stateReducer = combineReducers({
    Counter: reducerCounter
})

export let store: Store = createStore(stateReducer)

export type AppStateType = ReturnType <typeof stateReducer>
