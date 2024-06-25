import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
const router = createRouter({
    // history: createWebHistory('/TPN/'), // 這邊要把 vite.config.js 的 base 填入
    history: createWebHashHistory('/TPN/'), // 這邊要把 vite.config.js 的 base 填入
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/components/Home.vue')
        },
        {
            path: '/user',
            name: 'User',
            component: () => import('@/components/User.vue')
        }
    ]
})
export default router;