<template>
  <div id="second-section" class="flex">
    <Sidebar class="" />
    <div class="flex flex-col gap-[2rem] items-center" id="nav2">
      <h2 class="font-bold text-[20px] py-[1.5rem]">
        {{ data?.testTaskSecondBlockTitle }}
      </h2>
      <div
        class="flex flex-col gap-[8.25rem]"
        v-for="item in itemsJson"
        :key="item.key"
      >
        <SectionSecondaryItem
          :id="item.title.toLowerCase().replace(' ', '')"
          :image-right="false"
          :button-link="item.buttonLink"
          :button-text="item.buttonText"
          :image="item.image"
          :image-alt-atr="item.imageAltAtr"
          :title="item.title"
          :subtitle="item.subtitle"
          :text="item.text"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useFetchStore()

const data = store.data?.data.siteData.testTaskTemplate_30_15673

const itemsRaw =
  store.data?.data.siteData.testTaskTemplate_30_15673
    .testTaskSecondDescriptiveBlockItems

const itemsJson: Array<Item> =
  itemsRaw !== undefined ? JSON.parse(itemsRaw) : []

await store.setItemsJson(itemsJson)
</script>
