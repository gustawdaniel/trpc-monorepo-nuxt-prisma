<script lang="ts" setup>
import {version} from '#imports'

async function start() {
  // again it is correct, thanks to strict definition of result in trpc/src/index.ts
  // const v: {version: string, enum: "a" | "b"}
  const v = await version({
    name: 'Triss'
  });
}
</script>

<template>
  <div>
    <button @click="start">Start</button>
  </div>
</template>
