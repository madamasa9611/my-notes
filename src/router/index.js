import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/notes/intro' },
  {
    path: '/notes/:id',
    name: 'note',
    component: () => import('@/pages/NotePage.vue'), // 下面第3點會提供
  },
  { path: '/:pathMatch(.*)*', redirect: '/notes/intro' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
