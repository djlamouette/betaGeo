import { store } from '@/store/store.js'
import VueRouter from 'vue-router'
import Vue from 'vue'
import home from './pages/Home.vue'
import articles from './pages/Articles.vue'
import graph from './pages/Graph.vue'
import signin from './pages/Signin.vue'
import signup from './pages/Signup.vue'
import account from './pages/Account.vue'
import admin from './pages/Admin.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '', component: home},
    {path: '/articles', component: articles},
    {path: '/graph', component: graph},
    {path: '/signin', component: signin},
    {path: '/signup', component: signup},
    {path: '/account', component: account},
    {path: '/admin', component: admin}
  ]
});



router.beforeEach((to, from, next) => {
  if (to.path === "/admin") {
    if (!store.getters.userID) {
      alert('Vous dévez être connecté pour accéder à cette page');
      next('/signin');
    } else {
      next();
    }
  } else {
    next();
  }
});
