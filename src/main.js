import { createApp } from 'vue'
import router from './router'
import './styles/index.less'
import App from './App.vue'
createApp(App).use(router).mount('#app')
