import axios from 'axios'

import { Toast } from 'antd-mobile'
const BASE_URL = 'http://api-haoke-dev.itheima.net'

const instance = axios.create({
    baseURL: BASE_URL
})


instance.interceptors.request.use(function (config) {
    Toast.loading('加载中...', 0);
    // Do something before request is sent
   
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  
  // Add a response interceptor
  instance.interceptors.response.use(function (response) {
      console.log(response);
      
    Toast.hide()
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const data = {
      status: response.data.status,
      data: response.data.body
    }
    if (response.data.description) data.description = response.data.description;
    return data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
  
  export { BASE_URL }
  export default instance