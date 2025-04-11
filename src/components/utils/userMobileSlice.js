import { createSlice } from "@reduxjs/toolkit";

const userMobileSlice = createSlice({
    name:"mobile",
    initialState:{
        mob:null
    },
    reducers:{
        updateMobileNumber:(state,action)=>{
            state.mob=action.payload
        }
    }
})

export const {updateMobileNumber} = userMobileSlice.actions;

export default userMobileSlice.reducer;

