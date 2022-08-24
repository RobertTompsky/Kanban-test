import React from 'react';
import './TaskTable.css'

function TaskTable( {todo, setToDo}) {
    return ( 
        <div className='taskTable'>
            {todo.map( item => (
                <li className = "taskTable-li" key={item.id}>{item.name}</li>
            ))
        }
        </div>
     );
}

export default TaskTable;