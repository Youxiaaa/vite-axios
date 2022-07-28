<template>
  <div>
    <TodoList />
  </div>
</template>
<script setup>
const containStore = inject('$stores').containStore()

containStore.changeLoading(false)
</script>
