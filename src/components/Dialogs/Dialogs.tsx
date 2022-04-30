import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/1'}>Dima</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/2'}>Nikita</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/3'}>Anton</NavLink>
                </div>
            </div>
            <div className={style.message}>
                <div className={style.dialog}>Hi</div>
                <div className={style.dialog}>what`s up</div>
                <div className={style.dialog}>Yo</div>
            </div>
        </div>
    );
};