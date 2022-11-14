<template>
  <div class="main-grid" :class="getClass" widget="teaser-list">
    <div class="theme__background" v-if="backgroundImage">
      <img :src="backgroundImage" alt="" class="theme__image" />
    </div>

    <div class="main-grid--12col">
      <div v-if="type === 'latest'" class="widget__title widget__title--alt">
        <span>Seneste nyt</span>
        <div class="breaking-anim">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div v-else class="widget__title">
        {{ title }}
      </div>

      <div class="editor widget__description" v-if="description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
          incidunt harum dignissimos cum adipisci cupiditate tenetur eum facere
          repellendus delectus corporis itaque soluta, quasi repellat neque fuga
          inventore vel illo.
        </p>
      </div>
    </div>

    <TeaserListToplist v-if="type === 'toplist'" />
    <TeaserListPresentation
      v-if="type === 'presentation'"
      backgroundImage="backgroundImage"
    />
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
  description: {
    type: Boolean,
    required: false,
  },
  backgroundImage: {
    type: String,
    required: false,
    default: null,
  },
  
});

// make shure toplist is always gray
const getClass = computed(() => {
  let className = "";
  if (props.type === "toplist") {
    className += "theme--secondary";
  } else if (props.type === "latest") {
    className += "theme--primary";
  } else {
    className += "theme";
  }
  if (props.backgroundImage) {
    className += " theme--white";
  }
  return className;
});
</script>
