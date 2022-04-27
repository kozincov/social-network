import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to={'/profile'} className={({isActive}) => isActive ? style.activeLink : style.item}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/message'} className={({isActive}) => isActive ? style.activeLink : style.item}>Message</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/news'} className={({isActive}) => isActive ? style.activeLink : style.item}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/music'} className={({isActive}) => isActive ? style.activeLink : style.item}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/settings'} className={({isActive}) => isActive ? style.activeLink : style.item}>Settings</NavLink>
            </div>

        </nav>
    );
}

export default Navbar;

