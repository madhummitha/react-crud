import React, { useState } from "react";

const Task = ({ task, onDelete, onToggleEdit, onUpdateTask }) => {
  const [newTitle, setNewTitle] = useState(task.title);

  const handleUpdate = () => {
    onUpdateTask(task.id, newTitle);
    setNewTitle(task.title);
  };

  return (
    <div>
      {task.isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <button onClick={() => onToggleEdit(task.id)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Task;
