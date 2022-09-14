import React from 'react'

export const VisibilityControl = ({ isChecked, setShowCompleted, cleanTasks }) => {

    const handleDelete = () => {
        if (window.confirm('¿Esta seguro de eliminar las tareas completadas?')) {
            cleanTasks()
        }
    }

    return (
        <div className='d-flex justify-content-between text-white
        text-center p-2'>
            <div className='form-check form-switch form-control-sm'>
                <input
                    className='form-check-input'
                    type='checkbox'
                    checked={isChecked}
                    onChange={e => setShowCompleted(e.target.checked)}
                />
                <label>Mostrar Tareas Completadas</label>
            </div>
            <button className='btn btn-danger btn-sm' onClick={handleDelete}>
                Limpiar
            </button>
        </div>
    );
}


