import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import rootSaga from '../sagas/userSaga';

import dataReducer from '../reducers/postReducer';
import userReducers from '../reducers/userReducer';
import postSaga from '../sagas/postSaga';
const sagaMiddleware = createSagaMiddleware();
   
const rootReducer = combineReducers({
    user: userReducers ,
    data: dataReducer
})
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(postSaga)
export default store;   