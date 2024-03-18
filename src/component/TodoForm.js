import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../redux/slice/todoslice';

const TodoForm = () => {
    const initialData = {
        email: '',
        mobile: '',
        notes: ''
    };

    const [todoform, setTodoForm] = useState(initialData);
    const [formErrors, setFormErrors] = useState({
        email: '',
        mobile: '',
        notes: ''
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodoForm({ ...todoform, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        if (!todoform.email) {
            errors.email = 'Email is required.';
        } else if (!todoform.email.includes('@')) {
            errors.email = 'Please enter a valid email address.';
        }
      

        if (!todoform.notes) {
            errors.notes = 'Notes are required.';
        } else if (todoform.notes.length > 256) {
            errors.notes = 'Length exceeds 256 characters.';
        }
        console.log(errors)

        setFormErrors(errors);

    

        if (Object.keys(errors).length === 0) {
            dispatch(addData(todoform));
            setTodoForm(initialData);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className='form-label'>Email</label>
                <input
                    type='text'
                    value={todoform.email}
                    name='email'
                    onChange={handleChange}
                    className='form-control mb-2'
                />
                {formErrors.email && <p>{formErrors.email}</p>}

                <label className='form-label'>Password</label>
                <input
                    type='text'
                    value={todoform.mobile}
                    name='mobile'
                    onChange={handleChange}
                    className='form-control mb-2'
                />
                {formErrors.mobile && <p>{formErrors.mobile}</p>}

                <label className='form-label'>Notes</label>
                <textarea
                    placeholder='notes'
                    name='notes'
                    className='form-control'
                    value={todoform.notes}
                    onChange={handleChange}
                />
                {formErrors.notes && <p>{formErrors.notes}</p>}

                <button className='btn btn-danger w-100 mb-3'>Add</button>
            </form>
        </>
    );
};

export default TodoForm;
