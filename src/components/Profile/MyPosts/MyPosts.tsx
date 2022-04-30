import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {

    let postData = [
        {id: 1, message: 'hello', likesCount: 10},
        {id: 2, message: `It's my first post`, likesCount: 10}
    ]

    return (
        <div className={style.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message={postData[0].message} countLike={postData[0].likesCount}/>
                <Post message={postData[1].message} countLike={postData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;

