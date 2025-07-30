import axios from "axios";
const apiFetching = () => {
    try{
        const data = axios.get("https://jsonplaceholder.typicode.com/posts");
        return data;
    }
    catch(error){
        console.log("error in fetching the api", error);
    }
}

export default apiFetching;