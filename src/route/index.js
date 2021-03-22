import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from '../App.vue';

const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
  },
];
createApp(App).mount('#app');

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
