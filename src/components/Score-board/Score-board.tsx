import React from "react";
import {Button} from "../Button/Button";
import style from './Score-board.module.css'

export const ScoreBoard: React.FunctionComponent = () => {
    return (
        <div className={style.container}>
            <div className={style.box_first}>
                <h1>Value</h1>
            </div>
            <div className={style.box_second}>
                <Button title={'increment'} />

                <Button title={'reset'} />
            </div>
        </div>
    )
};