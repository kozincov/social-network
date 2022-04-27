import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import style from "./App.module.css"
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className={style.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={style.app_wrapper_content}>
                <Routes>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/message'} element={<Dialogs/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
