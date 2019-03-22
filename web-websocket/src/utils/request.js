/* eslint-disable */
import axios from 'axios'

let BASE_API = '//localhost:8080';

const service = axios.create({
    baseURL: BASE_API, // api的base_url
    timeout: 30000, // 请求超时时间
    // withCredentials: true
})


// request拦截器
service.interceptors.request.use(config => {
   // debugger;

    if (config.method == 'get') {
        
    } else if (config.method == 'post') {
        
    }
    console.log("config", config)
    return config
}, error => {
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
        response => {     
            return response;
        },
        error => {
            return Promise.reject(error)
        }
    )

export default service