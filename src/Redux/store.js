import { createStore, combineReducers } from "redux"
import { neighborsPage } from "./neighborsReducer.js"
import { formPage } from "./formReducer.js"
import { reducer as form } from "redux-form"
let reducers = combineReducers( { neighborsPage, formPage, form } );
let store = createStore( reducers );

export default store;
