import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/components/Home.vue'
// import User from '@/components/User.vue'
const router = createRouter({
    // history: createWebHistory('/TPN/'), // 這邊要把 vite.config.js 的 base 填入
    history: createWebHashHistory('/TPN/'), // 這邊要把 vite.config.js 的 base 填入
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        // {
        //     path: '/user',
        //     name: 'User',
        //     component: User
        // }
    ]
})
export default router;