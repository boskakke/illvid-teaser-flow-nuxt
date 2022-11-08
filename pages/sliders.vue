<template>
  <div class="main-grid deck--primary pt-6 pb-4 mb-4 overflow-hidden">
    <div class="main-grid--12col">
      <div class="deck-title">
        <div class="deck-title__label">Seneste nyt</div>
        <div class="breaking-anim">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="main-grid--12col">
		<NewsSlider />
    </div>
  </div>
  <div class="main-grid deck--secondary overflow-hidden pt-6 pb-6">
    <div class="main-grid--12col">
      <div class="deck-title">
        <div class="deck-title__label">Populært lige nu</div>
      </div>
    </div>
    <div class="main-grid--12col">
		<Toplist />
    </div>
  </div>
</template>
<script setup>

</script>