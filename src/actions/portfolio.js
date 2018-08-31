import {
  FETCH_PORTFOLIO_REQUEST,
  FETCH_PORTFOLIO_SUCCESS,
  FETCH_PORTFOLIO_FAILURE,
  ADD_MONEY_SUCCESS,
  ADD_ITEMS_SUCCESS
} from '../constants/portfolioActions';
import { portfoliosMock } from '../mocks/portfolios';

export const addMoney = (value) => {
  console.log("Action called with value", value);
  return (dispatch, getState) => {
    const { portfolios } = getState();
    const newAmountOfMoney = portfolios.activePortfolio.data.amountOfMoney +
      parseInt(value);
    dispatch(addMoneySuccess(newAmountOfMoney));
  }
}

export const addItems = (companyName, amount) => {
  return (dispatch) => {
    dispatch(addItemsSuccess(companyName, amount))
  }
}

const addItemsSuccess = (companyName, amount) => {
  return {
    type: ADD_ITEMS_SUCCESS,


    // todo: fix add items action
    // selectedItem,
    // value,
    // allItems
  }
}

const addMoneySuccess = (amountOfMoney) => {
  return {
    type: ADD_MONEY_SUCCESS,
    payload: {
      amountOfMoney
    }
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
      () => dispatch(fetchPortfolioSuccess(portfoliosMock.items[id - 1])
      ), 500);
  }
