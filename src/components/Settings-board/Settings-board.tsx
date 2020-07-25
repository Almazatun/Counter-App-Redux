import React, {ChangeEvent, CSSProperties, useEffect} from "react";
import {Button} from "../Button/Button";
import style from "./Settings-board.module.css";
import {TypeMapDispatchToProps, TypeMapStateToProps} from "./Settings-board-Container";

type SettingsBoardPropsType = TypeMapStateToProps & TypeMapDispatchToProps

export const SettingsBoard: React.FunctionComponent<SettingsBoardPropsType> = (props: SettingsBoardPropsType) => {

    useEffect( () => {
        const start = localStorage.getItem('startValue')
        const max = localStorage.getItem('maxValue')
        props.getStartValue(parseInt(start!))
        props.getMaxValue(parseInt(max!))

    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(props.Counter.startValue))
        localStorage.setItem('maxValue', JSON.stringify(props.Counter.maxValue))
    }, )


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
        backgroundColor: !props.Counter.disabled ? 'mediumseagreen' : 'orangered'
    }
    let span: CSSProperties = {
        margin: '20px'
    }


    return (
        <div className={style.container}>
            <div className={style.box_first}>
                <div>
                    <span style={span}>start Value</span>
                    <input value={props.Counter.startValue}
                           onChange={onChangeStart}
                           style={Input}
                           type={'number'}/>
                </div>
                <div>
                    <span style={span}>max Value</span>
                    <input style={Input}
                           onChange={onChangeMax}
                           value={props.Counter.maxValue}
                           type={'number'}/>
                </div>
            </div>
            <div className={style.box_second}>
                <Button onClick={setSettingParameters} disable={props.Counter.disabled || props.Counter.disabledSettings} title={'set parameters'}/>
            </div>
        </div>
    )
};