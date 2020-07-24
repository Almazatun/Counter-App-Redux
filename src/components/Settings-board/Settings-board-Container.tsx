import React, {Dispatch} from "react";
import {SettingsBoard} from "./Settings-board";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {
    ActionsType, chnageValueDisabledScoreBoardButtonAC,
    disabledButtonBooleanAC,
    getMaxValueAC,
    getStartValueAC, setValueAC,
    StateType, viewWindowOnTheBoardAC
} from "../../redux/reducer/reducer_counter";


export type TypeMapStateToProps = {
    Counter: StateType
}
export type TypeMapDispatchToProps = {
    getStartValue: (startValue: number) => void
    getMaxValue: (value: number) => void
    disabled: () => void
    viewWindow: () => void
    setSettingsParameters: () => void
    changeValueDisabled: () => void
}
const mapStateToProps = (state: AppStateType):TypeMapStateToProps  => {
    return {
        Counter: state.Counter
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        getStartValue: (value: number) => {
            dispatch(getStartValueAC(value))
        },
        getMaxValue: (value: number) => {
            dispatch(getMaxValueAC(value))
        },
        disabled: () => {
            dispatch(disabledButtonBooleanAC())
        },
        viewWindow: () => {
            dispatch(viewWindowOnTheBoardAC())
        },
        setSettingsParameters: () => {
            dispatch(setValueAC())
        },
        changeValueDisabled: () => {
            dispatch(chnageValueDisabledScoreBoardButtonAC())
        }
    }
}
export const SettingsBoardContainer =  connect<TypeMapStateToProps, TypeMapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(SettingsBoard)