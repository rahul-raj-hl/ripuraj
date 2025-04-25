import { createSlice } from "@reduxjs/toolkit";

const loggedInUserSlice = createSlice({
    name:"user",
    initialState:{
        isLoggedInUser:false
    },
    reducers:{
        changeLoggedInUser:(state,action)=>{
            state.isLoggedInUser=action.payload
        }
    }
})

export const {changeLoggedInUser} = loggedInUserSlice.actions;

export default loggedInUserSlice.reducer;