import React from "react";
import "./DialogsItem.css"
import {NavLink} from "react-router-dom";
import userPhoto from './../../../assets/images/Default-welcomer.png'

export const DialogItem = (props) => {


    const path = "/dialogs/" + props.id;


    return (
        <NavLink className={"dialogs-field-item"} to={path}>
            <div className="dialogs-field-item-content">
                <img className="dialogs-field-item-content__photo"
                     src={props.photo ? props.photo : userPhoto} alt=""/>
                <p className="dialogs-field-item-content__name">
                    {props.name}
                </p>
            </div>
        </NavLink>

    )
}

