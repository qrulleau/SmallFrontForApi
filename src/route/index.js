import { createWebHistory, createRouter } from 'vue-router';

import AppLogin from '../views/AppLogin.vue';

const routes = [
  {
    path: '/',
    name: 'App',
    component: AppLogin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
