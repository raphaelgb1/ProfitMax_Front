import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ReceitasView from '../views/ReceitasView.vue'
import RelatorioView from '../views/RelatorioView.vue'

import { Store } from '@/stores/Login'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/Receitas',
    name: 'Receitas',
    component: ReceitasView
  },
  {
    path: '/Relatorio',
    name: 'Relatorio',
    component: RelatorioView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(async (to) => {
  const store = Store();
  if (
    // make sure the user is authenticated
    !store.isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'login'
  ) {
    // redirect the user to the login page
    router.push('Login')
    // return "/Login"
  }
});

export default router
