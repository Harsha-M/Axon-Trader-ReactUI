import { Portfolios } from '../../mocks/portfolios';

export function getPortfolios() {
    return {
        type: "GET_PORTFOLIOS",
        payload: { portfolios : Portfolios },
        isFetching: false
    }
}