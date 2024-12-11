import axios from 'axios';
const BASE_URL = 'https://api.qddbl.cn/wxapp';
// const BASE_URL = 'https://api.qa.qddbl.net/ctrip-wxapp';
import {toast} from './index';
import RootNavigation from './RootNavigation';

import DeviceStorage from './localStorage';
let axiosIns: any = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosIns.defaults.responseType = 'json';

axiosIns.defaults.validateStatus = () => {
  return true;
};
axiosIns.interceptors.request.use(async (config: any) => {
  config.headers['Authorization'] = await DeviceStorage.get('token');
  config.url = BASE_URL + config.url;

  if (config?.submitFrom) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  return config;
});

axiosIns.interceptors.response.use(async (response: any) => {
  let data = response.data;
  let status = response.status;
  if (data && status === 200) {
    if (data.code === 510) {
      const token = await DeviceStorage.get('token');
      token && toast(data?.message ?? '登录过期', 1500);
      RootNavigation.navigate('Login', {});
      return Promise.reject(data);
    }
    return Promise.resolve(data);
  } else {
    toast('Network Error');
    return Promise.reject(data);
  }
});

let ajaxMethod = ['get', 'post', 'put', 'delete'];
let api: any = {};
let timeout = {
  timeout: 120000,
};

ajaxMethod.forEach(method => {
  api[method] = (uri: string, data: any, config: any) => {
    return new Promise(function (resolve, reject) {
      axiosIns[method](uri, data, config)
        .then((response: any) => {
          resolve(response);
        })
        .catch((response: any) => {
          if (!response?.code) {
            //网络出错
            // toast('网络异常,请稍后再试')
            reject(response);
          } else {
            // 登录过期这种业务逻辑报错情况
          }
        });
    });
  };
});

let axiosService = (params: any) => {
  return new Promise(resolve => {
    if (params.method === 'get') {
      api
        .get(params.url, {params: params.params}, timeout, params)
        .then((res: any) => {
          resolve(res);
        });
    } else if (params.method === 'delete') {
      api.delete(params.url, params.data, timeout).then((res: any) => {
        resolve(res);
      });
    } else if (params.method === 'put') {
      api.put(params.url, params.data, timeout).then((res: any) => {
        resolve(res);
      });
    } else {
      api
        .post(params.url, params.data, {
          ...timeout,
          submitFrom: params?.submitFrom,
        })
        .then((res: any) => {
          resolve(res);
        });
    }
  });
};

export default axiosService;
