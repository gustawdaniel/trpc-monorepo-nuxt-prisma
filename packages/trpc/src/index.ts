import { publicProcedure, router } from "./trpc";
import { z } from "zod";

function getEnum() {
  return Math.random() > 0.5 ? 'a' : 'b'
}

export enum GirlName {
  Triss,
  Yennefer
}

export const appRouter = router({
  version: publicProcedure
    .input(z.object({
      name: z.enum(['Yennefer', 'Triss']),
      nativeEnum: z.nativeEnum(GirlName)
    }))
    .query((): {enum: 'a' | 'b', version: string} => ({
    version: "",
    enum: getEnum()
  }))
});

export type AppRouter = typeof appRouter;
