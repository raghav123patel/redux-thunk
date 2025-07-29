import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../action/userActions";
import { useState } from "react";
function AddData() {
        const [post, setPost] = useState({
            title: "",
            body: "",
        })  
        const [allPosts, getAllPosts] = useState([]);
        const handleChange = (e) => {
            setPost({
                ...post,
                [e.target.name]: e.target.value,     
            })  
        }
       const dispatch = useDispatch();
        const handleClick = () => {
            console.log(post.title, post.body);  
            
            dispatch(addTodo({title:post.title, body:post.body})); 
            getAllPosts([...allPosts, post])
        }
        const addData = useSelector((state) => state.data);
        console.log(addData);    
        console.log(post);
  
        return(
            <>
            <div>
                <h1> adding new data to the post</h1>
                <input type="text" placeholder="enter the title" name="title" value={post.title} onChange={handleChange} />
                <br />
                <input type="text" placeholder="enter the body" name="body" value={post.body} onChange={handleChange} />  
                <br />
                 <button onClick={handleClick}> ADD POSTS</button>
                <div>
                    <table border="1" cellPadding="10" cellSpacing="2">
                        <thead>
                            <tr>
                                <th> S.No</th>
                                <th> title</th>
                                <th> body</th>
                            </tr>    
                        </thead>
                        <tbody>
                            {allPosts.map((item,index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td> {item.title}</td>
                                    <td> {item.body} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
        )
}

export default AddData;