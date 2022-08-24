import React from 'react';
import TaskList from '../TaskList/TaskList';
import './TaskListContainer.css'
import { TASK_TYPE, TASK_TITLE } from '../constData/constData.js'

function TaskListContainer(props) {
    return ( 
        <div className='taskListContainer'>
            <TaskList type={TASK_TYPE.BACKLOG}/>
            <TaskList type={TASK_TYPE.READY}/>
            <TaskList type={TASK_TYPE.IN_PROGRESS}/>
            <TaskList type={TASK_TYPE.FINISHED}/>
        </div>
     );
}

export default TaskListContainer;