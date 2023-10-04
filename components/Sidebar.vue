<template>
  <aside
    class="pl-[4.5rem] pr-[5rem] max-w-[17.25rem] min-w-[17.25rem] min-h-full"
  >
    <nav class="font-bold flex flex-col gap-10 pt-[6.5rem] sticky top-0">
      <h3>
        <NuxtLink class="nav-link" href="#nav">{{
          data?.testTaskSecondBlockSideNavigationTitle
        }}</NuxtLink>
      </h3>
      <div
        class="flex flex-col gap-3"
        v-for="item in itemsJson"
        :key="item.key"
      >
        <NuxtLink
          class="nav-link"
          :href="`#${item.title.toLowerCase().replace(' ', '')}`"
          ><h3>{{ item.title }}</h3></NuxtLink
        >
      </div>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
const store = useFetchStore()
const data = store.data?.data.siteData.testTaskTemplate_30_15673
const itemsJson = store.itemsJson
</script>
