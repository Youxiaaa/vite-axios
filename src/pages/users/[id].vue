<template>
  <div>
    <transition name="scale">
      <div v-if="user[0]" class="min-w-[350px] max-w-[90vw] bg-white p-4 rounded-xl shadow-lg">
        <img :src="user[0].picture.large" class="w-24 h-24 rounded-full object-cover object-center">
        <h2 class="text-2xl font-bold">{{ user[0].name.title }} {{ user[0].name.first }} {{ user[0].name.last }}</h2>
        <p class="mt-auto">{{ user[0].email }}</p>
        <p>{{ user[0].phone }}</p>
        <p>{{ user[0].location.country }} - {{ user[0].location.state }} - {{ user[0].location.street.name }}</p>
      </div>
    </transition>
    <div class="flex gap-4 my-5">
      <router-link :to="`/users/${id}/`" class="py-2 px-4 rounded-xl bg-black text-white">to index</router-link>
      <router-link :to="`/users/${id}/info`" class="py-2 px-4 rounded-xl border border-black">to info</router-link>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
const router = useRoute()

// 取得 user api
const user = ref([])
const api = inject('$api')

const containStore = inject('$stores').containStore()

const getOneUser = async () => {
  await api.users.getOneUser()
  .then((res) => {
    user.value = res.data.results
    containStore.changeLoading(false)
  })
  .catch((err) => {
    console.log(err)
    containStore.changeLoading(false)
  })
}

getOneUser()

const id = router.params.id

</script>
