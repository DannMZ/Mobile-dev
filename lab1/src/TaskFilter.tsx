import React, { useContext } from "react";
import { TaskContext } from "./App";

const TaskFilter: React.FC = () => {
  const context = useContext(TaskContext);
  if (!context) return null; // Запобігає помилці, якщо контекст відсутній

  const { setFilter } = context;

  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
};

export default TaskFilter;
