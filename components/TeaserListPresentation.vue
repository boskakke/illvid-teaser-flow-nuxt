<template>
  <div class="main-grid--12col">

		<div class="grid--4col">
			<TeaserSlider :teaser="teaserList[1]" class="t-slider" />
			<TeaserSlider :teaser="teaserList[2]" class="t-slider" />
			<TeaserSlider :teaser="teaserList[3]" class="t-slider" />
			<TeaserSlider :teaser="teaserList[4]" class="t-slider" />
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