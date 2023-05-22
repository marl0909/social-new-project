import React, {useEffect, useState} from "react";
import "./Dialogs.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {useParams} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Messages} from "./Messages/Messages";
import {required} from "../../utilits/validators/validators";



export const Dialogs = (props) => {
    const [isOpenChat, changeChatCondition] = useState(false);

    const sendMessage = (values) => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = '';
    }

    const openChat = () => {
        changeChatCondition(true);
        console.log('dddd');
    }

    const closeChat = () => {
        changeChatCondition(false);
        console.log('dddd');
    }

    const dialogId = useParams();
    console.log(isOpenChat)

    return (
        <div className="dialogs">
            <div className={"dialogs-field" + (isOpenChat ? '' : ' opened')}>
                {props.dialogs.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}
                                                           photo={dialog?.photo} openChat = {openChat}/>)}
            </div>
            { dialogId?.userId &&
            <div className={"messages-field" + (isOpenChat ? ' opened' : '')}>
                <Messages dialogId={dialogId.userId} dialogs={props.dialogs} messages={props.messages} personalPhoto={props.personalPhoto}/>
                <AddMessageReduxForm onSubmit={sendMessage}/>
            </div> }
        </div>
    )
}

export const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="messages-field__new-message-area">
            <Field component={'textarea'} name={'newMessageBody'} validate={[required]} placeholder={'Enter your message'}
                   className="messages-field__new-message-text"
                   cols="80" rows="4"></Field>
            <button className="send_message">
                <span className={'material-symbols-outlined'}>send</span>
            </button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)