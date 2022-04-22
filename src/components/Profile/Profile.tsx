import React from "react";
import style from "./Profile.module.css"

function Profile() {
    return (
        <div className={style.content}>
            <div>
                <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg"/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

