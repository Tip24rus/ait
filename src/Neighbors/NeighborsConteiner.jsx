import React from 'react';
import Neighbors from './Neighbors.jsx'
import { connect } from 'react-redux'
import { NewFilter } from '../Redux/neighborsReducer.js'

let mapStateToProps = ( state ) => {
    debugger;
    return { posts: state.formPage.posts, Areas: state.formPage.areas, filter: state.neighborsPage.filter, filterType: state.neighborsPage.filterType }
}
let NeighborsConteiner = connect( mapStateToProps, { NewFilter } )( Neighbors )
export default NeighborsConteiner;
