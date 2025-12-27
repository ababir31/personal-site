// ab-port/src/main.js
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Vue3Marquee from 'vue3-marquee'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Marquee)

app.mount('#app')

