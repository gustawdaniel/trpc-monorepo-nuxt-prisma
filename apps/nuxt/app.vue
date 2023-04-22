<script lang="ts" setup>
import { t } from "#imports";

async function start() {
  const v = await t.version.query();

  // const t: "en" | "de"
  const tr = await t.translate.query({

    // to_lang: 'uk',
    from_lang: "de",
    from_text: "",
    provider: "google"
  });

}
</script>

<template>
  <div>
    <button @click="start">Start</button>
  </div>
</template>
