import React from "react";
import style from './Button.module.css'

type ButtonType = { title?: string, onClick?: () => void, disable?: boolean }


export const Button: React.FunctionComponent<ButtonType> = (props:ButtonType) => {
    return (
        <button className={style.Style} disabled={props.disable} onClick={props.onClick}>{props.title}</button>
    )
}