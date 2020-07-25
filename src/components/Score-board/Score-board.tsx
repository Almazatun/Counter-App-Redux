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
    let viewBord = props.Counter.startValue > props.Counter.maxValue
    || props.Counter.startValue < 0
    || props.Counter.startValue === props.Counter.maxValue ? <p>Incorrect value</p>
        : <p>Change value and press set</p>;

    let basicView = props.Counter.disabledScoreBoard ? viewBord : props.Counter.incrementValue;

    let incrementEnd = props.Counter.incrementValue === props.Counter.maxValue ? style.box_first_done : style.box_first
    let incrementDisabled = props.Counter.disabledScoreBoard || props.Counter.incrementValue === props.Counter.maxValue
    let resetDisabled = props.Counter.disabledScoreBoard || !(props.Counter.incrementValue === props.Counter.maxValue)


    return (
        <div className={style.container}>
            <div className={incrementEnd}>
                <h1>{basicView}</h1>
            </div>
            <div className={style.box_second}>
                <Button disable={incrementDisabled} onClick={incrimentValue} title={'increment'}/>
                <Button disable={resetDisabled} onClick={resetValue} title={'reset'}/>
            </div>
        </div>
    )
};