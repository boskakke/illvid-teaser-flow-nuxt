<template>
  <div class="header">
    <div class="header__hamburger">
      <label
        for="showMenu"
        @click="showOffcanvas = !showOffcanvas"
        aria-expanded="false"
        aria-controls="offcanvas"
        tabindex="0"
      >
        <div class="btn--reset">
          <IconsMenu />
        </div>
      </label>

      <div class="header-search" ref="headerSearch">
        <button
          class="btn btn--reset header-search__toggle"
          @click="toggleSearch"
        >
          <IconsSearch v-if="!showSearch" />
          <IconsClose v-else />
        </button>

        <form
          action=""
          class="header-search-form"
          :class="{ active: showSearch }"
        >
          <input
            type="search"
            class="header-search-form__input"
            placeholder="Søg"
          />
          <button class="header-search-form__submit btn--reset">
            <IconsSearch />
          </button>
        </form>
      </div>
    </div>
    <div class="header__logo">
      <nuxt-link to="/"
        ><img src="/logo-illvid.svg" alt="IllVId" class="logo"
      /></nuxt-link>
    </div>
    <div class="header__tools">
      <IconsUser />
      <button class="btn btn--marketing">Abonnér</button>
    </div>
  </div>

  <input type="checkbox" id="showMenu" />
  <Transition name="offcanvas">
    <OffcanvasMenu
      v-show="showOffcanvas"
      @toggle-menu="showOffcanvas = false"
    />
  </Transition>
</template>

<script setup>
const showSearch = ref(false);
const headerSearch = ref(null);
const showOffcanvas = ref(false);

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
  setTimeout(() => {
    headerSearch.value.querySelector(".header-search-form__input").focus();
  }, 200);
};
</script>


<style lang="scss">
@import "@/assets/styles/components/breakpoints";

:root {
  --logo-width: 176px;
}

%header-tools {
  gap: var(--space-8);
  font-size: var(--font-11);
  display: flex;
  align-items: center;
}

.header {
  height: 5rem;
  background: #fff;
  border-bottom: 4px solid #000;
  margin: 0 0 1rem;
  padding: 1rem;
  display: grid;
  grid-template: auto / 1fr 1fr 1fr;
  align-items: center;

  &__hamburger {
    flex: 0 0 auto;

    @extend %header-tools;
  }
  &__logo {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
  }
  &__tools {
    flex: 0 0 auto;
    justify-content: flex-end;
    @extend %header-tools;
  }
}

.header-search {
  display: none;
  --btn-font-size: var(--font-11);
  @include lg-up {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;

    &__toggle {
      position: absolute;
      z-index: 2;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
%input {
  border: 1px solid rgba(black, 0.2);
  height: 2.4rem;
  border-radius: var(--border-radius);
  font-size: var(--font-6);
  font-weight: 700;
  padding: var(--space-2) 2.2rem var(--space-2) 2.2rem;
}
.mobile-search {
	@include lg-up {
		display: none;
	}
  &__input {
    width: 100%;
    border: 0;
    border-radius: var(--border-radius);
    @extend %input;
		padding: var(--space-2) var(--space-5);
  }
}

.header-search-form {
  display: flex;
  align-items: center;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease;
  &.active {
    opacity: 1;
    visibility: visible;
  }
  &__input {
    @extend %input;
    z-index: 1;
    position: absolute;
    left: -8px;
    padding: var(--space-2) 2.2rem var(--space-2) 2.2rem;
    width: 100%;
  }
  &__submit {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    @extend %header-tools;
  }
}
.logo {
  width: var(--logo-width);
  height: auto;
}

label {
  cursor: pointer;
}

.btn--reset {
  padding: 0;
  border: 0;
  background: transparent;
}
.offcanvas-enter-active,
.offcanvas-leave-active {
  transition: all 0.5s cubic-bezier(0, 0.82, 0, 1);
}

.offcanvas-enter-from {
  transform: translateX(-100%);
}
.offcanvas-leave-to {
  transform: translateX(-100%);
}
</style>
