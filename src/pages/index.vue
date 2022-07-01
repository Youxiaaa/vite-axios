<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
        <img src="/1.webp" class="w-full h-full object-cover">
      <div class="flex flex-col w-full h-full">
        <img src="/2.webp" class="w-full h-full object-cover">
        <img src="/3.jpeg" class="w-full h-full object-cover">
      </div>
    </div>
    <div class="relative w-screen h-screen">
      <video autoplay muted loop class="absolute top-0 left-0 min-w-full min-h-full object-cover">
        <source src="/video1.mp4" type="video/mp4">
      </video>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 w-screen min-h-screen">
      <img src="/4.webp" class="w-full h-full object-cover">
      <img src="/5.jpeg" class="w-full h-full object-cover">
    </div>
    <div class="w-full min-h-screen flex flex-col items-center justify-center gap-5">
      <h2 class="text-5xl font-bold">TodoList</h2>
      <ul class="flex flex-col gap-4">
        <li v-for="(item, idx) in todoList" :key="item.id" data-aos="fade-up" data-aos-duration="500" :data-aos-delay="300 + (idx * 100)" class="text-xl font-bold">{{ idx + 1 }}. {{ item.label }}</li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { inject } from 'vue'
const todoStore = inject('$stores').todoStore()
const todoList = todoStore.todoListGetter
</script>