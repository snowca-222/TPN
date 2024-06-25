import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
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
app.use(router)
    .use(i18n)
app.mount('#app')
