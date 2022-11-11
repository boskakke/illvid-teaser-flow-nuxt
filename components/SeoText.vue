<template>
  <div class="main-grid widget-seo" widget="seo">
    <transition name="slide">
      <div class="main-grid--content" :class="{ 'deck-collapsed': collapsed }">
        <div class="editor widget-description">
          <p>
            I virkeligheden udgør den del af rummet, vi kan se - stjerner,
            planeter, galakser og tåger - kun en lille del på cirka 4% af det
            samlede stof i universet. Resten består af det, vi kalder ‘mørkt
            stof’ og ‘mørk energi’, som fylder henholdsvis 23% og 73% af den
            samlede stofmængde. Ingen ved endnu, hvad de består af og deraf
            kommer navnene. ‘Mørk energi’ formodes at være ansvarlig for
            universets udvidelse, som sker hurtigere og hurtigere. Derimod
            antager astronomerne, at ’mørkt stof’ leverer en tyngdekraft. Måler
            man på lys udsendt fra fjerne galakser, viser det sig, at lyset mod
            Jorden bliver afbøjet mere end forventet. Tyngdekraften fra de
            galakser lyset passerer undervejs, er for lille til at forklare den
            målte bøjning. Derfor menes det, at det er det ‘mørke stof’, som
            står bag den manglende tyngdekraft.
          </p>
        </div>

        <div
          class="widget-seo__expand"
          @click="collapsed = !collapsed"
          v-show="collapsed"
        >
          <button class="btn-icon"><IconsChevronDown /></button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
const collapsed = ref(true);
</script>

<style lang="scss">
// empty

</style>
