import React, { useContext } from 'react'
import ToDo from './ToDo'
import './TodoContainer.css'
import TodoForm from './TodoForm'
import { useSelector } from 'react-redux'
// import { TodoContext } from '../Context/TodoContext'

const TodoContainer = () => {
    // const datastodo=useContext(TodoContext)
    const datastodo=useSelector((state)=>state.todo)
    return (
        <>
            <div className='container todocont'>
                <div className='row'>
                    <div className='col'>
                        <TodoForm/>
                        {
                            datastodo.map((val) =>
                                <ToDo
                                    key={val.id}
                                    id={val.id}
                                    email={val.email}
                                    mobile={val.mobile}
                                />)
                        }

                    </div>

                </div>

            </div>

        </>
    )
}

export default TodoContainer