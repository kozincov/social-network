import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {

    let posts = [
        {id: 1, message: 'hello', likesCount: 10},
        {id: 2, message: `It's my first post`, likesCount: 10}
    ]

    let postsElements = posts.map(m => <Post message={m.message} countLike={m.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;

