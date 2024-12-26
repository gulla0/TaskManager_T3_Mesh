import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "~/server/db";

type User = {
  id: string; // Ensure this matches your user object structure
};

export const createContext = (opts: CreateNextContextOptions) => {
  return {
    prisma,
    user: null as User | null, // Explicitly typing `user` for clarity
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
