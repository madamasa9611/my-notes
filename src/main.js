// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate' // ✅ 拼字修正

import App from './App.vue'
import router from './router' // 確保 router/index.js 有 export default router
import './style.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(persistedstate)     // ✅ 啟用持久化外掛

app.use(pinia)
app.use(router)               // ✅ 掛上路由
app.mount('#app')             // ✅ 只 mount 一次
