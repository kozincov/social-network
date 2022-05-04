import React from 'react';
import style from './../Dialogs.module.css'

export type MessageType = {
    id: number
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={style.dialog}>{props.message}</div>
    )
}
