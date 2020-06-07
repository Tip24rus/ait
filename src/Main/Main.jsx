import React from 'react';
import s from './Main.module.css';

const Main = (props) => {
    return(
        <div className={s.main}>
            <h1><span>TUK</span>-TUK</h1>
            <p>Здесь вы сможете найти сожителя или соседа для совместной аренды квартиры или комнаты.</p>
            <p>«TUK-TUK»— это интернет-проект по совместной аренде жилья.</p>
    </div>
    );
}

export default Main ;
