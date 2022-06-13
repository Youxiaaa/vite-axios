import { createApp } from 'vue'
import App from './App.vue'
import '../assets/css/main.css'
import { router } from './router.js'

import api from '../api/integrate.js'

const app = createApp(App)
app.$api = api

app.use(router).mount('#app')
