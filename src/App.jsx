import {useState} from 'react';

function App(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function AddTask(){
        if(newTask.trim() !== "")
            setTasks(t => [...t, newTask]);
    }

    const handleInputChange = (ev) => {
        setNewTask(nt => ev.target.value)
    }

    const deleteTask = (index) => {
        setTasks(t => t.filter((_, i) => {
            return i !== index;
        }))
    }

    function moveTaskUp(index){
        if(((index + 1) - 1) > 0){
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(t => t = updatedTasks);
        }
    }

    function moveTaskDown(index){
        if((index + 1) <= tasks.length){
            const updatedTasks = [...tasks];

            [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
            setTasks(t => updatedTasks);
        }
    }

    return(
        <div id='container'>
            <h1 id="heading">To-Do List App</h1>

            <div id="form-container">
                <input id="input-task" value={newTask} onChange={handleInputChange} type="text" placeholder="Enter a task..."/>
                <button onClick={AddTask} id="submit-button">Add</button>
            </div>

            <div id='tasks-container'>
                {tasks.map((task, index) => {
                    return <div className='list' key={index}>
                        <span className="card">
                            <span id='text'>{task}</span>

                            <button className="btn" id='delete-btn' onClick={() => deleteTask(index)}>🗑️</button>
                            <button className="btn" onClick={() => moveTaskUp(index)}>⬆️</button>
                            <button className="btn" onClick={() => moveTaskDown(index)}>⬇️</button>
                        </span>
                    </div>
                })}
            </div>
        </div>
    );
}

export default App