import { configureStore } from '@reduxjs/toolkit';
import languageReducer from "./langSlice"


const appStore = configureStore({
    reducer:{
        language:languageReducer,
    }
})

export default appStore;