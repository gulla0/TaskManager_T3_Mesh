"use client";

import React, { useState } from "react";
import { trpc } from "~/trpc/react";

const TaskForm = ({ walletAddress }: { walletAddress: string }) => {
  const [task, setTask] = useState("");
  const addTask = trpc.task.add.useMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      addTask.mutate(
        { text: task, userId: walletAddress }, // Pass the walletAddress
        {
          onSuccess: () => setTask(""), // Clear input on success
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
