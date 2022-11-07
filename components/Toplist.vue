<template>
  <div v-if="teasers">
    <div class="toplist">
      <TeaserToplist
        :teaser="teaserList[index]"
        v-for="(teaser, index) in 6"
        class="t-toplist"
        :count="index + 1"
      />
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const teasers = await useNuxtApp().$articleFetch(
  `/wp-json/wp/v2/pages/${config.FRONTPAGE_ID}?with=contents,teasers,ancestor,contents.content.teasers.vocabularies`
);
const teaserList = ref(teasers.data.contents.data[0].content.data.teasers.data);
</script>

<style lang="scss">
</style>