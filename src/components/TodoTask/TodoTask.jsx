import React from 'react';
import { useState } from 'react'
import './ToDoTask.css'
import { v4 as uuidv4 } from 'uuid';

function ToDoTask({todo, setToDo}) {
    const [value, setValue] = useState('')
    const [formOpen, setFormOpen] = useState(false)

    function saveToDo(e) {
        if(value!=="") {
            setToDo([...todo, {id: uuidv4(), name: value, description: ""}])
            setValue("")
        }
        e.preventDefault()
        setFormOpen(false)
    }

    return ( 
        <div className='taskList-addtask'>
            <input 
                value={value} 
                placeholder="New task" 
                onChange={ (e) => setValue(e.target.value)} 
                className={`taskList-input ${formOpen? 'active' : 'inactive'}`}/>
            <button 
                className={`taskList-addbtn ${formOpen? 'inactive' : 'active'}`}
                onClick={() => {setFormOpen(!formOpen)}}>
                + Add card
            </button>
            <button 
                onClick={saveToDo} 
                className={`taskList-subbtn ${formOpen? 'active' : 'inactive'}`}>
                Submit
            </button>
        </div>
     );
}

export default ToDoTask;