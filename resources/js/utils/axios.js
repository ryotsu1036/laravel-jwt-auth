/* eslint-disable no-irregular-whitespace */
import axios from 'axios';
import router from '../router';

/**
 * 跳轉登錄頁
 * 攜帶當前頁面路由，以期在登錄頁面完成登錄後返回當前頁面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}

const errorHandle = (status, other) => {
  switch (status) {
  // 401: 未登入狀態，跳轉登入頁
  case 401:
    console.log('401: 未登入狀態，跳轉登入頁');
    toLogin();
    break;

  // 403: 權限不足，未經授權訪問
  case 403:

    break;

  // 404: 請求不存在
  case 404:
    this.$store.dispatch('snackbar/open', {
      color: 'warning',
      text: '請求的資源不存在',
    });
    break;

  // 419: token 過期
  case 419:
    this.$store.dispatch('snackbar/open', {
      color: 'warning',
      text: 'token 過期，請重新刷新',
    });
    break;

  default:
    console.log(other);
    break;
  }
}

const instance = axios.create({
  baseURL: '/api'
});

instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('laravel_token');
    token && (config.headers.Authorization = `Bearer ${token}`);
    return config;
  },
  error => Promise.error(error)
);

instance.interceptors.response.use(
  response => response,
  error => {
    errorHandle(
      error.response.status,
      error.response.data.message
    );

    return Promise.reject(error);
  }
);

export default instance;
