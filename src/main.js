import { createApp } from 'vue'
import router from './router'
import(/* webpackChunkName: "index-css666" */'./styles/index.less')
import App from './App.vue'
createApp(App).use(router).mount('#app')
