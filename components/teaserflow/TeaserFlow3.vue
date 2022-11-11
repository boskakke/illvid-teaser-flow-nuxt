<template>
  <div class="main-grid" widget="flex-teaser-list">
    <div class="main-grid--12col">
      <div
        class="flex-list"
        :class="{ 'flex-list--inverted': settings.inverted }"
      >
        <div class="flex-list__main">
          <Teaser :teaser="teasers[0]" class="t-main" />
        </div>
        <div class="flex-list__side flex-list__side--2">
          <Teaser :teaser="teasers[1]" />
          <Teaser :teaser="teasers[2]" />
        </div>
      </div>
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