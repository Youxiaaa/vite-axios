<template>
  <div class="w-full min-h-screen flex items-center justify-center flex-col gap-4 p-4 bg-[#f4f4f4]">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>
