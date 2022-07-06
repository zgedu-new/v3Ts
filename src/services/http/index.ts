import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HttpRequestInterceptors, HttpRequestConfig } from './type'

import { ElLoading } from 'element-plus'

import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
const DEFAULT_LOADING = true
class Http {
  instance: AxiosInstance
  interceptors: HttpRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance
  constructor(config: HttpRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    // 配置请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 配置响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据……',
            background: 'rgba(0,0,0,.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close
        const data = res.data
        if (data.code === 401) {
          console.log('请求过期，重新登录 ')
        } else {
          return data
        }
      },
      (err) => {
        this.loading?.close
        if (err.response.status === 404) {
          console.log('404')
        }
        return err
      }
    )
  }
  request<T>(config: HttpRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
  get<T>(config: HttpRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: HttpRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: HttpRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HttpRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default Http
