import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
import {AppContainer} from "./AppContainer"
import {authUser} from "./redux/auth-reducer";


authUser()


ReactDOM.render(
    <Provider store={store}>
        <AppContainer state={store.getState()}/>
    </Provider>
    , document.getElementById("root")
);



