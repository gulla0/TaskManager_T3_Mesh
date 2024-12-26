import { initTRPC } from "@trpc/server";
import { Context } from "~/server/api/context";
import { prisma } from "~/server/db";

const t = initTRPC.context<Context>().create();

export const createRouter = t.router; // Router initialization
export const publicProcedure = t.procedure; // Define public procedures

// Export createTRPCContext
export const createTRPCContext = async (opts: { req: Request }) => {
  return {
    prisma,
    user: null, // or handle user authentication if needed
  };
};
