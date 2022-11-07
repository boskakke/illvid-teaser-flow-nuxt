<template>
  <div v-if="teasers">
    <div class="teaser-slider">
      <div class="teaser-slider__nav">
        <button class="btn-icon btn-icon--invert teaser-slider__btn teaser-slider__btn--prev">
          <IconsChevronLeft />
        </button>
        <button class="btn-icon btn-icon--invert teaser-slider__btn teaser-slider__btn--next">
          <IconsChevronRight />
        </button>
      </div>

      <swiper
        :space-between="16"
        :modules="modules"
        :navigation="{ nextEl: '.teaser-slider__btn--next', prevEl: '.teaser-slider__btn--prev' }"
        grabCursor
        :breakpoints="{
          320: {
            slidesPerView: 1.5,
          },
          420: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }"
      >
        <swiper-slide v-for="(teaser, index) in 10">
          <TeaserSlider :teaser="teaserList[index]" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation, A11y];

const config = useRuntimeConfig();
const teasers = await useNuxtApp().$articleFetch(
  `/wp-json/wp/v2/pages/${config.FRONTPAGE_ID}?with=contents,teasers,ancestor,contents.content.teasers.vocabularies`
);
const teaserList = ref(teasers.data.contents.data[0].content.data.teasers.data);
</script>