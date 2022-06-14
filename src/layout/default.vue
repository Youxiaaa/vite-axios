<template>
  <div>
    <Header />
    <router-view v-slot="{ Component, route }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="route" />
      </transition>
    </router-view>
  </div>
</template>
