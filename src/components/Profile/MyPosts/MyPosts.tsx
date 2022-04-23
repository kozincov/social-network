import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My posts
            <div className={style.item}>
                New post
            </div>
            <div>
                <Post message={'hello'} countLike={15}/>
                <Post message={`It's my first post`} countLike={10}/>
            </div>
        </div>
    );
}

export default MyPosts;

