import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { ripple } from 'vue3-ripple'
import axios from 'axios'
import router from '@/libs/js/router'
import './style.css'
import App from './App.vue'
import en from '@/libs/locale/en-US.json'
import zh from '@/libs/locale/zh-TW.json'
const i18n = createI18n({
    legacy: false,
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages: {
        "en-US": en,
        "zh-TW": zh,
    }
})
const app = createApp(App);
app.use(router).use(i18n)
app.directive("ripple", ripple)

const titleSlogan = axios(import.meta.env.VITE_SLOGAN_URL);
titleSlogan.then(res => {
    if(res.status === 200){
        localStorage.setItem('slogan', res.data[0].Slogan)
        localStorage.setItem('title', res.data[0].Title)
    }else{
        localStorage.setItem('slogan', '台美心理專業交流協會')
        localStorage.setItem('title', 'Taiwan Psychology Network Provider Directory')
    }
    app.mount('#app')
})