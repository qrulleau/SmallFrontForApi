import { createApp } from 'vue';
import App from './App.vue';
import router from './route';
import './index.css';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_BASEURL;

axios.interceptors.request.use(
	function (config) {
		if (localStorage.getItem('jwt') !== null) {
			config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt');
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		if (error.response.status === 401) {
			store.dispatch('user/logout');
		}
		return Promise.reject(error);
	}
);

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router).mount('#app');
