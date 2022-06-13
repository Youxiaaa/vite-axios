<template>
  <div>
    <transition name="scale">
      <div v-if="user[0]" class="w-full max-w-[800px] bg-white p-4 rounded-xl shadow-lg">
        <img :src="user[0].picture.large" class="w-24 h-24 rounded-full object-cover object-center">
        <h2 class="text-2xl font-bold">{{ user[0].name.title }} {{ user[0].name.first }} {{ user[0].name.last }}</h2>
        <p class="mt-auto">{{ user[0].email }}</p>
        <p>{{ user[0].phone }}</p>
        <p>{{ user[0].location.country }} - {{ user[0].location.state }} - {{ user[0].location.street.name }}</p>
      </div>
    </transition>
    <div class="flex gap-4 my-5">
      <router-link to="/users/79c92f84-3091-480b-bfc6-22bfb299251b/" class="py-2 px-4 rounded-xl bg-gradient-to-tr from-pink-300 to-purple-300 text-white">to index</router-link>
      <router-link to="/users/79c92f84-3091-480b-bfc6-22bfb299251b/info" class="py-2 px-4 rounded-xl bg-gradient-to-tr from-pink-300 to-purple-300 text-white">to info</router-link>
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
import { onMounted, getCurrentInstance, ref } from 'vue'
const { appContext: {
  app: {
    $api
  }
} } = getCurrentInstance()
const router = useRoute()

const user = ref([])
const getUser = async () => {
  await $api.getOneUser()
  .then((res) => {
    user.value = res.data.results
  })
  .catch((err) => console.log(err))
}

onMounted(() => {
  console.log(router.params.id)
  getUser(router.params.id)
})

</script>
