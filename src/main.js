import { createApp } from 'vue'
import App from './App.vue'
import '../assets/css/main.css'
import { router } from './router.js'

const app = createApp(App)

// 引入 api
import api from '../api/integrate.js'
app.provide('$api', api)

// 引入 aos
import aos from 'aos'
import 'aos/dist/aos.css'
const AOS = new (aos).init()

app.use(router).use(AOS).mount('#app')
