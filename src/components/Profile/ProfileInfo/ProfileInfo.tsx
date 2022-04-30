import React from "react";
import style from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg"/>
            </div>
            <div className={style.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;

