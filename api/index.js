import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

service.interceptors.request.use((config) => {
  console.log('請求攔截測試')
  return config
}, (errRes) => Promise.reject(errRes))

service.interceptors.response.use((res) => {
  console.log('response攔截測試')
  return res
}, (err) => {
  Promise.reject(err)
})

export default service