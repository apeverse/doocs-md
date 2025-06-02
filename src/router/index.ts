import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: `/`,
    name: `Home`,
    component: () => import(`@/views/Home.vue`),
  },
  {
    path: `/editor`,
    name: `Editor`,
    component: () => import(`@/views/CodemirrorEditor.vue`),
  },
  {
    path: `/md`,
    name: `Article`,
    component: () => import(`@/views/CodemirrorEditor.vue`),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
