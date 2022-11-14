<template>
  <div class="main-grid" widget="seo">
    <div class="main-grid--content">
      <div class="widget-seo">
        <div
          class="widget__content"
          :class="{ 'widget--collapsed': collapsed }"
        >
          <div class="">
            <h2 class="widget-seo__title widget__title" v-if="title">
              {{ title }}
            </h2>
            <div class="widget-seo__description widget__description">
              <div class="editor">
                <p>
                  I virkeligheden udgør den del af rummet, vi kan se - stjerner,
                  planeter, galakser og tåger - kun en lille del på cirka 4% af
                  det samlede stof i universet. Resten består af det, vi kalder
                  ‘mørkt stof’ og ‘mørk energi’, som fylder henholdsvis 23% og
                  73% af den samlede stofmængde. Ingen ved endnu, hvad de består
                  af og deraf kommer navnene. ‘Mørk energi’ formodes at være
                  ansvarlig for universets udvidelse, som sker hurtigere og
                  hurtigere. Derimod antager astronomerne, at ’mørkt stof’
                  leverer en tyngdekraft. Måler man på lys udsendt fra fjerne
                  galakser, viser det sig, at lyset mod Jorden bliver afbøjet
                  mere end forventet. Tyngdekraften fra de galakser lyset
                  passerer undervejs, er for lille til at forklare den målte
                  bøjning. Derfor menes det, at det er det ‘mørke stof’, som
                  står bag den manglende tyngdekraft.
                </p>
              </div>
            </div>
          </div>
          <slot></slot>
        </div>

        <div class="widget__expand" @click="collapsed = !collapsed">
            <div class="widget__gradient" v-if="collapsed"></div>
            <button v-if="collapsed" class="btn-icon">
              <IconsChevronDown />
            </button>
            <button v-else class="btn-icon"><IconsChevronUp /></button>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const collapsed = ref(true);
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: null,
  },
});
</script>

<style  lang="scss">
// empty
</style>
