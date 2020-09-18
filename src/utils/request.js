import axios from 'axios';

//创建一个axios对象
const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 2000
});

//请求拦截
//所有的网络请求都会先走这个方法
instance.interceptors.request.use(
    function(config) {
        console.group('全局请求拦截');
        console.log(config);
        console.groupEnd();
        config.headers.token = 'tokens';
        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
);
//所有网络请求返回都会先走这个方法
//根据返回状态码做相应的处理
instance.interceptors.response.use(function(response) {
    console.group("全局相应拦截");
    console.log(response);
    console.groupEnd();
    return response;
}, function(err) {
    return Promise.reject(err);
})

export function get(url, params) {
    return instance.get(url, {
        params
    });
}
export function post(url, data) {
    return instance.post(url, data);
}
export function del(url) {
    return instance.del(url);
}
export function put(url) {
    return instance.put(url);
}
export function jsonp(url, cb) {
    return new Promise((resolve, reject) => {    
        window.cb = (result) => {        resolve(result);     }  
        const JSONP = document.createElement('script');  
        JSONP.type = 'text/javascript';   
        JSONP.src = url;
        document.getElementsByTagName('head')[0].appendChild(JSONP);
        setTimeout(() => {
            document.getElementsByTagName('head')[0].removeChild(JSONP)      
        }, 500)    
    });
}
