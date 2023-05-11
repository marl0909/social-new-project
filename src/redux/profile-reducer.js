import {authAPI, profileAPI} from "../api/api";
import userPhoto5 from '../../../../../../WebstormProjects/social-new-project/app/src/assets/images/userPhoto5.jpg'
import userPhoto3 from '../../../../../../WebstormProjects/social-new-project/app/src/assets/images/userPhoto3.jpg'
import userPhoto8 from '../../../../../../WebstormProjects/social-new-project/app/src/assets/images/userPhoto8.jpg'

const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const ADD_LIKE = 'ADD_LIKE';
const REMOVE_LIKE = 'REMOVE_LIKE';

const initialState = {
    personalUser: {
        aboutMe: 'email@gmail.com',
        contacts: {
            facebook: 'facebook.com',
            website: 'linkedin.com',
            twitter: 'twitter.com',
            instagram: 'instagram.com',
            youtube: 'youtube.com',
            github: 'github.com',
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'Hi! I have a solid understanding of front-end fundamentals such as JS, HTML, and CSS.' +
            ' Also, I´m learning React, Redux to become a Front-end Developer.' +
            ' I already have some success in this, so I am ready to apply my knowledge on some interesting projects.' +
            ' My passions lie in physics and mathematics, which I not only study, but also love to teach to others.' +
            ' I\'m always eager to learn and grow in these fields, so I\'m open to new challenges and opportunities. Let\'s connect!',
        fullName: "Maria Voloshyna",
        userId: null,
        photos: {
            small: userPhoto5,
            large: userPhoto5,
        }
    },
    user: {},
    posts: [
        {id: 1, messages: "\"🌟 Exciting News Alert! 🌟\n" +
                "\n" +
                "We are thrilled to announce the launch of our brand-new feature: Live Video Streaming! 🎥🔴\n" +
                "\n" +
                "Now you can share your special moments in real-time with your friends and followers. Whether it's a live concert, a cooking session, or simply a heartfelt chat, go live and let the world be a part of your experience.\n" +
                "\n" +
                "Don't miss out on this incredible opportunity to connect, engage, and share your world like never before. Update your app today and start streaming live!\n" +
                "\n" +
                "#LiveStreaming #ConnectAndShare #ExcitingUpdates\"", likeCount: 12, photo: userPhoto3, author: 'Alex'},
        {id: 2, messages: "📢 Important Announcement 📢\n" +
                "\n" +
                "Dear Community,\n" +
                "\n" +
                "We are excited to introduce a major update to our platform! 🎉🚀 Starting today, we are rolling out a revamped user interface that promises a smoother, more intuitive experience. 💻✨\n" +
                "\n" +
                "Key highlights of the update include:\n" +
                "✅ Enhanced navigation for seamless browsing\n" +
                "✅ Refreshed design for a modern and visually appealing look\n" +
                "✅ Improved performance and faster load times\n" +
                "✅ Exciting new features coming soon!\n" +
                "\n" +
                "We value your feedback and would love to hear your thoughts on the update. Your input plays a crucial role in shaping our platform. Thank you for being a part of our journey!\n" +
                "\n" +
                "#PlatformUpdate #EnhancedExperience #UserFeedback\"", likeCount: 10, photo: userPhoto8, author: 'Lina'}
    ],
    profileStatus: '',
    isFetching: false,
};


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const postBody = action.postBody;
            return {
                ...state,
                posts:
                    [...state.posts, {
                        id: state.posts.slice(-1)[0].id + 1,
                        messages: postBody,
                        likeCount: 0,
                        photo: state.personalUser.photos?.small,
                        author: state.personalUser.fullName
                    }]
            };
        }
        case SET_PROFILE_USER: {
            return {
                ...state,
                user: {...action.user},
            }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case SET_PROFILE_STATUS: {
            return {...state, profileStatus: action.status }
        }
        case ADD_LIKE: {
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.id) p.likeCount++
                    return p
                }),
            }
        }
        case REMOVE_LIKE: {
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.id) p.likeCount--
                    return p
                }),
            }
        }
        default:
            return state;
    };
};

export const addPost = (postBody) => ({type: ADD_POST, postBody});
export const setProfileUser = (user) => ({type: SET_PROFILE_USER, user});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS , status});
export const addLike = (id) => ({type: ADD_LIKE, id})
export const removeLike = (id) => ({type: REMOVE_LIKE, id})

export const setProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setProfileUser(data));
    });
    getStatus(userId)(dispatch);
};

export const setMyProfile = () => (dispatch) => {
    authAPI.authUser().then(data => {
        profileAPI.getProfile(data.data.id).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setProfileUser(data));
            profileAPI.getProfileStatus(data.userId).then(data => {
                dispatch(setProfileStatus(data));
            });
        });
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getProfileStatus(userId).then(data => {
        dispatch(setProfileStatus(data));
    });
};

export const getMyStatus = () => (dispatch) => {
    authAPI.authUser().then(data => {
        profileAPI.getProfileStatus(data.data.id).then(data => {
            dispatch(setProfileStatus(data));
        });
    })
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateProfileStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status));
        };
    });
};


