<template>
  <a href="#" class="t" :class="[getCatName()]" :title="teaser?.title">
    <div class="t__body">
      <div class="t__count">{{ count }}</div>
      <div
        class="t__category t__category--no-figure"
        v-if="teaser?.label?.title"
      >
        {{ teaser?.label?.title }}
      </div>
      
      <h2 class="t__title">{{ teaser?.title }}</h2>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  teaser: {
    type: Object,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const catNames = [
  "cat-climate",
  "cat-health",
  "cat-physics",
  "cat-human",
  "cat-technology",
  "cat-nature",
  "cat-space",
];
const getCatName = () => {
  return catNames[Math.floor(Math.random() * catNames.length)];
};

const imgixHost = "images.bonnier.cloud";

const getImgxUrl = (url) => {
  const regex = new RegExp(`^https?:\/\/${imgixHost}`);
  const path = url.replace(regex, "");
  return path;
};
</script>