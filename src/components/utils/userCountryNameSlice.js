import { createSlice } from "@reduxjs/toolkit";

const userCountryNameSlice = createSlice({
    name:"countryName",
    initialState:{
        countryName:null
    },
    reducers:{
        updateCountryName:(state,action)=>{
            state.countryName=action.payload
        }
    }
})

export const {updateCountryName} = userCountryNameSlice.actions;

export default userCountryNameSlice.reducer;

