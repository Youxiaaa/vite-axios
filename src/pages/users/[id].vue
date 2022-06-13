<template>
  <div>
    <transition name="fade">
      <Loading v-if="isLoading" />
    </transition>
    <transition name="scale">
      <div v-if="user[0]" class="min-w-[400px] max-w-[800px] bg-white p-4 rounded-xl shadow-lg">
        <img :src="user[0].picture.large" class="w-24 h-24 rounded-full object-cover object-center">
        <h2 class="text-2xl font-bold">{{ user[0].name.title }} {{ user[0].name.first }} {{ user[0].name.last }}</h2>
        <p class="mt-auto">{{ user[0].email }}</p>
        <p>{{ user[0].phone }}</p>
        <p>{{ user[0].location.country }} - {{ user[0].location.state }} - {{ user[0].location.street.name }}</p>
      </div>
    </transition>
    <div class="flex gap-4 my-5">
      <router-link :to="`/users/${id}/`" class="py-2 px-4 rounded-xl bg-gradient-to-tr from-pink-300 to-purple-300 text-white">to index</router-link>
      <router-link :to="`/users/${id}/info`" class="py-2 px-4 rounded-xl bg-gradient-to-tr from-pink-300 to-purple-300 text-white">to info</router-link>
    </div>
    <RouterView v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, inject, computed } from 'vue'
const router = useRoute()

// 取得 user api
const user = ref([])
const api = inject('$api')
const getOneUser = async () => {
  await api.getOneUser()
  .then((res) => {
    user.value = res.data.results
    loadingStore.changeLoading(false)
  })
  .catch((err) => console.log(err))
  loadingStore.changeLoading(false)
}

getOneUser()

const id = router.params.id

const pinia = inject('$stores')
const loadingStore = pinia.loadingStore()
loadingStore.changeLoading(true)

const isLoading = computed(() => loadingStore.isLoadingGetter)

</script>
