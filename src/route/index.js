import { createWebHistory, createRouter } from 'vue-router';

import AppLogin from '../views/AppLogin.vue';
import AppError from '../views/AppError.vue';
import DashboardPage from '../views/dashboard/DashboardPage.vue';

const routes = [
	{
		path: '/',
		name: 'App',
		component: AppLogin,
		meta: {
			guest: true,
		},
	},
	{
		path: '/dashboard',
		component: DashboardPage,
		meta: {
			requireAuth: true,
		},
	},
	{
		path: '/logout',
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
