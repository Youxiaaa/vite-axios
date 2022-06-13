<template>
  <header class="fixed top-0 left-0 w-full p-4 bg-white z-40 shadow-md">
    <ul class="flex gap-4">
      <li v-for="item in menu" :key="item.id">
        <router-link :to="item.value">{{ item.label }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menu = ref([
  {id: 1, label: 'Home', value: '/'},
  {id: 2, label: 'Users', value: '/users'},
  {id: 3, label: 'TodoList', value: '/todoList'},
])
</script>
