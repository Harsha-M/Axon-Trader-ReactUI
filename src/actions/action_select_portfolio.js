import { push } from "react-router-redux";
import { Portfolios } from '../../mocks/portfolios';


export function addAmountToCurrentAmount(value) {
    return (dispatch) =>  {
        dispatch(addAmount(value)) 
    }
}

export function addMoreItemsToCurrentProfile(selectedItem, value, allItems) {
    return (dispatch) =>  {
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

export const getPortfolioById = (id) =>
  (dispatch) => {
    // make the ajax request here
    // GET /companies
    // for now, mock the process

    setTimeout(
      () => dispatch(getPortfolioSuccess(Portfolios.items[id - 1])
      ), 800);

  }

  function getPortfolioSuccess(data) {
    return {
        type: 'GET_PORTFOLIO_SUCCESS',
        payload: { data: data, isFetching: false },
    }
  }
