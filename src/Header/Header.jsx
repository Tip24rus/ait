import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

let Header = () => {
    return ( <header>
        <div>
            <NavLink to="/">
                <h1>
                    <span>TUK</span>-TUK</h1>
            </NavLink>
        </div>
        <div className={s.nav}>
            <audio controls="controls" autoplay="autoplay">
                <source src="https://zvukipro.com/uploads/files/2019-03/1553777631_door-knock-2_mjycxfvo.mp3" type="audio/ogg; codecs=vorbis"/>
            </audio>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/form">Создать анкету</NavLink>
            <NavLink to="/neighbors">Найти сожителя</NavLink>
            <NavLink to="/registration">Регистрация</NavLink>
        </div>
    </header> );

}

export default Header;
