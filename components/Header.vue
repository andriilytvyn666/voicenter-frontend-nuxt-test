<template>
  <nav
    class="px-[4.625rem] flex justify-between items-center bg-[#D9D9D9] h-[6.313rem]"
  >
    <!-- <NuxtImg alt="LOGO" /> -->
    <h1 class="font-medium text-[25px]">LOGO</h1>
    <div class="flex gap-8 font-bold">
      <NuxtLink class="nav-link">NAV 1</NuxtLink>
      <NuxtLink class="nav-link">NAV 2</NuxtLink>
      <NuxtLink class="nav-link">NAV 3</NuxtLink>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
.nav-link {
  @apply hover:text-[#FF0000];
}
</style>
