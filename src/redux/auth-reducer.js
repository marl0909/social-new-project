import {authAPI, profileAPI} from "../api/api";
// import defaultUserPhoto from "../../assets/images/Default-welcomer.png";
import React from "react";
import {setProfileUser, toggleIsFetching} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    avatar: null,
    isFetching: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                avatar: action.avatar,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, avatar) => ({type: SET_USER_DATA, data: {userId, email, login}, avatar});

export const authUser = () => (dispatch) => {
    authAPI.authUser().then(data => {
        if (data.resultCode === 0) {
            const {id, email, login} = data.data;
            profileAPI.getProfile(data.data.id).then(data => {
                const avatar = data.photos?.small;
                dispatch(setAuthUserData(id, email, login, avatar));
            })
        }
    })
}

export const logIn = (formData) => (dispatch) => {

    authAPI.AuthOnServer(formData).then(response => {
        console.log(response);
        if (response.resultCode === 0) {
            console.log(2233)
            authAPI.authUser().then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    profileAPI.getProfile(data.data.id).then(data => {
                        const avatar = data.photos?.small;
                        dispatch(setAuthUserData(id, email, login, avatar));
                    })
                }
            })
        }
    })
}


