<template>
  <div class="main-grid" :class="getClass" widget="teaser-list">
    <div class="main-grid--12col">
      <div v-if="type === 'latest'" class="widget-title widget-title--alt">
        <span>Seneste nyt</span>
        <div class="breaking-anim">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="widget-title" v-else>
        {{ title }}
      </div>

      <div class="editor widget-description" v-if="!hideDescription">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
          incidunt harum dignissimos cum adipisci cupiditate tenetur eum facere
          repellendus delectus corporis itaque soluta, quasi repellat neque fuga
          inventore vel illo.
        </p>
      </div>
    </div>

    <TeaserListToplist v-if="type === 'toplist'" />
    <TeaserListPresentation v-if="type === 'presentation'" />
    <TeaserListLatest v-if="type === 'latest'" />
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "presentation",
  },
  title: {
    type: String,
    required: false,
  },
  hideDescription: {
    type: Boolean,
    required: false,
  },
});

// make shure toplist is always gray
const getClass = computed(() => {
  if (props.type === "toplist") {
    return "theme--secondary";
  } else if (props.type === "latest") {
    return "theme--primary";
  } else {
    return "theme";
  }
});
</script>
