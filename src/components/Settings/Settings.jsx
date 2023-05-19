import React from "react";
import './Settings.css'
import {SettingItem} from "./SettingItem/SettingItem";

export const Settings = () => {
    return (
        <div className={'settings-content'}>
            <SettingItem text={'Do you want to enable Two-Factor Authentication?'} />
            <SettingItem text={'Should your Online Status be displayed?'} />
            <SettingItem text={'Do you allow Geolocation?'} />
            <SettingItem text={'Do you want to enable Dark Mode?'} />
            <SettingItem text={'Should your Birthdate be displayed?'} />
            <SettingItem text={'Would you like to receive Friend Requests?'} />
        </div>
    )
}