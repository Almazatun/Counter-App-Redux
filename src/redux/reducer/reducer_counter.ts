export type StateType = {
    startValue: number
    maxValue: number
    disabled: boolean
    viewWindow: string | number
    incrimentValue: number | null
    disabledScoreBoard: boolean
}

let initialState: StateType = {
    startValue: 0,
    maxValue: 0,
    disabled: false,
    viewWindow: 'Change value and press set',
    incrimentValue: null,
    disabledScoreBoard: true

}
type StateCounterType = typeof initialState

export type ActionsType = GetStartValueType | GetMaxValueType | DiabledType |

    ViewWindowType |  IncrementValueType | ResetValue | SetValueType | chnageValueDisabledScoreBoardButtonType

type IncrementValueType = { type: "INCREMENT-VALUE" };
type ResetValue = {type:'RESET-VALUE'}
type GetStartValueType = {
    type: 'GET-START-VALUE'
    payload: number
};
type GetMaxValueType = {
    type: 'GET-MAX-VALUE'
    payload: number
};
type DiabledType = {
    type: 'DISABLED-SWITCH'
}
type ViewWindowType = {
    type: 'VIEW-WINDOW-ON-THE-BOARD'
};
type SetValueType = {
    type: 'SET-VALUE'
};
type chnageValueDisabledScoreBoardButtonType = {
    type: 'CHANGING-VALUE-DISABLED-SCORE-BOARD-BUTTON'
};


export const reducerCounter = (state = initialState, action: ActionsType): StateCounterType => {
    switch (action.type) {
        case 'GET-START-VALUE':
            return {
                ...state, startValue: action.payload,
            };
        case 'GET-MAX-VALUE':
            return {
                ...state, maxValue: action.payload
            };
        case 'DISABLED-SWITCH':
            return {
                ...state, disabled: state.startValue > state.maxValue
                    || state.startValue < 0
                    || state.startValue === state.maxValue ? true : false
            };
        case 'VIEW-WINDOW-ON-THE-BOARD':
            return {
                ...state, viewWindow: state.startValue > state.maxValue
                    || state.startValue < 0
                    || state.startValue === state.maxValue ? 'Incorrect value' : 'Change value and press set'
            }
        case 'INCREMENT-VALUE':
            return {
                ...state,
                incrimentValue: state.incrimentValue! < state.maxValue ?  state.incrimentValue! + 1 : state.maxValue
            }
        case'RESET-VALUE':
            return {
                ...state,
                incrimentValue: state.startValue
            };
        case "SET-VALUE":
            return {
                ...state,
                incrimentValue: state.incrimentValue,
                disabledScoreBoard: false
            }
        case 'CHANGING-VALUE-DISABLED-SCORE-BOARD-BUTTON':
            return {
                ...state,
                disabledScoreBoard: true
            }
        default:
            return state;
    }
};
export const getStartValueAC = (startValue: number): GetStartValueType  => {
    return {type: 'GET-START-VALUE', payload: startValue}
};
export const getMaxValueAC = (maxValue: number): GetMaxValueType  => {
    return {type: 'GET-MAX-VALUE', payload: maxValue}
};
export const disabledButtonBooleanAC = (): DiabledType  => {
    return {type: 'DISABLED-SWITCH'}
};
export const viewWindowOnTheBoardAC = (): ViewWindowType => {
    return{type: 'VIEW-WINDOW-ON-THE-BOARD'}
};
export const incrementValueAC = (): IncrementValueType => {
    return {type: 'INCREMENT-VALUE'}
};
export const resetValueAC = (): ResetValue => {
    return {type: 'RESET-VALUE'}
};
export const setValueAC = () : SetValueType => {
    return {type: 'SET-VALUE'}
};
export const chnageValueDisabledScoreBoardButtonAC = () : chnageValueDisabledScoreBoardButtonType => {
    return {type: 'CHANGING-VALUE-DISABLED-SCORE-BOARD-BUTTON'}
};
