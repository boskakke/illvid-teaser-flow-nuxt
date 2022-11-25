<template>
  <div class="offcanvas">
    <label for="showMenu" @click="$emit('toggleMenu')" class="offcanvas__close">
      <IconsClose />
    </label>
    <div class="offcanvas__container">
      <form class="mobile-search">
        <input type="search" class="mobile-search__input" placeholder="Søg" />
      </form>
      <nav class="main-nav">
        <ul class="main-menu">
          <li class="main-menu__item">
            <button class="main-menu__button">
              <a href="#" class="main-menu__label"> Mennesket </a>
              <span class="main-menu__icon">
                <IconsDown class="main-menu__icon" />
              </span>
            </button>
            <div class="sub-menu">
              <ul class="sub-menu__list">
                <li class="sub-menu__item">
                  <a href="/mennesket/hjernen" class="sub-menu__link"
                    >Hjernen</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a
                    href="/mennesket/hjernen/intelligens"
                    class="sub-menu__link"
                    >Intelligens</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/hjernen/hukommelse" class="sub-menu__link"
                    >Hukommelse</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/hjernen/iq-test" class="sub-menu__link"
                    >IQ-test</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/genetik" class="sub-menu__link"
                    >Genetik</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/genetik/dna" class="sub-menu__link"
                    >DNA</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/kroppen" class="sub-menu__link"
                    >Kroppen</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/sex" class="sub-menu__link">Sex</a>
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/sundhed" class="sub-menu__link"
                    >Sundhed</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/aldring" class="sub-menu__link"
                    >Aldring</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a
                    href="/mennesket/kroppen/kredsloebet"
                    class="sub-menu__link"
                    >Kredsløbet</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/psykologi" class="sub-menu__link"
                    >Psykologi</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="main-menu__item">
            <button class="main-menu__button">
              <a href="#" class="main-menu__label"> Medicin </a>
              <span class="main-menu__icon">
                <IconsDown class="main-menu__icon" />
              </span>
            </button>
            <div class="sub-menu">
              <ul class="sub-menu__list">
                <li class="sub-menu__item">
                  <a href="/mennesket/hjernen" class="sub-menu__link"
                    >Hjernen</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a
                    href="/mennesket/hjernen/intelligens"
                    class="sub-menu__link"
                    >Intelligens</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/hjernen/hukommelse" class="sub-menu__link"
                    >Hukommelse</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/hjernen/iq-test" class="sub-menu__link"
                    >IQ-test</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/genetik" class="sub-menu__link"
                    >Genetik</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/genetik/dna" class="sub-menu__link"
                    >DNA</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/kroppen" class="sub-menu__link"
                    >Kroppen</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/sex" class="sub-menu__link">Sex</a>
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/sundhed" class="sub-menu__link"
                    >Sundhed</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/aldring" class="sub-menu__link"
                    >Aldring</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a
                    href="/mennesket/kroppen/kredsloebet"
                    class="sub-menu__link"
                    >Kredsløbet</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/psykologi" class="sub-menu__link"
                    >Psykologi</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="main-menu__item">
            <button class="main-menu__button">
              <a href="#" class="main-menu__label"> Universet </a>
              <span class="main-menu__icon">
                <IconsDown class="main-menu__icon" />
              </span>
            </button>
            <div class="sub-menu">
              <ul class="sub-menu__list">
                <li class="sub-menu__item">
                  <a href="/mennesket/hjernen" class="sub-menu__link"
                    >Hjernen</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a
                    href="/mennesket/hjernen/intelligens"
                    class="sub-menu__link"
                    >Intelligens</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/hjernen/hukommelse" class="sub-menu__link"
                    >Hukommelse</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/hjernen/iq-test" class="sub-menu__link"
                    >IQ-test</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/genetik" class="sub-menu__link"
                    >Genetik</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/genetik/dna" class="sub-menu__link"
                    >DNA</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/kroppen" class="sub-menu__link"
                    >Kroppen</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/sex" class="sub-menu__link">Sex</a>
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/sundhed" class="sub-menu__link"
                    >Sundhed</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/aldring" class="sub-menu__link"
                    >Aldring</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a
                    href="/mennesket/kroppen/kredsloebet"
                    class="sub-menu__link"
                    >Kredsløbet</a
                  >
                </li>
                <li class="sub-menu__item">
                  <a href="/mennesket/psykologi" class="sub-menu__link"
                    >Psykologi</a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">


.offcanvas {
  height: 100vh;
  height: 100svh;
  width: clamp(300px, 75vw, 800px);
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
  &__container {
    padding: var(--space-10) var(--space-6) var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
		max-width: 600px;
		width: 100%;
		height: 100%;
  }
  &__close {
    font-size: var(--font-11);
    position: absolute;
    top: 1.5rem;
    left: 1rem;
  }
}
.no-js #showMenu:checked ~ .offcanvas {
  transform: translateX(0);
  transition: all 0.2s ease;
  display: block;
}

.main-menu {
	list-style: none;
	margin: 0;
	padding: 0;
	&__button {
		width: 100%;
		background: transparent;
		padding: 0;
		text-align: initial;
		border: 0;
	}
	&__label {
		font-family: var(--font-alt);
		text-transform: uppercase;
		color: var(--body-color);
		font-size: var(--font-11);
		font-weight: 800;
		text-transform: uppercase;
		text-decoration: none;
	}
}

.sub-menu {
	opacity: 0;
	visibility: hidden;
	display: none;
}
</style>