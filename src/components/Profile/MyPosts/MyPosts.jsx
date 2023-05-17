import React from "react";
import "./MyPosts.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utilits/validators/validators";
import {Post} from "./Post/Post";

const maxLength300 = maxLengthCreator(300)

export const MyPosts = (props) => {
    const addPost = (values) => {
        props.addPost(values.newPostBody);
        values.newPostBody = '';
    }
  return (
    <div className={"post-area"}>
      <AddPostReduxForm onSubmit={addPost} />
      <div className="my-posts">
          {props.posts.map((post) => <Post  id={post.id} massage={post.messages} likeCount={post.likeCount} avatar={post?.photo}
                                            author={post.author} addLike={props.addLike} removeLike={props.removeLike}/>)}
      </div>
    </div>
  );
};

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="creating-post">
            <div  className="creating-post__header">
                <button className="creating-post__btn">Post</button>
            </div>
            <Field component={Textarea} name={'newPostBody'} placeholder={'Enter your post'} validate={[required, maxLength300]}/>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'dialogAddPostForm'
})(AddPostForm)
