
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUserSuccess } from "../action/postAction";
function Post() {
     const [postapi, setPostApi] = useState({
        title: "",
        body: "",
     })
     const dispatch = useDispatch();
     const handleChange = (e) => {
        setPostApi({
            ...postapi,
            [e.target.name]: e.target.value,
        })
     }
     const handleClick = () => {  
           dispatch(postUserSuccess(postapi));       
     }
     const datas = useSelector((state) => state.data);  
     console.log(postapi); 
     console.log(datas);
     return(
        <>
        <div>
            <input type="text" placeholder="enter the title" name="title" value={postapi.title} onChange={handleChange} />
            <input type="text" placeholder="enter the body" name="body" value={postapi.body} onChange={handleChange} />
            <button onClick={handleClick}> ADD POSTS</button>          
        </div>  
        </>
     )  
}

export default Post;