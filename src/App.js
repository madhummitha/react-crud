import React, { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      isEditing: false,
    },
    {
      id: 2,
      title: "Task 2",
      isEditing: false,
    },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = () => {
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      isEditing: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleEditTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isEditing: !task.isEditing,
            }
          : task
      )
    );
  };

  const updateTaskTitle = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title: newTitle,
              isEditing: false,
            }
          : task
      )
    );
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleEdit={toggleEditTask}
        onUpdateTask={updateTaskTitle}
      />
    </div>
  );
}

export default App;
