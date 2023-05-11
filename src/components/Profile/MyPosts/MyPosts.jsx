import React from "react";
import { Post } from "../../../../../../../../WebstormProjects/social-new-project/app/src/components/Profile/MyPosts/Post/Post";
import "../../../../../../../../WebstormProjects/social-new-project/app/src/components/Profile/MyPosts/MyPosts.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

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
            <Field component={Textarea} name={'newPostBody'} placeholder={'Enter your post'} validate={[required, maxLength10]}
                   className={"creating-post__area-of-text"} cols="100" rows="7" />
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'dialogAddPostForm'
})(AddPostForm)
