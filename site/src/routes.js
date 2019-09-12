import home from './components/routes/Home.vue'
import articles from './components/routes/Articles.vue'
import graph from './components/routes/Graph.vue'
import signin from './components/routes/Signin.vue'

export const routes = [
  {path: '', component: home},
  {path: '/articles', component: articles},
  {path: '/graph', component: graph},
  {path: '/signin', component: signin}
]
