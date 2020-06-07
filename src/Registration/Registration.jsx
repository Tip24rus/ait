import React from 'react';
import s from './Registration.module.css'
let Registration = (props) =>{
    return(
            <div className={s.main}>
                <div className={s.field, s.login}>
                    <p>Логин</p>
                    <input type="text" />
                </div>
                <div className={s.field}>
                    <p>Пароль</p>
                    <input type="password" />
                </div>

                <button>Зарегистрироваться</button>
            </div>
    );
}

export default Registration
