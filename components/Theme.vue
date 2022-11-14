<template >
  <div class="main-grid theme theme--secondary">
    <div class="main-grid--12col">
      <a class="t-list-theme" href="#">
        <span class="t-list-theme__label">Tema - Grøn revolution</span>
        <div class="t-list-theme__icon"><IconsLeaf /></div>
      </a>
    </div>
    <div class="main-grid--12col">
      <TeaserTheme :teaser="teaser" class="t-theme" />
    </div>
    <div class="main-grid--12col">
      <NewsSlider sliderId="2" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  teaser: {
    type: Object,
    required: true,
  },
  
});
</script>
