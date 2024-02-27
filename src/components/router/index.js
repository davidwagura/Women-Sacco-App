import { createRouter, createWebHistory } from 'vue-router'
import CreateView from '../views/members/CreateView.vue'
// import EditView from '../views/students/EditView.vue' 
import ShowView from '../views/members/ShowView.vue'

  const routes =  [
    {
      path: '/',
      name: 'show',
      component: ShowView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    // {
    //   path: '/edit/:id',
    //   name: 'edit',
    //   component: EditView 
    // },
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
