import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "./api";
import {toast} from "react-toastify";


const slice = createSlice({
    name: 'post',
    initialState: {
        posts: []
    },
    reducers: {
        getfromresponse: (state, action) => {
            state.posts = action.payload
        },
        PostSaved: (state, action) => {
            state.posts.push(action.payload)
            toast.success('Post saved good :)')
        },
        editPost: (state,action)=>{
            state.posts.map((item)=>{
                if (item.id === action.payload.id){
                    item.title = action.payload.title
                    item.body = action.payload.body
                }
            })
            toast.success('Post updated good :)')
        },
        deletePost: (state,action)=>{
        state.posts.splice(action.payload,1)

        }
    }
})

export const func1 = () => apiCall({
    url: '/posts',
    method: 'get',
    onSuccess: slice.actions.getfromresponse.type
})

export const SavePost = (data) => apiCall({
    url: '/posts',
    method: 'post',
    data,
    onSuccess: slice.actions.PostSaved.type
})

export const EditPost = (data) => apiCall({
    url: '/posts/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editPost.type
})
export const DeletePost = (data) => apiCall({
    url: '/posts/'+data,
    method: 'delete',
    onSuccess: slice.actions.deletePost.type
})

export default slice.reducer