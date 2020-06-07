import React from 'react';
import Registration from './Registration.jsx'
import {connect} from 'react-redux'

let mapStateToProps = (state) =>{
    return{}
}
let mapDispatchToProps = (dispatch) =>{
    return{}
}

let RegistrationConteiner = connect(mapStateToProps, mapDispatchToProps)(Registration)

export default RegistrationConteiner;
