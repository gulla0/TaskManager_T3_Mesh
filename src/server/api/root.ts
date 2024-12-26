import { createRouter } from "~/server/api/trpc";
import { taskRouter } from "./routers/task";

export const appRouter = createRouter({
  task: taskRouter, // Mount the task router
});

// Export type definition of API
export type AppRouter = typeof appRouter;

// Export the createCaller function
export const createCaller = appRouter.createCaller;
