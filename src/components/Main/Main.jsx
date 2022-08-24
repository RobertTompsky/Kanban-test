import React from 'react';
import './Main.css'
import TaskListContainer from '../TaskListContainer/TaskListContainer';

function Main() {
    return ( 
        <main className='main'>
            <div className='main-container'>
                <TaskListContainer />
            </div>
        </main>
     );
}

export default Main;