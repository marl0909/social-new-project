import axios from "axios";

async function getPromiseFromAPI(url) {

    const promise = await axios.get(url);
    const {data} = promise;

    return data;
}

const res = await getPromiseFromAPI('server.php?cur=now');
console.log(res)

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "d9233da4-e3e8-4980-9c8b-5950d2415244"}
});


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {return response.data});
    },
    setFollow(userId) {
        return instance.post(`follow/${userId}`).then(response => {return response.data});
    },
    setUnFollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {return response.data});
    }
};

export const authAPI = {
    authUser() {
        return instance.get(`auth/me`).then(response => {return response.data});
    },
    AuthOnServer(data) {
        return instance.post(`auth/login`, { data: data }).then(response => {return response.data});
    },
    UnFollowRequestedUser() {
        return instance.delete(`auth/login`).then(response => {return response.data});
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {return response.data});
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => {return response.data});
    },
    updateProfileStatus(status) {
        return instance.put('/profile/status', { status: status })
    }
};



export const securityAPI = {};

