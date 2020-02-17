import AppLayout from './pages/admin/layouts/App';
import Login from './pages/auth/Login';
import Home from './pages/admin/Home';
import About from './pages/admin/About';

export default {
  mode: 'history',

  routes: [
    {
      path: '*',
      redirect: { name: 'admin' },
    },
    {
      path: '/login',
      component: Login
    },
    {
      name: 'admin',
      path: '/admin',
      component: AppLayout,
      meta: { requiresAuth: true },
      children: [
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
    }
  ]
}
