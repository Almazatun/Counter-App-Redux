import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {ScoreBoard} from "./Score-board";
import {
    ActionsType, getMaxValueAC, getStartValueAC, incrementValueAC, resetValueAC,
    StateType
} from "../../redux/reducer/reducer_counter";

export type TypeMapStateToProps = {
    Counter: StateType
}
export type TypeMapDispatchToProps = {
    incrimentStartValue: () => void
    resetValue: () => void

}
const mapStateToProps = (state: AppStateType): TypeMapStateToProps  => {
    return {
        Counter: state.Counter
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        incrimentStartValue: () => {
            dispatch(incrementValueAC())
        },
        resetValue: () => {
            dispatch(resetValueAC())
        },
    }
}

export const ScoreBoardContainer =  connect<TypeMapStateToProps, TypeMapDispatchToProps, {}, AppStateType >(mapStateToProps, mapDispatchToProps)(ScoreBoard)