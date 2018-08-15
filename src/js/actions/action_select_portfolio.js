import { push } from "react-router-redux";

export function selectPortfolio(index) {
    return (dispatch) =>  {
        dispatch(selectedPortfolio(index)) 
        dispatch(push('/Portfolio_Detail'));
    }
}

function selectedPortfolio(index) {
    return {
        type: "PORTFOLIO_SELECTED",
        index
    }
}
