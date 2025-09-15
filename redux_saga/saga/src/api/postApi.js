import axios from "axios";

const postApi = (title,body) => {
    try{
      const response =  axios.post("https://jsonplaceholder.typicode.com/posts", {title,body});
      return response.data;  
    } catch(error){  
       console.log("error in fetching the post api", error);
    }
}
export default postApi;    
     

