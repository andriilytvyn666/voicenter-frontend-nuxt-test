<template>
  <button
    class="py-2 px-8 bg-[#FF0000] text-white whitespace-nowrap font-normal w-fit"
  >
    <NuxtLink target="_blank" :href="$props.link">{{ props.text }}</NuxtLink>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Read more',
  },
  link: {
    type: String,
    default: 'https://google.com',
  },
})
</script>
