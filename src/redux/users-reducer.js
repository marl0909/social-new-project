import {usersAPI} from "../api/api";

const FOLLOW_TO_USER = "FOLLOW_TO_USER";
const SET_USERS = "SHOW_MORE_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

const initialState = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_TO_USER: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            console.log(action.currentPage);
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsers: action.totalCount / 1000}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followToUser = (userId) => ({type: FOLLOW_TO_USER, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    })
}

export const followTo = (userId, isFollowed) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    (isFollowed ? usersAPI.setUnFollow(userId) : usersAPI.setFollow(userId)).then(data => {
        if(data.resultCode === 0) {
            dispatch(followToUser(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
}