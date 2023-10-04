<template>
  <NuxtLayout>
    <Header />
    <SectionMain />
    <SectionSecondary />
    <SectionSlides />
    <Footer />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const store = useFetchStore()

const { data } = await useFetch<ResponseBody>(
  'https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data'
)

await store.setData(data.value)
</script>
