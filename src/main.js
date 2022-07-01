import { createApp } from 'vue'
import App from './App.vue'
import '../assets/css/main.css'
import router from './router.js'
import { AOS } from './plugins/aos.js'

const app = createApp(App)

// 引入 api
import api from '../api/integrate.js'
app.provide('$api', api)

// 引入 Pinia 以及封裝後的 stores
import { createPinia } from 'pinia'
const pinia = createPinia()
import stores from './store/index.js'
app.provide('$stores', stores)

app
.use(router)
.use(AOS)
.use(pinia)
.mount('#app')
