import React from "react";   

import { useDispatch, useSelector } from "react-redux";
import  fetchDataPost from "../action/userActions";
import  {deleteData } from "../action/userActions";
function GetData() {
     
     const dispatch = useDispatch();
     const posts = useSelector((state) => state.data);   
     console.log(posts);         
     const getDatas = () => {
        dispatch(fetchDataPost());        
            
    }  
        
     const deleteDatas = () => dispatch(deleteData());      
     const dataUpdated = useSelector((state) => state.data);           
     console.log(dataUpdated)   
     return (
        <>
        <div>
            <h1> get data from the API </h1>
            <button onClick={getDatas}> Data</button>   
            <button onClick={deleteDatas} > Delete</button>
        </div>
         <div>
            { posts.posts && <ul>
             {posts.posts.map((item,index) => (
                   
                <li key={index}> {item.title} <br/> {item.body}</li>
            
                 
             ))}     
             </ul>}
             
         </div>   
        </>
     )
}

export default GetData;

