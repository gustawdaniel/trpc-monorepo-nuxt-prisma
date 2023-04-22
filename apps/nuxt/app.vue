<script lang="ts" setup>
import {version} from '#imports'

async function start() {
  // correct typing const v: {version: string}
  const v = await version();
}
</script>

<template>
  <div>
    <button @click="start">Start</button>
  </div>
</template>
