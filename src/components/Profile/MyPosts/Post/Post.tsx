import React from "react";
import style from "./Post.module.css"

function Post(props:any) {
    return (
        <div className={style.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pvx6841UOCAy0W6MEd-CNcJrGeDQung_Tg&usqp=CAU"/>
            {props.message}
            <div>
                <span>likes</span>
            </div>
        </div>
    );
}

export default Post;

