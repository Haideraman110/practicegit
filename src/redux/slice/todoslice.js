import { createSlice } from "@reduxjs/toolkit";
import tododata from "../../data/tododata";

const todoslice = createSlice({
    name: 'todo',
    initialState: tododata,
    reducers: {
        addData(state, action) {
            state.push(action.payload)

        },
        deleteData(state, action) {
            return state.filter((val)=>val.id!==action.payload)        
        }
    }

})
export const { addData, deleteData } = todoslice.actions
export default todoslice.reducer