import React from 'react';
import s from './Form.module.css'

let AreasSelect = ( props ) => {
    if ( props.id == props.currentId ) {
        return ( <option selected="selected" value={props.id}>{props.area.Title}</option> );
    }
    return ( <option value={props.id}>{props.area.Title}</option> );
}

let Form = ( props ) => {
    debugger;
    let AreasData = props.Areas.map( ( area, id ) => <AreasSelect area={area} id={id} currentId={props.Area}></AreasSelect> )

    let name = React.createRef();
    let sureName = React.createRef();
    let age = React.createRef();
    let sexMale = React.createRef();
    let sexFemale = React.createRef();
    let neighbourSexMale = React.createRef();
    let neighbourSexFemale = React.createRef();
    let neighbourSexNone = React.createRef();
    let loveAnimal = React.createRef();
    let notLoveAnimal = React.createRef();
    let anywayLoveAnimal = React.createRef();
    let yesSmoking = React.createRef();
    let noSmoking = React.createRef();
    let about = React.createRef();
    let house = React.createRef();
    let animal = React.createRef();
    let area = React.createRef();
    let updName = () => {
        return ( props.NewName( name.current.value ) )
    }
    let updSureName = () => {
        return ( props.NewSureName( sureName.current.value ) )
    }
    let updAge = () => {
        return ( props.NewAge( age.current.value ) )
    }
    let updSex = ( sex ) => {
        switch ( sex.currentTarget.id ) {
            case "male":
                return props.NewSex( "Мужской" )
            case "female":
                return props.NewSex( "Женский" )
        }
    }
    let updNeighborSex = ( sex ) => {
        switch ( sex.currentTarget.id ) {
            case "Nmale":
                return props.NewNeighborSex( "Мужской" )
            case "Nfemale":
                return props.NewNeighborSex( "Женский" )
            case "Nnone":
                return props.NewNeighborSex( "Не важно" )

        }
    }
    let updLoveAnimal = ( love ) => {
        switch ( love.currentTarget.id ) {
            case "Yes":
                return props.NewLoveToAnimals( "Положительное" )
            case "No":
                return props.NewLoveToAnimals( "Отрицательное" )
            default:
                return props.NewLoveToAnimals( "Нейтральное" )

        }
    }
    let updSmoking = ( smoke ) => {
        switch ( smoke.currentTarget.id ) {
            case "Yes":
                return props.NewSmoking( "Нейтральное" )
            case "No":
                return props.NewSmoking( "Отрицательное" )
        }
    }
    let updAbout = ( message ) => {
        return ( props.NewAbout( about.current.value ) )
    }
    let updHouse = ( house ) => {
        if ( house.currentTarget.checked ) {
            return props.NewHouse( "Да" )
        } else {
            return props.NewHouse( "Нет" )

        }
    }
    let updAnimal = ( animal ) => {
        if ( animal.currentTarget.checked ) {
            return props.NewAnimal( "Да" )
        } else {
            return props.NewAnimal( "Нет" )

        }
    }
    let updArea = () => {
        return props.NewArea( area.current.selectedIndex )
    }
    return ( <div>
        <div className={s.button}>
            <button autofocus="autofocus" onClick={props.AddPost}>Создать анкету</button>
        </div>
        <div className={s.form}>
            <div className={s.left}>
                <div className={s.fild}>
                    <div className={s.label}>Фамилия</div>
                    <input placeholder="Фамилия" type="text" ref={sureName} onChange={updSureName} value={props.SureName}/>
                </div>
                <div className={s.fild}>
                    <div className={s.label}>Имя</div>
                    <input placeholder="Имя" type="text" ref={name} onChange={updName} value={props.Name}/>
                </div>
                <div className={s.fild}>
                    <div className={s.label}>Возраст</div>
                    <input placeholder="Возраст" type="number" min="18" ref={age} onChange={updAge} value={props.Age}/>
                </div>
                <div className={s.fild}>
                    <div className={s.label}>Пол</div>
                    <div className={s.radio}>
                        <div className={s.container}>
                            <span>женский</span>
                            <input id="female" ref={sexFemale} onChange={updSex} type="radio" name="my_sex"/>
                        </div>
                        <div className={s.container}>
                            <span>мужской</span>
                            <input id="male" ref={sexMale} onChange={updSex} type="radio" name="my_sex"/>
                        </div>
                    </div>
                </div>
                <div className={s.fild}>
                    <div className={s.label}>Пол сожителя</div>
                    <div className={s.radio}>
                        <div className={s.radio,
                            s.radio_trio}>
                            <span>мужской</span>
                            <input id="Nmale" ref={neighbourSexMale} onChange={updNeighborSex} type="radio" name="neighbour
_sex"/>
                        </div>
                        <div className={s.radio,
                            s.radio_trio}>
                            <span>не важно</span>
                            <input id="Nnone" ref={neighbourSexNone} onChange={updNeighborSex} type="radio" name="neighbour
_sex"/>

                        </div>
                        <div className={s.radio,
                            s.radio_trio}>
                            <span>женский</span>
                            <input id="Nfemale" ref={neighbourSexFemale} onChange={updNeighborSex} type="radio" name="neighbour
_sex"/>
                        </div>
                    </div>
                </div>
                <div className={s.fild}>
                    <div className={s.label}>Наличие квартиры</div>
                    <input ref={house} onChange={updHouse} type="checkbox" className={s.check}/>
                </div>
            </div>
            <div className={s.right}>
                <div className={s.fild}>
                    <div className={s.label}>Район в котором хотите жить</div>
                    <select ref={area} onChange={updArea} name="" id="">
                        {AreasData}
                    </select>
                </div>
                <div className={s.fild}>
                    <div className={s.label}>Наличие животных</div>
                    <input ref={animal} onChange={updAnimal} type="checkbox" className={s.check}/>
                </div>
                <div className={s.fild}>
                    <div className={s.label}>Отношение к наличию домашних животных в доме</div>
                    <div className={s.radio}>
                        <div className={s.container}>
                            <span>Положительное</span>
                            <input id="Yes" ref={loveAnimal} onChange={updLoveAnimal} type="radio" name="animal"/>
                        </div>
                        <div className={s.container}>
                            <span>Нейтральное</span>
                            <input ref={anywayLoveAnimal} onChange={updLoveAnimal} type="radio" name="animal"/>
                        </div>
                        <div className={s.container}>
                            <span>Отрицательное</span>
                            <input id="No" ref={notLoveAnimal} onChange={updLoveAnimal} type="radio" name="animal"/>
                        </div>
                    </div>
                </div>
                <div className={s.fild}>
                    <div className={s.label}>Отношение к курящему сожителю</div>
                    <div className={s.radio}>
                        <div className={s.container}>
                            <span>Против курения</span>
                            <input ref={noSmoking} onChange={updSmoking} id="No" type="radio" name="smoking"/>
                        </div>
                        <div className={s.container}>
                            <span>Нейтрален</span>
                            <input ref={yesSmoking} onChange={updSmoking} id="Yes" type="radio" name="smoking"/>
                        </div>

                    </div>
                </div>
                <div className={s.fild}>
                    <div className={s.label}>О себе:</div>
                    <input placeholder="О себе" ref={about} onChange={updAbout} type="text" Value={props.About}/>
                </div>
                <div className={s.fild}>
                    <div className={s.label}>Фото:</div>
                    <input type="file"/>
                </div>
            </div>
        </div>
    </div> );
}
export default Form;
