import { createApp } from 'vue'
import App from './App.vue'
import '../assets/css/main.css'
import router from './router.js'

const app = createApp(App)

// 引入 api
import api from '../api/integrate.js'
app.provide('$api', api)

// 引入 aos
import aos from 'aos'
import 'aos/dist/aos.css'
const AOS = new (aos).init()

// 引入 Pinia 以及封裝後的 stores
import { createPinia } from 'pinia'
const pinia = createPinia()
import stores from './store/index.js'
app.provide('$stores', stores)

app.use(router).use(AOS).use(pinia).mount('#app')
