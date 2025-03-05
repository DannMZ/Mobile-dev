import React, { useContext, useState } from 'react';
import { AppContext,Task } from '../context/AppContext';

interface TaskItemProps {
  task: Task
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleTask, deleteTask, editTask } = useContext(AppContext)!;
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
        )}
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
      <div style={{ fontSize: '0.8em', color: '#666' }}>
        <p>Created: {task.createdAt}</p>
        {task.completed && <p>Completed: {task.completedAt}</p>}
      </div>
    </li>
  );
};

export default TaskItem;