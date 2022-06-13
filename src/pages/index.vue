<template>
  <div class="w-full min-h-screen flex items-center justify-center flex-col gap-4 p-4 bg-[#f4f4f4]">
    <h1 class="text-3xl font-bold"> index page </h1>
    <div class="flex items-center gap-4">
      <router-link to="/users" class="py-2 px-4 rounded-xl bg-gradient-to-tr from-pink-300 to-purple-300 text-white hover:from-purple-300 hover:to-pink-300">Random Users Page</router-link>
      <router-link to="/todolist" class="py-2 px-4 rounded-xl bg-gradient-to-tr from-pink-300 to-purple-300 text-white hover:from-purple-300 hover:to-pink-300">todoList Page</router-link>
    </div>
  </div>
</template>
