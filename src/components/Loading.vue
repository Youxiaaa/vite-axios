<template>
  <div>
    <transition name="fade">
      <div v-if="isLoading" class="fixed top-0 left-0 w-full h-screen flex items-center justify-center backdrop-blur-sm bg-[rgba(0,0,0,0.5)] z-50">
        <p class="text-3xl text-white">Loading...</p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
  const pinia = inject('$stores')
  const loadingStore = pinia.loadingStore()
  
  const isLoading = computed(() => {
    return loadingStore.isLoadingGetter
  })

</script>
