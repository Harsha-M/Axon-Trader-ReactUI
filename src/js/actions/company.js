import {
    FETCH_COMPANY_LIST_REQUEST,
    FETCH_COMPANY_LIST_SUCCESS,
    FETCH_COMPANY_LIST_FAILURE
} from '../constants/actions';

const fetchCompanyListRequest = () => (
    {
        type: FETCH_COMPANY_LIST_REQUEST,
        payload: {
            isFetching: true
        }
    }
)

const fetchCompanyListSuccess = data => (
    {
        type: FETCH_COMPANY_LIST_SUCCESS,
        payload: {
            data
        }
    }
)

const fetchCompanyListFailure = error => (
    {
        type: FETCH_COMPANY_LIST_FAILURE,
        payload: {
            error
        }
    }
)



export const fetchCompanyList = () =>
    (dispatch) => {
        dispatch(fetchCompanyListRequest());

        // make the ajax request here
        // for now, mock the process

        const fakeResponseBody = {
            data: [
                {
                    id: '001',
                    name: 'Bp',
                    value: '15000',
                    shares: '100000'
                },
                {
                    id: '002',
                    name: 'Philips',
                    value: '1000',
                    shares: '10000'
                },
                {   
                    id: '003',
                    name: 'Shell',
                    value: '500',
                    shares: '5000'
                }
            ]
        };

        setTimeout(
            () => dispatch(fetchCompanyListSuccess(fakeResponseBody.data)
        ), 2000);

    }