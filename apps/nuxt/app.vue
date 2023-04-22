<script lang="ts" setup>
import {version} from '#imports'

async function start() {
  // const v: {version: string, enum: string}
  // now enum should be "a" | "b" but is string
  const v = await version();
}
</script>

<template>
  <div>
    <button @click="start">Start</button>
  </div>
</template>
