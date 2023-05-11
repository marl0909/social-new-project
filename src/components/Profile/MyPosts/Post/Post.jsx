import React, {useEffect, useState} from "react";

import "../../../../../../../../../WebstormProjects/social-new-project/app/src/components/Profile/MyPosts/Post/Post.css";

export const Post = (props) => {
    const [isLiked, setIsLiked] = useState(false);

    const setLike = () => {
        isLiked ? props.removeLike(props.id) : props.addLike(props.id);
        setIsLiked(!isLiked);
    }

  return (
    <div className="post">
        <div className="post-person-info">
            <img
                className="post-person-info__ava"
                src={props.avatar}
            />
            <p className="post-person-info__name">
                {props.author}
            </p>
        </div>
        <div className="post__message">
            {props.massage}
        </div>
      <div className="post__like-count">
          <p>{props.likeCount}</p>
        <span style={{cursor: 'pointer'}} onClick={setLike} className={"material-symbols-outlined" + (isLiked ? ' liked' : '')}>thumb_up</span>
      </div>
    </div>
  );
};
