import React from "react";
import style from "./Header.module.css"
import logo from './image.png'

function Header() {
    return (
        <header className={style.header}>
            <img
                src={logo}/>
        </header>
    );
}

export default Header;
