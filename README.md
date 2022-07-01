# Vite Axios Pinia 封裝

## 使用套件
- vite-plugin-pages
  - 路由套件
- vite-plugin-vue-layouts
  - 佈局套件
- unplugin-vue-components
  - 自動引入 Components
- aos
  - aos 動畫套件
- pinia
  - 狀態管理套件

## 結構
- api
  - 封裝 axios
- src/router.js
  - 封裝 router
- src/store
  - 封裝 pinia
- src/main.js
  - 引用 router, api
- vite.config.js
  - 引用套件

## 引用封裝後 api 方法
- src/main.js
```javascript
import api from '../api/integrate.js'

const app = createApp(App)
app.provide('$api', api)
```
- .vue引用
```javascript
  import { ref, inject } from 'vue'
  // 初始化api列表
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

```

## 引用佈局套件方法
- vite.config.js
```javascript
import Components from 'unplugin-vue-components/vite'
Layouts({
  layoutsDirs: 'src/layout',
  defaultLayout: 'default'
})
```
- 將 router 修改為以下
```javascript
// src/router.js
import { createRouter, createWebHistory } from "vue-router"
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)

export const router = createRouter({
  history: createWebHistory(),
  routes
})
```
- 新增 src/layout -> default.vue
```javascript
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
```

## 引用 aos 方法
- src/main.js
```javascript
import aos from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
const AOS = new (aos).init()

app.use(router).use(AOS).mount('#app')
```

## 引用 pinia 方法
- src/main.js
```javascript
import { createPinia } from 'pinia'
const pinia = createPinia()

import stores from './store/index.js'
app.provide('$stores', stores)

app.use(pinia)
```
- .vue 內使用
```javascript
import { inject, computed } from 'vue'
const todoStore = inject('$stores').todoStore()

const todoList = ref([])

const filterTodos = computed(() => {
  switch(selectedMenu.value) {
    case '全部':
      return todoStore.todoListGetter
    case '未完成':
      return todoStore.todoListGetter.filter((item) => !item.isCompleted)
    case '已完成':
      return todoStore.todoListGetter.filter((item) => item.isCompleted)
  }
})
```
