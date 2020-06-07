import React from 'react';
import Form from './Form.jsx'
import { connect } from 'react-redux'
import {
    NewName,
    NewSureName,
    NewAge,
    AddPost,
    NewSex,
    NewNeighborSex,
    NewLoveToAnimals,
    NewAbout,
    NewSmoking,
    NewHouse,
    NewAnimal,
    NewArea
} from '../Redux/formReducer.js'

let mapStateToProps = ( state ) => {
    debugger;
    return {
        Area: state.formPage.Area,
        Areas: state.formPage.areas,
        Name: state.formPage.Name,
        SureName: state.formPage.SureName,
        Age: state.formPage.Age,
        About: state.formPage.About
    }
}
let mapDispatchToProps = ( dispatch ) => {
    return {}
}
let FormContainer = connect( mapStateToProps, {
    NewName,
    NewSureName,
    NewAge,
    NewSex,
    NewNeighborSex,
    NewLoveToAnimals,
    NewSmoking,
    NewAbout,
    NewHouse,
    NewAnimal,
    NewArea,
    AddPost
} )( Form )
export default FormContainer;
