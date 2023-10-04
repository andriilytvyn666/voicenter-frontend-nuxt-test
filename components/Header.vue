<template>
  <nav
    class="px-[4.625rem] flex justify-between items-center bg-[#D9D9D9] h-[6.313rem]"
    id="nav"
  >
    <!-- <NuxtImg alt="LOGO" /> -->
    <h1 class="font-medium text-[25px]">LOGO</h1>
    <div class="flex gap-8 font-bold">
      <h3><NuxtLink class="nav-link" href="#item1">NAV 1</NuxtLink></h3>
      <h3><NuxtLink class="nav-link" href="#item2">NAV 2</NuxtLink></h3>
      <h3><NuxtLink class="nav-link" href="#item3">NAV 3</NuxtLink></h3>
    </div>
  </nav>
</template>

<style lang="postcss">
.nav-link {
  @apply hover:text-[#FF0000];
}
</style>
