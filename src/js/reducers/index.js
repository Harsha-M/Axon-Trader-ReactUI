import { combineReducers } from 'redux';
import PortfoliosReducer from './reducer_portfolios';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
    portfolios: PortfoliosReducer,
    profile: UserReducer
});

export default rootReducer;