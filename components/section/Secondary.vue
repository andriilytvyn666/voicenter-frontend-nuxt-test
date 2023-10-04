<template>
  <div class="flex flex-col gap-[2rem] items-center" :id="$props.id">
    <h2 class="font-bold text-[20px] py-[1.5rem]">section Title</h2>
    <div
      :class="`items-center grid grid-cols-2 gap-[4.5rem] ml-8 ${
        !imageRight ? 'mr-32' : ''
      }`"
    >
      <div class="bg-gray-500 w-full h-[24rem]" v-if="!imageRight"></div>
      <div class="flex flex-col gap-[1rem]">
        <h3 class="font-bold">ITEM 1</h3>
        <h3 class="font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the i
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets
        </p>
        <Button />
      </div>
      <div class="bg-gray-500 w-full h-[24rem]" v-if="imageRight"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id: string
  imageRight: boolean
}>()
</script>
