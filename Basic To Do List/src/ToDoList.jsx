import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

export default function ToDoList() {
    const [tasks, setTasks] = useState([{id: uuidv4(), name: "Sample Task"}]);
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        if (inputValue.trim()) {
            setTasks((prevTasks) => ([...prevTasks, {id: uuidv4(), name: inputValue}]));
            setInputValue("");
        }
    };

    // Function to update ALL tasks to uppercase
    const makeAllUppercase = () => {
        setTasks(prevTasks => 
            prevTasks.map(task => ({
                ...task,
                name: task.name.toUpperCase()
            }))
        );
    };

    // Function to update ONE specific task to uppercase by ID
    const makeOneUppercase = (taskId) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === taskId 
                    ? { ...task, name: task.name.toUpperCase() }
                    : task
            )
        );
    };

    return (
        <div>
            <input placeholder="Add a task" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            <br></br>
            <br></br>
            <button onClick={addTask}>Add Task</button>
            <br></br>
            <button onClick={makeAllUppercase}>Make All Uppercase</button>
            <br></br>
            <br></br>
                   
            <hr></hr>       
            <h4> To Do List </h4>
            <ul>
                {tasks.map((task, index) => (
                    <li key={task.id}>
                    <span>{task.name} </span> &nbsp; &nbsp;
                    <button onClick={() => makeOneUppercase(task.id)}>Uppercase</button> &nbsp;
                    <button onClick={() => setTasks(tasks.filter(t => t.id !== task.id))}>Delete</button> {/* filter out the task to be deleted */}
                    </li>
                ))}
            </ul>

       </div>
    )
}