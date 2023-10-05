<template>
  <div
    :id="$props.id"
    class="items-center grid md:grid-cols-2 gap-8 md:gap-[4.5rem] mx-8"
  >
    <div
      class="max-h-[10rem] overflow-hidden items-center flex"
      v-if="!imageRight"
    >
      <NuxtImg :src="$props.image" :alt="$props.imageAltAtr" class="w-full" />
    </div>
    <div class="flex flex-col gap-[1rem]">
      <h3 class="font-bold line-clamp-1">{{ $props.title }}</h3>
      <h3 class="font-medium line-clamp-2">
        {{ $props.subtitle }}
      </h3>
      <span
        v-html="$props.text"
        class="line-clamp-6 md:line-clamp-3 lg:line-clamp-6"
      ></span>
      <Button :text="$props.buttonText" :link="$props.buttonLink" />
    </div>
    <div
      class="max-h-[16rem] overflow-hidden items-center flex"
      v-if="imageRight"
    >
      <NuxtImg :src="$props.image" :alt="$props.imageAltAtr" class="w-full" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id: string
  imageRight: boolean
  buttonText: string
  buttonLink: string
  image: string
  imageAltAtr: string
  title: string
  subtitle: string
  text: string
}>()
</script>
