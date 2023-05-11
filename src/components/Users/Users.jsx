import React from "react";
import "../../../../../../../WebstormProjects/social-new-project/app/src/components/Users/Users.css"
import {UserItem} from "../../../../../../../WebstormProjects/social-new-project/app/src/components/Users/UserItem/UserItem";
import userPhoto from "../../../../../../../WebstormProjects/social-new-project/app/src/assets/images/Default-welcomer.png";


export const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for(let i = 1; i < pagesCount + 1; i++) {
        pages.push(i);
    }

    return (
        <div className="users-area">
            <li className="users">
                {props.users.map((user) => <UserItem Item id={user.id} key={user.id} name={user.name}
                                                          avatar={user.photos.small ? user.photos.small : userPhoto}
                                                          description={user.description}
                                                          residenceCountry={user.residenceCountry}
                                                          residenceCity={user.residenceCity}
                                                          followed={user.followed}
                                                          followingInProgress={props.followingInProgress}
                                                          toggleFollowingProgress={props.toggleFollowingProgress}
                                                          followToUser={props.followToUser}/>)}
            </li>
            <div className={'pages-of-users'}>
                    <span className="material-symbols-outlined arrow_back"
                          onClick={() => {props.setNumberOfCurrentPage(props.currentPage - 1)}}>arrow_back_ios</span>
                {pages.map((num) => <span className={'pages-of-users__number' + (num === props.currentPage ? ' selectedPage' : '')}
                                          onClick={() => {props.setNumberOfCurrentPage(num)}} >{num}</span>)}
                <span className="material-symbols-outlined arrow_forward"
                      onClick={() => {props.setNumberOfCurrentPage(props.currentPage + 1)}}>arrow_forward_ios</span>
            </div>

        </div>
    )
}