import { configureStore } from '@reduxjs/toolkit';
import languageReducer from "./langSlice"
import mobileReducer from "./userMobileSlice"


const appStore = configureStore({
    reducer:{
        language:languageReducer,
        mobile:mobileReducer
    }
})

export default appStore;