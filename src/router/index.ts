import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/chat.vue'),
    },
    {
      path: '/2',
      name: '2',
      component: () => import('../views/2.vue'),
    },
    {
      path: '/',
      name: 'main',
      component: () => import('../views/Main.vue'),
    },
    {
      path: '/4',
      name: '4',
      component: () => import('../views/4.vue'),
    },
    {
      path: '/5',
      name: '5',
      component: () => import('../views/5.vue'),
    },
  ],
})

export default router
