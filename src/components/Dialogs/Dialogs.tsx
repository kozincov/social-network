import React from 'react';
import style from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <div className={style.dialog}>
                    Dima
                </div>
                <div className={style.dialog}>
                    Nikita
                </div>
                <div className={style.dialog}>
                    Anton
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