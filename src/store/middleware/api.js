import axios from "axios";
const api = ({dispatch})=>(next)=>(action)=>{

    if(action.type !== 'api/apiCall'){
        next(action)
        return
    }

    next(action)

    const {url,method,data,onSuccess} = action.payload

    axios({
        baseURL:'http://localhost:3005',
        url,
        method,
        data
    }).then(res=>{
        dispatch({
            type:onSuccess,
            payload:res.data
        })
    })


}

export default api