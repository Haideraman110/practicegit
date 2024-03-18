import React, { useContext } from 'react'
import './ToDo.css'
import { useDispatch } from 'react-redux'
import { deleteData } from '../redux/slice/todoslice'
// import { TodoDispatch } from '../Context/TodoDispatch'

const ToDo = ({id,email,mobile}) => {

    // const dispatch=useContext(TodoDispatch)
    const dispatch=useDispatch()
   
  return (
    <>
    <div className='datacont'>
        <p>{email}</p>
        <p>{mobile}</p>
        <button className='btn btn-warning' onClick={()=>dispatch(deleteData(id))}>X</button>

    </div>
    
    </>
  )
}

export default ToDo