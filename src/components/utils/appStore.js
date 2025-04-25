import { configureStore } from '@reduxjs/toolkit';
import languageReducer from "./langSlice"
import mobileReducer from "./userMobileSlice"
import countryNameReducer from "./userCountryNameSlice"
import loggedInUserReducer from "./loggedInUserSlice"



const appStore = configureStore({
    reducer:{
        language:languageReducer,
        mobile:mobileReducer,
        countryName:countryNameReducer,
        user:loggedInUserReducer
    }
})

export default appStore;