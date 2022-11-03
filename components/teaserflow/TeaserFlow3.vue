<template>
  
  <div class="main-flow" :class="{ 'main-flow--inverted': settings.inverted }">
    <div class="main-flow__main">
      <Teaser :teaser="teasers[0]" class="t-main" />
    </div>
    <div class="main-flow__side main-flow__side--2">
      <Teaser :teaser="teasers[1]" />
      <Teaser :teaser="teasers[2]" />
    </div>
  </div>
</template>

<script setup>
import { inject } from "@vue/runtime-core";

defineProps({
  // teasers: {
  //   type: Array,
  //   required: true,
  // },
});

let teasers = inject("teasers");
let settings = inject("settings");
</script>