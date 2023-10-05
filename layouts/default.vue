<template>
  <div class="md:mx-auto md:max-w-[90rem] min-h-screen">
    <slot />
    <DevOnly>
      <Debug />
    </DevOnly>
  </div>
</template>
