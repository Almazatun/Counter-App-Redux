import React, {CSSProperties} from "react";
import {Button} from "../Button/Button";
import style from './Settings-board.module.css'

export const SettingsBoard: React.FunctionComponent = () => {
    let Input: CSSProperties = {
        height: '35px',
        fontSize: '20px',
        width: "100px",
        borderRadius: '15px',
        textAlign: "center"
    }
    let span: CSSProperties = {
        margin: '20px'
    }
    return (
        <div className={style.container}>
            <div className={style.box_first}>
                <div>
                    <span style={span}>start Value</span><input style={Input} type={'number'}/>
                </div>
                <div>
                    <span style={span}>max Value</span><input style={Input} type={'number'}/>
                </div>
            </div>
            <div className={style.box_second}>
                <Button title={'set parameters'}/>
            </div>
        </div>
    )
};