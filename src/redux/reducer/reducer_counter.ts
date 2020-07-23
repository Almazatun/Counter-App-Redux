type State = {
    startValue: number
    maxValue: number
}

let initialState: State = {
    startValue: 0,
    maxValue: 0
}
type StateCounterType = typeof initialState

type ActionsType = IncrementValueType & SetValueType & GetStartValueType
& GetMaxValueType

type IncrementValueType = {
    type: "INCREMENT-VALUE"
};
type SetValueType = {
    type: 'SET-VALUE'
    payload: {startValue: number, maxValue: number}
}
type GetStartValueType = {
    type: 'GET-START-VALUE'
    payload: number
}
type GetMaxValueType = {
    type: 'GET-MAX-VALUE'
    payload: number
}


export const reducerCounter = (state = initialState, action: ActionsType): StateCounterType => {
    switch (action.type) {
        case 'GET-START-VALUE':
            return {
                ...state, startValue: action.payload
            };
        case 'GET-MAX-VALUE':
            return {
                ...state, maxValue: action.payload
            }
        case 'INCREMENT-VALUE':
            return state
        default:
            return state;
    }
};
export const getStartValueAC = (value: number): GetStartValueType  => {
    return {type: 'GET-START-VALUE', payload: value}
};
export const getMaxValueAC = (value: number): GetMaxValueType  => {
    return {type: 'GET-MAX-VALUE', payload: value}
};
export const incrementValueAC = (): IncrementValueType => {
    return {type: 'INCREMENT-VALUE'}
};
export const setValueAC = (startValue: number, maxValue: number) : SetValueType => {
    return {type: 'SET-VALUE', payload: {startValue: startValue, maxValue: maxValue}}
};
