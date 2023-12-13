import Vue from 'vue';
// import axiosInstance from "../src/services/api";
import TokenService from '../src/services/token.service';
// import store from '../store/index';
import axios from 'axios';

const baseURL = process.env.BASE_URL_BACKEND;
const URLRefreshToken = '/auth/refresh';

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ({ store, app: {$axios}}) => {
    axios.interceptors.request.use(
    (config) => {
    //   console.log('in check request');
      // Do something before request is sent
      const token = TokenService.getLocalAccessToken();
      if (token) {
        // console.log('tokenn : ', token);
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    (res) => {
      // Any status code from range of 2xx
      // Do something with response data
      return res;
    },
    async (err) => {
      // Any status codes outside range of 2xx
      // Do something with response error
      const originalConfig = err.config;
      if (originalConfig.url !== '/auth/login' && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          console.log('call for refresh token');
          // Do something, call refreshToken() request for example;
          // return a request
          try {
            const rs = await axiosInstance.get(
              `auth/refresh`,
              {
                headers: {
                  Authorization: `Bearer ${TokenService.getLocalRefreshToken()}`,
                },
              },
            );

            const { access_token } = rs.data;
            store.dispatch('auth/refreshToken', access_token);
            TokenService.updateLocalAccessToken(access_token);

            return axios(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(err);
    },
  );
};

Vue.use(axios);
