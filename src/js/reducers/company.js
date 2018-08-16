import {
    FETCH_COMPANY_LIST_REQUEST,
    FETCH_COMPANY_LIST_SUCCESS,
    FETCH_COMPANY_LIST_FAILURE
} from '../constants/actions';

const initialState = {
    items: [],
    activeCompany: null
}

function companyReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COMPANY_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: action.payload.isFetching
            })
        case FETCH_COMPANY_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: action.payload.isFetching,
                items: action.payload.data
            })
        case FETCH_COMPANY_LIST_FAILURE:
            return Object.assign({}, state, {
                isFetching: action.payload.isFetching,
                error: action.payload.error
            })
        default:
            return state
    }
}

export default companyReducer;
