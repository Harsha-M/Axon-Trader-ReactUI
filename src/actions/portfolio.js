import {
  FETCH_PORTFOLIO_REQUEST,
  FETCH_PORTFOLIO_SUCCESS,
  FETCH_PORTFOLIO_FAILURE,
  ADD_MONEY,
  ADD_ITEMS
} from '../constants/portfolioActions';
import { portfolios } from '../mocks/portfolios';

export const addAmountToCurrentAmount = (value) => {
  return (dispatch) => {
    dispatch(addAmount(value))
  }
}

export const addMoreItemsToCurrentProfile = (selectedItem, value, allItems) => {
  return (dispatch) => {
    dispatch(addItems(selectedItem, value, allItems))
  }
}

const addItems = (selectedItem, value, allItems) => {
  return {
    type: ADD_ITEMS,
    selectedItem,
    value,
    allItems
  }
}

const addAmount = (value) => {
  return {
    type: ADD_MONEY,
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
