<template>
  <div id="slides-section" class="mx-[10.75rem] flex-col flex pt-[8.25rem]">
    <h2 class="font-bold text-[20px] py-[1.5rem] mx-auto">
      {{ data?.testTaskSlidesBlockTitle }}
    </h2>
    <div class="flex items-center gap-[2.375rem]">
      <button id="prev-slide">
        <NuxtIcon name="feather/arrow-left" filled class="text-[24px]" />
      </button>

      <Swiper
        :modules="[SwiperPagination, SwiperMousewheel, SwiperNavigation]"
        :mousewheel="{
          forceToAxis: true,
        }"
        :navigation="{
          nextEl: '#next-slide',
          prevEl: '#prev-slide',
          disabledClass: 'opacity-0',
        }"
        :pagination="{
          el: '#slides-pagination',
        }"
        :space-between="32"
      >
        <SwiperSlide v-for="slide in slidesJson" :key="slide.key">
          <Slide
            :title="slide.title"
            :subtitle="slide.subtitle"
            :description="slide.description"
            :image="slide.image"
            :imageAlt="slide.imageAlt"
            :buttonText="slide.buttonText"
            :buttonLink="
              slide.buttonLink === null
                ? 'https://github.com/andriilytvyn666'
                : slide.buttonLink
            "
          />
        </SwiperSlide>
      </Swiper>
      <button id="next-slide">
        <NuxtIcon name="feather/arrow-right" filled class="text-[24px]" />
      </button>
    </div>
    <div
      id="slides-pagination"
      class="mx-auto w-full mt-16 h-[3.75rem] flex gap-1.5 justify-center swiper-pagination-bullets"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const store = useFetchStore()

const data = store.data?.data.siteData.testTaskTemplate_30_15673

const slidesRaw =
  store.data?.data.siteData.testTaskTemplate_30_15673.testTaskSlidesBlockSlides

const slidesJson: Array<Slide> =
  slidesRaw !== undefined ? JSON.parse(slidesRaw) : []
</script>

<style lang="postcss">
.swiper-pagination-bullets > .swiper-pagination-bullet {
  @apply bg-[#FF0000];
}
</style>
