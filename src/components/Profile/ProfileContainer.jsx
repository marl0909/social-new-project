import React from "react";
import {connect} from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import {setMyProfile, setProfile, updateStatus, getStatus, getMyStatus} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {WithAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";

export class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        if(this.props.router.params.userId) {
            this.props.setProfile(this.props.router.params.userId);
            this.props.getStatus(this.props.router.params.userId);
        } else {
            this.props.setMyProfile();
            this.props.getMyStatus();
        }
    }

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
            </>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        user: state.profilePage.user,
        profileStatus: state.profilePage.profileStatus,
        isFetching: state.profilePage.isFetching,
    }
};


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export const ProfileContainer = compose(
    connect(mapStateToProps, {setProfile, setMyProfile, updateStatus, getStatus, getMyStatus}),
    withRouter,
)(ProfileAPIComponent)