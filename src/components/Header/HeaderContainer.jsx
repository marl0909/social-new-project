import React from "react";
import {connect} from "react-redux";
import {Header} from "../../../../../../../WebstormProjects/social-new-project/app/src/components/Header/Header";
import {authUser} from "../../redux/auth-reducer";
import {compose} from "redux";

export class HeaderAPIContainer extends React.Component {
    componentDidMount() {
    }
    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        avatar: state.auth.avatar,
        isFetching: state.auth.isFetching,
    }
};

export const HeaderContainer = compose(
    connect(mapStateToProps, {}),
)(HeaderAPIContainer)

