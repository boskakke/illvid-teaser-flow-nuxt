<template>
  <a
    href="#"
    class="t"
    :class="[className, getCatName()]"
    :title="teaser.title"
  >
    <figure class="t__figure">
      <div class="t__category" v-if="teaser.label.title">
        {{ teaser.label.title }}
      </div>
      <nuxt-img
        :src="`${getImgxUrl(teaser.image.url)}?ar=3:2&fit=crop&w=800`"
        :placeholder="[100, 50, 10]"
        class="t__image"
        :alt="teaser.image.caption"
      />
    </figure>
    <div class="t__body">
      <div class="t__category t__category--no-figure" v-if="teaser.label.title">
        {{ teaser.label.title }}
      </div>
      <h2 class="t__title">{{ teaser.post_title }}</h2>
    </div>
    <div class="teaserControls" v-if="settings.showDropdown">
      <select name="className" v-model="className">
        <option value="t-default" selected>Image right</option>
        <option value="t-hide-image">Hide image</option>
        <option value="t-vertical">Vertical</option>
        <option value="t-large">Large</option>
      </select>
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
  return catNames[Math.floor(Math.random() * catNames.length)]
};

const imgixHost = "images.bonnier.cloud";

const getImgxUrl = (url) => {
  const regex = new RegExp(`^https?:\/\/${imgixHost}`);
  const path = url.replace(regex, "");
  return path;
};

let settings = inject("settings");
const className = ref("t-default");
</script>