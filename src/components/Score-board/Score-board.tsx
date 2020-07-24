import React from "react";
import {Button} from "../Button/Button";
import style from './Score-board.module.css'
import {TypeMapDispatchToProps, TypeMapStateToProps} from "./Score-board-Container";

type ScoreBoardType = TypeMapStateToProps & TypeMapDispatchToProps

export const ScoreBoard: React.FunctionComponent<ScoreBoardType> = (props: ScoreBoardType) => {

    const incrimentValue = () => {
        props.incrimentStartValue();
    };
    const resetValue = () => {
        props.resetValue();
    }
    let resetDisabled = props.Counter.incrimentValue === props.Counter.maxValue ? false :
        props.Counter.maxValue < 0 ? false :
        true;

    let viewBord = props.Counter.startValue > props.Counter.maxValue
    || props.Counter.startValue < 0
    || props.Counter.startValue === props.Counter.maxValue ? <p>Incorrect value</p>
        : <p>Change value and press set</p>;

    let basicView = props.Counter.disabledScoreBoard ? viewBord : props.Counter.incrimentValue;
    let inrimentEnd = props.Counter.incrimentValue === props.Counter.maxValue ? style.box_first_done : style.box_first

    return (
        <div className={style.container}>
            <div className={inrimentEnd}>
                <h1>{basicView}</h1>
            </div>
            <div className={style.box_second}>
                <Button disable={props.Counter.disabledScoreBoard} onClick={incrimentValue} title={'increment'}/>
                <Button disable={resetDisabled} onClick={resetValue} title={'reset'}/>
            </div>
        </div>
    )
};