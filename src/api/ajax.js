import axios from 'axios'
import qs from 'qs'
const timeout = 20000
const axiosInstance = axios.create({
  timeout
})
axiosInstance.interceptors.request.use(config => {
  const {
    method,
    data
  } = config
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})
axiosInstance.interceptors.response.use(response => {
  return response
}, error => {
  console.log(error);
  return new Promise(() => {
  })
})

export default axiosInstance