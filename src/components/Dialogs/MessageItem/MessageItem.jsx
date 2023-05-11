import React from "react";
import { useLayoutEffect, useRef } from "react";
import "./MessageItem.css"
import userPhoto from '../../../assets/images/Default-welcomer.png'


export const MessageItem = (props) => {
    const massageLastRef = useRef(null);
    useLayoutEffect(() => {
        massageLastRef.current.scrollIntoView();
    }, []);

    return (
        <div className="messages-field-content" ref={massageLastRef}>
            <div className={"messages-field-content__item theme" + (props.author ? "" : " another")}>
                {props.text}
            </div>
            <img className="messages-field-content__photo"
                 src={(props.author ? props.personalPhoto : (props.friendPhoto ? props.friendPhoto : userPhoto))} alt=""/>
        </div>

    )
}

