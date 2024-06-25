import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/home.vue'
const router = createRouter({
    history: createWebHistory('/TPN/'), // 這邊要把 vite.config.js 的 base 填入
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/user',
            name: 'User',
            component: () => import('@/components/user.vue')
        }
    ]
})
export default router;