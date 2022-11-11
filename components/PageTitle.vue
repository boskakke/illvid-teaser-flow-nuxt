<template>
  <div class="main-grid" widget="page-title">
    <div class="main-grid--content">
      <h1 class="page-title__label">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>