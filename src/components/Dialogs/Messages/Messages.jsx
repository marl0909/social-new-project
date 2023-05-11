import React, {useState} from "react";
import './Messages.css'
import {MessageItem} from "../MessageItem/MessageItem";



export const Messages = (props) => {

    return (
            <div className="messages-field__messages">

                {props.messages.map((message) => <MessageItem key={message.id} text={message.message}
                                                              author={message.author}
                                                              personalPhoto={props.personalPhoto}
                                                              friendPhoto={props.dialogs.find(dialog => dialog.id === Number(props.dialogId))?.photo}
                />)}
            </div>
    )
}
