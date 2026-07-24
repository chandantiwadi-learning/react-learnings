import { useState } from "react";
import "./index.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <p className="empty">No tasks added.</p>
        ) : (
          tasks.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;