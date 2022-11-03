<template>
  <div v-if="teasers">
    <div class="container">
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
          class="hesteknap hidden-sm-down"
        >
          <IconsInvert class="hest" />
        </button>
        <button
          @click="settings.showDropdown = !settings.showDropdown"
          class="hesteknap hidden-md-up"
        >
          <IconsSettings class="hest" />
        </button>
        <button
          @click="settings.showPalette = !settings.showPalette"
          class="hesteknap"
        >
          <IconsPalette class="hest" />
        </button>
      </div>
      <div :class="{'demo': settings.showPalette}">
        <TeaserflowTeaserFlow3 v-if="counter == 3" />
        <TeaserflowTeaserFlow4 v-if="counter == 4" />
        <TeaserflowTeaserFlow5 v-if="counter == 5" />
        <TeaserflowTeaserFlow6 v-if="counter == 6" />
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

const counter = ref(3);

const settings = reactive({
  showDropdown: false,
  showPalette: false,
  inverted: false,
});

const teaserList = ref(teasers.data.contents.data[0].content.data.teasers.data);

provide("teasers", teaserList);

provide("settings", settings);
</script>

<style >
h2 {
  margin: 0;
  line-height: 1;
}

.hest {
  background: transparent;
  padding: 0;
  border: 0;
}
.hesteknap {
  padding: 0;
  background: transparent;
  border: 0;
  color: #eee;
  font-size: 20px;
}
</style>