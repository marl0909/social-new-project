import React from "react";
import '../../../../../../../WebstormProjects/social-new-project/app/src/components/Settings/Settings.css'

export const Settings = () => {
    return (
        <div className={'settings-content'}>
            <div className={'switch'}>
                <span>Do you want to enable Two-Factor Authentication?</span>
                <input type={'checkbox'}/>
            </div>
            <div className={'switch'}>
                <span>Would you like to receive Email Notifications?</span>
                <input type={'checkbox'}/>
            </div>
            <div className={'switch'}>
                <span>Should your Online Status be displayed?</span>
                <input type={'checkbox'}/>
            </div>
            <div className={'switch'}>
                <span>Do you allow Geolocation?</span>
                <input type={'checkbox'}/>
            </div>
            <div className={'switch'}>
                <span>Do you want to enable Dark Mode?</span>
                <input type={'checkbox'}/>
            </div>
            <div className={'switch'}>
                <span>Should your Birthdate be displayed?</span>
                <input type={'checkbox'}/>
            </div>
            <div className={'switch'}>
                <span>Would you like to receive Friend Requests?</span>
                <input type={'checkbox'}/>
            </div>
        </div>
    )
}