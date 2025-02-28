import React, { useContext } from "react";
import { TaskContext } from "./App";

interface TaskProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
}

const TaskItem: React.FC<TaskProps> = ({ task }) => {
  const { toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
