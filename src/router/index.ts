import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Main from '../views/Main.vue'
import Right from '../views/Right.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/main/index',
        name: 'home',
        component: Right
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
