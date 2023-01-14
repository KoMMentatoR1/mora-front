import axios from 'axios'

export const API_URL: string = `http://192.168.0.167:8080/api`

const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

$api.interceptors.request.use(config => {
  const newConfig = { ...config }
  newConfig.headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }
  return newConfig
})

export default $api
