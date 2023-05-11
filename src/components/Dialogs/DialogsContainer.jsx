import React from "react";
import {sendMessage} from "../../redux/dialogs-reducer";
import {Dialogs} from "../../../../../../../WebstormProjects/social-new-project/app/src/components/Dialogs/Dialogs";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
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