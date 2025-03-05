import React, { useState } from 'react';

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
    <li style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <div>
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
          />
        ) : (
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
        )}
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
      <div style={{ fontSize: '0.8em', color: '#666' }}>
        <p>Created: {task.createdAt}</p>
        {task.completed && <p>Completed: {task.completedAt}</p>}
      </div>
    </li>
  );
};

export default TaskItem;