import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import style from "./App.module.css"
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className={style.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={style.app_wrapper_content}>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
