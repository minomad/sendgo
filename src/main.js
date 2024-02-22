import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import MessagePage from './views/MessagePage.vue';
import CreditPage from './views/CreditPage.vue';
import './assets/style.css'

const routes = [
  { path: '/', component: Home },
  { path: '/message', component: MessagePage },
  { path: '/credit', component: CreditPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
