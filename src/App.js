import React from 'react';
import {Button} from '@mui/material'
import {Link,Routes,Route} from "react-router-dom";
import Post from "./pages/Post/Post";
import Todos from './pages/Todo/Todos';
import User from './pages/User/Users'

function App() {
    return (
        <div className={'container'}>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <Link style={{textDecoration:'none'}} to={'/posts'}><Button variant={'contained'} color={'success'} className={'m-1'}>Posts</Button></Link>
                    <Link style={{textDecoration:'none'}} to={'/todos'}><Button variant={'contained'} color={'success'} className={'m-1'}>Todos</Button></Link>
                    <Link style={{textDecoration:'none'}} to={'/users'}><Button variant={'contained'} color={'success'} className={'m-1'}>Users</Button></Link>
                </div>
            </div>
            <Routes>
                <Route path={'/posts'} element={<Post/>}/>
                <Route path={'/todos'} element={<Todos/>} />
                <Route path={'/users'} element={<User/>} />
            </Routes>
        </div>
    );

}

export default App;