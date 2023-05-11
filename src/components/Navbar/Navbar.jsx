import React, {useState} from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="nav">
        <div className={"nav__container" + (isOpen ? ' open' : '')}>
          <div className="nav__container__item">
            <NavLink to={"/my-profile"}>Profile</NavLink>
          </div>
          <div className="nav__container__item">
            <NavLink to="/dialogs">Messages</NavLink>
          </div>
          <div className="nav__container__item" >
            <NavLink to="/users">Users</NavLink>
          </div>
            <div className="nav__container__item" >
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </div>
      <div onClick={() => setIsOpen(!isOpen)} className={'nav-open'}>
          {!isOpen ? <span className="material-symbols-outlined">chevron_right</span> :
              <span  className="material-symbols-outlined">chevron_left</span>
          }
      </div>
    </nav>
  );
};
