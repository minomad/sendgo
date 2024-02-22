import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Message from './views/Message.vue';
import Credit from './views/Credit.vue';
import './assets/style.css'

const routes = [
  { path: '/', component: Home },
  { path: '/message', component: Message },
  { path: '/credit', component: Credit }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
