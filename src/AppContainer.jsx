import React from "react";
import {App} from "./App";
import {compose} from "redux";
import {authUser} from "./redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "./api/api";

const mapStateToProps = (state) => {
    return {
        state: state
    }
};

export class AppAPIContainer extends React.Component {
    componentDidMount() {
        this.props.authUser();
    };

    render() {
        return (
            <App state={this.props.state}/>
        )
    };
};


export const AppContainer = compose(
    connect(mapStateToProps, {authUser}),
)(AppAPIContainer);