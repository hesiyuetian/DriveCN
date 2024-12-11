import axios from 'axios'
const BASE_URL = 'https://api.qddbl.cn/wxapp';
// const BASE_URL = 'https://api.qa.qddbl.net/ctrip-wxapp';
import { toast, hideToast, hideLoading } from './index'
import RootNavigation from './RootNavigation'

import DeviceStorage from './localStorage'
let axiosIns = axios.create({});

axios.defaults.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

axiosIns.defaults.responseType = 'json';

axiosIns.defaults.validateStatus =  (status) => {
    return true;
};
axiosIns.interceptors.request.use( async (config) => {
    config.headers['Authorization'] = await DeviceStorage.get('token');
    config.url = BASE_URL + config.url;

    if(config?.submitFrom){
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    return config;
});

axiosIns.interceptors.response.use( async(response) => {
    let data = response.data;
    let status = response.status;
    if (data && status === 200) {
        if(data.code === 510) {
            hideLoading();
            const token = await DeviceStorage.get('token');
            token && toast(data?.message ?? '登录过期', 1500);
            RootNavigation.navigate('Login',{});
            return Promise.reject(data);
        }
        return Promise.resolve(data);
    }else {
        hideLoading();
        toast('Network Error');
        return Promise.reject(data);
    }
});

let ajaxMethod = ['get', 'post', 'put', 'delete'];
let api = {};
let timeout = {
    timeout: 120000,
};

ajaxMethod.forEach((method)=> {
    api[method] = (uri,data,config) => {
        return new Promise(function (resolve, reject) {
            axiosIns[method](uri,data,config).then((response)=> {
                resolve(response);
            }).catch((response)=> {
                if(!response?.code){  //网络出错
                    hideLoading();
                    // toast('网络异常,请稍后再试')
                    reject(response)
                }else{ // 登录过期这种业务逻辑报错情况

                }
            })
        })
    }
});

let axiosService = (params) => {
    return new Promise((resolve, reject) => {
        if (params.method === 'get') {
            api.get(params.url, {params: params.params}, timeout, params).then((res) => {
                resolve(res)
            })
        } else if (params.method === 'delete') {
            api.delete(params.url, params.data, timeout).then((res) => {
                resolve(res)
            })
        } else if (params.method === 'put') {
            api.put(params.url, params.data, timeout).then((res) => {
                resolve(res)
            })
        } else {
            api.post(params.url, params.data, {...timeout, submitFrom: params?.submitFrom}).then((res) => {
                resolve(res)
            })
        }
    })
};

export default axiosService;

