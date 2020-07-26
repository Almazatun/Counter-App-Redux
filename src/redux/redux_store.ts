
import {reducerCounter} from "./reducer/reducer_counter";
import {combineReducers, createStore, Store} from "redux";


export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppStateType ) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        alert(error)
    }
};

const persistedState = loadState();

let stateReducer = combineReducers({
    Counter: reducerCounter
})

export let store: Store = createStore(stateReducer,persistedState )

export type AppStateType = ReturnType <typeof stateReducer>

store.subscribe(() => saveState(store.getState()))