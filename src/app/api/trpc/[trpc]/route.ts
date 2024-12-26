import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: new URL(req.url).pathname, // Dynamically resolve the endpoint
    req,
    router: appRouter,
    createContext: async () => await createTRPCContext({ req }),
  });

export { handler as GET, handler as POST };
