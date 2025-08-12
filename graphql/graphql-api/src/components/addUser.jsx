import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {ADD_USER} from "../graphqls/mutations/userMutation";
function AddUser() {
const [createUser, {data,loading,error}] = useMutation(ADD_USER);

const [datas, setData] = useState({
    email: "",
    name: "",
    password: "",
})
const handleChange = (e) => {
   
    setData({
         ...datas,
        [e.target.name]: e.target.value
    })  
}
const handleClick = async(e) => {
    e.preventDefault();
     try{
        await createUser({
            variables: {
                email: datas.email,
                name: datas.name,
                password: datas.password,
            }
        })
     }
     catch(error) {
        console.log("error in fetching the api", error);
     }
}  
console.log(datas);

return(
    <>
    <input type="text" placeholder="enter the email" name="email" value={datas.email} onChange={handleChange}
     />
     <input type="text" placeholder="enter the name" name="name" value={datas.name} onChange={handleChange}
     />  
    <input type="password" placeholder="enter the password" name="password" value={datas.password} onChange={handleChange}
     />  
    <button onClick={handleClick}> Register</button>
    </>  
)
}

export default AddUser;