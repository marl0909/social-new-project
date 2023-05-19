import React from "react";
import './SettingItem.css'

export const SettingItem = (props) => {
    return (
        <div className={'switch'}>
            <span>{props.text}</span>
            <input type={'checkbox'}/>
        </div>
        )

}