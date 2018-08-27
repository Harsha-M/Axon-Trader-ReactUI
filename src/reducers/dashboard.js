import {
  FETCH_DASHBOARD_REQUEST,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
} from '../constants/actions';

const initialState = {
  isFetching: false,
  error: null,
  data: {
    money: {},
    tradeItems: [],
    tradeItemsReserved: [],
    transactions: []
  }
}

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD_REQUEST:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: null
      }
    case FETCH_DASHBOARD_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        data: action.payload.data
      }
    case FETCH_DASHBOARD_FAILURE:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error
      }
    default:
      return state
  }
}
