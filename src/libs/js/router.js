import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from '@/components/Home.vue'
const router = createRouter({
    // history: createWebHistory('/TPN/'), // 這邊要把 vite.config.js 的 base 填入
    history: createWebHashHistory('/TPN/'), // 這邊要把 vite.config.js 的 base 填入
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/user',
            name: 'User',
            component: () => import('@/components/User.vue')
        }
    ]
})
export default router;