import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const postUsers = createAsyncThunk(
    "post/postUsers",
    async ({title,body}) => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/comments", {title, body});
        console.log(response);
        return response.data;
        
    }
)


const postSlices = createSlice({
      name: 'post',
      initialState: {
        post: [],
        status: 'idle',
        error: null,

      },
      extraReducers: (builder) => {
        builder.addCase(postUsers.pending, (state) => {
            state.status = "loading";
        })
        builder.addCase(postUsers.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.post = action.payload; 
            console.log(action.payload)
        })
        builder.addCase(postUsers.rejected, (state, action) => {
            state.status = "rejected";
            state.post = action.error.message;
        })
      }
}) 

export default postSlices.reducer;     