import axios from "axios";

const service = new axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
  headers: {}
});

//request拦截器 拦截每一个请求 添加请求头
service.interceptors.request.use(
  config => {
    return config;
  },
  err => Promise.reject(err)
);

// respone拦截器 拦截到所有的response，然后先做一些判断
service.interceptors.response.use(
  response => {
    const res = response.data;
    return Promise.resolve(res);
  },
  err => Promise.reject(err)
);

export default service;
