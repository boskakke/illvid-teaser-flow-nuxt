<template>
  <div class="main-flow" :class="{ 'main-flow--inverted': settings.inverted }">
    <div class="main-flow__main" >
      <Teaser :teaser="teasers[0]" class="t-main" />
    </div>
    <div class="main-flow__side main-flow__side--3 ">
      <Teaser :teaser="teasers[1]" />
      <Teaser :teaser="teasers[2]" />
      <Teaser :teaser="teasers[3]" />
    </div>
  </div>
</template>

<script setup>

import { inject } from "@vue/runtime-core";


let settings = inject("settings");
let teasers = inject("teasers");
</script>