import { useSelector, useDispatch} from "react-redux";
import { fetchUsers } from "../slices/userSlice";
import { deleteUsers } from "../slices/userSlice";
function Users() {
    const dispatch = useDispatch();
    const handleClick = () => {
          dispatch(fetchUsers());
    }
    const data = useSelector((state) => state.users.user);
    console.log(data);
    const handleDelete = (id) => {
        dispatch(deleteUsers(id))
    }
    return(
        <>
        <div>
            <h1> fetching apis data through redux toolkit</h1>
            <button onClick={handleClick}> GET DATA</button>  
        </div>
         <div>
            <ul>
                {data.map((item,index) => (  
                    <div>
                    <li key={index}> {item.title} <br/> {item.body} </li>
                    <li><button onClick={()=>handleDelete(item.id)}> Delete</button></li>
                    </div>        
                    
                    
                ))}
            </ul>
         </div>
        </>
    )    

}

export default Users;  