<template>
  <div class="frontpage">
    <div class="container">
      <ul>
        <li><nuxt-link to="/frontpage">Frontpage</nuxt-link></li>
        <li><nuxt-link to="/category">Category</nuxt-link></li>
        <li>
          <nuxt-link to="/flexible-teaser-list">Flexible Teaser List</nuxt-link>
        </li>
        <li><nuxt-link to="/sliders">Sliders</nuxt-link></li>
        <li><nuxt-link to="/cvi">CVI</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.vars {
  position: fixed;
  z-index: 2;
  background: #fff;
}
</style>
