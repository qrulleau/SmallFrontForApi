import { createApp } from 'vue';
import App from './App.vue';
import router from './route';
import './index.css';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_BASEUR;

createApp(App).use(router).mount('#app');
