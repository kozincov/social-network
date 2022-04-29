import React from 'react';
import './App.module.css';
import style from "./App.module.css"
import {Route, Routes} from "react-router-dom";
import {Header, Music, Navbar, News, Settings} from "./components";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className={style.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={style.app_wrapper_content}>
                <Routes>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/message'} element={<Dialogs/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
