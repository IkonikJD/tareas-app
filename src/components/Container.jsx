import React from 'react';

export const Container = ({children}) => {
    return (
        <div className='container p-4'>
            <div className='col-md-4 offset-md-4'>
            <h1 className='text-center'>
                Gestor de Tareas
            </h1>
                {children}
            </div>
        </div>
    );
}

