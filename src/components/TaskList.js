import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDelete, onToggleEdit, onUpdateTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleEdit={onToggleEdit}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
