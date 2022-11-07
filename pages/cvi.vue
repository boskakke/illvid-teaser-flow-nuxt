<template>
  <div class="main-grid">
    <div class="main-grid--12col">CVI</div>
    <div class="main-grid--12col">
      
      <div class="flex">
        <button class="btn-icon">
          <IconsBookmark />
        </button>
        <button class="btn-icon">
          <IconsBookmarkActive />
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

        
      </div>
    </div>
  </div>
</template>

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
