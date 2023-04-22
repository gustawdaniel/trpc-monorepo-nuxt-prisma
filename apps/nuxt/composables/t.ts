import { AppRouter } from "trpc";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

export const t = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:2022/trpc",
    })
  ]
});

// import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
//
// type RouterInput = inferRouterInputs<AppRouter>;
// type RouterOutput = inferRouterOutputs<AppRouter>;
//
// export function version(args: RouterInput['version']): Promise<RouterOutput["version"]> {
//   return t.version.query(args);
// }
//
// export function translate(args: RouterInput['translate']): Promise<RouterOutput["translate"]> {
//   return t.translate.query(args);
// }

