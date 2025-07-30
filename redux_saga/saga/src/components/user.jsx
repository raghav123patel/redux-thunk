import { useDispatch, useSelector} from "react-redux";
import  {fetchUserData, fetchUserSuccess} from "../action/userAction";

function UserData() {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(fetchUserData())
    }
    const posts = useSelector((state) => state.user);
    console.log(posts);  
    return(
        <>
        <h1> fetch data from the api</h1>
        <button onClick={handleClick}> GET DATA</button>
        </>
    )
}

export default UserData;