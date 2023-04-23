import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Calculator1 from '../views/Calculator1.vue'
import Calculator2 from '../views/Calculator2.vue'
import Calculator3 from '../views/Calculator3.vue'
import Calculator4 from '../views/Calculator4.vue'
import Calculator5 from '../views/Calculator5.vue'

const routes = [
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
    path: '/calculator1',
    name: 'calculator1',
    component:Calculator1
  },
  {
    path: '/calculator2',
    name: 'calculator2',
    component:Calculator2
  },
  {
    path: '/calculator3',
    name: 'calculator3',
    component:Calculator3
  },
  {
    path: '/calculator4',
    name: 'calculator4',
    component:Calculator4
  },
  {
    path: '/calculator5',
    name: 'calculator5',
    component:Calculator5
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
