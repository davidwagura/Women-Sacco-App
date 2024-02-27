import { createRouter, createWebHistory } from 'vue-router'
import CreateView from '../views/CreateView.vue'
import EditView from '../views/students/EditView.vue'
import ShowView from '../views/ShowView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'show',
      component: ShowView
    },
    {
      path: '/create',
      name: 'create',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreateView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditView
    },

  ]
})

export default router
