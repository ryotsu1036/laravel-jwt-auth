import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import axios from './utils/axios';
import store from './store';

Vue.use(Vuex);
Vue.use(Vuetify);

Vue.prototype.$http = axios;

const opts = {
  icons: {
    iconfont: 'mdi',
  },
};

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && ! localStorage.getItem('laravel_token')) {
    next('/login');
  }
  next();
});

new Vue({
  el: '#app',
  store,
  router: router,
  vuetify: new Vuetify(opts)
});
