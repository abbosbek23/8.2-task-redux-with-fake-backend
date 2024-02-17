import React,{useEffect,useState} from 'react'
import {connect} from "react-redux";
import { func1,} from '../../store/Todo';
function Todos({todos, func1}) {

useEffect(() => {
    func1()
}, [])

  return (
    <div>
        <h1>Todos</h1>
        <hr />
        <table className='table mt-3'>
            <thead>
                <tr>
                <th>N</th>
                <th>Title</th>
                <th>Active</th>
                <th>Salom</th>
                <th>Salomss</th>
                <th>asdas</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((item)=>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td><input type="checkbox" defaultChecked={item.completed} /></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
export default connect(({todo: {todos}}) => ({todos}),{func1,})(Todos)