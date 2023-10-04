<template>
  <div
    id="main-section"
    class="flex flex-col-reverse md:flex-row gap-12 md:gap-32 items-center px-8 md:px-16 pt-11 pb-20 bg-[#EEEEEE]"
  >
    <div class="flex flex-col gap-[3.125rem]">
      <div class="flex flex-col gap-[0.875rem]">
        <h1 class="font-medium text-[25px] line-clamp-1">
          {{ data?.testTaskHeaderTitle }}
        </h1>
        <p class="font-medium text-[20px] line-clamp-2">
          {{ data?.testTaskHeaderSubtitle }}
        </p>
        <span
          v-html="data?.testTaskHeaderText"
          class="line-clamp-6 sm:line-clamp-4 lg:line-clamp-5"
        ></span>
      </div>
      <Button />
    </div>
    <NuxtImg
      :src="data?.testTaskHeaderImage"
      :alt="data?.testTaskHeaderImageAltText"
      class="w-full"
    />
  </div>
</template>

<script lang="ts" setup>
const store = useFetchStore()
const data = store.data?.data.siteData.testTaskTemplate_30_15673
</script>
