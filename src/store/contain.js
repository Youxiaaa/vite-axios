import { defineStore } from "pinia"

export const containStore = defineStore('containStore', {
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