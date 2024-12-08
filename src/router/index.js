import Home from '@/views/Home.vue'
import Imprint from '@/views/Imprint.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: Imprint,
    },
    {
      path: '/datenschutz',
      name: 'Datenschutz',
      component: PrivacyPolicy,
    },
  ],
})

export default router
