# Vite Axios 封裝

## 使用套件
- vite-plugin-pages
  - 路由套件
- unplugin-vue-components
  - 自動引入 Components

## 結構
- api
  - 封裝 axios
- src/router.js
  - 封裝 router
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