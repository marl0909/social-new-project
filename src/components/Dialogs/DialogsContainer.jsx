import React from "react";
import {sendMessage} from "../../redux/dialogs-reducer";
import {Dialogs} from './Dialogs';
import {connect} from "react-redux";
import {compose} from "redux";



const mapStateToProps = (state) => {
    return {
        personalPhoto: state.profilePage.personalUser.photos.small,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        messageTextActual: state.dialogsPage.messageTextActual,
    }
}

const DialogsContainerProps = (props) => {
    return(
        <Dialogs {...props}/>
    )
}

export const DialogsContainer = compose(
    connect(mapStateToProps, {sendMessage,}),
)(DialogsContainerProps)