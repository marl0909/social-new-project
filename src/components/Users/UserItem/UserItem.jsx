import React from "react";
import "../../../../../../../../WebstormProjects/social-new-project/app/src/components/Users/UserItem/UserItem.css"
import {NavLink} from "react-router-dom";


export const UserItem = (props) => {
    const followToUser = () => {
        props.followToUser(props.id, props.followed)
    };

    return (
        <div className="user-item" >
            <NavLink to={'/profile/' + props.id}>
                <img src={props.avatar} />
            </NavLink>

            <div className='user-item__info'>
                <h4>{props.name}</h4>
                <span>{props.description}</span>
            </div>
            <div className='user-item__residence'>
                <p>{props.residenceCountry} {props.residenceCity}</p>
            </div>
            <div className="user-item__follow" >
                    <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={followToUser} className={`user-item__btn-follow ${props.followed ? '' : 'not-'}followed`}>
                        Follow{props.followed ? 'ed' : ''}
                    </button>
            </div>
        </div>
    )
}