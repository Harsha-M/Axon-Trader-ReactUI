import {
  FETCH_PORTFOLIO_LIST_REQUEST,
  FETCH_PORTFOLIO_LIST_SUCCESS,
  FETCH_PORTFOLIO_LIST_FAILURE,
  FETCH_PORTFOLIO_REQUEST,
  FETCH_PORTFOLIO_SUCCESS,
  FETCH_PORTFOLIO_FAILURE,
  ADD_MONEY,
  ADD_ITEMS
} from '../constants/portfolioActions';

const initialState = {
  portfolios: {
    items: [],
    error: null,
    isFetching: false
  },
  activePortfolio: {
    data: {
      itemsAvailable: [],
      transactions: []
    },
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
    case FETCH_PORTFOLIO_REQUEST:
      return {
        ...state,
        activePortfolio: {
          isFetching: action.payload.isFetching,
          error: null
        }
      }
    case FETCH_PORTFOLIO_SUCCESS:
      return {
        ...state,
        activePortfolio: {
          isFetching: action.payload.isFetching,
          data: action.payload.data
        }
      }
    case FETCH_PORTFOLIO_FAILURE:
      return {
        ...state,
        activePortfolio: {
          isFetching: action.payload.isFetching,
          error: action.payload.error
        }
      }

    case ADD_MONEY: {
      const moneyAvailable = state.activePortfolio.data.moneyAvailable + parseInt(action.value);
      const currentActivePortfolioData = state.activePortfolio.data;

      return {
        ...state,
        activePortfolio : {
          data: {
            ...currentActivePortfolioData,
            moneyAvailable: moneyAvailable
          }
        }
      }
    }
    case ADD_ITEMS: {
      const currentActivePortfolioData = state.activePortfolio.data;

      action.allItems.map((item, i) => {
        if (item.name === action.selectedItem) {
          action.allItems[i].count = action.allItems[i].count + parseInt(action.value);
        }
      });

      return {
        ...state,
        activePortfolio: {
          data: {
            ...currentActivePortfolioData,
            itemsAvailable: action.allItems
          }
        }
      }
    }
  }
  return state;
}