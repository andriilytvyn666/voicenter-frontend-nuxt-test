<template>
  <header
    class="px-[4.625rem] flex justify-between items-center bg-[#D9D9D9] h-[6.313rem]"
    id="nav"
  >
    <!-- <NuxtImg alt="LOGO" /> -->
    <h1 class="font-medium text-[25px]">LOGO</h1>
    <nav class="flex gap-8 font-bold">
      <NuxtLink class="nav-link" href="#item1"><h3>NAV 1</h3></NuxtLink>
      <NuxtLink class="nav-link" href="#item2"><h3>NAV 2</h3></NuxtLink>
      <NuxtLink class="nav-link" href="#item3"><h3>NAV 3</h3></NuxtLink>
    </nav>
  </header>
</template>

<style lang="postcss">
.nav-link {
  @apply hover:text-[#FF0000];
}
</style>
