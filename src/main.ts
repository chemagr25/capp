import './assets/main.css'
import 'mosha-vue-toastify/dist/style.css'

import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);

import router from '@/router'
import VueCookies from 'vue-cookies'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(VueCookies).use(router).mount('#app')
