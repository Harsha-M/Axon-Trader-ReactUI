
const initialState = {
   items:  [
        {
            id: 1,
            portfolioName: 'Buyer 1',
            moneyAvailable: 10000,
            reserved: 720,
            itemsAvailable: [
                {
                    name: 'Shell',
                    count: 20
                },
                {
                    name: 'BP',
                    count: 20
                },
                {
                    name: 'Apple',
                    count: 10
                }
            ]
        },
        {
            id: 2,
            portfolioName: 'Buyer 2',
            moneyAvailable: 30000,
            reserved: 520,
            itemsAvailable: [
                {
                    name: 'Google',
                    count: 10
                },
                {
                    name: 'FB',
                    count: 2
                },
                {
                    name: 'Apple',
                    count: 50
                }
            ]
        },
        {
            id: 3,
            portfolioName: 'Buyer 3',
            moneyAvailable: 5000,
            reserved: 80,
            itemsAvailable: [
                {
                    name: 'Pivotal',
                    count: 10
                },
                {
                    name: 'Home Depot',
                    count: 5
                }
            ]
        }
    ]
}
    

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_PORTFOLIOS":
            return action.payload;
        case "PORTFOLIO_SELECTED":
            return Object.assign({}, state, {activePortfolio: action.index});
    }
    return state;
}