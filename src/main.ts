import 'bootstrap';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from './App.vue';
import router from './router';

createApp(App)
.use(router)
.use(Toast, {
    transition: "Vue-Toastification__fade",
    maxToasts: 20,
    newestOnTop: true
  })
.use(LoadingPlugin)
.use(createPinia())
.mount('#app')
