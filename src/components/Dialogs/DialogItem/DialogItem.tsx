import React from 'react';
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

 export const DialogItem = (props: any) => {

    let path = `/dialogs/${props.id}`

    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
