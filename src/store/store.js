import {configureStore} from "@reduxjs/toolkit";
import post from "./Post";
import todo from './Todo'
import user from "./User";
import api from './middleware/api'

export default configureStore({
    reducer: {
        post,
        todo,
        user
    },
    middleware: [
        api
    ]
})