import { createRouter, createWebHistory } from "vue-router"
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { getToken, setToken } from './js-cookie.js'
import { containStore } from './store/contain'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
  // https://router.vuejs.org/guide/advanced/scroll-behavior.html#delaying-the-scroll
  scrollBehavior(from, to, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) return resolve(savedPosition)
        return resolve({ left: 0, top: 0 })
      }, 1310)
    })
  }
})

const needTokenList = ['/todolist', '/todoList']
const token = getToken()

const needFadeList = ['/todoList', '/todolist']

router.afterEach((to, from) => {
  if (to.path === from.path) return

  const useStore = containStore()
  useStore.changeLoading(true)

  to.matched.forEach((item) => {
    if (needTokenList.includes(item.path)) {
      if (!token) router.push('/')
    }
  })
  needFadeList.includes(to.path) ? to.meta.transitionName = 'scale' : to.meta.transitionName = 'slide'
})

router.beforeEach(() => {
  const useStore = containStore()

  setTimeout(() => {
    useStore.changeLoading(false)
  }, 1300)
  
})

export default router
