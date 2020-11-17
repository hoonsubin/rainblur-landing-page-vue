import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Content from '../views/Content.vue';
import NotFound from '../views/NotFound.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Content',
        component: Content,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
