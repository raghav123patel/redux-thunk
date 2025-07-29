import { FETCH_DATA } from "../action/userActions";
import { DELETE_DATA } from "../action/userActions";
import { ADD_DATA } from "../action/userActions";
const initalState = {
    posts: null,
}

const dataReducer = (state=initalState, action) => {
    switch(action.type) {
        case FETCH_DATA:   
            return { ...state, posts: action.payload}; 
        case DELETE_DATA: 
            return {...state, posts: null};    
        case ADD_DATA: 
            return {...state, posts: action.payload};
        default: 
            return state;               
    }
}




export default dataReducer;
