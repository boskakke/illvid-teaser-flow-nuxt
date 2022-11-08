<template>
  <div class="main"> 
     <NuxtLoadingIndicator />
    <div class="topmenu">
      <nuxt-link to="/"><img src="/logo.svg" alt="IllVId" class="logo"/></nuxt-link>
    </div>
    <slot />
  </div>
</template>


<style scoped lang="scss">
.topmenu {
  height: 5rem;
  background: #fff;
  border-bottom: 4px solid #000;
  margin: 0 0 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 200px;
  height: auto;
}

</style>

