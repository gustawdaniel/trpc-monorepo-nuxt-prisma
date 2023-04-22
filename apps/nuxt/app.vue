<script lang="ts" setup>
import { version, translate } from "#imports";
import { GirlName } from "trpc";

async function start() {
  // again it is correct, thanks to strict definition of result in trpc/src/index.ts
  // const v: {version: string, enum: "a" | "b"}
  const v = await version({
    name: 'Triss',
    nativeEnum: GirlName.Triss
  });

  // const t: "en" | "de"
  const t = await translate({
    lang: 'en'
  });


}
</script>

<template>
  <div>
    <button @click="start">Start</button>
  </div>
</template>
