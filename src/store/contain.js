import { defineStore } from "pinia"

export const containStore = defineStore('containStore', () => {
  const isLoading = ref(false)

  const isLoadingGetter = computed(() => isLoading.value)

  const changeLoading = (bool) => {
    isLoading.value = bool
  }

  return {
    isLoading,
    isLoadingGetter,
    changeLoading
  }
})