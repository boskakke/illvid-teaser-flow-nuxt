<template>
  <div v-if="teasers">
    <div class="teaser-slider">
      <div class="teaser-slider__nav">
        <button class="btn-icon btn-icon--invert teaser-slider__btn teaser-slider__btn--prev" :id="`slider-nav-prev-${sliderId}`" :style="`color:${sliderNavColor};`">
          <IconsChevronLeft />
        </button>
        <button class="btn-icon btn-icon--invert teaser-slider__btn teaser-slider__btn--next" :id="`slider-nav-next-${sliderId}`" :style="`color:${sliderNavColor};`">
          <IconsChevronRight />
        </button>
      </div>

      <swiper
        :space-between="16"
        :modules="modules"
        :navigation="{ nextEl: `#slider-nav-next-${sliderId}`, prevEl: `#slider-nav-prev-${sliderId}` }"
        grabCursor
        :breakpoints="{
          320: {
            slidesPerView: 1.5,
          },
          420: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 4.2,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }"
      >
        <swiper-slide v-for="(teaser, index) in 10">
          <TeaserSlider :teaser="teaserList[index]" :show-date="showDate" class="t-slider" />
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
const props = defineProps({
  sliderId: {
    type: String,
    default: 1,
  },
  showDate: {
    type: Boolean,
    default: false,
  },
  sliderNavColor: {
    type: String,
    default: "#fff",
  },
});
</script>