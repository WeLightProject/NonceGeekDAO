import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '/src/assets/index.css'
import { inject } from '@vercel/analytics';

inject();
createApp(App).use(router).mount('#app')
