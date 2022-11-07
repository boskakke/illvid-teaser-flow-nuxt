<template>
  <a href="#" class="t" :class="[getCatName()]" :title="teaser?.title">
    <div class="t__theme">
      <span class="t__theme-label">Tema - Grøn revolution</span>
      <div class="t__theme-icon"><IconsLeaf /></div>
    </div>
    <figure class="t__figure">
      <div class="t__category" v-if="teaser?.label.title">
        {{ teaser.label.title }}
      </div>
      <nuxt-img
        :src="`${getImgxUrl(teaser?.image?.url)}?ar=3:2&fit=crop&w=600`"
        :placeholder="[100, 50, 10]"
        class="t__image"
        :alt="teaser?.image?.caption"
      />
    </figure>
    <div class="t__body">
      <div
        class="t__category t__category--no-figure"
        v-if="teaser?.label?.title"
      >
        {{ teaser?.label?.title }}
      </div>
      <h2 class="t__title">{{ teaser?.title }}</h2>
      <p class="t__description" v-if="teaser.description">
        {{ teaser.description }}
      </p>
      <div class="t__cta">
        <span class="t__cta-label">Læs hele artiklen</span
        ><IconsArrowLong class="t__cta-icon"/>
      </div>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  teaser: {
    type: Object,
    required: true,
  },
});

const catNames = [
  "cat-climate",
  "cat-health",
  "cat-physics",
  "cat-human",
  "cat-techonolgy",
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