<script lang="ts" setup>
import { version, translate, t } from "#imports";
import { GirlName } from "trpc";

async function start() {
  // again it is correct, thanks to strict definition of result in trpc/src/index.ts
  // const v: {version: string, enum: "a" | "b"}
  const v = await version({
    name: 'Triss',
    nativeEnum: GirlName.Triss
  });

  // const t: "en" | "de"
  const tr = await translate({
    lang: 'en'
  });

  // const versionFromClient: {version: string, enum: "a" | "b"}
  const versionFromClient = await t.version.query({
    nativeEnum: GirlName.Triss,
    name: 'Triss'
  });


}
</script>

<template>
  <div>
    <button @click="start">Start</button>
  </div>
</template>
