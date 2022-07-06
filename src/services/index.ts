import Http from './http'
import { BASE_URL, TIME_OUT } from './http/config'
const http = new Http({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = ''
      if (token) {
        // config.headers.Authoriztion = token
        // config.headers.token = token
        config.headers = { token }
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => res,
    responseInterceptorCatch: (err) => err
  }
})
export default http
