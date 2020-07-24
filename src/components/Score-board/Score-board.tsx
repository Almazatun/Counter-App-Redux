import React from "react";
import {Button} from "../Button/Button";
import style from './Score-board.module.css'
import {TypeMapDispatchToProps, TypeMapStateToProps} from "./Score-board-Container";

type ScoreBoardType = TypeMapStateToProps & TypeMapDispatchToProps

export const ScoreBoard: React.FunctionComponent<ScoreBoardType> = (props:ScoreBoardType) => {

    const incrimentValue = () => {
        props.incrimentStartValue();
    };
    const resetValue = () => {
        props.resetValue();
    }
    let resetDisabled = props.Counter.incrimentValue === props.Counter.maxValue? false : true

    return (
        <div className={style.container}>
            <div className={style.box_first}>
                <h1>{props.Counter.viewWindow} {props.Counter.incrimentValue}</h1>
            </div>
            <div className={style.box_second}>
                <Button disable={props.Counter.disabledScoreBoard} onClick={incrimentValue} title={'increment'} />
                <Button disable={resetDisabled} onClick={resetValue} title={'reset'} />
            </div>
        </div>
    )
};