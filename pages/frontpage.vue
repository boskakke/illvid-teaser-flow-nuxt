<template>
  <div v-if="teasers" class="deck-grid">
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
    </div>

    <TeaserflowTeaserFlow3
      v-if="counter == 3"
      :class="{ demo: settings.showPalette }"
    />
    <TeaserflowTeaserFlow4
      v-if="counter == 4"
      :class="{ demo: settings.showPalette }"
    />
    <TeaserflowTeaserFlow5
      v-if="counter == 5"
      :class="{ demo: settings.showPalette }"
    />
    <TeaserflowTeaserFlow6
      v-if="counter == 6"
      :class="{ demo: settings.showPalette }"
    />

    <TeaserList type="latest" title="Seneste nyt"  class="theme--primary theme" />
    
    <TeaserList type="toplist" title="Populært lige nu"  />

    <Theme :teaser="teaserList[3]" />
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