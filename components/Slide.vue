<template>
  <div
    class="text-[20px] flex flex-col-reverse lg:grid lg:grid-cols-2 gap-[2.25rem] items-center"
  >
    <div class="flex flex-col gap-6">
      <h2 class="font-bold line-clamp-1">{{ $props.title }}</h2>
      <h3 class="line-clamp-2">{{ $props.subtitle }}</h3>
      <span
        class="font-bold line-clamp-4 lg:line-clamp-6"
        v-html="$props.description"
      ></span>
      <Button :text="$props.buttonText" :link="$props.buttonLink" />
    </div>
    <NuxtImg class="w-full" :src="image" :alt="imageAlt" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  buttonText: string
  buttonLink: string
}>()
</script>
