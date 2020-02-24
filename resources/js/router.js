import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './pages/auth/Login';
import AdminLayout from './pages/admin/layouts/App';
import Home from './pages/admin/Home';
import About from './pages/admin/About';
import Layout from './pages/Layout';
import Merge from './pages/Merge';

Vue.use(VueRouter);

const routes = {
  mode: 'history',

  routes: [
    {
      name: 'merge',
      path: '/merge',
      component: Layout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          component: Merge,
          meta: { requiresAuth: true }
        },
      ]
    },
    {
      name: 'admin',
      path: '/admin',
      component: AdminLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          component: Merge,
          meta: { requiresAuth: true }
        },
        {
          path: 'home',
          component: Home,
          meta: { requiresAuth: true }
        },
        {
          path: 'about',
          component: About,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '*',
      redirect: { name: 'admin' },
    },
    {
      path: '/login',
      component: Login
    }
  ]
};

export default new VueRouter(routes);
