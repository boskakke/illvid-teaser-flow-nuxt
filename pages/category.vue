<template>
  <div v-if="teasers" :class="cat" class="deck-grid">
    <div class="catselector">
    <select v-model="cat" class="cat  ">
      <option value="cat-gray">Default (Gray)</option>
      <option value="cat-climate">Climate</option>
      <option value="cat-health">Health</option>
      <option value="cat-physics">Physics</option>
      <option value="cat-human">Human</option>
      <option value="cat-technology">Technology</option>
      <option value="cat-nature">Nature</option>
      <option value="cat-space">Space</option>
    </select>
    </div>

    <PageTitle title="Natur" />

    <SeoText />

    <TeaserflowTeaserFlow6 />

    <Theme :teaser="teaserList[3]"  />

    <TeaserList type="presentation" title="Hvad er klimaforandringer?" />

    <TeaserflowTeaserFlow3 widget="flex-teaser-list"/>

    <TeaserList
      type="presentation"
      title="Hvad betyder grøn revolution for vores fremtid?"
      
    />

    <TeaserflowTeaserFlow6 widget="flex-teaser-list"/>

    <TeaserList
      type="presentation"
      title="Hvad betyder grøn revolution for vores fremtid?"
      
    />

    <TeaserflowTeaserFlow3 widget="flex-teaser-list" />
  </div>
</template>


<script setup>
const showTeasers = ref(false);
const cat = ref("cat-gray");
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
address {
  display: none;
}
.catselector {
  position: fixed;
  top: 0;
  padding: var(--space-2);
  background: #fff;;  
}
</style>