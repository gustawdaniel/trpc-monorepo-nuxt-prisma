import { publicProcedure, router } from "./trpc";
import { z } from "zod";

function getEnum() {
  return Math.random() > 0.5 ? 'a' : 'b'
}

export const appRouter = router({
  version: publicProcedure.query(() => ({
    version: "",
    enum: getEnum()
  }))
});

export type AppRouter = typeof appRouter;
