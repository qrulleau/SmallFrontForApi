import { createWebHistory, createRouter } from 'vue-router';

import AppLogin from '../views/AppLogin.vue';
import AppError from '../views/AppError.vue';
import Dashboard from '../views/dashboard/Dashboard.vue';

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
  {
    path: '/dashboard',
    component: Dashboard,
    // meta: { requireAuth: auth },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/',
//         query: { redirect: to.fullPath },
//       });
//       console.log('test');
//     } else {
//       next('/:catchAll(.*)');
//       console.log('test1');
//     }
//   } else {
//     next(); // make sure to always call next()!
//     console.log('test2');
//   }
// });

export default router;
