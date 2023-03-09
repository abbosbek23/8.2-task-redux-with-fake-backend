import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "./api";
import {toast} from "react-toastify";


const slice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        getfromresponse: (state, action) => {
            state.todos = action.payload
        },

    }
})


export const func1 = () => apiCall({
    url: '/todos',
    method: 'get',
    onSuccess: slice.actions.getfromresponse.type
})



export default slice.reducer