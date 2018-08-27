
const defaultUserState = {
    user:
    {
        id: 1,
        portfolioName: 'Buyer 99',
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
        ],
        reservedItems: [
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
        ],
        transactions: [
            {
                company: 'Shell',
                type: 'BUY',
                itemsCount: 10,
                price: 40,
                executedCount: 0,
                state: 'CONFIRMED'
            },
            {
                company: 'BP',
                type: 'SELL',
                itemsCount: 20,
                price: 10,
                executedCount: 30,
                state: 'SELL'
            }
        ]
    },
    successfullLogin: false
}


export default function (state = defaultUserState, action) {
    switch (action.type) {
        case "PERFORM_LOGIN":
            return Object.assign({}, state, { loggedInUser: action.user });
        case "LOGIN_SUCCESS":
            return Object.assign({}, state, { successfullLogin: action.isLoginSuccess });
        case "PERFORM_LOGOUT":
            return Object.assign({}, state, { successfullLogin: action.isLoginSuccess });
    }
    return state;
}