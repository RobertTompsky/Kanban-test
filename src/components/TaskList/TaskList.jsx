import { useState } from 'react'
import React from 'react';
import './TaskList.css'
import { TASK_TYPE, TASK_TITLE } from '../constData/constData.js'
import { Link } from 'react-router-dom';
import ToDoTask from '../TodoTask/TodoTask';
import TaskTable from '../TaskTable/TaskTable';


function TaskList(props) {
    const { type, tasks } = props
    const [todo, setToDo] = useState([])
    return (
    <div className='taskList'>
        <h2 className='taskList-title'>{TASK_TITLE[type]}</h2>
        <TaskTable todo={todo} setToDo={setToDo}/>
        <ToDoTask todo={todo} setToDo={setToDo}/>
    </div>
    )
}

export default TaskList;