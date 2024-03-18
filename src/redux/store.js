import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./slice/todoslice";

const store=configureStore({
    reducer:{
        todo:todoslice

    }
})

export default store