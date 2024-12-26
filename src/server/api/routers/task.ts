import { z } from "zod";
import { createRouter, publicProcedure } from "~/server/api/trpc";

export const taskRouter = createRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.task.findMany(); // Fetch tasks
  }),
  add: publicProcedure
    .input(z.object({ text: z.string(), userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.task.create({
        data: { text: input.text, userId: input.userId },
      });
    }),
  delete: publicProcedure
    .input(z.string()) // Validate task ID
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.task.delete({
        where: { id: input },
      });
    }),
  markComplete: publicProcedure
    .input(z.string()) // Validate task ID
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.task.update({
        where: { id: input },
        data: { completed: true },
      });
    }),
});
