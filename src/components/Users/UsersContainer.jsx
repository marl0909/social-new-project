import React from "react";
import {
    setCurrentPage,
    getUsers,
    followTo,
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import {compose} from "redux";
import {Users} from "./Users";


export class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setNumberOfCurrentPage = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= Math.ceil(this.props.totalUsers / this.props.pageSize)) {
            this.props.setCurrentPage(pageNumber);
            this.props.getUsers(pageNumber, this.props.pageSize)
        }
    }

    render() {

        return <>
            <SyncLoader
                style={{position: 'absolute', top: '50%', left: '50%'}}
                size={20}
                color={"#ce9009"}
                loading={this.props.isFetching}
                speedMultiplier={1.4}
                aria-label="Loading Spinner"
                data-testid="loader"
            />


            {!this.props.isFetching && <Users totalUsers={this.props.totalUsers}
                                              pageSize={this.props.pageSize}
                                              currentPage={this.props.currentPage}
                                              setNumberOfCurrentPage={this.setNumberOfCurrentPage}
                                              toggleFollowingProgress={this.props.toggleFollowingProgress}
                                              followToUser={this.props.followTo}
                                              users={this.props.users}
                                              followingInProgress={this.props.followingInProgress}/>}
        </>

    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export const UsersContainer = compose(
    connect(mapStateToProps, {setCurrentPage, getUsers, followTo,})
)(UsersAPIComponent);