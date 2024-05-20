import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import Home from './views/Home';
import Pets from './views/Pets';
import Favorites from './views/Favorites';
import Form from './views/Form';
import store from './store';
import i18n from './i18n';

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/pets', component: Pets },
  { path: '/favorites', component: Favorites },
  { path: '/form', component: Form },
];
const router = new VueRouter({ routes });
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
