import Vue from 'vue'
import Axios from 'axios'


// 封装网络请求
export function request(config){
  // 1.创建axios实例
  const instance = Axios.create({
    // baseURL: 'http://123.207.32.32:8000/api/hy',
    baseURL : "http://106.54.54.237:8000/api/hy",
    timeout: 5000
  })

  //2. axios请求拦截器
  instance.interceptors.request.use(
    config =>{
      return  config;
  },error => {
      return error;
  })

  // 3.axiox响应拦截器
  instance.interceptors.response.use(
    res =>{
      return  res.data;
    },error => {
      return error;
    })
// 4.发送网络请求
  return instance(config)
}



