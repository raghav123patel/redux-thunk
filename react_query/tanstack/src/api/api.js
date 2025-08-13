import axios from "axios";

export const fetchPostsData = async() => {
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
      console.log(response.data);
      return response.data;
    } catch(error) {
        console.log("error in fetching the api", error);

    }
}

export const createUser = async({name,email}) => {
    try{
      const posts = await axios.post("https://jsonplaceholder.typicode.com/comments", {name, email});
      console.log(posts);
      return posts.data;
    } catch(error) {
        console.log("error in posting in api", error);
    }
}        


export const deleteUser = async(id) => {
  try{
    const deleteData = await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);  
    //console.log(deleteData);
    return id;
    

  } catch(error) {
    console.log("error in deleting the api", error);  
  }
}

export const updateUser = async(id) => {
  try{
    const updatedData = await axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`)
    console.log(updatedData)
    return updatedData.data;
  } catch(error){
    console.log("error in updating the data", error);

  }
}