import { combineReducers } from 'redux';
import authReducer from './auth';
import portfoliosReducer from './portfolio';
import companyReducer from './company';


const rootReducer = combineReducers({
    portfolios: portfoliosReducer,
    auth: authReducer,
    companies: companyReducer

});

export default rootReducer;