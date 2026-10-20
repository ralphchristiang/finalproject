import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

// Create the application, connect the router, and display it inside #app.
createApp(App).use(router).mount('#app')
