import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: () => import('@/views/Imprint.vue'),
    },
    {
      path: '/datenschutz',
      name: 'Datenschutz',
      component: () => import('@/views/PrivacyPolicy.vue'),
    },
  ],
});

export default router;
