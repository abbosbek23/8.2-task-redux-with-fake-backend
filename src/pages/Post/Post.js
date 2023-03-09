import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {func1, SavePost, EditPost,DeletePost} from '../../store/Post'
import PostModal from "./Component/PostModal";

function Post({posts, func1, SavePost, EditPost, DeletePost}) {

    useEffect(() => {
        func1()
    }, [])


    const [Modalvisible, setModalvisible] = useState(false)
    const [currentItem, setCurrentItem] = useState('')

    function toggle() {
        setCurrentItem('')
        setModalvisible(prev => !prev)
    }

    function SubmitPost(event, errors, values) {
        if (currentItem){
            EditPost({...values, id:currentItem.id})
        }else {
            SavePost(values)
        }
        toggle()
    }

    function handleEdit(item){
        setModalvisible(true)
        setCurrentItem(item)
    }

    return (
        <div>
            <div className="container">
                <h1>Posts</h1>
                <hr/>
                <button className={'btn btn-dark m-1 float-end'} onClick={toggle}>+ Add</button>
                <table className={'table mt-3'}>
                    <thead>
                    <tr>
                        <th>N</th>
                        <th>Name</th>
                        <th>body</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        posts.map((item,) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td>
                                    <button className={'btn btn-dark m-1'} onClick={()=>handleEdit(item)}>Edit</button>
                                    <button className={'btn btn-dark m-1'} onClick={()=>DeletePost(item.id)}>Delete</button>
                                </td>
                            </tr>)
                    }
                    </tbody>
                </table>
            </div>
            <PostModal isOpen={Modalvisible} toggle={toggle} submit={SubmitPost} currentItem={currentItem}/>
        </div>
    );
}

export default connect(({post: {posts}}) => ({posts}), {func1, SavePost, EditPost,DeletePost})(Post)