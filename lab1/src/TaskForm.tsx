import React, { useState, useContext, useRef } from "react";
import { TaskContext } from "./App";

const TaskForm: React.FC = () => {
  const context = useContext(TaskContext);

  if (!context) {
    return null; // Запобігає доступу до `null`
  }

  const { addTask } = context;
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
