import { createSlice } from "@reduxjs/toolkit";

const userCountryNameSlice = createSlice({
    name:"countryName",
    initialState:{
        countryName:null,
        countryCode:"+91"
    },
    reducers:{
        updateCountryName:(state,action)=>{
            state.countryName=action.payload
        },
        updateCountryCode:(state,action)=>{
            state.countryCode=action.payload
        }
    }
})

export const {updateCountryName, updateCountryCode} = userCountryNameSlice.actions;

export default userCountryNameSlice.reducer;

