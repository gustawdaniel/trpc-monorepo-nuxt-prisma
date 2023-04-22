import { publicProcedure } from "../trpc";
import { z } from "zod";
import { Lang, TranslationProvider, translations } from "database";

export const translate = publicProcedure
  .input(z.object({
    from_text: z.string(),
    from_lang: z.nativeEnum(Lang),
    to_lang: z.nativeEnum(Lang),
    provider: z.nativeEnum(TranslationProvider)
  })).query(async ({ input, ctx }): Promise<{
    from_text: string,
    from_lang: Lang,
    to_text: string,
    meanings: translations["meanings"],
    to_lang: Lang,
    provider: TranslationProvider
  }> => {
    return {
      from_text: input.from_text,
      from_lang: input.from_lang,
      to_text: "", // translation.to_text,
      meanings: [], // translation.meanings,
      to_lang: input.to_lang,
      provider: input.provider
    };

  });
