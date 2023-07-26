import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import AppContacts from './pages/AppContacts.vue';
import NewContact from './pages/NewContact.vue';
import DetailsContact from './pages/DetailsContact.vue';
import App from './App.vue';

const app = createApp(App);

const routes = [
    { path: '/', name: 'Contacts', component: AppContacts },
    { path: '/newContact', name: 'NewContact', component: NewContact},
    { path: '/details', name: 'Details', component: DetailsContact},
  ]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

app.use(router);

app.mount('#app');