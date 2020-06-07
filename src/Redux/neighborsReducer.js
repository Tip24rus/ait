const NEW_FILTER = "NEW_FILTER"

let initialState = {
    filter: 2,
    filterType: '-'

}

export const NewFilter = ( filter, filterType ) => {
    return { type: NEW_FILTER, filter: filter, filterType: filterType }
}

export let neighborsPage = ( state = initialState, action ) => {
    switch ( action.type ) {
        case NEW_FILTER:
            return {
                ...state,
                filter: action.filter,
                filterType: action.filterType
            };
        default:
            return state;

    }
}
