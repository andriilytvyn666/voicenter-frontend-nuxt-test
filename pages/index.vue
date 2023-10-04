<template>
  <NuxtLayout>
    <Header />
    <SectionMain />
    <div class="flex">
      <Sidebar />
      <div class="flex flex-col gap-[3rem]">
        <SectionSecondary :image-right="false" />
        <SectionSecondary :image-right="true" />
        <SectionSecondary :image-right="false" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const store = useFetchStore()

const { data } = await useFetch<ResponseBody>(
  'https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data'
)

await store.setData(data.value)
</script>
