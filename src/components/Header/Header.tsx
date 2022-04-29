import React from "react";
import style from "./Header.module.css"
import logo from './image.png'

export const Header = () => {
    return (
        <header className={style.header}>
            <img
                src={logo}/>
        </header>
    );
}

