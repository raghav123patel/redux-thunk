
import  {USER_FETCH_REQUESTED, USER_FETCH_SUCCESS, USER_FETCH_FAILURE} from "../action/userAction";
import { combineReducers } from "redux";
const initialState = {
    user: [],
    loading: false,
    error: null,
}

function userReducers(state = initialState, action) {
    switch(action.type) {
        case USER_FETCH_REQUESTED: 
        return {...state, loading: true, error: null};
        case USER_FETCH_SUCCESS :
        return {...state, loading: false, user: action.payload}
        case USER_FETCH_FAILURE: 
        return {...state, loading: false, error: action.error}
        default:
        return state;

    }
}


const rootReducer = combineReducers({
    user: userReducers
})
export default rootReducer;