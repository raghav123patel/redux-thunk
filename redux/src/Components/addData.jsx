import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../action/userActions";
import { useState } from "react";
function AddData() {
        const [post, setPost] = useState({
            title: "",
            body: "",
        })
        const dispatch = useDispatch();
        const handleClick = (title, body) => {
            dispatch(addTodo({title, body}));
        }
        const addData = useSelector((state) => state.data);
        console.log(addData);

        return(
            <>
            <div>
                <h1> adding new data to the post</h1>
                <input type="text" placeholder="enter the title" name="title" value={post.title} onChange={(e) => setPost(e.target.value)} />
                <input type="text" placeholder="enter the body" name="body" value={post.body} onChange={(e) => setPost(e.target.value)} />  
                 <button onClick={handleClick}> ADD POSTS</button>
            </div>
            </>
        )
}

export default AddData;