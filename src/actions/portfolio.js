import {
  FETCH_PORTFOLIO_REQUEST,
  FETCH_PORTFOLIO_SUCCESS,
  FETCH_PORTFOLIO_FAILURE
} from '../constants/portfolioActions';
import { portfolios } from '../mocks/portfolios';

export function addAmountToCurrentAmount(value) {
  return (dispatch) => {
    dispatch(addAmount(value))
  }
}

export function addMoreItemsToCurrentProfile(selectedItem, value, allItems) {
  return (dispatch) => {
    dispatch(addItems(selectedItem, value, allItems))
  }
}

function addItems(selectedItem, value, allItems) {
  return {
    type: "ADD_ITEMS",
    selectedItem,
    value,
    allItems
  }
}


function addAmount(value) {
  return {
    type: "ADD_AMOUNT",
    value
  }
}

const fetchPortfolioRequest = () => (
  {
    type: FETCH_PORTFOLIO_REQUEST,
    payload: {
      isFetching: true
    }
  }
)

const fetchPortfolioSuccess = (data) => (
  {
    type: FETCH_PORTFOLIO_SUCCESS,
    payload: {
      isFetching: false,
      data
    }
  }
)

const fetchPortfolioFailure = (error) => (
  {
    type: FETCH_PORTFOLIO_FAILURE,
    payload: {
      isFetching: false,
      error
    }
  }
)

export const getPortfolioById = (id) =>
  (dispatch) => {
    // make the ajax request here
    // GET /companies
    // for now, mock the process

    dispatch(fetchPortfolioRequest());

    setTimeout(
      () => dispatch(fetchPortfolioSuccess(portfolios.items[id - 1])
      ), 500);
  }
