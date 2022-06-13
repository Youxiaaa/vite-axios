<template>
  <div class="w-full min-h-screen bg-[#f4f4f4]">
    <Header />
    <RouterView v-slot="{ Component }" class="pt-20">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>
