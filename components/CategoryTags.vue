<template>
  <div class="tags">
    <a href="#" class="tags__item" v-for="tag in tags">{{ tag }}</a>
  </div>
</template>
<script setup>
const tags = [
  "Miljø",
  "Klimaforandringer",
  "Vejret",
  "Tornado",
  "Miljø",
  "Klimaforandringer",
  "Vejret",
  "Tornado",
];
</script>

<style lang="scss">
// empty

</style>
