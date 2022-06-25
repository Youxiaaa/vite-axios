<template>
  <section>
    <div class="fixed rounded-[0px_0px_50%_50%] ease-[cubic-bezier(1,.02,.58,.99)] left-0 w-full h-full bg-[#97A28C] z-40 duration-1000" :class="{'top-0 scale-150': isLoading, 'top-[-100%] scale-90': !isLoading}"></div>
    <div class="fixed rounded-[0px_0px_50%_50%] ease-[cubic-bezier(1,.02,.58,.99)] left-0 w-full h-full bg-[#A07D7F] z-40 duration-1000 delay-100" :class="{'top-0 scale-150': isLoading, 'top-[-100%] scale-90': !isLoading}"></div>
    <div class="fixed rounded-[0px_0px_50%_50%] ease-[cubic-bezier(1,.02,.58,.99)] left-0 w-full h-full bg-[#DFD2D7] z-40 duration-1000 delay-200" :class="{'top-0 scale-150': isLoading, 'top-[-100%] scale-90': !isLoading}"></div>
    <transition name="fade">
      <img v-if="isLoading" src="/loading/loading.gif" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 z-50">
    </transition>
  </section>
</template>

<script setup>
import { computed, inject } from 'vue'
  const pinia = inject('$stores')
  const containStore = pinia.containStore()
  
  const isLoading = computed(() => {
    return containStore.isLoadingGetter
  })
</script>
