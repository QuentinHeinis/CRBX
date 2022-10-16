import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import three from '../views/three.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { path: '/three', name: 'three', component: three },
    { path: '/collection/:id', name: 'collection', component: () => import('../views/collections/CollectionView.vue') },
    { path: '/socials', name: 'socials', component: () => import('../views/SocialsView.vue') },
    { path: '/Login', name: 'Login', component: () => import('../views/LoginView.vue') },
    { path: '/Create', name: 'Create', component: () => import('../views/CreateView.vue') },
  ]
})

export default router
