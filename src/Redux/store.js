import {createStore, combineReducers} from "redux"
import {neighborsPage} from "./neighborsReducer.js"
import {formPage} from "./formReducer.js"
let reducers = combineReducers({neighborsPage, formPage});
let store = createStore(reducers);

export default store;
