import {
  FETCH_PORTFOLIO_LIST_REQUEST,
  FETCH_PORTFOLIO_LIST_SUCCESS,
  FETCH_PORTFOLIO_LIST_FAILURE
} from '../constants/portfolioActions';


const initialState = {
  portfolios: {
    items: [],
    error: null,
    isFetching: false
  },
  activePortfolio: {
    data: {},
    error: null,
    isFetching: false
  }
}


export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PORTFOLIO_LIST_REQUEST:
      return {
        ...state,
        portfolios: {
          isFetching: action.payload.isFetching,
          error: null
        }
      }
    case FETCH_PORTFOLIO_LIST_SUCCESS:
      return {
        ...state,
        portfolios: {
          items: action.payload.portfolios.items,
          isFetching: action.payload.isFetching
        }
      }
    case FETCH_PORTFOLIO_LIST_FAILURE:
      return {
        ...state,
        portfolios: {
          error: action.payload.error,
          isFetching: action.payload.isFetching
        }
      }
    case "GET_PORTFOLIO_SUCCESS":
      return Object.assign({}, state, { activePortfolio: { data: action.payload.data, isFetching: action.payload.isFetching } });
    case "PERFORM_LOGIN":
      return Object.assign({}, state, { loggedInUser: action.user });
    case "LOGIN_SUCCESS":
      return Object.assign({}, state, { successfullLogin: action.isLoginSuccess });
    case "PERFORM_LOGOUT":
      return Object.assign({}, state, { successfullLogin: action.isLoginSuccess });
    case "ADD_AMOUNT": {
      const moneyAvailable = state.activePortfolio.data.moneyAvailable + parseInt(action.value);
      const currentActivePortfolioData = state.activePortfolio.data;
      return Object.assign({}, state, { activePortfolio: { data: Object.assign({}, currentActivePortfolioData, { moneyAvailable: moneyAvailable }) } });
    }
    case "ADD_ITEMS": {
      const currentActivePortfolioData = state.activePortfolio.data;

      let updatedObject = {
        name: action.selectedItem,
        value: action.count
      }
      action.allItems.map((item, i) => {
        if (item.name === action.selectedItem) {
          action.allItems[i].count = action.allItems[i].count + parseInt(action.value);
        }
      });
      return Object.assign({}, state, { activePortfolio: { data: Object.assign({}, currentActivePortfolioData, { itemsAvailable: action.allItems }) } });
    }
  }
  return state;
}