import { AppRouter } from "trpc";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

const t = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:2022/trpc",
    })
  ]
});

import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;
// import {Lang, TranslationProvider, translations} from 'database'

// export async function translate(args: {
//   from_text: string,
//   from_lang: "uk" | "en" | "es" | "pl" | "de" | "fr" | "ru",
//   to_lang: "uk" | "en" | "es" | "pl" | "de" | "fr" | "ru",
//   provider: "deepl" | "reverso" | "google"
// }): Promise<{
//   from_text: string,
//   from_lang: Lang,
//   to_text: string,
//   meanings: translations['meanings'],
//   to_lang: Lang,
//   provider: TranslationProvider
// }> {
//   const res = await t.translate.query(args);
//   // res.
//
//
//
//   return res;
// }

export function version(args: RouterInput['version']): Promise<RouterOutput["version"]> {
  return t.version.query(args);
}

export function translate(args: RouterInput['translate']): Promise<RouterOutput["translate"]> {
  return t.translate.query(args);
}

