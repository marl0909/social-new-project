import React from "react";
import "./App.css";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {MyProfile, MyProfileContainer} from "./components/Profile/MyProfileContainer";
import {Login, LoginContainer} from "./components/Login/Login";
import {ProfileContainer} from "./components/Profile/ProfileContainer";


export const App = (props) => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer/>
          <Navbar state={props.state.sideBar.friends}/>
          <div className="content app-wrapper__content">
            <Routes>
              <Route path={`/profile/:userId?`}  element={<ProfileContainer />}/>
              <Route path={`/my-profile`} element={<MyProfile />}/>
              <Route path="/dialogs/:userId?"
                     element={<DialogsContainer />}/>
              <Route path="/users" element={<UsersContainer/>}/>
              <Route path="/settings" element={<Settings/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>

          </div>

        </div>
      </BrowserRouter>
  );
}

