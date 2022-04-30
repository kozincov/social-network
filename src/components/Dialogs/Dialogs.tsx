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

    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Nikita'},
        {id: 3, name: 'Anton'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'what`s up'},
        {id: 3, message: 'Yo'}
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={style.message}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
};