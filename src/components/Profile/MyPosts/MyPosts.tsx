import React from "react";
import style from "./MyPosts.module.css"

function MyPosts() {
    return (
        <div>
            My posts
            <div className={style.item}>
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
    );
}

export default MyPosts;

