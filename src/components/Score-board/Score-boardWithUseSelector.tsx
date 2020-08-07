import React from "react";
import {Button} from "../Button/Button";
import style from './Score-board.module.css'
import {StateType} from "../../redux/reducer/reducer_counter";

type ScoreBoardWithUseSelectorPropsType = {
    CounterData: StateType
    incrementValue: () => void
    resetValue: () => void
}

export const ScoreBoardWithUseSelector: React.FunctionComponent<ScoreBoardWithUseSelectorPropsType> = (props: ScoreBoardWithUseSelectorPropsType) => {


    let viewBord = props.CounterData.startValue > props.CounterData.maxValue
    || props.CounterData.startValue < 0
    || props.CounterData.startValue === props.CounterData.maxValue ? <p>Incorrect value</p>
        : <p>Change value and press set</p>;

    let basicView = props.CounterData.disabledScoreBoard ? viewBord : props.CounterData.incrementValue;

    let incrementEnd = props.CounterData.incrementValue === props.CounterData.maxValue ? style.box_first_done : style.box_first
    let incrementDisabled = props.CounterData.disabledScoreBoard || props.CounterData.incrementValue === props.CounterData.maxValue
    let resetDisabled = props.CounterData.disabledScoreBoard || !(props.CounterData.incrementValue === props.CounterData.maxValue)


    return (
        <div className={style.container}>
            <div className={incrementEnd}>
                <h1>{basicView}</h1>
            </div>
            <div className={style.box_second}>
                <Button disable={incrementDisabled} onClick={props.incrementValue} title={'increment'}/>
                <Button disable={resetDisabled} onClick={props.resetValue} title={'reset'}/>
            </div>
        </div>
    )
};