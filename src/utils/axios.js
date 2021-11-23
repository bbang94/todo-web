import axios from 'axios'
//import { Toast } from 'vant'
// import router from '../router'

axios.defaults.baseURL = 'http://127.0.0.1:9999/api'
//axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 添加响应拦截器
axios.interceptors.response.use(res => {
  console.log(res)

  // if (typeof res.data !== 'object') {
  //   Toast.fail('服务端异常！'){ path: '/login' }
  //   return Promise.reject(res)
  // }
  // if (res.data.ResultCode != 10104) {
  //   router.push({ path: '/login' })
  //   return
  // }
  return res.data
})

export default axios
