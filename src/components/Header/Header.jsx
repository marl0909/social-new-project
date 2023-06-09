import React from "react";
import "./Header.css";
import {NavLink} from "react-router-dom";
import userDefaultPhoto from "../../assets/images/Default-welcomer.png"

export const Header = (props) => {
  return (
    <header className="header">
      <img className={"header__photo-website"} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
        <div className={"loginBlock"}>
            { props.isAuth ?
                <>
                  <p> {props.login} </p>
                  <img src={props.avatar ? props.avatar : userDefaultPhoto}/>
                </> :
            <NavLink to={'/login'}> Login</NavLink>}
        </div>
    </header>
  );
};
