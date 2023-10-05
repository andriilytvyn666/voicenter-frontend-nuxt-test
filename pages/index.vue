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
useSeoMeta({
  title: 'Voicenter Frontend Nuxt Test - Andrii Lyvyn',
  description: 'Frontend assigment',
  author: 'Andrii Lytvyn',
  ogTitle: 'Voicenter Frontend Nuxt Test - Andrii Lyvyn',
  ogDescription: 'Frontend assigment',
})

const store = useFetchStore()

const { data } = await useFetch<ResponseBody>(
  'https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data'
)

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
} else {
  await store.setData(data.value)
}
</script>
