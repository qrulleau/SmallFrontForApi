import { createWebHistory, createRouter } from 'vue-router';

import AppLogin from '../views/AppLogin.vue';
import AppError from '../views/AppError.vue';

const routes = [
  {
    path: '/',
    name: 'App',
    component: AppLogin,
  },
  {
    path: '/:catchAll(.*)',
    component: AppError,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
