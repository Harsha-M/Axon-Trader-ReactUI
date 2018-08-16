import { combineReducers } from 'redux';
import portfoliosReducer from './portfolio';
import companyReducer from './company';


const rootReducer = combineReducers({
    portfolios: portfoliosReducer,
    companies: companyReducer
});

export default rootReducer;