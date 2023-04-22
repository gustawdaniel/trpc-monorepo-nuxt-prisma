import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  version: publicProcedure.query(() => ({
    version: ""
  }))
});

export type AppRouter = typeof appRouter;
