import React from 'react'
import { useState } from 'react'

export const TaskCreator = ({ createNewTask }) => {

    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createNewTask(newTaskName)
        setNewTaskName('')
    }

    return (
        <form className='my-3 row' onSubmit={handleSubmit}>
            <div className='input-group mb-3'>
                <input
                    type='text'
                    className='form-control form-control-sm'
                    placeholder='Introduce una nueva tarea'
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                />
                <button className='btn btn-primary btn-sm' id='button-addon2'>
                    Crear Tarea
                </button>
            </div>
        </form>
    );
}
