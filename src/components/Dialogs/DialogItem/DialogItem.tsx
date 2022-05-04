import React from 'react';
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    id: number
    name: string
}

 export const DialogItem = (props: DialogItemType) => {

    let path = `/dialogs/${props.id}`

    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
