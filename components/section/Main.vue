<template>
  <div class="grid grid-cols-2 gap-12 px-12 pt-11 pb-20 bg-[#EEEEEE]">
    <div class="flex flex-col gap-[3.125rem]">
      <div class="flex flex-col gap-[0.875rem]">
        <h1 class="font-medium text-[25px] line-clamp-1">
          {{ data?.testTaskHeaderTitle }}
        </h1>
        <p class="font-medium text-[20px] line-clamp-2">
          {{ data?.testTaskHeaderSubtitle }}
        </p>
        <p class="line-clamp-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
      </div>
      <button
        class="py-2 px-8 bg-[#FF0000] text-white whitespace-nowrap font-normal w-fit"
      >
        Read More
      </button>
    </div>
    <div class="bg-gray-500 w-full grow h-[20rem]"></div>
  </div>
</template>

<script lang="ts" setup>
const store = useFetchStore()
const data = store.data?.data.siteData.testTaskTemplate_30_15673
</script>
