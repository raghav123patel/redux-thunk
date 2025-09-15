import { POST_USER,POST_SUCCESS,POST_FAILURE } from "../action/postAction";

const initialState = {
    data: null,
    loading: false,
    error: null,
}   


function dataReducer(state=initialState, action){
    switch(action.type){
        case POST_USER: 
        return {...state, loading: true, error: null}
        case POST_SUCCESS: 
        return {...state, loading: false, data: action.payload}
        case POST_FAILURE: 
        return {...state, loading: false, error: action.error}      
        default:
            return state;  
    }  
}  

export default dataReducer;