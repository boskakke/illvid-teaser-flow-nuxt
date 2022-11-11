<template>
  <div class="main-grid--12col">
    <NewsSlider sliderId="1" :showDate="true" />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const teasers = await useNuxtApp().$articleFetch(
  `/wp-json/wp/v2/pages/${config.FRONTPAGE_ID}?with=contents,teasers,ancestor,contents.content.teasers.vocabularies`
);
const teaserList = ref(teasers.data.contents.data[0].content.data.teasers.data);
</script>

