import { combineReducers } from 'redux';
import userReducer from './user';
import portfoliosReducer from './portfolio';
import companyReducer from './company';


const rootReducer = combineReducers({
    portfolios: portfoliosReducer,
    profile: userReducer,
    companies: companyReducer

});

export default rootReducer;