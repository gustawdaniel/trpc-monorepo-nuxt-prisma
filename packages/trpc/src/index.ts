import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { Lang } from "database";
import { translate } from "./routes/translate";
import { version } from "./routes/version";

function getEnum() {
  return Math.random() > 0.5 ? "a" : "b";
}

export enum GirlName {
  Triss,
  Yennefer
}

export const appRouter = router({
  version,
  translate
});

export type AppRouter = typeof appRouter;
