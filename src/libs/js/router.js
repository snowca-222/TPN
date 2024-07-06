import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/components/view/Home.vue'
import User from '@/components/view/User.vue'
const router = createRouter({
    // history: createWebHistory('/TPN/'), // 這邊要把 vite.config.js 的 base 填入
    history: createWebHashHistory('/TPN/'), // 這邊要把 vite.config.js 的 base 填入
    scrollBehavior(){
        return { top: 0}
    },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/userPage',
            name: 'User',
            component: User
        }
    ]
})
export default router;