import { createStore, applyMiddleware, combineReducers} from 'redux';

import { thunk } from 'redux-thunk';
import dataReducer from '../reducers/userReducers';

const rootReducer = combineReducers({
    data: dataReducer  ,
    
})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;