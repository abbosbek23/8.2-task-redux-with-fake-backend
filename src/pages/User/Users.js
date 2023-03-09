import React,{useEffect,useState} from 'react';
import {connect} from "react-redux";
import {func1,SaveUser,EditUser,DeleteUser} from "../../store/User";
import UserModal from "./Component/UserModal";

function Userss({func1, users, SaveUser, EditUser, DeleteUser}) {

    useEffect(()=>{
        func1()
    },[])

    const [ModalVisible, setModalVisible] = useState(false)
    const [currentItem, setCurrentItem] = useState("")

    function toggle(){
        setCurrentItem('')
        setModalVisible(prev => !prev)
    }

    function SubmitUser(event, errors, values){
        if (currentItem){
            EditUser({...values, id:currentItem.id})
        }else {
            SaveUser(values)
        }
        toggle()
    }

    function handleEditUser(item){
        setModalVisible(true)
        setCurrentItem(item)
    }

    return (
        <div className={'container'}>
            <h1>Users</h1>
            <hr/>
            <button className={'btn btn-dark float-end m-2'} onClick={toggle}>+ Add</button>
            <table className={'table mt-3'}>
                <thead>
                <tr>
                    <th>N</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                  users.map((item,index)=>
                      <tr key={item.id}>
                          <td>{index+1}</td>
                          <td>{item.name}</td>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td><button className={'btn btn-success m-1'} onClick={()=>handleEditUser(item)}>Edit</button>
                              <button className={'btn btn-danger m-1'} onClick={()=>DeleteUser(item.id)}>Delete</button>
                          </td>
                      </tr>
                  )
                }
                </tbody>
            </table>
            <UserModal isOpen={ModalVisible} toggle={toggle} submit={SubmitUser} currentItem={currentItem}/>
        </div>
    );
}

export default connect(({user:{users}}) => ({users}) ,{func1,SaveUser,EditUser,DeleteUser})(Userss)
