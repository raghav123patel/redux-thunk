 import axios from "axios";
 export const FETCH_DATA = 'FETCH_DATA';
 
 export const DELETE_DATA = 'DELETE_DATA';  
 export const ADD_DATA = 'ADD_DATA';
 const fetchDataPost = () => {
       return async(dispatch, getState) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        
        dispatch({
            type: 'FETCH_DATA',
            payload: data,
        })   
       }  
}

export const deleteData = () => {
   return async(dispatch, getState) => {
    dispatch({
        type: 'DELETE_DATA'
    })
   }
}   

export const addTodo = (title,body) => {
    return async(dispatch, getState) => {
        const newData = await axios.post("https://jsonplaceholder.typicode.com/posts", {title, body})
        const postData = await newData.json();
        console.log(postData);
        dispatch({
            type: 'ADD_DATA',
            payload: postData,
        })
    }
}
export default fetchDataPost;

