<template>
  <div v-if="teasers">
    

    <div class="main-grid mb-8 sm-mb-4 pt-4">
      <div class="main-grid--12col">
        <div class="controls">
          <div class="radio">
            <div v-for="index in 4" :key="index">
              <label>
                <input
                  :checked="index == 1"
                  type="radio"
                  :name="counter"
                  v-model="counter"
                  :value="index + 2"
                  :id="`counter-${index}`"
                />
                {{ index + 2 }}
              </label>
            </div>
          </div>

          <button
            @click="settings.inverted = !settings.inverted"
            :class="{ active: settings.inverted }"
            class="hesteknap hidden-sm-down"
          >
            <IconsInvert class="hest" />
          </button>
          <button
            @click="settings.showDropdown = !settings.showDropdown"
            :class="{ active: settings.showDropdown }"
            class="hesteknap hidden-md-up"
          >
            <IconsSettings class="hest" />
          </button>
          <button
            @click="settings.showPalette = !settings.showPalette"
            :class="{ active: settings.showPalette }"
            class="hesteknap"
          >
            <IconsPalette class="hest" />
          </button>
        </div>
      </div>
      <div :class="{ demo: settings.showPalette }" class="main-grid--12col">
        <TeaserflowTeaserFlow3 v-if="counter == 3" />
        <TeaserflowTeaserFlow4 v-if="counter == 4" />
        <TeaserflowTeaserFlow5 v-if="counter == 5" />
        <TeaserflowTeaserFlow6 v-if="counter == 6" />
      </div>
    </div>

    <div class="main-grid deck--primary pt-6 pb-8 overflow-hidden">
      <div class="main-grid--12col">
        <div class="deck-title">
          <div class="deck-title__label">Seneste nyt</div>
          <div class="breaking-anim">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="main-grid--12col">
        <NewsSlider />
      </div>
    </div>

    <div class="main-grid deck--secondary overflow-hidden pt-6">
      <div class="main-grid--12col">
        <div class="deck-title">
          <div class="deck-title__label">Populært lige nu</div>
        </div>
      </div>
      <div class="main-grid--12col">
        <Toplist />
      </div>
    </div>

    <div class="main-grid deck--secondary pt-4 mt-4 mb-4">
      <div class="main-grid--12col">
        <a class="t-list-theme" href="#">
          <span class="t-list-theme__label">Tema - Grøn revolution</span>
          <div class="t-list-theme__icon"><IconsLeaf /></div>
        </a>
      </div>
      <div class="main-grid--12col">
        <TeaserTheme :teaser="teaserList[2]" class="t-theme" />
      </div>
    </div>


  </div>
</template>


<script setup>
const showTeasers = ref(false);
const config = useRuntimeConfig();
const teasers = await useNuxtApp().$articleFetch(
  `/wp-json/wp/v2/pages/${config.FRONTPAGE_ID}?with=contents,teasers,ancestor,contents.content.teasers.vocabularies`
);

const counter = ref(6);

const settings = reactive({
  showDropdown: false,
  showPalette: false,
  inverted: false,
});

const teaserList = ref(teasers.data.contents.data[0].content.data.teasers.data);

provide("teasers", teaserList);
provide("settings", settings);
</script>

<style lang="scss">
// h2 {
//   margin: 0;
//   line-height: 1;
// }
// 

</style>