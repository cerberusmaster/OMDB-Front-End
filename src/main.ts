import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './bootstrap'
import './sass/app.scss'

createApp(App).use(store).use(router).mount('#app')
