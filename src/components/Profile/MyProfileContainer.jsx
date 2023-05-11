import React from "react";
import {ProfileContainer} from "../../../../../../../WebstormProjects/social-new-project/app/src/components/Profile/ProfileContainer";
import SyncLoader from "react-spinners/SyncLoader";
import {Profile} from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {getMyStatus, getStatus, setMyProfile, setProfile, updateStatus} from "../../redux/profile-reducer";
import {MyPostsContainer} from "../../../../../../../WebstormProjects/social-new-project/app/src/components/Profile/MyPosts/MyPostsContainer";


export class MyProfileContainer extends React.Component {
    render() {
        return(
            <>
                <SyncLoader
                    style={{position: 'absolute', top: '50%', left: '50%'}}
                    size={20}
                    color={"#ce9009"}
                    loading={this.props.isFetching}
                    speedMultiplier={1.4}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />

                {!this.props.isFetching && <Profile userInfo={this.props.user} profileStatus={this.props.profileStatus}
                                                    updateStatus={this.props.updateStatus}/>}
                <MyPostsContainer/>
            </>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        user: state.profilePage.personalUser,
        profileStatus: state.profilePage.profileStatus,
        isFetching: state.profilePage.isFetching,
    }
};


export const MyProfile = compose(
    connect(mapStateToProps, {updateStatus, getStatus, getMyStatus}),
)(MyProfileContainer)