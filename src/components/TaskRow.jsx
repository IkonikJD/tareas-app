import React from 'react';

export const TaskRow = ({ task, toggleTask, deleteTask }) => {

    const removeTask = () => {
        const name = task.name
        if (window.confirm('¿Esta seguro de eliminar la tarea indicada?')) {
            deleteTask(name)
        }
    }

    return (
        <tr>
            <td className='d-flex justify-content-between'>
                {task.name}
                <div>
                    <input
                        type='checkbox'
                        checked={task.done}
                        onChange={() => toggleTask(task)}
                        style={ {outline: 'none'}}
                    />
                    <i
                        onClick={() => removeTask(task.name)}
                        className='bi-trash task-action'
                        style={{ cursor: 'pointer', paddingLeft: '0.5em', color: 'tomato' }}></i>
                </div>
            </td>
        </tr>
    );
}

