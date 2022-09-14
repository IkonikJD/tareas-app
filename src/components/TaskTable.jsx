import React from 'react';
import { TaskRow } from './TaskRow';


export const TaskTable = ({ tasks, toggleTask, deleteTask, showCompleted = false }) => {

    const taskTableRows = (doneValue) => {
        return (
            tasks
                .filter(task => task.done === doneValue)
                .map(task => (
                    <TaskRow task={task} key={task.name} toggleTask={toggleTask} deleteTask={deleteTask} />
                ))
        )
    }    

    return (
        <table className='table table-dark table-striped table-bordered border-secondary'>
            <thead>
                <tr className='table-primary'>
                    <th>
                        {showCompleted ? 'Tareas Completadas' : 'Tareas Pendientes'}
                    </th>
                </tr>
            </thead>
            <tbody>
                {taskTableRows(showCompleted)}
            </tbody>
        </table>
    );
}
