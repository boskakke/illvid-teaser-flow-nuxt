<template>
  <div class="main-grid">
    <div class="main-grid--12col">CVI</div>
    <div class="main-grid--12col">
      
      <div class="flex">
        <button class="btn-icon" @click="active = !active">
          <IconsBookmarkActive v-if="active" />
          <IconsBookmark v-else/>
        </button>
        
        <button class="btn-icon">
          <IconsLink />
        </button>
        <button class="btn-icon">
          <IconsFacebook />
        </button>
        <button class="btn-icon">
          <IconsChevronLeft />
        </button>
        <button class="btn-icon">
          <IconsChevronRight />
        </button>
        <button class="btn-icon">
          <IconsChevronUp />
        </button>
        <button class="btn-icon">
          <IconsChevronDown />
        </button>
        <button class="btn-icon">
          <IconsHeadphones />
        </button>

        
      </div>
    </div>
  </div>
</template>

<script setup>
const active = ref()
</script>
<style lang="scss">
.vars {
  position: fixed;
  z-index: 2;
  background: #fff;
}
.flex {
	margin: var(--space-6) 0;
	display: flex;
	gap: 1rem;
}
</style>
