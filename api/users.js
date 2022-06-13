import api from './index'

export const getUser = async () => api.get(`api/?results=30`)
export const getOneUser = async (id) => api.get(`api/?uuid=${id}`)