import React from 'react';
import s from './Neighbors.module.css';

const MessHelp = ( props ) => {
    return ( <div className={s.list}>
        <div className={s.questionnaire}>
            <h3>{props.post.Name}
                {props.post.SureName}. [{props.post.Age}] {props.post.Area}</h3>
            <div className={s.profile}>
                <div className={s.photo}>
                    <img src={props.post.img} alt=""/>
                </div>
                <div className={s.info}>
                    <p>Наличие жилья: {props.post.House}</p>
                    <p>Наличие животных: {props.post.Animal}</p>
                    <p>Пол: {props.post.Sex}</p>
                    <p>Ищу: {props.post.NeighbourSex}</p>
                    <p>Отношение к животным: {props.post.LoveToAnimals}</p>
                    <p>Отношение к курению: {props.post.Smoking}</p>
                    <p>О себе: {props.post.About}</p>
                </div>
            </div>
        </div>
    </div> );
}

const Mess = ( props ) => {
    switch ( props.filterType ) {
        case "Пол":
            switch ( props.filter ) {
                case 0:
                    return ( <MessHelp post={props.post}/> );
                case 1:
                    {
                        if ( props.post.Sex == "Мужской" ) {
                            return <MessHelp post={props.post}/>
                        } else {
                            return null
                        }
                    }
                case 2:
                    if ( props.post.Sex == "Женский" ) {
                        return <MessHelp post={props.post}/>
                    } else {
                        return null
                    }

                default:
                    {
                        return null
                    }

            }
        case "Район":
            {
                debugger;
                if ( props.filter == 0 ) {
                    return <MessHelp post={props.post}/>
                } else {
                    if ( props.post.Area == props.Areas[ props.filter ].Title ) {
                        return <MessHelp post={props.post}/>
                    } else 
                        return null

                }
            }
        default:
            return <MessHelp post={props.post}/>

    }
}
let AreasSelect = ( props ) => {
    if ( props.id == props.currentId ) {
        return ( <option selected="selected" value={props.id}>{props.area.Title}</option> );
    }
    return ( <option value={props.id}>{props.area.Title}</option> );
}
let Neighbors = ( props ) => {
    let check = React.createRef();
    let checkArea = React.createRef();
    let AreasData = props.Areas.map( ( area, id ) => <AreasSelect area={area} id={id} currentId={props.filter}/> )
    let PostsData = props.posts.map( ( posts ) => <Mess post={posts} filterType={props.filterType} filter={props.filter} Areas={props.Areas}/> )
    let updFilterSex = () => {
        return props.NewFilter( check.current.selectedIndex, "Пол" )

    }
    let updFilterArea = () => {
        return props.NewFilter( checkArea.current.selectedIndex, "Район" )
    }
    return ( <div className={s.main}>
        <div className={s.wrapper}>
            <div className={s.filter}>
                <div className={s.left}>
                    <div className={s.region}>
                        <span>Город</span>
                        <select name="" id="">
                            <option value="">Красноярск</option>
                        </select>
                    </div>
                    <div className={s.area}>
                        <span >Район</span>
                        <select ref={checkArea} onChange={updFilterArea} name="" id="">
                            {AreasData}
                        </select>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.sex}>
                        <span >Пол</span>
                        <select ref={check} onChange={updFilterSex} name="filter_sex" id="filter_sex">
                            <option value="">---</option>
                            <option value="">Муж.</option>
                            <option value="">Жен.</option>
                        </select>
                    </div>
                </div>
            </div>
            {PostsData}
        </div>
    </div> );
}
export default Neighbors;
