import React from "react";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div>
            <div>
                <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;

