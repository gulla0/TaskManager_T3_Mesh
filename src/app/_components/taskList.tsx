"use client";

import { trpc } from "~/trpc/react";
import type { Task } from "~/types/types"; // Import Task interface

const TaskList = () => {
  const { data: tasks, refetch } = trpc.task.getAll.useQuery(); // Fetch tasks
  const deleteTask = trpc.task.delete.useMutation(); // Call delete mutation

  const handleDelete = (id: string) => {
    deleteTask.mutate(id, {
      onSuccess: () => {
        refetch(); // Refresh the task list after deletion
      },
    });
  };

  if (!tasks) return <div>Loading tasks...</div>;

  return (
    <ul>
      {tasks.map((task: Task) => ( // Explicitly type task
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
