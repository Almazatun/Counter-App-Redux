import React, {ChangeEvent, CSSProperties} from "react";
import {Button} from "../Button/Button";
import style from "./Settings-board.module.css";
import {StateType} from "../../redux/reducer/reducer_counter";


type SettingsBoardWithUseSelectorPropsType = {
    CounterData: StateType
    getStartValue: (startValue: number) => void
    getMaxValue: (maxValue: number) => void
    disabled: () => void
    changeValueDisabled: () => void
    setSettingsParameters: () => void
}

export const SettingsBoardWithUseSelector: React.FunctionComponent<SettingsBoardWithUseSelectorPropsType> = (props: SettingsBoardWithUseSelectorPropsType) => {

    const onChangeStart = (event: ChangeEvent<HTMLInputElement>) => {
        props.getStartValue(parseInt(event.currentTarget.value));
        props.disabled();
        props.changeValueDisabled();
    };
    const onChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        props.getMaxValue(parseInt(event.currentTarget.value));
        props.disabled()
        props.changeValueDisabled();
    };

    const setSettingParameters = () => {
        props.setSettingsParameters();
    }


    let Input: CSSProperties = {
        height: '35px',
        fontSize: '20px',
        width: "100px",
        borderRadius: '15px',
        textAlign: "center",
        backgroundColor: !props.CounterData.disabled ? 'mediumseagreen' : 'orangered'
    }
    let span: CSSProperties = {
        margin: '20px'
    }


    return (
        <div className={style.container}>
            <div className={style.box_first}>
                <div>
                    <span style={span}>start Value</span>
                    <input value={props.CounterData.startValue}
                           onChange={onChangeStart}
                           style={Input}
                           type={'number'}/>
                </div>
                <div>
                    <span style={span}>max Value</span>
                    <input style={Input}
                           onChange={onChangeMax}
                           value={props.CounterData.maxValue}
                           type={'number'}/>
                </div>
            </div>
            <div className={style.box_second}>
                <Button onClick={setSettingParameters} disable={props.CounterData.disabled || props.CounterData.disabledSettings} title={'set parameters'}/>
            </div>
        </div>
    )
};