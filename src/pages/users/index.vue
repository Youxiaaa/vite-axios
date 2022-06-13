<template>
  <div>
    <h1 class="text-center mb-10 text-3xl font-bold">Users page</h1>
    <transition-group tag="ul" name="scale" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[968px]">
      <li v-for="item in users" :key="item.phone" class="bg-white rounded-xl shadow-lg p-4 flex flex-col gap-4 cursor-pointer">
        <router-link :to="`/users/${item.login.uuid}`">
          <img :src="item.picture.large" class="w-24 h-24 rounded-full object-cover object-center">
          <h2 class="text-2xl font-bold">{{ item.name.title }} {{ item.name.first }} {{ item.name.last }}</h2>
          <p class="mt-auto">{{ item.email }}</p>
          <p>{{ item.phone }}</p>
          <p>{{ item.location.country }} - {{ item.location.state }} - {{ item.location.street.name }}</p>
        </router-link>
      </li>
    </transition-group>
  </div>
</template>

<script setup>
  import { ref, inject } from 'vue'
  // 引入api
  const api = inject('$api')

  // 取得使用者
  const users = ref([])
  const getUsers = async () => {
    await api.getUser()
    .then((res) => {
      users.value = res.data.results
    })
    .catch((err) => console.log(err))
  }
  
  getUsers()

</script>
