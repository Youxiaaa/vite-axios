import api from './index'

const users = {
  getUser: async () => api.get(`api/?results=30`),
  getOneUser: async (id) => api.get(`api/?uuid=${id}`)
}

export default users