import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {

    let path = `/dialogs/${props.id}`

    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (
        <div className={style.dialog}>{props.message}</div>
    )
}

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Nikita'},
        {id: 3, name: 'Anton'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'what`s up'},
        {id: 3, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)

    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.message}>
                {messagesElements}
            </div>
        </div>
    );
};