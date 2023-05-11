import React from "react";
import {addLike, addPost, removeLike} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postTextActual: state.profilePage.postTextActual,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost, addLike, removeLike})(MyPosts);
