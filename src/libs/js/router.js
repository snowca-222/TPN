import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/HelloWorld.vue'
const router = createRouter({
    history: createWebHistory('/TPN'), // 這邊要把 vite.config.js 的 base 填入
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/test',
            name: 'Test',
            component: () => import('@/components/Test.vue')
        }
    ]
})
export default router;