import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: 'http://localhost:8080/xrb/',
    timeout: 5000
})

// request拦截器
service.interceptors.request.use(
    config => {
        if (getToken()) {
            config.data.session = getToken()
        }
        // 去掉字符串类型参数前后的空格
        for (var i in config.data) {
            if (Object.prototype.toString.call(config.data[i]) === '[object String]') {
                config.data[i] = config.data[i].trim()
            }
        }
        return config
    },
    error => {
        console.log('网络连接错误,请稍后再试!')
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        if (!res.success) {
            console.log(res.msg)
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        console.log('服务器连接错误,请稍后再试!')
        return Promise.reject(error)
    }
)

export default service