import React, { useState } from 'react';
import '../styles/TaskItem.css';

interface TaskItemProps {
  task: Task
  onToggle?: (id: number) => void; // Обробник зі значенням за замовчуванням
  onDelete?: (id: number) => void; // Обробник зі значенням за замовчуванням
  onEdit?: (id: number, newText: string) => void; // Обробник зі значенням за замовчуванням
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle = () => {}, onDelete = () => {}, onEdit = () => {} }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(task.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="task-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="edit-input"
          />
        ) : (
          <span className={`task-text ${task.completed ? 'completed' : ''}`}>
            {task.text}
          </span>
        )}
        <button onClick={handleEdit} className="edit-button">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => onDelete(task.id)} className="delete-button">
          Delete
        </button>
      </div>
      <div className="task-dates">
        <p>Created: {task.createdAt}</p>
        {task.completed && <p>Completed: {task.completedAt}</p>}
      </div>
    </li>
  );
};

export default TaskItem;