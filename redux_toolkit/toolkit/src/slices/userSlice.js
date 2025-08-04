import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");  
        console.log(response);
        return response.data;
    }  
)

export const deleteUsers = createAsyncThunk(
    "delete/deleteUser",
    async(id) => {
        const deletedData = await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
        console.log(deletedData);
        return id;
    }
)
const usersSlice = createSlice({
    name: 'user',
    initialState: {   
        user: [],     
        status: "idle",
        error: null,  
    },
   extraReducers: (builder) => {
       builder.addCase(fetchUsers.pending, (state) => {
        state.status = "loading";  

       })
       .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log(state);
        state.status = "fulfilled";
        state.user = action.payload; 
        console.log(action.payload);

       })
       .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "rejected";
        state.user = action.error.message;
       }) 
       //delete 
       .addCase(deleteUsers.pending, (state) => {
        state.status = "pending"
       })  
       .addCase(deleteUsers.fulfilled, (state, action) => {
        state.status = "fulfilled",
        state.user = state.user.filter((user) => user.id!== action.payload)
       })
   }
})

export default usersSlice.reducer;