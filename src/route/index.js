import { createWebHistory, createRouter } from 'vue-router';

import helloWorld from '../components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'App',
    component: helloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
