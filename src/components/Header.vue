<template>
  <header class="fixed top-3 left-[5%] w-[90%] rounded-xl p-4 bg-[rgba(255,255,255,0.65)] backdrop-blur-md z-40 shadow-md flex items-center justify-between gap-4">
    <h1>
      <router-link to="/">
        <img src="/logo.png" alt="logo" class="w-12">
      </router-link>
    </h1>
    <div @click="isShow = !isShow" class="inline-flex flex-col gap-1 cursor-pointer">
      <div class="w-7 h-1 bg-black"></div>
      <div class="w-7 h-1 bg-black"></div>
      <div class="w-7 h-1 bg-black"></div>
    </div>
  </header>
  <div :class="{'scale-100 opacity-100': isShow, 'scale-90 opacity-0': !isShow}" class="fixed top-20 right-[5%] p-4 bg-[rgba(255,255,255,0.65)] backdrop-blur-md rounded-xl duration-300 z-50">
    <ul class="flex flex-col gap-2">
      <li v-for="item in menu" :key="item.id">
        <router-link :to="item.value" @click="isShow = false">{{ item.label }}</router-link>
      </li>
    </ul>
  </div>
  <div v-if="isShow" @click="isShow = false" class="fixed w-full h-screen z-40"></div>
</template>

<script setup>
const menu = ref([
  {id: 1, label: 'Home', value: '/'},
  {id: 2, label: 'Users', value: '/users'},
  {id: 3, label: 'TodoList', value: '/todoList'},
])
const isShow = ref(false)
</script>
