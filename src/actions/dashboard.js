import {
  FETCH_DASHBOARD_REQUEST,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
} from '../constants/dashboardActions';

const fetchDashboardRequest = () => (
  {
    type: FETCH_DASHBOARD_REQUEST,
    payload: {
      isFetching: true
    }
  }
)

const fetchDashboardSuccess = (data) => (
  {
    type: FETCH_DASHBOARD_SUCCESS,
    payload: {
      isFetching: false,
      data
    }
  }
)

const fetchDashboardFailure = (error) => (
  {
    type: FETCH_DASHBOARD_FAILURE,
    payload: {
      isFetching: false,
      error
    }
  }
)

export const fetchDashboard = () =>
  (dispatch, getState) => {

    let { auth } = getState();

    const fakeResponseBody = {
      data: {
        money: {
          available: 10000,
          reserved: 720
        },
        tradeItems: [
          {
            name: 'Shell',
            amount: 20
          },
          {
            name: 'BP',
            amount: 20
          },
          {
            name: 'Apple',
            amount: 10
          }
        ],
        tradeItemsReserved: [
          {
            name: 'Shell',
            amount: 20
          },
          {
            name: 'BP',
            amount: 20
          },
          {
            name: 'Apple',
            amount: 10
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
      }
    }

    // GET /users/{auth.user.id}/dashboard
    dispatch(fetchDashboardRequest());
    setTimeout(
      () => dispatch(fetchDashboardSuccess(fakeResponseBody.data)
      ), 800);

  }