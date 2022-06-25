<template>
  <div id="firstPos" class="pt-20">
    <ul v-if="isShow" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[968px]">
      <li data-aos="zoom-in" data-aos-duration="300" :data-aos-delay="(idx * 100)" data-aos-anchor="#firstPos" v-for="(item, idx) in users" :key="item.phone" class="bg-white rounded-xl shadow-lg p-4 flex flex-col gap-4 cursor-pointer">
        <router-link :to="`/users/${item.login.uuid}`">
          <img :src="item.picture.large" class="w-24 h-24 rounded-full object-cover object-center">
          <h2 class="text-2xl font-bold">{{ item.name.title }} {{ item.name.first }} {{ item.name.last }}</h2>
          <p class="mt-auto">{{ item.email }}</p>
          <p>{{ item.phone }}</p>
          <p>{{ item.location.country }} - {{ item.location.state }} - {{ item.location.street.name }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref, inject, computed } from 'vue'
  // 引入api
  const api = inject('$api')

  // 取得使用者
  const users = ref([])
  const isShow = ref(false)
  const getUsers = async () => {
    await api.users.getUser()
    .then((res) => {
      users.value = res.data.results
      setTimeout(() => {
        isShow.value = true
        containStore.changeLoading(false)
      }, 1000)
    })
    .catch((err) => console.log(err))
    setTimeout(() => {
      containStore.changeLoading(false)
    }, 1000)
  }
  
  getUsers()
  
  const pinia = inject('$stores')
  const containStore = pinia.containStore()
  containStore.changeLoading(true)

</script>
