import React from "react";
import {addLike, addPost, removeLike, updateNewTextPost} from "../../../redux/profile-reducer";
import {MyPosts} from "../../../../../../../../WebstormProjects/social-new-project/app/src/components/Profile/MyPosts/MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postTextActual: state.profilePage.postTextActual,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost, addLike, removeLike})(MyPosts);
