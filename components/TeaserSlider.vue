<template>

	 <a
    href="#"
    class="t"
    :class="[getCatName()]"
    :title="teaser?.title"
  > 
  
    <figure class="t__figure">
      <div class="t__category" v-if="teaser?.label.title">
        {{ teaser.label.title }}
      </div> 
      <nuxt-img
        :src="`${getImgxUrl(teaser?.image?.url)}?ar=3:2&fit=crop&w=300`"
        :placeholder="[100, 50, 10]"
        class="t__image"
        :alt="teaser?.image?.caption"
      />
    </figure>
    <div class="t__body">
      <div class="t__category t__category--no-figure" v-if="teaser?.label?.title">
        {{ teaser?.label?.title }}
      </div>
      <div class="t__date" v-if="showDate">
        12.10.2022
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
  showDate: {
    type: Boolean,
    default: false,
  }
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
  return catNames[Math.floor(Math.random() * catNames.length)]
};

const imgixHost = "images.bonnier.cloud";

const getImgxUrl = (url) => {
  const regex = new RegExp(`^https?:\/\/${imgixHost}`);
  const path = url.replace(regex, "");
  return path;
};



</script>