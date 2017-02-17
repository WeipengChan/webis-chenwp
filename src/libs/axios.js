import {
  Message
} from 'element-ui';
import axios from 'axios';
import sLoading from 'components/loading';

let loading = null;

function showLoading() {
  if (loading) {
    return;
  }

  loading = sLoading({
    title: '加载中...'
  });
}

function closeLoading() {
  if (loading) {
    loading.hide();
    loading = null;
  }
}

function createAxios() {
  const instance = axios.create({
    timeout: 1000 * 10
  });

  // Add a request interceptor
  instance.interceptors.request.use((config) => {
    if (config.loading !== false) {
      showLoading();
    }
    return config;
  }, (error) => {
    // Do something with request error
    if (error.config.loading !== false) {
      closeLoading();
    }
    return Promise.reject(error);
  });

  // Add a response interceptor
  instance.interceptors.response.use((response) => {
    if (response.config.loading !== false) {
      closeLoading();
    }
    return response;
  }, (error) => {
    // Do something with response error
    if (error.config.loading !== false) {
      closeLoading();
    }
    if (error.config.showDefaultError !== false) {
      const message = (error.response.data && error.response.data.message) || error.message;
      Message.error({
        message
      });
    }

    return Promise.reject(error);
  });

  return instance;
}

export default createAxios();
