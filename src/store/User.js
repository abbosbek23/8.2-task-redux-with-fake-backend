import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "./api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'user',
    initialState: {
        users:[]
    },
    reducers: {
        getfromresponse: (state, action) => {
            state.users = action.payload
        },
        UserSaved: (state, action) => {
            state.users.push(action.payload)
            toast.success('User saved good :)')
        },
        EditUser: (state,action) => {
            state.users.map((item)=>{
                if (item.id === action.payload.id){
                    item.name = action.payload.name
                    item.username = action.payload.username
                    item.email = action.payload.email
                }
            })
            toast.success('User updated good')
        },
        deleteUser: (state,action)=>{
            state.users.splice(action.payload,1)
            toast.success("Deleted User")
        }
    }
})

export const func1 = () => apiCall({
    url: '/users',
    method: 'get',
    onSuccess: slice.actions.getfromresponse.type
})
export const SaveUser = (data) => apiCall({
    url: '/users',
    method: 'post',
    data,
    onSuccess: slice.actions.UserSaved.type
})
export const EditUser = (data) => apiCall({
    url: '/users/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.EditUser.type
})
export const DeleteUser = (data) => apiCall({
    url: '/users/'+data,
    method: 'delete',
    onSuccess: slice.actions.deleteUser.type
})


export default slice.reducer