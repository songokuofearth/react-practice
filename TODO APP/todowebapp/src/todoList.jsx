import { useState } from "react";

function TodoList() {
    const [task, setTask] = useState(["add task", "add task2", "add task3"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim()) {
            setTask([...task, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        setTask(task.filter((_, i) => i !== index));
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const newTasks = [...task];
            [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
            setTask(newTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < task.length - 1) {
            const newTasks = [...task];
            [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
            setTask(newTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter tasks"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>Add task</button>
            </div>

            <ol>
                {task.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>up</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>down</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoList;
