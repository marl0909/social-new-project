import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from 'redux-thunk'
import {reducer as formReducer} from "redux-form";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sidebarReducer,
    auth: authReducer,
    form: formReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))


window.store = store;