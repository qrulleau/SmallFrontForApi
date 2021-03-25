import { createWebHistory, createRouter } from 'vue-router';

import AppLogin from '../views/AppLogin.vue';
import AppError from '../views/AppError.vue';
import DashboardView from '../views/dashboard/Dashboard.vue';

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
		component: DashboardView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
