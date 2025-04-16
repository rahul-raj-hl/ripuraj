import { configureStore } from '@reduxjs/toolkit';
import languageReducer from "./langSlice"
import mobileReducer from "./userMobileSlice"
import countryNameReducer from "./userCountryNameSlice"



const appStore = configureStore({
    reducer:{
        language:languageReducer,
        mobile:mobileReducer,
        countryName:countryNameReducer
    }
})

export default appStore;