import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


axios.defaults.baseURL='https://matic-django.herokuapp.com'
createApp(App).use(router,axios).mount('#app')
