import { configureStore} from "@reduxjs/toolkit";

import usersReducer from "../slices/userSlice";
import postReducer from "../slices/postSlice";

const store = configureStore({
    reducer: {
       users: usersReducer,
       post: postReducer,
       
    }
})

export default store;