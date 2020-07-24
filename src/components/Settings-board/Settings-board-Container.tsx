import React, {Dispatch} from "react";
import {SettingsBoard} from "./Settings-board";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {ActionsType, getMaxValueAC, getStartValueAC, StateType} from "../../redux/reducer/reducer_counter";


export type TypeMapStateToProps = {
    Counter: StateType
}
export type TypeMapDispatchToProps = {
    getStartValue: (startValue: number) => void
    getMaxValue: (value: number) => void
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
    }
}
export const SettingsBoardContainer =  connect<TypeMapStateToProps, TypeMapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(SettingsBoard)