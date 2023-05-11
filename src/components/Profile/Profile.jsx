import React from "react";
import "../../../../../../../WebstormProjects/social-new-project/app/src/components/Profile/Profile.css";
import {ProfileInfo} from "../../../../../../../WebstormProjects/social-new-project/app/src/components/Profile/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "../../../../../../../WebstormProjects/social-new-project/app/src/components/Profile/MyPosts/MyPostsContainer";
import userPhoto from "../../../../../../../WebstormProjects/social-new-project/app/src/assets/images/Default-welcomer.png";

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
