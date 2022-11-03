<template>
	
	<select name="className" v-model="teaserClass" class="teaserControls">
      <option value="t-default" selected>Image right</option>
      <option value="t-hide-image">Hide image</option>
      <option value="t-vertical">Vertical</option>
      <option value="t-large">Large</option>
    </select>
</template>

<script setup>

const props = defineProps({
	teaserClass: String,

})
</script>
