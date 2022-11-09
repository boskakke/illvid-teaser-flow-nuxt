<template>
  <div class="main-grid">
    <div class="main-grid--12col">
      <h2>Colors</h2>
      <div class="flex">
      <div class="color color--primary">
        --c-primary
      </div>
      <div class="color color--gray">  --c-gray</div>
      <div class="color color--body">--c-body</div>
      </div>
      <h2>.btn-icon</h2>
      <div class="flex">
        <button class="btn-icon" @click="active = !active">
          <IconsBookmarkActive v-if="active" />
          <IconsBookmark v-else />
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
    <div class="main-grid--12col">
      <h2>.btn</h2>
        <code>.btn--primary</code>
        <button class="btn btn--primary">Læs hele artiklen</button>
        <code>.btn--secondary</code>
        <button class="btn btn--secondary">Læs hele artiklen</button>
        <code>.btn-marketing</code>
        <button class="btn btn--marketing">Abonnér</button>
        <code>.btn--text</code>
        <button class="btn btn--text">
          <span>Læs hele artiklen</span>
          <IconsArrowLong />
        </button>
      
    </div>
  </div>
</template>

<script setup>
const active = ref();
</script>

<style lang="scss">

.color {
  width: 100px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: flex-end;
  padding: .4rem;
  font-size: var(--font-2);
  &--primary {
    background: var(--c-primary);
  }
  &--gray {
    background: var(--c-gray);
  }
  &--body {
    background: var(--c-body);
    color: #fff;
  }
}
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
code {
  display: block;
  font-size: var(--font-3);
  margin: var(--space-7) 0 var(--space-2);
}
</style>
