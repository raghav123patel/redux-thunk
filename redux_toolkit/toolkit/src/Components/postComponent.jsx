import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { postUsers } from "../slices/postSlice";
function Post() {
    const [data, setData] = useState({
        title: "",
        body: "",
    })

const dispatch = useDispatch();
const handleChange = (e) => {
    setData({
        ...data,     
        [e.target.name]: e.target.value,
    })
}
console.log(data);
const handleClick =  () => {
    dispatch(postUsers(data));
}
const postData = useSelector((state) => state.post);
console.log(postData)   
return( 
    <>
    <div>
        <input type="text" placeholder="enter the title" name="title" value={data.title} onChange={handleChange} /> 
        <br />
        <input type="text" placeholder="enter the body" name="body" value={data.body} onChange={handleChange} /> 
        <br />
        <button onClick={handleClick}> add data</button>

    </div>
    </>
)
}

export default Post;    