import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

export default function ToDoList() {
    const [tasks, setTasks] = useState([{id: uuidv4(), name: "Sample Task", isDone: false}]);
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        if (inputValue.trim()) {
            setTasks((prevTasks) => ([...prevTasks, {id: uuidv4(), name: inputValue, isDone: false}]));
            setInputValue("");
        }
    };

    // Function to update ALL tasks to uppercase
    const markAllAsDone = () => {
        setTasks(prevTasks => 
            prevTasks.map(task => ({
                ...task,
                isDone: !task.isDone
            }))
        );
    };

    // Function to update ONE specific task to uppercase by ID
    const markAsDone = (taskId) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === taskId 
                    ? { ...task, isDone: !task.isDone }
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
            <button onClick={markAllAsDone}>Mark All As Done</button>
            <br></br>
            <br></br>
                   
            <hr></hr>       
            <h4> To Do List </h4>
            <ul>
                {tasks.map((task, index) => (
                    <li key={task.id}>
                    <span style={{textDecoration: task.isDone ? 'line-through' : 'none'}}>{task.name}</span> &nbsp; &nbsp;
                    <button onClick={() => markAsDone(task.id)}>Mark As Done</button> &nbsp;
                    <button onClick={() => setTasks(tasks.filter(t => t.id !== task.id))}>Delete</button> {/* filter out the task to be deleted */}
                    </li>
                ))}
            </ul>

       </div>
    )
}