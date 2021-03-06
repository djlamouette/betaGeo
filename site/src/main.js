import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { router } from './routes.js'
import { store } from './store/store.js'

// style
import './bootstrap.scss'
import './main.scss'

Vue.config.productionTip = false;

// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes,
//   mode: 'history'
// });

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

// disable vue devtools
// Vue.config.devtools = false
// Vue.config.debug = false
// Vue.config.silent = true
