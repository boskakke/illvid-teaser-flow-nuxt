<template>
  <div class="frontpage">
    <div class="container">
      <ul>
        <li><nuxt-link to="/frontpage">Frontpage</nuxt-link></li>
        <li><nuxt-link to="/category">Category</nuxt-link></li>
        <li>
          <nuxt-link to="/flexible-teaser-list">Flexible Teaser List</nuxt-link>
        </li>
        <li><nuxt-link to="/cvi">CVI</nuxt-link></li>
        <li><nuxt-link to="/page-widgets">Misc. page widgets</nuxt-link></li>
        
      </ul>

      <p>Bogmærke til at fjerne Piano fra en artikel:
        <a class="bookmark" href="javascript: document.querySelectorAll('.commercial_spot, #piano-container, #piano-style, #mkt-footer, #mkt-placement-4').forEach((elm) => {elm.remove()});document.querySelector('body').setAttribute('style', 'overflow: visible')">Fjern Paywall</a>
      </p>
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


  <style scoped>
  .bookmark {
    padding: 2px 4px;
    border-radius: 3px;
    background: #eee;
    color: #000;
    display: inline-block;
    font-size: var(--font-2);
    font-weight: 700;
    text-decoration: none;
  }
</style>