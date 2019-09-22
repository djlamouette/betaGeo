import home from './pages/Home.vue'
import articles from './pages/Articles.vue'
import graph from './pages/Graph.vue'
import signin from './pages/Signin.vue'
import signup from './pages/Signup.vue'

export const routes = [
  {path: '', component: home},
  {path: '/articles', component: articles},
  {path: '/graph', component: graph},
  {path: '/signin', component: signin},
  {path: '/signup', component: signup}
]
