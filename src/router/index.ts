import { createRouter, createWebHistory } from 'vue-router'

import VHome from '@/views/VHome.vue'
import VClock from '@/views/VClock.vue'
import VWeather from '@/views/VWeather.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: VHome
    },
    {
      path: '/horloge',
      name: 'Horloge',
      component: VClock
    },
    {
      path: '/meteo',
      name: 'Météo',
      component: VWeather
    }
  ],
})

export default router
