import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, CreateView, EditView, InvoiceView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/:id',
      name: 'invoice',
      component: InvoiceView
    },
    {
      path: '/:id/edit',
      name: 'edit',
      component: EditView
    }
  ]
})

export default router
