import React from "react";
import "./Profile.css";
import userPhoto from "../../assets/images/Default-welcomer.png";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
    const changerOfContacts = (contacts) => {
        delete contacts.vk;
        delete contacts.mainLink;
        for (const media in contacts) {
            if(!contacts[media]) {
                delete contacts[media]
            }
        }
        return contacts;
    }

    return (
        <div>
            <ProfileInfo userInfo={props.userInfo} id={props.userInfo.userId} name={props.userInfo.fullName}
                         avatar={props.userInfo.photos?.small ? props.userInfo.photos.small : userPhoto} description={props.userInfo.aboutMe}
                         islookingJob={props.userInfo.lookingForAJob} skills = {props.userInfo.lookingForAJobDescription}
                         contacts={props.userInfo.contacts?.twitter ? changerOfContacts(props.userInfo.contacts) : {}}
                         status={props.profileStatus} updateStatus={props.updateStatus}/>

        </div>
    );
};
