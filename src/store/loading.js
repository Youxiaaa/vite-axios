import { defineStore } from "pinia"

export const loadingStore = defineStore('loadingStore', {
  state: () => {
    return {
      isLoading: false
    }
  },

  getters: {
    isLoadingGetter: (state) => state.isLoading
  },

  actions: {
    changeLoading(bool) {
      this.isLoading = bool
    }
  }

})